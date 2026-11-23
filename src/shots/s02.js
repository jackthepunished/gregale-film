// s02 (144 frames): the lantern boat. The reference picture: the boat near, left of centre, three-quarter on, its face
// to the lens and its pennant flying downwind; the old town on its hill behind, the bridge with the sun over it, the
// rafts moored to the right and the lighthouse beyond them. The wind crosses the frame from the left and the boat
// goes with it. A slow track alongside.
import * as THREE from 'three';
import { buildHarbor } from '../kit/harbor.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay } from '../kit/type.js';
import { gulls } from '../engine/kit/birds.js';
import { DAY, WIND } from '../kit/look.js';

const START = [-6.2, 48.5], SPEED = 1.5;   // the boat's place at f = 0 (x, z) and its speed downwind, units a second

export default {
  build(k) {
    const bay = buildHarbor(k), { scene } = bay;
    const camera = new THREE.PerspectiveCamera(36, k.width / k.height, 0.5, 9000); scene.add(camera);
    const boat = lanternBoat(k); boat.root.rotation.y = Math.atan2(WIND[0], WIND[1]) - 0.5; scene.add(boat.root);
    scene.add(windStrokes(k, { box: [[-70, 0.8, -40], [60, 11, 46]], count: 46, seed: 2 }));
    scene.add(windStrokes(k, { box: [[-20, 0.6, 38], [16, 6, 58]], count: 9, seed: 5, length: [9, 18], thick: [0.03, 0.07] }));
    scene.add(windPetals(k, { box: [[-60, 1, 10], [20, 12, 60]], count: 40 }));
    const birds = gulls(k, [
      { path: (t) => [60 + t * 5, 34 + Math.sin(t * 0.8) * 2, -120 + t * 3], size: 5.5, phase: 0.2, rate: 2.4, glide: 0.4 },
      { path: (t) => [-10 + t * 4, 30 + Math.sin(t * 0.7 + 1) * 1.6, -150 + t * 2], size: 4, phase: 0.6, rate: 2.7 },
      { path: (t) => [110 + t * 4.4, 24 + Math.sin(t * 0.9 + 2) * 1.4, -170], size: 3.6, phase: 0.4, rate: 2.9 },
      { path: (t) => [78 + t * 3.6, 12 + Math.sin(t * 1.1) * 1, -110], size: 2.6, phase: 0.8, rate: 3.1 },
    ]); scene.add(birds.mesh);
    bay.rafts.forEach((r, i) => r.userData.set([0.85, 0.55, 0.5][i]));
    const type = overlay(k, camera);
    return { ...bay, camera, boat, birds, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, x = START[0] + WIND[0] * SPEED * t, z = START[1] + WIND[1] * SPEED * t;
    st.boat.root.position.set(x, 0, z);
    st.boat.update(f, { wind: windYaw(), gust: 0.9, look: [0.35 - 0.25 * k.smooth(60, 100, f), 0.1], glow: 0.9 });
    st.foam([[x, z, 2.7, 1.7]]); st.lights([[x, z, 0.45, 1]]);
    const w = st.seaMat.uniforms; w.uWake.value.set(x - WIND[0] * 1.5, z - WIND[1] * 1.5, WIND[0], WIND[1]); w.uWakeP.value.set(26, 0.2, 1.1, 0);
    st.rafts.forEach((r, i) => { r.userData.cloth.value = 0.75 + 0.2 * Math.sin(t * 1.3 + i); });
    st.light.userData.set(0.8, 2.2 + t * 0.5);
    // the camera goes with the boat at two thirds of its pace, so it gains on the frame
    const cx = 0.5 + WIND[0] * SPEED * t * 0.66, cz = 67 + WIND[1] * SPEED * t * 0.66;
    st.camera.position.set(cx, 4.3 + Math.sin(t * 0.9) * 0.08, cz); st.camera.lookAt(cx - 0.5, -4.4, cz - 100);
    st.birds.update(f);
    st.type.clear();
    return { ...DAY, focus: 20, focusRange: 60, blur: 2.2 };
  },
};
