// s01 (96 frames): open sea, and the wind arrives. Calm painted water under the evening sky, a headland with a
// lighthouse far off to the right. Strokes of wind come in from the left and cross the frame; far out, a small
// lantern boat is running before them.
import * as THREE from 'three';
import { harborSky, harborSea, headland, lighthouse, hill, nightSky, seaLights } from '../kit/harbor.js';
import { registerFoam, mistBand } from '../engine/kit/coast.js';
import { gulls } from '../engine/kit/birds.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DAY, WIND, C, NIGHT } from '../kit/look.js';

const START = [-24, -26], SPEED = 5.2;

export default {
  build(k) {
    const scene = new THREE.Scene();
    scene.add(harborSky(k, { coverage: 0.7 })); if (NIGHT) scene.add(nightSky(k));
    const { mesh: sea, mat: seaMat } = harborSea(k, { horizon: 520 }); scene.add(sea);
    const far = hill(k, { seed: 7, size: [420, 70, 160], at: [330, -16, -900], top: '#86a565' }); scene.add(far);
    const hd = headland(k, { radius: 46, height: 17, dress: 0.6 }); hd.position.set(170, 0, -430); scene.add(hd);
    const light = lighthouse(k, { h: 30 }); light.position.set(166, hd.userData.top - 0.5, -428); scene.add(light);
    for (const [x, y, z, w, h, a, seed] of [[0, 9, -330, 1500, 34, 0.5, 3], [100, 16, -700, 2600, 70, 0.6, 5]]) { const m = mistBand(k, { width: w, height: h, alpha: a, seed, color: C.haze, lie: 1, foot: 7 }); m.position.set(x, y, z); scene.add(m); }
    const camera = new THREE.PerspectiveCamera(34, k.width / k.height, 0.5, 9000); scene.add(camera);
    const boat = lanternBoat(k); boat.root.rotation.y = Math.atan2(WIND[0], WIND[1]); scene.add(boat.root);
    const near = windStrokes(k, { box: [[-90, 0.8, -70], [80, 12, 26]], count: 60, seed: 3, speed: 0.6 });
    const high = windStrokes(k, { box: [[-140, 14, -260], [160, 46, -60]], count: 30, seed: 6, length: [50, 110], thick: [0.5, 1.1], speed: 0.4 });
    scene.add(near, high, windPetals(k, { box: [[-70, 1, -40], [40, 14, 30]], count: 36, seed: 4 }));
    const birds = gulls(k, [
      { path: (t) => [-60 + t * 9, 26 + Math.sin(t * 0.8) * 2, -150 + t * 3], size: 5, phase: 0.2, rate: 2.4, glide: 0.4 },
      { path: (t) => [-84 + t * 9.4, 22 + Math.sin(t * 0.7 + 1) * 1.6, -160 + t * 3], size: 4.2, phase: 0.6, rate: 2.7 },
    ]); scene.add(birds.mesh);
    const type = overlay(k, camera);
    return { scene, camera, seaMat, boat, light, near, high, birds, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, x = START[0] + WIND[0] * SPEED * t, z = START[1] + WIND[1] * SPEED * t;
    st.boat.root.position.set(x, 0, z); st.boat.update(f, { wind: windYaw(), gust: 1, glow: 1 });
    registerFoam(st.seaMat, [[x, z, 2.7, 1.7], [170, -430, 47, 7]]); seaLights(st.seaMat, [[x, z, 1, 1]]);
    const w = st.seaMat.uniforms; w.uWake.value.set(x - WIND[0] * 1.5, z - WIND[1] * 1.5, WIND[0], WIND[1]); w.uWakeP.value.set(34, 0.22, 1.1, 0);
    // the wind arrives: nothing for the first beats, then the strokes come up
    const arrive = k.smooth(8, 56, f); st.near.userData.power.value = arrive; st.high.userData.power.value = arrive * 0.8;
    st.light.userData.set(0.9, 1.2 + t * 0.55);
    const push = k.ease.inOut(f / 95);
    st.camera.position.set(-4 + push * 3, 3.4 + Math.sin(t * 0.8) * 0.08, 46 - push * 5); st.camera.lookAt(18, 5.2, -100);
    st.birds.update(f);
    st.type.caption('wind', fadeIO(k, f, 22, 92));
    return { ...DAY, fog: [DAY.fog[0] * 0.8, 0, 0.012, 0.9], focus: 90, focusRange: 1e6, blur: 0, fade: k.smooth(0, 16, f) };
  },
};
