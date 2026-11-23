// s05b (108 frames): the data. Further down the same mooring: a yard with four buckets hung from it (file storage),
// and under it three brass drums stacked on the line (the database). The bead comes past: the buckets light one
// after another, then the seams between the drums. Above, the cargo; below, the bell.
import * as THREE from 'three';
import { deepWorld, stack, bubbles, DEPTH } from '../kit/deep.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DEEP } from '../kit/look.js';

export default {
  build(k) {
    const world = deepWorld(k, { seed: 4 }), { scene } = world;
    const main = stack(k, { seed: 1 }); scene.add(main);
    const others = [[-30, -40, 2], [28, -58, 3], [-64, -100, 4]].map(([x, z, seed], i) => { const s = stack(k, { seed, withCargo: i < 2 }); s.position.set(x, 0, z); s.rotation.y = seed; s.userData.bell.userData.set(1); s.userData.data.userData.set(0.8, 0.8); scene.add(s); return s; });
    scene.add(bubbles(k, [0, DEPTH.data + 0.6, 0], { count: 22, seed: 5, spread: 1.2, rise: [0.8, 1.8], size: [0.05, 0.14] }));
    const camera = new THREE.PerspectiveCamera(40, k.width / k.height, 0.3, 4000); scene.add(camera);
    const type = overlay(k, camera);
    return { ...world, camera, main, others, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, u = st.main.userData, D = DEPTH.data;
    // the bead: past the yard, down through the drums, and on toward the bell
    const y = k.keys([[0, D + 4.6], [30, D + 2.4, 'out'], [58, D + 0.5, 'linear'], [86, D - 2.6, 'linear'], [107, D - 6.5, 'in']], f);
    u.pulse(y, 1 + 0.15 * Math.sin(f * 1.3));
    const files = k.clamp((f - 12) / 34), db = k.smooth(D + 0.9, D - 1.8, y);
    u.data.userData.set(0.2 + 0.8 * db + 0.25 * Math.exp(-Math.pow((y - (D - 1)) / 1.3, 2)), files); u.data.userData.sway(f);
    u.bell.userData.set(1, f); u.key.userData.set(0, f);
    st.others.forEach((s, i) => { s.userData.bell.userData.set(1, f + i * 13); s.userData.data.userData.sway(f + i * 40); });
    const a = 0.5 + (f / 107) * 0.28, R = 14.5;
    st.camera.position.set(Math.sin(a) * R, D + 1.5 - (f / 107) * 1.2, Math.cos(a) * R); st.camera.lookAt(0, D + 0.6 - (f / 107) * 0.9, 0);
    st.type.caption('data', fadeIO(k, f, 6, 104));
    st.type.panel('data', { db: db > 0.5, files: files > 0.6 }, 1, f);
    void t;
    return { ...DEEP, focus: 14.5, focusRange: 12, blur: 3 };
  },
};
