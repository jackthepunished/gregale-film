// The lantern boat: a stone tub with a raised prow, a glass lantern standing in it under a wide slate hat, a round
// glowing face behind the front pane, grass and thrift growing in the stern, and a mint pennant at the top of the hat
// that always flies downwind. In the film it is one request, carried into the bay by the gregale.
//
//   const boat = lanternBoat(k);  scene.add(boat.root);  boat.root.position.set(...);  boat.root.rotation.y = heading;
//   boat.update(f, { wind: worldYawOfTheWind, gust: 0..1, look: [x, y], blink: 0..1, glow: 0..1, bob: 1 })
// Root space: +Y up, +Z is the bow, the waterline is y = 0. About 5 long and 5 tall.
import * as THREE from 'three';
import { lathe, taperTube } from '../engine/kit/geo.js';
import { grass, flowers } from '../engine/kit/flora.js';
import { glow } from '../engine/kit/fx.js';
import { particles } from '../engine/kit/fx.js';
import { C, LIGHT } from './look.js';

const V3 = (x, y, z) => new THREE.Vector3(x, y, z);

/** The tub: an open hull, fuller aft, drawn out to a raised point at the bow. Returns { geo, rim: [Vector3...] }. */
function hullGeo({ nu = 36, nv = 9, beam = 1.55, aft = 2.2, fore = 2.9, free = 1.05, draft = 0.55, sheer = 0.95 } = {}) {
  const pos = [], idx = [], rim = [];
  for (let j = 0; j <= nv; j++) {
    const v = j / nv, rr = Math.pow(Math.sin(v * Math.PI / 2), 0.62), y0 = -draft + (free + draft) * (1 - Math.cos(v * Math.PI / 2));
    for (let i = 0; i <= nu; i++) {
      const a = (i / nu) * Math.PI * 2, cs = Math.cos(a), sn = Math.sin(a), bow = Math.pow(Math.max(0, cs), 3);
      const x = sn * beam * rr * (1 - 0.25 * bow), z = cs * (cs > 0 ? fore : aft) * rr * (1 + 0.1 * bow * v), y = y0 + sheer * Math.pow(Math.max(0, cs), 5) * v * v + 0.12 * Math.pow(Math.max(0, -cs), 3) * v;
      pos.push(x, y, z); if (j === nv && i < nu) rim.push(V3(x, y, z));
    }
  }
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) { const a = j * (nu + 1) + i, b = a + 1, c = a + nu + 1, d = c + 1; idx.push(a, b, c, b, d, c); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  g.setIndex(idx); g.computeVertexNormals();
  // outward normals: flip the winding if the first rim normal points inward
  const p = V3(pos[pos.length - 3], 0, pos[pos.length - 1]), n = new THREE.Vector3().fromBufferAttribute(g.attributes.normal, g.attributes.normal.count - 1);
  if (n.x * p.x + n.z * p.z < 0) { g.index.array.reverse(); g.computeVertexNormals(); }
  return { geo: g, rim };
}

export function lanternBoat(k, { spray = true, dark = false, ghost = false } = {}) {
  const ghostP = { value: 1 };   // a ghost's brightness (see below)
  const root = new THREE.Group(), body = new THREE.Group(); root.add(body);
  const stone = { shade: '#d2c2dc', deep: '#b3a3cc', t1: 0.0, t2: -0.8, wobble: 0.22 };
  // ---- hull
  const { geo, rim } = hullGeo();
  const hull = new THREE.Mesh(geo, k.toon({ color: '#8f88ac', ...stone, side: THREE.DoubleSide, mottle: 0.8, streaks: 0.6, cracks: 0.5, patinaA: '#a59fc0', patinaAmtA: 0.4, patinaB: C.rust, patinaAmtB: 0.2, patinaScale: 1.3, patinaSeed: 4 }));
  const gunwale = new THREE.Mesh(taperTube([...rim, rim[0], rim[1]], 0.13, 0.13, { segs: 72, radial: 7 }), k.toon({ color: C.brass, shade: '#c9a0b8', deep: '#9a80a8', patinaA: C.rust, patinaAmtA: 0.35, patinaScale: 2.2, mottle: 0.5 }));
  const soil = new THREE.Mesh(new THREE.CircleGeometry(1, 24).rotateX(-Math.PI / 2), k.toon({ color: '#4a3f52', shade: '#d0c0d8', deep: '#b0a0c8', ink: false, topAmt: 1, top: '#3f6b3a', topScale: 1.5 }));
  soil.scale.set(1.35, 1, 2.1); soil.position.set(0, 0.72, 0.1);
  body.add(hull, gunwale, soil);

  // ---- the lantern
  const brass = k.toon({ color: C.brass, shade: '#c9a0b8', deep: '#9a80a8', seamY: 5, seamStrength: 0.5, rivets: 14, rivetSize: 0.045, patinaA: '#7fae96', patinaAmtA: 0.22, patinaB: C.rust, patinaAmtB: 0.2, patinaScale: 2.4, mottle: 0.5 });
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(1.14, 1.22, 0.34, 20).translate(0, 0.92, 0), brass);
  const glass = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.0, 1.5, 32).translate(0, 1.84, 0), k.toon({ color: '#58e08e', shade: '#e4f8dc', deep: '#c8eec8', emissive: '#0c3a12', t1: -0.3, t2: -0.9, mottle: 0.5, patinaA: '#a4f2b8', patinaAmtA: 0.35, patinaScale: 1.2, ink: true }));
  const band = new THREE.Mesh(new THREE.CylinderGeometry(1.12, 1.12, 0.2, 20).translate(0, 2.66, 0), brass);
  body.add(collar, glass, band);
  for (let i = 0; i < 8; i++) { if (i === 0) continue; const a = (i / 8) * Math.PI * 2 + Math.PI / 8 + Math.PI / 2, bar = new THREE.Mesh(new THREE.BoxGeometry(0.11, 1.5, 0.11).translate(0, 1.84, 0), brass); bar.position.set(Math.cos(a) * 1.04, 0, Math.sin(a) * 1.04); body.add(bar); }
  // the face: a warm round light behind the front pane, and two eyes
  const faceC = V3(0, 1.82, 0.8), face = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 20), k.toon({ color: '#ffe98f', shade: '#fff0c0', deep: '#ffe6a8', emissive: '#3a2f08', t1: -0.9, t2: -1.2, wobble: 0.05 }));
  face.position.copy(faceC); face.scale.set(1, 1, 0.5); body.add(face);
  const eyes = new THREE.Group(); eyes.position.copy(faceC); body.add(eyes);
  const eyeMat = k.toon({ color: '#4a2f22', shade: '#ffffff', deep: '#ffffff', ink: false }), eye = [-1, 1].map((s) => { const e = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.2, 4, 10), eyeMat); e.position.set(s * 0.18, 0.02, 0.305); e.rotation.y = s * 0.12; eyes.add(e); return e; });
  const halo = glow(k, { color: '#ffe9a0' }); halo.position.copy(faceC).add(V3(0, 0, 0.45)); halo.scale.setScalar(5.2); body.add(halo);

  // ---- the hat: a wide slate roof in two tiers, moss on it, a curled finial
  const hat = new THREE.Mesh(lathe([[2.02, 2.62], [2.06, 2.72], [1.7, 2.98], [1.05, 3.38], [0.82, 3.52], [0.9, 3.6], [0.92, 3.7], [0.55, 4.02], [0.3, 4.3], [0.22, 4.5], [0.01, 4.62]], 32),
    k.toon({ color: C.slate, ...stone, seamAround: 10, seamStrength: 0.5, seamBreak: 0.8, seamY: 2.2, mottle: 0.9, cracks: 0.5, streaks: 0.5, top: '#7fa060', topAmt: 0.42, topScale: 0.9, topDab: 5, patinaA: '#8a84a8', patinaAmtA: 0.45, patinaB: C.rust, patinaAmtB: 0.14, patinaScale: 1.4 }));
  const under = new THREE.Mesh(new THREE.CircleGeometry(2.02, 28).rotateX(Math.PI / 2).translate(0, 2.64, 0), k.toon({ color: C.slateDark, shade: '#d0c0d8', deep: '#b0a0c8', ink: false }));
  const finial = new THREE.Mesh(taperTube([[0, 4.5, 0], [0, 4.92, -0.04], [0, 5.26, -0.2], [0, 5.3, -0.48], [0, 5.08, -0.6], [0, 4.94, -0.46]], 0.15, 0.04, { segs: 22, radial: 7 }), k.toon({ color: C.slateDark, ...stone }));
  body.add(hat, under, finial);

  // ---- the pennant: a long mint swallowtail, flying downwind from the finial
  const flag = { value: new THREE.Vector4(1, 0, 0, 0) };   // x how hard it flies (0 limp .. 1), y phase
  const pennant = new THREE.Mesh(new THREE.PlaneGeometry(5.2, 1.0, 40, 4).translate(2.6, 0, 0), k.shader({
    side: THREE.DoubleSide, uniforms: { uFlag: flag, uFA: { value: k.col(C.mintLit) }, uFB: { value: k.col('#3fb893') }, uFC: { value: k.col('#1f7f68') } },
    vert: `uniform vec4 uFlag;`,
    displace: /* glsl */ `float u=uv.x, fly=uFlag.x, tt=uTime2*(5.+4.*fly)+uFlag.y;
      pos.y += (sin(u*6.5-tt)*.26+sin(u*2.6-tt*.6)*.2)*u*(.35+.65*fly) - u*u*(1.-fly)*2.6*.5;
      pos.z += cos(u*5.2-tt*.9+1.)*.34*u*(.3+.7*fly);
      pos.x -= u*u*(1.-fly)*1.4;`,
    frag: /* glsl */ `uniform vec3 uFA,uFB,uFC; uniform vec4 uFlag;
      vec4 surface(){ float u=vUv.x, v=abs(vUv.y-.5); float hw=.5*(1.-.5*u); if(v>hw) discard; if(u>.72&&v<(u-.72)*.9) discard;
        float fold=sin(u*6.5-uTime2*(5.+4.*uFlag.x)-uFlag.y+.8)+.5*sin(u*14.+1.7);
        vec3 c=fold>.45?uFA:(fold>-.55?uFB:uFC); c=mix(c,uFC,step(hw-.07,v)*.5);
        return vec4(applyFog(c),9.); }`,
  }));
  pennant.frustumCulled = false;
  const mast = new THREE.Group(); mast.position.set(0, 5.02, -0.3); mast.add(pennant); body.add(mast);

  // ---- the garden in the stern
  const r = k.rng(41), up = V3(0, 1, 0), pts = (n, z0, z1, w) => Array.from({ length: n }, () => { const z = r.range(z0, z1), x = r.range(-w, w) * (1 - Math.abs(z + 1.2) * 0.25); return { p: V3(x, 0.74, z), n: V3(r.range(-0.3, 0.3), 1, r.range(-0.5, 0.1)).normalize(), s: r.range(0.8, 1.2) }; });
  body.add(grass(k, pts(26, -1.95, -1.0, 1.0), { per: 5, height: 1.5, width: 0.09, colors: C.grass, seed: 5, sway: 0.2, spread: 0.6 }));
  body.add(grass(k, pts(8, -1.9, -1.2, 0.8), { per: 3, height: 2.5, width: 0.07, colors: ['#8a9a4a', '#b9b85a', '#d9cf7a'], seed: 6, sway: 0.34, spread: 0.5 }));
  body.add(flowers(k, pts(12, -1.85, -1.05, 0.95), { kind: 'thrift', height: 1.15, size: 0.34, seed: 7, sway: 0.2, colors: ['#ee6aa4', '#f9a8c8', '#cf3f86'] }));
  body.add(flowers(k, pts(5, -1.7, -1.1, 0.9), { kind: 'star', height: 0.9, size: 0.26, seed: 8, sway: 0.2 }));
  void up;

  // ---- spray thrown from the bow while it is under way (stateless: births are spread over 30 s and loop is not needed)
  let sprayMesh = null;
  if (spray) {
    const rr = k.rng(77), list = [];
    for (let i = 0; i < 900; i++) { const side = rr.sign(), t = rr() * 30; list.push({ p: [side * rr.range(0.7, 1.4), 0.05, rr.range(1.2, 2.9)], v: [side * rr.range(1.6, 3.8), rr.range(1.8, 4.4), rr.range(-0.4, 1.8)], t, life: rr.range(0.35, 0.75), size: rr.range(0.1, 0.34) }); }
    sprayMesh = particles(k, list, { gravity: 13, drag: 1.2, lit: C.foam, shade: '#bfe0d6', grow: [0.7, 1.3] }); root.add(sprayMesh);
  }

  /** Per frame. wind: world yaw the wind blows toward; gust 0..1; look [-1..1, -1..1]; blink 0 open .. 1 shut; glow 0..1; bob scale. */
  function update(f, { wind = 0, gust = 0.8, look = [0, 0], blink = null, glow: gl = 0.8, bob = 1, way = 1 } = {}) {
    const t = k.twos(f) / k.FPS, tc = f / k.FPS;
    body.position.y = (Math.sin(tc * 1.9) * 0.16 + Math.sin(tc * 3.1 + 1.3) * 0.05) * bob;
    body.rotation.x = (Math.sin(tc * 1.9 + 1.2) * 0.07 + Math.sin(tc * 2.7) * 0.02) * bob - 0.03 * way;
    body.rotation.z = Math.sin(tc * 1.3 + 0.5) * 0.06 * bob;
    // the pennant points downwind whatever the boat's heading: the mast's +X is turned to the wind
    root.updateMatrixWorld(true);
    const e = new THREE.Euler().setFromQuaternion(root.getWorldQuaternion(new THREE.Quaternion()), 'YXZ');
    mast.rotation.y = wind - e.y; flag.value.x = gust; flag.value.y = 0;
    // eyes: held on twos; a blink every few seconds unless the shot says otherwise
    const auto = (() => { const p = (t * 0.31 + 0.13) % 1; return p > 0.955 ? 1 : 0; })(), b = blink ?? auto;
    eyes.position.set(faceC.x + look[0] * 0.17, faceC.y + look[1] * 0.12, faceC.z);
    for (const e2 of eye) e2.scale.y = 1 - 0.88 * b;
    // by night the face and the glass carry their own light (the ambient has taken the rest); the dark boat has none
    if (ghost) { ghostP.value = gl; return; }
    const n = LIGHT.night, on = dark ? 0 : gl;
    halo.userData.power.value = (0.34 + 0.55 * n) * on; face.material.uniforms.uEmis.value.setRGB((0.2 + 0.72 * n) * on, (0.15 + 0.6 * n) * on, (0.02 + 0.3 * n) * on);
    glass.material.uniforms.uEmis.value.setRGB((0.05 + 0.03 * n) * on, (0.23 + 0.22 * n) * on, (0.07 + 0.12 * n) * on);
    if (sprayMesh) sprayMesh.visible = way > 0.05;
  }
  update(0);
  if (ghost) {
    // a shadow of a boat: only its outline, in pale light, on the effects layer, so the picture shows through it
    const gm = k.fx({ additive: true, side: THREE.FrontSide, uniforms: { uGP: ghostP }, frag: `uniform float uGP; vec4 effect(){ vec3 n=normalize(vNv), v=normalize(-vViewPos); float fr=pow(1.-abs(dot(n,v)),1.7); return vec4(vec3(.6,1.,.85)*(fr*.9+.06)*uGP,0.); }` });
    root.traverse((o) => { if (!o.isMesh) return; if (o.isInstancedMesh || o === pennant || o === soil || o.layers.mask !== 1) { o.visible = false; return; } o.material = gm; o.layers.set(1); });
  }
  if (dark) {
    // unlit: dead glass, no face behind it, two red eyes, a grey rag for a pennant
    glass.material.uniforms.uLit.value.set('#2b3040'); face.material.uniforms.uLit.value.set('#2a2636'); eyeMat.uniforms.uLit.value.set('#ff6a3a'); eyeMat.uniforms.uEmis.value.setRGB(1, 0.3, 0.12);
    const pu = pennant.material.uniforms; pu.uFA.value.set('#5a5670'); pu.uFB.value.set('#3f3c54'); pu.uFC.value.set('#2a283c');
    hull.material.uniforms.uLit.value.set('#4a465e');
  }
  update(0);
  return { root, body, face, eyes, mast, halo, update, dark, ghost };
}
