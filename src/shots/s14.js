// s14 (132 frames): MCP hosting. Another raft, and on a jetty before it a rack of four painted signs: search, orders,
// refund, notify. The visitors here are not boats. Small lights come in on the wind, one after another; each goes to
// a sign, the sign lights mint while its tool is in use, and the light goes on its way downwind. An AI, using the
// tools this server gives it.
import * as THREE from 'three';
import { buildHarbor } from '../kit/harbor.js';
import { toolRack, wisp } from '../kit/props.js';
import { windStrokes, windPetals } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DAY, WIND, C } from '../kit/look.js';

// each call: the frame it arrives, and which tool it is for
const CALLS = [[26, 0], [46, 2], [62, 1], [80, 3], [96, 0], [108, 2]];
const HOLD = 13;

export default {
  build(k) {
    const bay = buildHarbor(k, { quay: false, detail: 0.8, rafts: [[0, 0, 0.1], [54, -72, -0.2], [-36, -92, 0.15], [98, -150, 0.1]] }), { scene } = bay;
    // the jetty: a few planks on piles in front of the raft, and the rack on it
    const wood = k.toon({ color: C.wood, shade: '#c3a2b8', deep: '#9a84ac', t1: 0.05, t2: -0.7, mottle: 0.7, streaks: 0.6 }), jetty = new THREE.Group();
    jetty.add(new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.36, 2.6).translate(0, 1.5, 0), wood));
    for (const [x, z] of [[-4.2, -1], [4.2, -1], [-4.2, 1], [4.2, 1]]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 5.4, 7).translate(0, -0.7, 0), wood); p.position.set(x, 0, z); jetty.add(p); }
    const rack = toolRack(k); rack.position.y = 1.68; jetty.add(rack); jetty.position.set(0.4, 0, 7.4); scene.add(jetty);
    const camera = new THREE.PerspectiveCamera(38, k.width / k.height, 0.3, 9000); scene.add(camera);
    const wisps = CALLS.map(() => { const w = wisp(k); scene.add(w); return w; });
    scene.add(windStrokes(k, { box: [[-50, 0.8, -40], [40, 12, 14]], count: 34, seed: 8 }), windPetals(k, { box: [[-40, 1, -20], [20, 10, 14]], count: 22, seed: 4 }));
    bay.rafts.forEach((r, i) => r.userData.set([1, 0.8, 0.6, 0.7][i]));
    scene.updateMatrixWorld(true);
    const at = [0, 1, 2, 3].map((i) => rack.userData.at(i));
    const type = overlay(k, camera);
    return { ...bay, camera, rack, wisps, at, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, level = [0, 0, 0, 0];
    CALLS.forEach(([f0, tool], j) => {
      const w = st.wisps[j], goal = st.at[tool], inn = k.ease.out(k.clamp((f - (f0 - 30)) / 30)), out = k.ease.in(k.clamp((f - f0 - HOLD) / 30));
      // in from upwind and above, a beat at the sign, away downwind and up
      const p = new THREE.Vector3(goal.x - WIND[0] * 30 * (1 - inn) + WIND[0] * 34 * out, goal.y + 7 * (1 - inn) * (1 - inn) + 6 * out * out + Math.sin(f * 0.5 + j) * 0.12, goal.z - WIND[1] * 30 * (1 - inn) + WIND[1] * 34 * out + 2.5 * Math.sin((1 - inn) * 2 + j));
      w.position.copy(p); w.userData.power.value = k.smooth(0, 0.3, inn) * (1 - k.smooth(0.6, 1, out)) * (0.85 + 0.15 * Math.sin(f * 1.3 + j));
      const use = k.smooth(f0 - 3, f0 + 2, f) * (1 - k.smooth(f0 + HOLD, f0 + HOLD + 26, f));
      level[tool] = Math.max(level[tool], use, f >= f0 ? 0.22 : 0);
    });
    st.rack.userData.signs.forEach((s, i) => s.set(level[i])); st.rack.userData.sway(f);
    st.rafts.forEach((r, i) => { r.userData.cloth.value = 0.78 + 0.14 * Math.sin(t * 1.3 + i); });
    st.foam([[0.4, 7.4, 5, 1.2]]); st.lights([]);
    st.light.userData.set(0.7, 2.5 + t * 0.5);
    const p = k.ease.inOut(f / 131);
    st.camera.position.set(2.2 - p * 1.4, 3.7 + Math.sin(t * 0.9) * 0.05, 23.5 - p * 2.2); st.camera.lookAt(0.6, 4.7, 6);
    st.type.caption('mcp', fadeIO(k, f, 10, 126));
    st.type.panel('mcp', { used: [0, 1, 2, 3].map((i) => (CALLS.some(([a, b]) => a <= f && b === i) ? '1' : '0')).join('') }, 1, f);
    return { ...DAY, focus: 17, focusRange: 12, blur: 3.2 };
  },
};
