// Under the rafts: the rest of the stack, hung on one mooring line.
//   the cargo  (runtime)   crates in a rope net just under the deck, stencilled NODE, PYTHON, OCI
//   the bell   (microVM)   a sealed glass bell in a brass cage; the instance is the flame inside it, and nothing else gets in
//   the keystone (kernel)  a stone on the seabed carved with a wind rose. Its north-east point is the gregale's. A parked
//                          app is an ember kept in the stone (a snapshot); when a request comes down the line the point
//                          lights and the flame goes back up into the bell.
// One unit is about a metre; the water's surface is y = 0, the seabed DEPTH.bed.
import * as THREE from 'three';
import { kelp } from '../engine/kit/flora.js';
import { glow, beam, particles, petals } from '../engine/kit/fx.js';
import { lathe } from '../engine/kit/geo.js';
import { raft } from './harbor.js';
import { C, LIGHT } from './look.js';

export const DEPTH = { cargo: -6.5, data: -11.4, bell: -19, bed: -40 };
const V3 = (x, y, z) => new THREE.Vector3(x, y, z);
const UNDER = { shade: '#b4e2d2', deep: '#84c4ba', t1: 0.2, t2: -0.35, wobble: 0.25 };   // light comes straight down: sides are sea-green, undersides deeper

function stencil(text) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const x = cv.getContext('2d');
  x.clearRect(0, 0, 256, 256); x.fillStyle = '#000'; x.textAlign = 'center'; x.textBaseline = 'middle';
  let size = 92; x.font = `700 ${size}px "Familjen Grotesk", "Segoe UI", sans-serif`; while (x.measureText(text).width > 200) { size -= 4; x.font = `700 ${size}px "Familjen Grotesk", "Segoe UI", sans-serif`; }
  x.fillText(text, 128, 132); x.lineWidth = 7; x.strokeStyle = '#000'; x.strokeRect(22, 22, 212, 212);
  const t = new THREE.CanvasTexture(cv); t.generateMipmaps = false; t.minFilter = THREE.LinearFilter;
  return t;
}
/** A cargo crate with a word stencilled on its sides. */
export function crate(k, { size = 2, text = 'NODE', color = '#b08a5c' } = {}) {
  return new THREE.Mesh(new THREE.BoxGeometry(size, size * 0.86, size), k.toon({ color, ...UNDER, mottle: 0.6, streaks: 0.4, seamY: 2.2 / size, seamStrength: 0.35,
    fragHead: 'uniform sampler2D uStencil;', fragColor: `{ float s=texture(uStencil,vUv).a*step(abs(vNo.y),.5)*step(.3,fbm3(q*3.)+.25); c=mix(c,vec3(.13,.2,.2),s*.85); }`, uniforms: { uStencil: { value: stencil(text) } } }));
}

/** The cargo: three crates slung in a rope net. Origin where the net hangs from the line. */
export function cargo(k) {
  const g = new THREE.Group(), rope = k.toon({ color: C.rope, ...UNDER, ink: false });
  const items = [['NODE', 2.3, [-1.5, -3.6, 0.5], 0.3], ['PYTHON', 2.5, [1.3, -3.9, -0.4], -0.25], ['OCI', 2.0, [0, -1.9, 0.2], 0.7]].map(([text, size, p, ry], i) => { const c = crate(k, { text, size, color: ['#b08a5c', '#a57f58', '#c09a66'][i] }); c.position.set(...p); c.rotation.set(0.04 * (i - 1), ry, 0.05 * (1 - i)); g.add(c); return c; });
  // the net: lines from the hook down round the load, and two hoops
  for (let i = 0; i < 8; i++) { const a = (i / 8) * 6.283, pts = [V3(0, 0, 0), V3(Math.cos(a) * 2.2, -1.4, Math.sin(a) * 2.2), V3(Math.cos(a) * 3.3, -3.4, Math.sin(a) * 3.0), V3(Math.cos(a) * 2.4, -5.3, Math.sin(a) * 2.3), V3(0, -5.9, 0)];
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 20, 0.05, 4), rope)); }
  for (const [y, r] of [[-1.6, 2.35], [-3.5, 3.25], [-5.2, 2.45]]) { const h = new THREE.Mesh(new THREE.TorusGeometry(r, 0.05, 4, 28).rotateX(Math.PI / 2), rope); h.position.y = y; h.scale.z = 0.92; g.add(h); }
  g.userData = { items };
  return g;
}

/**
 * The bell: a glass sphere in a brass cage, sealed. Origin at its centre. userData.set(v): 0 parked (dark, an ember's
 * worth of light) .. 1 running (the flame up, the glass glowing mint).
 */
export function bell(k, { r = 2.7 } = {}) {
  const g = new THREE.Group(), brass = k.toon({ color: '#d9a94a', shade: '#b8d8b4', deep: '#7fb0a0', t1: 0.2, t2: -0.35, patinaA: '#6fb39a', patinaAmtA: 0.45, patinaB: C.rust, patinaAmtB: 0.12, patinaScale: 1.6, mottle: 0.6 });
  const ring = (rad, tube, y, rx = Math.PI / 2, ry = 0) => { const m = new THREE.Mesh(new THREE.TorusGeometry(rad, tube, 7, 40), brass); m.rotation.set(rx, ry, 0); m.position.y = y; g.add(m); return m; };
  ring(r * 1.01, 0.13, 0); for (let i = 0; i < 3; i++) ring(r * 1.01, 0.1, 0, 0, (i / 3) * Math.PI);
  const crown = new THREE.Mesh(lathe([[0.9, r - 0.25], [0.95, r], [0.5, r + 0.35], [0.22, r + 0.7], [0.2, r + 1.0], [0.01, r + 1.05]], 16), brass); g.add(crown);
  const base = new THREE.Mesh(lathe([[0.01, -r - 0.55], [1.2, -r - 0.5], [1.35, -r - 0.2], [1.1, -r + 0.12], [0.01, -r + 0.14]], 18), brass); g.add(base);
  // the glass: seen as its rim and a sheen, on the effects layer, so what is inside reads
  const tint = { value: 0 };
  const glass = new THREE.Mesh(new THREE.SphereGeometry(r, 36, 24), k.fx({ side: THREE.FrontSide, uniforms: { uTint: tint },
    frag: /* glsl */ `uniform float uTint;
      vec4 effect(){ vec3 n=normalize(vNv), v=normalize(-vViewPos); float fr=pow(1.-max(dot(n,v),0.),2.6);
        float sheen=step(.72,fbm3(vObj*.9+vec3(0.,uTime*.05,0.)))*smoothstep(.2,.8,n.y)*.1;
        float hi=smoothstep(.9,.97,dot(n,normalize(vec3(-.45,.7,.55))))*.5;
        vec3 c=mix(vec3(.78,.98,.94),vec3(.6,1.,.82),uTint); float a=clamp(fr*.85+sheen+hi+.07+.1*uTint,0.,.9);
        return vec4(c*a,a); }` }));
  k.onFx(glass); g.add(glass);
  // the instance: a flame standing on a wick in the middle of the bell
  const flame = new THREE.Mesh(lathe([[0.01, -0.5], [0.34, -0.36], [0.5, -0.05], [0.4, 0.34], [0.2, 0.74], [0.07, 1.02], [0.01, 1.18]], 18), k.toon({ color: '#c9ffe4', shade: '#ffffff', deep: '#ffffff', emissive: '#2fd69a', t1: -1, t2: -2, ink: true }));
  const core = new THREE.Mesh(lathe([[0.01, -0.36], [0.17, -0.25], [0.24, 0.0], [0.15, 0.3], [0.01, 0.56]], 12), k.toon({ color: '#ffffff', shade: '#ffffff', deep: '#ffffff', emissive: '#fff4c0', t1: -1, t2: -2, ink: false })); flame.add(core);
  const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.34, 1.5, 8).translate(0, -r + 0.9, 0), brass); g.add(wick);
  flame.position.y = -r + 2.15; g.add(flame);
  const ember = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), k.toon({ color: '#ffb46a', shade: '#ffffff', deep: '#ffffff', emissive: '#c85a1a', ink: false })); ember.position.y = -r + 1.72; g.add(ember);
  const gl = glow(k, { color: '#7dffc8' }), ge = glow(k, { color: '#ff9a4a' }); gl.position.y = -r + 2.3; ge.position.y = -r + 1.72; g.add(gl, ge);
  // set(v, f, ember): v 0 empty and dark .. 1 running; ember (0..1) is a faint glow left at the wick, for a bell that is filling
  const set = (v, f = 0, emb = 0) => {
    const fl = 1 + 0.07 * Math.sin(f * 0.9) + 0.04 * Math.sin(f * 2.3);
    flame.scale.set(Math.max(0.001, v) * (2 - fl), Math.max(0.001, v) * fl, Math.max(0.001, v)); flame.visible = v > 0.02;
    ember.visible = emb > 0.01; ember.scale.setScalar(Math.max(0.01, emb));
    gl.userData.power.value = v * 0.6; gl.scale.setScalar(Math.max(0.01, r * 2.6 * (0.3 + 0.7 * v))); ge.userData.power.value = emb * (0.5 + 0.12 * Math.sin(f * 0.35)); ge.scale.setScalar(2.2);
    tint.value = v;
  };
  set(0);
  g.userData = { set, r };
  return g;
}

// The wind rose carved in the keystone's top face: sixteen rays, the cardinals long, each split light and dark down
// its middle, a ring round them. The north-east ray is the gregale: uRose lights it (0..1), and uRoseAll the rest.
const ROSE_HEAD = `uniform vec4 uRose;`;   // x: the gregale's point, y: every point, z: the stone's radius, w: the angle of north
const ROSE = /* glsl */ `{
  if(vNo.y>.6){
    vec2 p=q.xz/uRose.z; float rr=length(p), a=atan(p.x,-p.y)-uRose.w;             // a = 0 at north, clockwise
    float t4=abs(fract(a/1.5708+.5)-.5)*2., t8=abs(fract(a/1.5708)-.5)*2., t16=abs(fract(a/.7854+.5)-.5)*2.;
    float e4=.86*.11/mix(.11,.86,t4), e8=.6*.1/mix(.1,.6,t8), e16=.36*.09/mix(.09,.36,t16);
    float in4=step(rr,e4), in8=step(rr,e8)*(1.-in4), in16=step(rr,e16)*(1.-in4)*(1.-in8);
    vec3 stone=c;
    c=mix(c,stone*.6,in16); c=mix(c,stone*mix(.5,1.25,step(.5,fract(a/1.5708))),in8); c=mix(c,stone*mix(.42,1.32,step(.5,fract(a/1.5708+.5))),in4);
    float ring=(1.-smoothstep(.012,.02,abs(rr-.93)))+(1.-smoothstep(.006,.012,abs(rr-.88)));
    c=mix(c,stone*.42,clamp(ring,0.,1.)*.9);
    // which ray is north-east: the eight-point star's ray at 45 degrees
    float ne=in8*step(abs(a-.7854),.7854*.5)+step(abs(rr-.905),.02)*step(abs(a-.7854),.2);
    float allp=max(in4,in8)+clamp(ring,0.,1.)*.6;
    c=mix(c,vec3(.75,2.3,1.6),clamp(ne*uRose.x,0.,1.));
    c=mix(c,vec3(.5,1.5,1.1),clamp(allp*uRose.y,0.,1.)*(1.-ne));
  }
}`;
/**
 * The keystone: a round stone on the seabed with the wind rose on its face, a ring bolt in the middle where the
 * mooring line is made fast, and the ember that is a parked app. Origin at the middle of its top face.
 * userData: { rose: Vector4 uniform (x the gregale's point 0..1, y all points 0..1), set(v, f): 0 an ember .. 1 the flame leaving }
 */
export function keystone(k, { r = 5.4, north = -0.6 } = {}) {
  const g = new THREE.Group(), rose = { value: new THREE.Vector4(0, 0, r, north) };
  const stone = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.08, 1.7, 40).translate(0, -0.85, 0), k.toon({ color: '#9fb0a6', ...UNDER, mottle: 0.8, cracks: 0.6, streaks: 0.3, patinaA: '#7f9a8c', patinaAmtA: 0.4, patinaScale: 0.5, top: '#5f8f6a', topAmt: 0.0,
    fragHead: ROSE_HEAD, fragColor: ROSE, uniforms: { uRose: rose } }));
  g.add(stone);
  const plinth = new THREE.Mesh(new THREE.CylinderGeometry(r * 1.2, r * 1.32, 1.3, 12).translate(0, -2.3, 0), k.toon({ color: '#8fa096', ...UNDER, mottle: 0.8, cracks: 0.7, seamAround: 12, seamStrength: 0.5, seamBreak: 0.8 })); g.add(plinth);
  const iron = k.toon({ color: '#5f6a72', ...UNDER, patinaA: C.rust, patinaAmtA: 0.4, patinaScale: 2 });
  const bolt = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.11, 6, 16), iron); bolt.position.y = 0.4; g.add(bolt);
  const boss = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.24, 12).translate(0, 0.12, 0), iron); g.add(boss);
  const ember = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), k.toon({ color: '#ffb46a', shade: '#ffffff', deep: '#ffffff', emissive: '#c85a1a', ink: false })); ember.position.set(0, 0.5, 0); g.add(ember);
  const ge = glow(k, { color: '#ff9a4a' }), gm = glow(k, { color: '#7dffc8', rays: 8 }); ge.position.y = 0.5; gm.position.y = 0.7; g.add(ge, gm);
  const set = (v, f = 0) => { ge.userData.power.value = (1 - v) * (0.55 + 0.14 * Math.sin(f * 0.33)); ge.scale.setScalar(2.6); gm.userData.power.value = v * 0.7; gm.scale.setScalar(Math.max(0.01, 3 + 4.5 * v)); ember.material.uniforms.uEmis.value.setRGB(0.78 - 0.5 * v, 0.35 + 0.6 * v, 0.1 + 0.6 * v); };
  set(0);
  g.userData = { rose: rose.value, set };
  return g;
}

/**
 * What an app keeps: a database (three brass drums stacked on the line, light in the seams between them) and file
 * storage (buckets hung from a yard above it, something bright in each). Origin at the middle of the top drum.
 * userData.set(db, files): 0..1 each. The buckets light one after another as `files` rises.
 */
export function dataStore(k) {
  const g = new THREE.Group(), brass = k.toon({ color: '#d9a94a', shade: '#b8d8b4', deep: '#7fb0a0', t1: 0.2, t2: -0.35, patinaA: '#6fb39a', patinaAmtA: 0.42, patinaB: C.rust, patinaAmtB: 0.1, patinaScale: 1.6, mottle: 0.6 });
  const wood = k.toon({ color: '#a57f58', ...UNDER, mottle: 0.6, streaks: 0.5, seamAround: 9, seamStrength: 0.45 }), rope = k.toon({ color: C.rope, ...UNDER, ink: false });
  const seams = [0, 1].map((i) => { const s = new THREE.Mesh(new THREE.CylinderGeometry(1.44, 1.44, 0.22, 30), k.toon({ color: '#1f5a4a', shade: '#ffffff', deep: '#ffffff', ink: false })); s.position.y = -0.49 - i * 0.98; g.add(s); return s; });
  for (let i = 0; i < 3; i++) { const d = new THREE.Mesh(new THREE.CylinderGeometry(1.56, 1.56, 0.78, 30), brass); d.position.y = -i * 0.98; g.add(d); }
  const dg = glow(k, { color: '#7dffc8' }); dg.position.y = -0.98; dg.scale.setScalar(8); g.add(dg);
  const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 8.2, 6).rotateZ(Math.PI / 2), wood); yard.position.y = 2.5; g.add(yard);
  const buckets = [-3.7, -2.4, 2.4, 3.7].map((x, i) => {
    const b = new THREE.Group(); b.position.set(x, 2.5, 0); g.add(b);
    const drop = 1.5 + (i % 2) * 0.55, line = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, drop, 4).translate(0, -drop / 2, 0), rope); b.add(line);
    const pail = new THREE.Mesh(lathe([[0.01, -0.62], [0.36, -0.6], [0.4, -0.5], [0.5, 0.0], [0.53, 0.04], [0.47, 0.04], [0.37, -0.46], [0.01, -0.48]], 14), wood); pail.position.y = -drop - 0.1; b.add(pail);
    const orb = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), k.toon({ color: '#c9ffe4', shade: '#ffffff', deep: '#ffffff', ink: false })); orb.position.y = -drop - 0.12; b.add(orb);
    const og = glow(k, { color: '#9fffd6' }); og.position.y = -drop - 0.1; og.scale.setScalar(3.4); b.add(og);
    return { b, orb, og };
  });
  const set = (db, files) => {
    for (const s of seams) s.material.uniforms.uEmis.value.setRGB(0.2 * db, 1.0 * db, 0.66 * db); dg.userData.power.value = 0.5 * db;
    buckets.forEach(({ orb, og }, i) => { const v = Math.max(0, Math.min(1, files * 4 - i)); orb.material.uniforms.uEmis.value.setRGB(0.3 * v, 1.0 * v, 0.7 * v); orb.scale.setScalar(0.4 + 0.6 * v); og.userData.power.value = 0.6 * v; });
  };
  set(0.25, 0.25);
  g.userData = { set, sway(f) { buckets.forEach(({ b }, i) => { b.rotation.z = Math.sin(f * 0.07 + i * 1.9) * 0.07; b.rotation.x = Math.sin(f * 0.05 + i) * 0.05; }); } };
  return g;
}

/**
 * One whole stack under a raft: the raft itself on long piles, the mooring line, the cargo, the bell, the keystone,
 * and a bead of light that can run the line (the request going down, the flame coming up).
 * Origin at water level under the raft. userData: { raft, cargo, bell, key, pulse(y or null, power, x, z), line }
 */
export function stack(k, { seed = 1, north = -0.6, withCargo = true } = {}) {
  const g = new THREE.Group(), rf = raft(k, { depth: 2.4, seed }); g.add(rf);
  const line = new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.085, 1.3 - DEPTH.bed, 6).translate(0, (1.3 + DEPTH.bed) / 2, 0), k.toon({ color: C.rope, ...UNDER, seamY: 5, seamStrength: 0.35, ink: true })); g.add(line);
  let cg = null; if (withCargo) { cg = cargo(k); cg.position.set(0, DEPTH.cargo + 4, 0); g.add(cg); }
  const bl = bell(k); bl.position.set(0, DEPTH.bell, 0); g.add(bl);
  const data = dataStore(k); data.position.set(0, DEPTH.data, 0); g.add(data);
  const key = keystone(k, { north }); key.position.set(0, DEPTH.bed + 1.2, 0); g.add(key);
  const bead = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), k.toon({ color: '#eafff6', shade: '#ffffff', deep: '#ffffff', emissive: '#7dffc8', ink: false })), bg = glow(k, { color: '#9fffd6', rays: 4 });
  bead.add(bg); bg.scale.setScalar(5.5); g.add(bead); bead.visible = false;
  const pulse = (y, power = 1, x = 0, z = 0) => { bead.visible = y != null && power > 0.01; if (y != null) { bead.position.set(x, y, z); bg.userData.power.value = power; bead.scale.setScalar(0.6 + 0.4 * power); } };
  g.userData = { raft: rf, cargo: cg, bell: bl, key, data, pulse, line };
  return g;
}

/**
 * The water: its colour, the underside of the surface, the seabed, light shafts, weed, and what drifts in it.
 * Returns { scene, surface, bed, shafts: [] }.
 */
export function deepWorld(k, { bedSize = 520, shafts: ns = 7, motes = 150, seed = 1 } = {}) {
  const scene = new THREE.Scene(), r = k.rng(seed * 7 + 2);
  scene.add(k.sky({ top: C.deepTop, mid: C.deepSky, horizon: C.deepFog, sun: '#d8fff0', sunSize: 0.2, glow: 1.2, coverage: 0, cloudLow: 3, cloudHigh: 4 }));
  // the surface from below: a bright ceiling with a net of light moving on it
  const surface = new THREE.Mesh(new THREE.PlaneGeometry(1400, 1400).rotateX(Math.PI / 2), k.shader({ side: THREE.DoubleSide,
    frag: /* glsl */ `vec4 surface(){ vec2 p=vWorld.xz; float t=uTime2;
      float n=abs(vnoise(p*.11+vec2(t*.12,t*.05))-.5)+abs(vnoise(p*.19-vec2(t*.09,-t*.07)+9.)-.5);
      float net=smoothstep(.11,.03,n), swell=fbm2(p*.03+vec2(t*.05,0.));
      vec3 c=mix(vec3(.25,.72,.66),vec3(.45,.88,.78),smoothstep(.45,.55,swell)); c=mix(c,vec3(.92,1.,.95),net*.85);
      c*=uAmb; float d=length(vViewPos); c=mix(c,uFogColor,clamp(1.-exp(-d*uFog.x*.55),0.,.92));
      return vec4(c,0.); }` }));
  surface.position.y = -0.02; scene.add(surface);
  // the seabed: sand in low dunes, a net of light crawling over it
  const geo = new THREE.PlaneGeometry(bedSize, bedSize, 90, 90).rotateX(-Math.PI / 2), pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) { const x = pos.getX(i), z = pos.getZ(i), d = Math.hypot(x, z); pos.setY(i, (k.fbm(x * 0.03 + 5, z * 0.03, 1.7) - 0.5) * 7 * k.smooth(7, 30, d) + (k.fbm(x * 0.11, z * 0.11, 9) - 0.5) * 1.2 * k.smooth(6, 14, d)); }
  geo.computeVertexNormals();
  const bed = new THREE.Mesh(geo, k.toon({ color: '#9fc7a8', shade: '#8fd0c0', deep: '#5fa8a8', t1: 0.5, t2: 0.1, wobble: 0.5, wobbleScale: 0.12, mottle: 0.7, patinaA: '#7fb39a', patinaAmtA: 0.4, patinaScale: 0.07, ink: false,
    fragColor: `{ vec2 p=vWorld.xz; float n=abs(vnoise(p*.16+vec2(uTime2*.1,uTime2*.04))-.5)+abs(vnoise(p*.27-vec2(uTime2*.07,-uTime2*.06)+9.)-.5); c+=vec3(.16,.3,.24)*smoothstep(.1,.03,n); }` }));
  bed.position.y = DEPTH.bed; scene.add(bed);
  // rocks on the bed
  const rockMat = k.toon({ color: '#7f9a94', ...UNDER, mottle: 0.8, cracks: 0.7, top: '#4f8a66', topAmt: 0.9, topScale: 0.25, topDab: 5 });
  for (let i = 0; i < 26; i++) { const a = r() * 6.283, d = r.range(16, 150), s = r.range(1.5, 7) * (d > 60 ? 1.8 : 1), m = new THREE.Mesh(k.rockGeo({ seed: i + 3, rough: 0.7, squash: r.range(0.5, 0.9), detail: 3 }), rockMat); m.position.set(Math.cos(a) * d, DEPTH.bed + s * 0.15, Math.sin(a) * d); m.scale.setScalar(s); m.rotation.y = r() * 6; scene.add(m); }
  // weed standing up from the bed (the kit's kelp hangs: the group is turned over)
  const weeds = new THREE.Group(); weeds.rotation.z = Math.PI; scene.add(weeds);
  const anchors = []; for (let i = 0; i < 90; i++) { const a = r() * 6.283, d = i < 55 ? r.range(20, 120) : r.range(44, 130); anchors.push([-Math.cos(a) * d, -(DEPTH.bed - 0.4), Math.sin(a) * d]); }
  weeds.add(kelp(k, anchors.slice(0, 55), { per: 4, len: 7, width: 0.7, seed: 3, colors: ['#2f6a4a', '#3f8a5a', '#1f5a48', '#5fa66a'] }));
  weeds.add(kelp(k, anchors.slice(55), { per: 3, len: 17, width: 1.1, seed: 4, colors: ['#1f5a48', '#2f6a4a', '#3f7a52'] }));
  // light falling through the water
  const shafts = [];
  for (let i = 0; i < ns; i++) { const b = beam(k, { length: 70, spread: r.range(0.05, 0.11), color: '#a8ffe0' }); b.position.set(r.range(-70, 70), 0.5, r.range(-90, 20)); b.rotation.set(Math.PI / 2 + r.range(-0.12, 0.12), 0, r.range(-0.2, 0.05)); b.userData.power.value = r.range(0.35, 0.75) * (1 - 0.45 * LIGHT.night); scene.add(b); shafts.push(b); }
  // what drifts: pale flecks everywhere
  if (motes) scene.add(petals(k, { box: [[-60, DEPTH.bed, -80], [60, -1, 30]], count: motes, wind: [0.5, 0.12, 0.2], size: [0.07, 0.2], colors: ['#d8fff0', '#a8f0d8', '#fff6d8'], seed: 21, span: 40 }));
  return { scene, surface, bed, shafts };
}

/** A column of bubbles rising from `at` for the whole shot (stateless). */
export function bubbles(k, at, { count = 60, seed = 1, spread = 0.5, rise = [2.2, 4.2], size = [0.08, 0.26], span = 12 } = {}) {
  const r = k.rng(seed * 13 + 5), list = [];
  for (let i = 0; i < count; i++) list.push({ p: [at[0] + r.range(-spread, spread), at[1], at[2] + r.range(-spread, spread)], v: [r.range(-0.2, 0.2), r.range(...rise), r.range(-0.2, 0.2)], t: r.range(-4, span), life: r.range(4, 8), size: r.range(...size) });
  return particles(k, list, { gravity: -0.6, drag: 0.25, lit: '#f2fff8', shade: '#9fe6d2', sway: 0.25, grow: [0.8, 1.3], twos: false });
}
