// The harbour: a painted sky and sea, an old town climbing a hill, an arched bridge, a lighthouse on its headland,
// and the rafts moored in the bay, each with an awning and a lantern. On the rafts the lanterns are Gregale's apps:
// dark while parked, mint when awake.
import * as THREE from 'three';
import { seaGeo, registerFoam, mistBand, seaStack } from '../engine/kit/coast.js';
import { clump } from '../engine/kit/flora.js';
import { glow, beam } from '../engine/kit/fx.js';
import { topY } from '../engine/kit/stage.js';
import { lathe } from '../engine/kit/geo.js';
import { C, WIND, NIGHT, LIGHT } from './look.js';

// Soft evening shade: surfaces turned from the sun go pink-lilac, never dark.
export const SOFT = { shade: '#e6ccd2', deep: '#d2b8cf', t1: 0.1, t2: -0.72, wobble: 0.16 };
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
// Gregale's mark (its alpha is its shape), for printing on canvas
const blank = () => { const t = new THREE.DataTexture(new Uint8Array(4), 1, 1); t.needsUpdate = true; return t; };
const MARK = typeof document === 'undefined' ? null : await new THREE.TextureLoader().loadAsync(new URL('../../assets/gregale-logo.png', import.meta.url).href).catch(blank);
const box = (w, h, d) => new THREE.BoxGeometry(w, h, d).translate(0, h / 2, 0);

// ---------------------------------------------------------------- sky and sea
export function harborSky(k, o = {}) {
  return k.sky({ top: C.skyTop, mid: C.skyMid, horizon: C.skyHor, sun: C.sun, sunSize: 0.055, glow: 0.8, cloudLit: C.cloudLit, cloudMid: C.cloudMid, cloudShade: C.cloudShade,
    coverage: 0.66, cloudLow: 0.05, cloudHigh: 0.95, cloudScaleX: 1.9, cloudScaleY: 8.5, drift: 0.006, seed: 5.1, ...o, ...(NIGHT ? { coverage: 0.34, sunSize: 0.04, glow: 0.55 } : {}) });
}
/**
 * The night sky: stars. On the effects layer, behind everything. userData.power (0..1) fades them: dawn.
 */
export function nightSky(k) {
  const g = new THREE.Group(), power = { value: 1 };
  const dome = new THREE.Mesh(new THREE.SphereGeometry(8000, 48, 24), k.fx({ additive: true, side: THREE.BackSide, uniforms: { uStarP: power },
    frag: /* glsl */ `uniform float uStarP;
      vec4 effect(){ vec3 d=normalize(vObj); if(d.y<.01) discard;
        vec2 ce=cell3(d*46.); float pick=step(.76,ce.y), sz=mix(.03,.085,fract(ce.y*37.));
        float core=1.-smoothstep(sz*.3,sz,ce.x), tw=.6+.4*sin(uTime2*(2.+fract(ce.y*91.)*5.)+ce.y*60.);
        float a=core*pick*tw*smoothstep(.02,.2,d.y)*mix(.3,1.,fract(ce.y*7.))*(1.-smoothstep(.992,.9995,dot(d,uSunW)))*uStarP;
        return vec4(mix(vec3(.72,.84,1.),vec3(1.,.93,.8),fract(ce.y*13.))*a,0.); }` }));
  dome.frustumCulled = false; g.add(k.onFx(dome));
  g.userData.power = power;
  return g;
}
// Painted crests: long broken strokes of foam lying along the swell and travelling with it, and darker troughs between.
const CRESTS = /* glsl */ `{
  float near=1.-far;
  float cr=fbm2(vec2(p.x*.05-t*.2,p.y*.3+t*.07)*uSeaP.x+31.);
  float st=smoothstep(.655,.668,cr+.09*n2)*step(.42,vnoise(vec2(p.x*.7,p.y*2.6)*uSeaP.x-t*.25))*near;
  c=mix(c,uSeaB*.88,smoothstep(.4,.36,cr)*near*.4);
  c=mix(c,uSeaC,smoothstep(.6,.62,cr)*near*.5);
  c=mix(c,uFoamCol,st*.92);
}`;
const NIGHT_HEAD = `uniform vec4 uLights[16]; uniform float uNightK;`;
const NIGHT_SEA = /* glsl */ `if(uNightK>0.){
  vec2 cam=cameraPosition.xz;
  for(int i=0;i<16;i++){ float pw=uLights[i].z; if(pw>0.){ vec2 L=uLights[i].xy, toC=cam-L, ld=toC/max(length(toC),1e-3), d=p-L;
    float al=dot(d,ld), pe=abs(d.x*ld.y-d.y*ld.x), ap=max(al,0.), wd=.4+ap*.055;   // ap: only water on the lens side of the light is lit
    float brk=step(.4,vnoise(vec2(al*.8-t*1.1,pe*1.5+float(i)*7.))+.3*exp(-ap*.1));
    float s=(1.-smoothstep(wd*.45,wd,pe))*smoothstep(-.4,1.4,al)*exp(-ap/(6.5+pw*4.5))*brk*min(pw,1.6);
    c+=(uLights[i].w<.5?vec3(.28,1.,.64):vec3(.78,.56,.26))*s*.5*uNightK; } }
  if(uWakeP.x>0.){ vec2 d=p-uWake.xy, wk=normalize(uWake.zw); float al=-dot(d,wk), pe=abs(dot(d,vec2(-wk.y,wk.x))), hw=al*uWakeP.y+uWakeP.z+.5;
    float inw=step(0.,al)*step(al,uWakeP.x)*(1.-smoothstep(hw*.55,hw,pe)), fd=1.-al/uWakeP.x;
    c+=vec3(.18,1.,.7)*inw*fd*fd*(.1+.9*step(.56,vnoise(d*1.9+vec2(0.,t*.7))))*.42*uNightK; }
  for(int i=0;i<2;i++){ float st=uRings[i].w; if(st>0.){ float e=abs(length(p-uRings[i].xy)-uRings[i].z); c+=vec3(.18,1.,.7)*(1.-smoothstep(0.,1.2,e))*st*uNightK; } }
}`;
/** Tell a sea which lights lie on it: list = [[x, z, power, kind (0 mint, 1 warm)], ...], at most sixteen. */
export function seaLights(seaMat, list) { const u = seaMat.uniforms.uLights.value; let i = 0; for (const e of list) if (i < u.length) u[i++].set(e[0], e[1], e[2], e[3] ?? 0); for (; i < u.length; i++) u[i].set(0, 0, 0, 0); }
export function harborSea(k, o = {}) {
  const mat = k.sea({ a: C.sea1, b: C.sea0, c: C.sea2, reflect: C.seaRefl, foam: C.foam, glint: C.glint, horizon: 430, glitter: 0.95, pathWidth: 46, glints: 0.7, shallows: 0.6, fog: 0.75, fragColor: CRESTS + NIGHT_SEA, fragHead: NIGHT_HEAD,
    uniforms: { uLights: { value: Array.from({ length: 16 }, () => new THREE.Vector4()) }, uNightK: { value: LIGHT.night } }, ...o });
  const mesh = new THREE.Mesh(seaGeo(), mat);
  return { mesh, mat };
}

// ---------------------------------------------------------------- houses
const WIN_HEAD = `uniform vec4 uHouse; uniform vec3 uShut;`;
// Windows with shutters on the walls (object space, so they stay put), some of them lit.
const WIN = /* glsl */ `{
  if(abs(vNo.y)<.5){
    float uu=abs(vNo.x)>.5?q.z:q.x; float vv=q.y-1.2;
    vec2 g=vec2(uu/2.5+.5,vv/3.1); vec2 id=floor(g); vec2 f=fract(g)-.5;
    float lod=1.-smoothstep(.1,.36,fwidth(g.x)+fwidth(g.y));
    float has=step(.28,hash21(id*1.7+uHouse.x))*step(0.,vv)*step(q.y,uHouse.y-.8)*lod;
    float win=step(abs(f.x),.15)*step(abs(f.y),.27);
    float shut=step(abs(f.x),.31)*step(abs(f.y),.29)*(1.-win);
    float litw=step(1.-uHouse.z,hash21(id*3.1+uHouse.x+5.));
    c=mix(c,uShut,shut*has);
    c=mix(c,mix(vec3(.22,.18,.28),vec3(1.9,1.45,.72)/max(uAmb,vec3(.08)),litw),win*has);
    c*=mix(.88,1.,smoothstep(.4,.8,q.y+(fbm3(q*.8+uHouse.x)-.5)*.8));
  }
}`;
const WALLS = [C.wallA, C.wallB, C.wallC, C.wallD, C.wallE, C.wallF], SHUTTERS = [C.shutter, C.shutter, C.shutterB, C.shutterC], ROOFS = [C.roof, C.roofB, C.roofC];

function gableGeo(w, rh, d, over = 0.45) {
  const s = new THREE.Shape(); s.moveTo(-w / 2 - over, 0); s.lineTo(w / 2 + over, 0); s.lineTo(0, rh); s.closePath();
  return new THREE.ExtrudeGeometry(s, { depth: d + over * 2, bevelEnabled: false }).translate(0, 0, -(d / 2 + over));
}
function roofMats(k) {
  return (k.__roofs ??= ROOFS.map((color, i) => k.toon({ color, shade: '#e3b4b0', deep: '#c99aa8', t1: -0.55, t2: -1.2, wobble: 0.25, seamY: 2.4, seamStrength: 0.4, mottle: 0.7, patinaAmtA: 0.2, patinaA: '#e09a66', patinaScale: 0.5, patinaSeed: i * 3 })));
}
/** One house: walls with shuttered windows under a tiled roof. Origin at the middle of its foot. opts: w, h, d, seed, lit (fraction of windows lit), hip. */
export function house(k, { w = 8, h = 8, d = 7, seed = 1, lit = 0.25, hip = false, wall, shutter, roof } = {}) {
  const r = k.rng(seed * 31 + 7), g = new THREE.Group();
  const walls = new THREE.Mesh(box(w, h, d), k.toon({ color: wall ?? r.pick(WALLS), ...SOFT, mottle: 0.5, streaks: 0.25, patinaScale: 0.3, patinaSeed: seed,
    fragHead: WIN_HEAD, fragColor: WIN, uniforms: { uHouse: { value: new THREE.Vector4(seed * 1.37, h, lit + (NIGHT ? 0.32 : 0), 0) }, uShut: { value: k.col(shutter ?? r.pick(SHUTTERS)) } } }));
  const rm = roof ?? r.pick(roofMats(k)), rh = Math.min(w, d) * (hip ? 0.42 : 0.3);
  const top = hip ? new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.78, rh, 4).rotateY(Math.PI / 4).translate(0, rh / 2, 0), rm) : new THREE.Mesh(gableGeo(w, rh, d), rm);
  if (hip) top.scale.set(w / Math.max(w, d), 1, d / Math.max(w, d));
  top.position.y = h; g.add(walls, top);
  return g;
}

/** A hill: a big soft blob, stone at its foot and green on top. Returns the mesh (houses are stood on it by `settle`). */
export function hill(k, { seed = 1, size = [150, 60, 150], at = [0, 0, 0], color = C.stone, top = '#6f9a58', rough = 0.45 } = {}) {
  const m = new THREE.Mesh(k.rockGeo({ seed, rough, squash: 1, detail: 6, freq: 1.15, ridge: 0.2 }),
    k.toon({ color, ...SOFT, top, topAmt: 1, topScale: 0.035, topDab: 9, mottle: 0.6, cracks: 0.3, patinaScale: 0.02, patinaAmtA: 0.3, patinaA: '#c9a98a', ink: false }));
  m.scale.set(...size); m.position.set(...at);
  return m;
}

/**
 * A town on a hill: houses, cypresses, pines and bougainvillea stood on its slope inside an ellipse (cx, cz, rx, rz),
 * turned to face `face` (a yaw). count houses; trees and bushes in proportion. Returns a Group.
 */
export function town(k, hillMesh, { cx = 0, cz = 0, rx = 90, rz = 70, count = 70, face = 0, seed = 1, lit = 0.25, minY = 1.2, trees = 1, size = 1 } = {}) {
  const r = k.rng(seed * 101 + 3), g = new THREE.Group(), placed = [];
  hillMesh.updateWorldMatrix(true, false);
  const spot = (gap) => {
    for (let t = 0; t < 30; t++) {
      const a = r() * 6.283, q = Math.sqrt(r()), x = cx + Math.cos(a) * q * rx, z = cz + Math.sin(a) * q * rz, y = topY(hillMesh, x, z);
      if (y == null || y < minY || placed.some((p) => Math.hypot(p[0] - x, p[1] - z) < gap + p[2])) continue;
      placed.push([x, z, gap]); return [x, y, z];
    }
    return null;
  };
  for (let i = 0; i < count; i++) {
    const w = r.range(6, 11) * size, d = r.range(6, 9) * size, h = r.range(6, 13) * size, p = spot(Math.max(w, d) * 0.62); if (!p) continue;
    const hs = house(k, { w, h, d, seed: seed * 50 + i, lit, hip: r() < 0.18 });
    hs.position.set(p[0], p[1] - 1.6, p[2]); hs.rotation.y = face + r.range(-0.35, 0.35) + (r() < 0.3 ? Math.PI / 2 : 0); g.add(hs);
  }
  // cypresses: dark flames between the roofs
  const nc = Math.round(count * 0.55 * trees), cy = new THREE.InstancedMesh(k.blobGeo(3), k.leaf({ colors: C.cypress, dab: 5, ragged: 0.3, lump: 2.2, lumpAmt: 0.25, seed: seed, sway: 0.01 }), nc), M = new THREE.Matrix4(), Q = new THREE.Quaternion();
  let n = 0;
  for (let i = 0; i < nc; i++) { const p = spot(1.6); if (!p) continue; const s = r.range(0.8, 1.5) * size; M.compose(V3(p[0], p[1] + 5.2 * s, p[2]), Q, V3(1.5 * s, 6.5 * s, 1.5 * s)); cy.setMatrixAt(n++, M); }
  cy.count = n; cy.instanceMatrix.needsUpdate = true; cy.frustumCulled = false; g.add(cy);
  // stone pines and bushes, and bougainvillea spilling between the houses
  const pines = [], pink = [];
  for (let i = 0; i < Math.round(count * 0.3 * trees); i++) { const p = spot(3); if (!p) continue; const s = r.range(2.6, 4.6) * size; pines.push([p[0], p[1] + s * 1.5, p[2], s, 0.5], [p[0] + s * 0.8, p[1] + s * 1.25, p[2] + 0.5, s * 0.75, 0.5]); }
  for (let i = 0; i < Math.round(count * 0.22 * trees); i++) { const p = spot(2); if (!p) continue; const s = r.range(1.6, 3) * size; pink.push([p[0], p[1] + s * 0.4, p[2], s, 0.6]); }
  if (pines.length) g.add(clump(k, pines, { colors: C.pine, seed: seed + 2, dabs: false }));
  if (pink.length) g.add(clump(k, pink, { colors: C.bougain, seed: seed + 4, dabs: false }));
  return g;
}

// ---------------------------------------------------------------- the bridge
/** An arched stone bridge along X, its roadway `h` above the water. Origin at mid-span, water level. */
export function bridge(k, { len = 150, h = 17, depth = 6, arches = 5 } = {}) {
  const s = new THREE.Shape(); s.moveTo(-len / 2, -3); s.lineTo(len / 2, -3); s.lineTo(len / 2, h); s.lineTo(-len / 2, h); s.closePath();
  const span = len / arches, rad = span * 0.37, spring = h * 0.36;
  for (let i = 0; i < arches; i++) { const cx = -len / 2 + span * (i + 0.5), p = new THREE.Path(); p.moveTo(cx - rad, -2); p.lineTo(cx - rad, spring); p.absarc(cx, spring, rad, Math.PI, 0, true); p.lineTo(cx + rad, -2); p.closePath(); s.holes.push(p); }
  const g = new THREE.Group(), mat = k.toon({ color: C.stone, ...SOFT, seamY: 0.55, seamStrength: 0.35, seamBreak: 0.8, mottle: 0.7, streaks: 0.5, patinaScale: 0.12, patinaAmtA: 0.25, patinaA: '#bfa98c', topAmt: 0.6, top: '#7d9a58', topScale: 0.2 });
  g.add(new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: false, curveSegments: 14 }).translate(0, 0, -depth / 2), mat));
  const rail = new THREE.Mesh(box(len + 2, 1.1, depth + 1.2), mat); rail.position.y = h; g.add(rail);
  return g;
}

// ---------------------------------------------------------------- the lighthouse
/**
 * The lighthouse: a white tower with a tiled cap on a rock. Origin at the foot of the tower.
 * userData: { lamp (Object3D at the light), beam, glow, set(power 0..1, angle) }
 */
export function lighthouse(k, { h = 24, beamLength = 520 } = {}) {
  const g = new THREE.Group();
  const tower = new THREE.Mesh(lathe([[3.3, 0], [3.0, h * 0.18], [2.55, h * 0.7], [2.35, h * 0.82], [3.05, h * 0.84], [3.05, h * 0.87], [0.01, h * 0.87]], 28),
    k.toon({ color: '#fbf4e6', ...SOFT, stripes: [{ y: h * 0.3, w: 0.9, color: C.mint, wear: 0.25 }], seamY: 0.4, seamStrength: 0.25, mottle: 0.5, streaks: 0.4 }));
  const room = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.75, 2.7, 10).translate(0, h * 0.87 + 1.35, 0), k.toon({ color: '#eafff6', shade: '#ffffff', deep: '#ffffff', emissive: '#3a5a48', seamAround: 10, seamStrength: 0.8 }));
  const cap = new THREE.Mesh(lathe([[2.5, 0], [2.3, 0.25], [1.2, 1.5], [0.2, 2.5], [0.01, 2.9]], 16).translate(0, h * 0.87 + 2.7, 0), k.toon({ color: C.roof, shade: '#cfa3b6', deep: '#a988b4', seamAround: 8, seamStrength: 0.4 }));
  const railing = new THREE.Mesh(new THREE.TorusGeometry(3.0, 0.09, 6, 28).rotateX(Math.PI / 2).translate(0, h * 0.87 + 1.0, 0), k.toon({ color: C.slateDark, ink: false }));
  const lamp = new THREE.Object3D(); lamp.position.y = h * 0.87 + 1.35;
  const b = beam(k, { length: beamLength, spread: 0.07, color: '#c9ffe6' }), gl = glow(k, { color: '#d6ffe9', rays: 6 }); gl.scale.setScalar(13);
  lamp.add(b, gl); g.add(tower, room, cap, railing, lamp);
  // the keeper's cottage against the tower
  const cot = house(k, { w: 7, h: 4.2, d: 5.5, seed: 77, lit: 0.6, wall: '#f6ecd8' }); cot.position.set(-5.6, 0, 0.6); g.add(cot);
  const set = (power, angle) => { b.userData.power.value = power * (1 - 0.5 * LIGHT.night); gl.userData.power.value = power * (0.55 + 0.2 * LIGHT.night); if (angle != null) b.rotation.y = angle; room.material.uniforms.uEmis.value.setRGB(0.1 + 0.3 * power, 0.16 + 0.36 * power, 0.12 + 0.32 * power); };
  set(1, 0);
  g.userData = { lamp, beam: b, glow: gl, set, foam: { r: 1, w: 1 } };
  return g;
}
/** The headland the lighthouse stands on: a broad, low sea stack with turf on top. Origin at water level; userData.top is the height of the turf. */
export function headland(k, { seed = 9, radius = 30, height = 12, dress = 1 } = {}) {
  const g = seaStack(k, { radius, height, seed, tone: '#dcc2a0', dress, birds: true, depth: 5, detail: 6 });
  g.userData.top = height;
  return g;
}

// ---------------------------------------------------------------- lanterns and rafts
/**
 * A hanging lantern. Origin at its hook. userData.set(v): 0 dark and parked .. 1 awake, glowing mint.
 * opts: size, glowSize (how wide its halo is at v = 1)
 */
export function lantern(k, { size = 1, glowSize = 7, color = C.mint } = {}) {
  const g = new THREE.Group(), brass = k.toon({ color: C.brassDark, shade: '#b99ab8', deep: '#8f7aa8', patinaAmtA: 0.3, patinaScale: 3 });
  const glass = k.toon({ color: '#2d5a52', shade: '#c9c0dc', deep: '#a9a0cc', seamAround: 6, seamStrength: 0.9, ink: true });
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.34, 0.8, 6).translate(0, -0.95, 0), glass);
  const cap = new THREE.Mesh(lathe([[0.56, -0.55], [0.5, -0.48], [0.2, -0.22], [0.07, -0.1], [0.01, -0.02]], 10), brass);
  const foot = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, 0.14, 8).translate(0, -1.42, 0), brass);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.03, 5, 10).translate(0, 0.07, 0), brass);
  const gl = glow(k, { color: '#7dffc8' }); gl.position.y = -0.95;
  g.add(body, cap, foot, ring, gl); g.scale.setScalar(size);
  const dark = k.col('#2d5a52'), lit = k.col('#1fe08c'), emis = glass.uniforms.uEmis.value, base = glass.uniforms.uLit.value;
  const red = k.col('#ff5a3a'), tint = new THREE.Color(), gc = gl.material.uniforms.uGC.value, mintGlow = gc.clone();
  // set(v, bad): v 0 dark .. 1 lit; bad 0 mint .. 1 red
  const set = (v, bad = 0) => { g.userData.level = v; base.copy(dark).lerp(tint.copy(lit).lerp(red, bad), Math.min(1, v * 1.4)); emis.setRGB((0.18 + 0.75 * bad) * v, (0.8 - 0.6 * bad) * v, (0.42 - 0.34 * bad) * v); gc.copy(mintGlow).lerp(red, bad); gl.userData.power.value = v * (0.9 + 0.5 * LIGHT.night); gl.scale.setScalar(Math.max(0.001, glowSize * (0.4 + 0.6 * v))); };
  set(0);
  g.userData = { set, glow: gl, level: 0 };
  return g;
}

const PLANKS = /* glsl */ `{ float pl=q.z*1.25; float dl=abs(fract(pl)-.5)/max(fwidth(pl),1e-5); c*=mix(.9,1.06,hash11(floor(pl)*3.7)); c=mix(c,uInk,(1.-smoothstep(.5,1.4,dl))*.45*step(.5,abs(vNo.y))); }`;
/**
 * A raft: a plank deck on piles, crates and rope, two poles with a patched awning, and a lantern on the boom.
 * Origin at water level under the middle of the deck, its long side along X. opts: depth (how far the piles go down), seed.
 * userData: { lantern, set(v), cloth (uniform: how hard the awning fills, 0..1), hook (world anchor for the mooring), foam }
 */
export function raft(k, { depth = 5, seed = 1, crates = true } = {}) {
  const r = k.rng(seed * 17 + 1), g = new THREE.Group();
  const wood = k.toon({ color: C.wood, shade: '#c3a2b8', deep: '#9a84ac', t1: 0.05, t2: -0.7, mottle: 0.7, streaks: 0.6, fragColor: PLANKS, patinaScale: 0.7, patinaAmtA: 0.2, patinaA: '#b89468' });
  const dark = k.toon({ color: C.woodDark, shade: '#c3a2b8', deep: '#9a84ac', t1: 0.05, t2: -0.7, mottle: 0.6, streaks: 0.7, topAmt: 0, patinaScale: 0.8, patinaAmtA: 0.3, patinaA: '#4f6a4a' });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(11, 0.45, 7.4).translate(0, 1.55, 0), wood); g.add(deck);
  for (const [x, z] of [[-4.9, -3.2], [0, -3.3], [4.9, -3.2], [-4.9, 3.2], [0, 3.3], [4.9, 3.2]]) {
    const top = 2.1 + r.range(-0.15, 0.5), p = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, top + depth, 8).translate(0, (top - depth) / 2, 0), dark); p.position.set(x, 0, z); p.rotation.z = r.range(-0.03, 0.03); g.add(p);
  }
  for (const z of [-3.2, 3.2]) { const b = new THREE.Mesh(new THREE.BoxGeometry(11.6, 0.3, 0.3).translate(0, 1.15, z), dark); g.add(b); }
  // poles, boom and awning: the high pole is upwind, so the cloth fills away from it
  const hi = 7.2, lo = 4.9, xa = -3.9, xb = 3.7, pole = (x, h, lean) => { const m = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.17, h, 6).translate(0, h / 2, 0), dark); m.position.set(x, 1.75, 0); m.rotation.z = lean; g.add(m); return m; };
  pole(xa, hi, 0.03); pole(xb, lo, -0.04);
  const boomLen = 10.2, ang = Math.atan2(lo - hi, xb - xa), boom = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, boomLen, 6).rotateZ(Math.PI / 2), dark);
  boom.position.set((xa + xb) / 2 + 0.9, 1.75 + (hi + lo) / 2 - 0.2 + Math.tan(ang) * 0.9, 0); boom.rotation.z = ang; g.add(boom);
  const cloth = { value: 0.5 };
  const sheet = new THREE.Mesh(new THREE.PlaneGeometry(7.9, 5.6, 22, 12).translate(0, -2.8, 0), k.toon({ color: C.canvas, shade: '#e6d2dc', deep: '#cdb8d4', side: THREE.DoubleSide, t1: -0.2, t2: -0.9, mottle: 0.8, streaks: 0.3,
    patinaA: '#aebad0', patinaAmtA: 0.36, patinaB: '#d9c7a2', patinaAmtB: 0.3, patinaScale: 0.42, patinaSeed: seed * 3, uniforms: { uCloth: cloth, uMark: { value: MARK } }, fragHead: 'uniform sampler2D uMark;',
    fragColor: /* glsl */ `{ vec2 m=(vUv-.5)*vec2(7.9/5.6,1.)*1.95+.5; float inside=step(0.,m.x)*step(m.x,1.)*step(0.,m.y)*step(m.y,1.);
      float pr=texture(uMark,m).a*inside*smoothstep(.2,.48,fbm3(q*1.7)+.24); c=mix(c,vec3(.05,.43,.27),pr*.8); }`,
    displace: /* glsl */ `float bel=sin(uv.x*3.14159)*sin(uv.y*3.14159); pos.z += bel*(-.3+uCloth*(1.2+.22*sin(uTime2*4.+uv.x*5.)+.1*sin(uTime2*9.+uv.y*9.)));` }));
  sheet.material.vertexShader = sheet.material.vertexShader.replace('void main(){', 'uniform float uCloth; void main(){');
  const tilt = new THREE.Group(); tilt.position.set((xa + xb) / 2, 1.75 + (hi + lo) / 2 - 0.28, 0); tilt.rotation.z = ang; sheet.rotation.x = -0.98; tilt.add(sheet); g.add(tilt);
  // two guys from the cloth's foot to the deck
  for (const x of [-3.6, 3.6]) { const guy = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 1.5, 4).translate(0, 0.75, 0), dark); guy.position.set((xa + xb) / 2 + x, 1.8, 3.5); guy.rotation.x = 0.5; g.add(guy); }
  // the lantern at the low end of the boom
  const lan = lantern(k, { size: 1.15, glowSize: 9 }); lan.position.set(xb + 1.9, 1.75 + lo - 0.55 + Math.tan(ang) * 1.9, 0); g.add(lan);
  if (crates) {
    const cm = k.toon({ color: '#a9845a', shade: '#c3a2b8', deep: '#9a84ac', t1: 0.05, t2: -0.7, mottle: 0.6, seamY: 1.6, seamStrength: 0.5, streaks: 0.4 });
    for (const [x, z, s, ry] of [[-1.6, -1.2, 1.5, 0.2], [0.2, -1.6, 1.25, -0.3], [-0.9, 0.9, 1.1, 0.5], [-1.5, -1.1, 0.95, 0.9]]) { const c = new THREE.Mesh(box(s, s * 0.85, s), cm); c.position.set(x, s === 0.95 ? 1.78 + 1.5 * 0.85 : 1.78, z); c.rotation.y = ry; g.add(c); }
    const rope = k.toon({ color: C.rope, shade: '#c9b0c0', deep: '#a894b4', ink: false });
    for (let i = 0; i < 3; i++) { const t = new THREE.Mesh(new THREE.TorusGeometry(0.62 - i * 0.07, 0.11, 6, 18).rotateX(Math.PI / 2), rope); t.position.set(2.1, 1.9 + i * 0.2, 1.7); g.add(t); }
    // rope swags along the side
    for (let i = 0; i < 4; i++) { const t = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.06, 5, 14, Math.PI).rotateZ(Math.PI), rope); t.position.set(-3.6 + i * 2.4, 1.65, 3.75); g.add(t); }
  }
  g.userData = { lantern: lan, set: lan.userData.set, cloth, foam: { r: 6.2, w: 1.6 } };
  return g;
}

// ---------------------------------------------------------------- the whole bay
/**
 * The bay, for the surface shots. Looking down -Z from the near water: the old town on its hill to the left, the bridge
 * across the far inlet with the sun over it, a second hill beyond, the lighthouse headland to the right, and three
 * rafts moored between. Returns { scene, sea, seaMat, sky, rafts: [], light (the lighthouse), town, foam(extra) }.
 * opts: quay (the near building at the left edge), detail (0..1: how much town), raftDepth, rafts ([[x, z, yaw], ...])
 */
export const BAY = { rafts: [[20, -6, 0.12], [56, -80, -0.22], [100, -150, 0.1]], light: [150, -250], bridge: [-5, -330], quay: [-47, -10, 0.35] };
export function buildHarbor(k, { quay = true, detail = 1, raftDepth = 5, rafts: layout = BAY.rafts, skyOpts = {}, seaOpts = {}, mist = true } = {}) {
  const scene = new THREE.Scene();
  const sky = harborSky(k, skyOpts); scene.add(sky);
  const stars = NIGHT ? nightSky(k) : null; if (stars) scene.add(stars);
  const { mesh: sea, mat: seaMat } = harborSea(k, seaOpts); scene.add(sea);

  // the old town on its hill, left
  const h1 = hill(k, { seed: 4, size: [150, 74, 140], at: [-165, -10, -235] }); scene.add(h1);
  const t1 = town(k, h1, { cx: -120, cz: -175, rx: 90, rz: 75, count: Math.round(78 * detail), face: 0.45, seed: 2, lit: 0.3 }); scene.add(t1);
  // the far shore past the bridge, and the long hill to the right of it
  const h2 = hill(k, { seed: 7, size: [330, 88, 190], at: [215, -14, -640], top: '#86a565' }); scene.add(h2);
  const t2 = town(k, h2, { cx: 150, cz: -520, rx: 190, rz: 60, count: Math.round(46 * detail), face: -0.2, seed: 5, lit: 0.35, trees: 0.8, size: 1.25 }); scene.add(t2);
  const h3 = hill(k, { seed: 11, size: [260, 60, 160], at: [-420, -12, -560], top: '#86a565' }); scene.add(h3);
  const br = bridge(k, { len: 190, h: 19, arches: 5 }); br.position.set(BAY.bridge[0], 0, BAY.bridge[1]); br.rotation.y = 0.1; scene.add(br);

  // the lighthouse on its headland, right
  const hd = headland(k, { radius: 28, height: 11 }), [lx, lz] = BAY.light; hd.position.set(lx, 0, lz); scene.add(hd);
  const light = lighthouse(k); light.position.set(lx - 2, hd.userData.top - 0.4, lz + 2); scene.add(light);

  const rafts = layout.map(([x, z, yaw], i) => { const rf = raft(k, { depth: raftDepth, seed: i + 1 }); rf.position.set(x, 0, z); rf.rotation.y = yaw; scene.add(rf); return rf; });

  let quayG = null;
  if (quay) { quayG = quayHouse(k); quayG.position.set(BAY.quay[0], 0, BAY.quay[1]); quayG.rotation.y = BAY.quay[2]; scene.add(quayG); }

  if (mist) for (const [x, y, z, w, h, a, seed] of [[-60, 9, -250, 700, 30, 0.42, 3], [120, 10, -420, 1100, 40, 0.5, 5], [0, 16, -760, 2600, 80, 0.6, 7]]) { const m = mistBand(k, { width: w, height: h, alpha: a, seed, color: C.haze, lie: 1, foot: 6 }); m.position.set(x, y, z); scene.add(m); }

  const foam = (extra = []) => registerFoam(seaMat, [...extra, ...rafts.map((rf) => [rf.position.x, rf.position.z, 6.2, 1.5]), [lx, lz, 29, 5], [BAY.bridge[0], BAY.bridge[1], 12, 3], ...(quayG ? [[BAY.quay[0] + 6, BAY.quay[1] + 6, 20, 3]] : [])]);
  foam();
  // which lanterns lie on the water as reflections: every raft's, at its level, and whatever the shot adds (the boat)
  const P = new THREE.Vector3(), lights = (extra = []) => seaLights(seaMat, [...extra, ...rafts.filter((rf) => (rf.userData.lantern.userData.level ?? 0) > 0.03).map((rf) => { rf.userData.lantern.getWorldPosition(P); return [P.x, P.z, rf.userData.lantern.userData.level, 0]; })]);
  lights();
  return { scene, sky, stars, sea, seaMat, rafts, light, headland: hd, bridge: br, hills: [h1, h2, h3], quay: quayG, foam, lights };
}

/** The near building on the quay: an old stone house with an arched door, steps down to the water, a bracket lantern, bougainvillea over its corner. */
export function quayHouse(k) {
  const g = new THREE.Group();
  const hs = house(k, { w: 30, h: 21, d: 20, seed: 3, lit: 0.2, wall: C.wallA, shutter: C.shutter, roof: roofMats(k)[0] }); hs.position.y = 1.2; g.add(hs);
  const stone = k.toon({ color: C.stone, ...SOFT, seamY: 0.8, seamStrength: 0.4, seamBreak: 0.7, mottle: 0.7, streaks: 0.5 });
  const base = new THREE.Mesh(box(36, 4.2, 26), stone); base.position.set(0, -3, 0); g.add(base);
  for (let i = 0; i < 4; i++) { const st = new THREE.Mesh(box(9 - i * 0.2, 0.6, 2.2), stone); st.position.set(9, 0.6 - i * 0.6, 13.2 + i * 1.6); g.add(st); }
  // the arched door: a dark recess with a stone surround
  const door = new THREE.Shape(); door.moveTo(-2.4, 0); door.lineTo(-2.4, 4.2); door.absarc(0, 4.2, 2.4, Math.PI, 0, true); door.lineTo(2.4, 0); door.closePath();
  const recess = new THREE.Mesh(new THREE.ShapeGeometry(door, 12), k.toon({ color: '#3a2f4a', shade: '#ffffff', deep: '#ffffff' })); recess.position.set(9, 1.2, 10.06); g.add(recess);
  const arch = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.4, 5, 16, Math.PI), stone); arch.position.set(9, 5.4, 10.1); g.add(arch);
  const lan = lantern(k, { size: 1.5, glowSize: 8 }); lan.position.set(15.6, 9.2, 11.6); lan.userData.set(0.9); g.add(lan);
  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 1.8), k.toon({ color: C.slateDark })); arm.position.set(15.6, 9.3, 10.8); g.add(arm);
  g.add(clump(k, [[-9, 19, 10.4, 4.6, 0.7], [-3.5, 15.5, 10.8, 3.6, 0.7], [-13, 13, 10.6, 3.4, 0.8], [-7, 9.5, 10.9, 2.6, 0.8], [2, 20.5, 10.2, 2.8, 0.6]], { colors: C.bougain, seed: 8 }));
  g.add(clump(k, [[-12, 23.5, 6, 5, 0.6], [4, 24, 4, 4, 0.6]], { colors: C.pine, seed: 9 }));
  return g;
}

/** Where the wind is blowing, as a yaw for things that point downwind along their +X. */
export const windYaw = () => Math.atan2(-WIND[1], WIND[0]);
