// s12 (108 frames): previews. The app's raft, and three small copies of it that put out from its side one after
// another, each on a line made fast to it, each with its own small lantern: a change, tried on a copy of the app
// before it is real. (s13 uses the same picture for shadow traffic.)
import * as THREE from 'three';
import { buildHarbor, raft } from '../kit/harbor.js';
import { tether } from '../kit/props.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DAY, WIND } from '../kit/look.js';

export const B = [-7.4, 8.4];
// each branch raft: where it starts (hard against the app's raft), where it rides (x, z), its yaw
export const BRANCH = [{ from: [5.8, 2.2], to: [15.5, 8.6], yaw: -0.2 }, { from: [6.2, -1.2], to: [19.5, -3.2], yaw: 0.12 }, { from: [4.6, -3.4], to: [12.2, -12.8], yaw: 0.3 }];
export const SCALE = 0.52, OUT = (i) => 8 + i * 24;   // a branch's size, and the frame it puts out

export default {
  build(k) {
    const bay = buildHarbor(k, { quay: false, detail: 0.8, rafts: [[0, 0, 0.1], [54, -72, -0.2], [-36, -92, 0.15], [98, -150, 0.1]] }), { scene } = bay;
    const camera = new THREE.PerspectiveCamera(38, k.width / k.height, 0.3, 9000); scene.add(camera);
    const boat = lanternBoat(k, { spray: false }); boat.root.position.set(B[0], 0, B[1]); boat.root.rotation.y = Math.atan2(WIND[0], WIND[1]) - 0.75; scene.add(boat.root);
    boat.root.visible = false;   // this beat and the next are about the rafts; the boat would sit under the caption
    const branches = BRANCH.map((b, i) => { const r = raft(k, { seed: 7 + i, crates: i !== 1 }); r.scale.setScalar(SCALE); r.rotation.y = b.yaw; scene.add(r); const line = tether(k); scene.add(line); return { raft: r, line, ...b }; });
    scene.add(windStrokes(k, { box: [[-50, 0.8, -40], [40, 12, 14]], count: 34, seed: 6 }), windPetals(k, { box: [[-40, 1, -20], [20, 10, 14]], count: 26, seed: 2 }));
    bay.rafts.forEach((r, i) => r.userData.set([1, 0.8, 0.6, 0.7][i]));
    const type = overlay(k, camera);
    return { ...bay, camera, boat, branches, type };
  },
  update(st, f, k) {
    const t = f / k.FPS; let n = 0;
    const foam = [], lit = [];
    st.branches.forEach((b, i) => {
      const u = k.ease.out(k.clamp((f - OUT(i)) / 40)), x = k.lerp(b.from[0], b.to[0], u), z = k.lerp(b.from[1], b.to[1], u), on = k.smooth(OUT(i) + 30, OUT(i) + 42, f);
      b.raft.visible = b.line.visible = f >= OUT(i); b.raft.position.set(x, Math.sin(t * 1.6 + i * 2) * 0.05, z); b.raft.scale.setScalar(SCALE * (0.55 + 0.45 * u));
      b.raft.userData.set(on * (1 + 0.3 * Math.exp(-Math.pow((f - OUT(i) - 40) / 5, 2)))); b.raft.userData.cloth.value = 0.2 + 0.6 * u + 0.08 * Math.sin(t * 4 + i);
      b.line.userData.set(new THREE.Vector3(5.2, 1.5, k.lerp(b.from[1], b.to[1], 0.12)), new THREE.Vector3(x - 2.6 * (0.55 + 0.45 * u), 0.95, z));
      if (on > 0.5) n++;
      if (b.raft.visible) { foam.push([x, z, 3.3, 0.9]); if (on > 0.05) lit.push([x + 3 * SCALE * 2, z, on * 0.7, 0]); }
    });
    st.rafts.forEach((r, i) => { r.userData.cloth.value = 0.78 + 0.14 * Math.sin(t * 1.3 + i); });
    st.boat.update(f, { wind: windYaw(), gust: 0.9, look: [0.75, 0.3], glow: 1, way: 0, bob: 0.7 });
    st.foam(foam); st.lights(lit);
    st.light.userData.set(0.7, 1 + t * 0.5);
    const p = k.ease.inOut(f / 107);
    st.camera.position.set(5.5 + p * 1.2, 5.4 + Math.sin(t * 0.9) * 0.06, 34 - p * 2); st.camera.lookAt(7, 2.6, -2);
    st.type.caption('previews', fadeIO(k, f, 8, 104));
    st.type.panel('previews', { n }, 1, f);
    return { ...DAY, focus: 32, focusRange: 26, blur: 2.4 };
  },
};
