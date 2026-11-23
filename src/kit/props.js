// Things the feature beats need, on top of the harbour's rafts and lanterns.
//   walk         a plank walk joining two rafts: several services, one app
//   releaseMast  a mast with a string of lanterns, one a release: the top one is live. A new one can be hoisted, and
//                run back down again (a rollback)
//   tether       a line between two points (a preview raft made fast to its app)
//   toolRack     a rack of four hanging signs, each a tool an AI visitor can use (an MCP server's tools)
//   wisp         that visitor: a small light on the wind
import * as THREE from 'three';
import { glow } from '../engine/kit/fx.js';
import { lantern } from './harbor.js';
import { C } from './look.js';

const WOOD = { shade: '#c3a2b8', deep: '#9a84ac', t1: 0.05, t2: -0.7 };
const UP = new THREE.Vector3(0, 1, 0);

/** A plank walk between two rafts, deck to deck, with a rope rail. a, b: the rafts' centres [x, z]; inset: how far in from each centre the deck ends. */
export function walk(k, a, b, { inset = 5.4 } = {}) {
  const dx = b[0] - a[0], dz = b[1] - a[1], len = Math.max(1, Math.hypot(dx, dz) - inset * 2), g = new THREE.Group();
  const wood = k.toon({ color: C.wood, ...WOOD, mottle: 0.7, streaks: 0.6 }), rope = k.toon({ color: C.rope, shade: '#c9b0c0', deep: '#a894b4', ink: false });
  g.add(new THREE.Mesh(new THREE.BoxGeometry(len + 1.2, 0.18, 1.5), wood));
  for (const s of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, len + 0.6, 5).rotateZ(Math.PI / 2), rope); rail.position.set(0, 0.95, s * 0.68); g.add(rail);
    for (const e of [-1, 1]) { const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.08, 1.05, 5).translate(0, 0.52, 0), wood); post.position.set(e * (len / 2 + 0.3), 0, s * 0.68); g.add(post); }
  }
  g.position.set((a[0] + b[0]) / 2, 1.72, (a[1] + b[1]) / 2); g.rotation.y = Math.atan2(-dz, dx);
  return g;
}

/**
 * The release mast. Origin at its foot (stand it on a deck). Four lanterns ride it: [0] is the new release, [1] the
 * one that is live before it, [2] and [3] older ones below.
 *   set(s, bad, f)   s: 0 = the old release is at the top and live; 1 = the new one has been hoisted to the top and
 *                    the others pushed down a place. bad: 0..1, the new one burns red and gutters. f: frame, for the flicker.
 */
export function releaseMast(k, { h = 12.6, gap = 2.7 } = {}) {
  const g = new THREE.Group(), wood = k.toon({ color: C.woodDark, ...WOOD, mottle: 0.6, streaks: 0.7 });
  g.add(new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.19, h, 7).translate(0, h / 2, 0), wood));
  const yard = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.5, 5).rotateZ(Math.PI / 2), wood); yard.position.set(0.5, h - 0.25, 0); g.add(yard);
  const line = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, h - 0.6, 4).translate(0, (h - 0.6) / 2 + 0.3, 0), k.toon({ color: C.rope, shade: '#c9b0c0', deep: '#a894b4', ink: false })); line.position.x = 0.95; g.add(line);
  const L = [0, 1, 2, 3].map(() => { const l = lantern(k, { size: 1.25, glowSize: 7 }); l.position.x = 0.95; g.add(l); return l; });
  const top = h - 0.5, mix = (a, b, t) => a + (b - a) * t, ease = (t) => t * t * (3 - 2 * t);
  const set = (s, bad = 0, f = 0) => {
    const e = ease(Math.max(0, Math.min(1, s))), gutter = 1 - bad * (0.3 + 0.3 * Math.sin(f * 1.9) * Math.sin(f * 0.83));
    L[0].position.y = mix(1.9, top, e); L[0].visible = s > 0.01; L[0].userData.set(mix(0.25, 1, e) * gutter * (s > 0.01 ? 1 : 0), bad);
    L[1].position.y = top - e * gap; L[1].userData.set(mix(1, 0.3, e));
    L[2].position.y = top - (1 + e) * gap; L[2].userData.set(mix(0.3, 0.2, e));
    L[3].position.y = top - (2 + e) * gap; L[3].userData.set(0.2 * (1 - e));
  };
  set(0);
  g.userData = { set, lanterns: L, top };
  return g;
}

/** A line between two points. set(a, b) with two Vector3s. */
export function tether(k) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 1, 5).translate(0, 0.5, 0), k.toon({ color: C.rope, shade: '#c9b0c0', deep: '#a894b4', ink: false }));
  m.frustumCulled = false;
  m.userData.set = (a, b) => { const d = b.clone().sub(a), len = Math.max(0.001, d.length()); m.position.copy(a); m.scale.set(1, len, 1); m.quaternion.setFromUnitVectors(UP, d.multiplyScalar(1 / len)); };
  return m;
}

// The four tools, drawn as a sign-painter would: search, orders, refund, notify.
function glyph(i) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 256; const x = cv.getContext('2d');
  x.strokeStyle = '#fff'; x.fillStyle = '#fff'; x.lineWidth = 20; x.lineCap = 'round'; x.lineJoin = 'round';
  if (i === 0) { x.beginPath(); x.arc(112, 110, 56, 0, 6.283); x.stroke(); x.beginPath(); x.moveTo(154, 154); x.lineTo(206, 206); x.stroke(); }
  else if (i === 1) { x.strokeRect(58, 84, 140, 112); x.beginPath(); x.moveTo(58, 122); x.lineTo(198, 122); x.moveTo(128, 84); x.lineTo(128, 122); x.stroke(); }
  else if (i === 2) { x.beginPath(); x.arc(128, 132, 62, -0.3, 4.3); x.stroke(); x.beginPath(); x.moveTo(170, 46); x.lineTo(196, 100); x.lineTo(138, 104); x.closePath(); x.fill(); }
  else { x.beginPath(); x.moveTo(72, 176); x.quadraticCurveTo(78, 150, 80, 118); x.bezierCurveTo(80, 52, 176, 52, 176, 118); x.quadraticCurveTo(178, 150, 184, 176); x.closePath(); x.stroke(); x.beginPath(); x.arc(128, 204, 13, 0, 6.283); x.fill(); x.beginPath(); x.moveTo(128, 54); x.lineTo(128, 40); x.stroke(); }
  const t = new THREE.CanvasTexture(cv); t.generateMipmaps = false; t.minFilter = THREE.LinearFilter;
  return t;
}
/**
 * The tool rack: two posts, a beam, four painted signs hanging from it. Origin at the middle of its foot; the signs
 * face +Z. userData.signs[i].set(v): 0 dull paint .. 1 the tool is in use and its sign lit mint. userData.at(i): the
 * world position just in front of sign i (where a visitor goes to).
 */
export function toolRack(k, { width = 7.4, h = 4.6 } = {}) {
  const g = new THREE.Group(), wood = k.toon({ color: C.woodDark, ...WOOD, mottle: 0.6, streaks: 0.7 });
  for (const s of [-1, 1]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.17, h, 6).translate(0, h / 2, 0), wood); p.position.x = s * width / 2; g.add(p); }
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, width + 0.8, 6).rotateZ(Math.PI / 2), wood); beam.position.y = h - 0.15; g.add(beam);
  const signs = [0, 1, 2, 3].map((i) => {
    const on = { value: 0 }, x = (i - 1.5) * (width / 4.3), hang = new THREE.Group(); hang.position.set(x, h - 0.2, 0); g.add(hang);
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.42, 1.62, 0.12), k.toon({ color: '#b08a5c', ...WOOD, mottle: 0.6, streaks: 0.4, seamY: 1.4, seamStrength: 0.3, uniforms: { uGlyph: { value: glyph(i) }, uOn: on }, fragHead: 'uniform sampler2D uGlyph; uniform float uOn;',
      // the painted tool: dark paint, and when it is in use the same shape in light (as bright whatever the ambient is)
      fragColor: `{ float gy=texture(uGlyph,vUv).a*step(.5,vNo.z); c=mix(c,vec3(.15,.2,.19),gy*.9); c=mix(c,vec3(.35,2.3,1.45)/max(uAmb,vec3(.08)),gy*uOn); }` }));
    board.position.y = -1.25; hang.add(board);
    for (const s of [-1, 1]) { const r = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 4).translate(0, -0.25, 0), wood); r.position.x = s * 0.5; hang.add(r); }
    const gl = glow(k, { color: '#7dffc8' }); gl.position.set(0, -1.25, 0.3); gl.scale.setScalar(3.2); hang.add(gl);
    const set = (v) => { on.value = v; gl.userData.power.value = v * 0.14; };
    set(0);
    return { hang, board, set };
  });
  const at = (i) => signs[i].board.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0, 0, 1.1).applyQuaternion(g.getWorldQuaternion(new THREE.Quaternion())));
  g.userData = { signs, at, sway(f) { signs.forEach((s, i) => { s.hang.rotation.z = Math.sin(f * 0.11 + i * 1.7) * 0.06; s.hang.rotation.x = Math.sin(f * 0.09 + i) * 0.05; }); } };
  return g;
}

/** An AI visitor: a small light carried on the wind. Place it by .position; userData.power fades it. */
export function wisp(k, { size = 1.5, color = '#eafff6' } = {}) {
  const g = new THREE.Group(), core = glow(k, { color, rays: 4 }), halo = glow(k, { color: '#7dffc8' });
  core.scale.setScalar(size); halo.scale.setScalar(size * 2.1); g.add(halo, core);
  g.userData.power = { set value(v) { core.userData.power.value = v * 0.8; halo.userData.power.value = v * 0.3; } };
  return g;
}
