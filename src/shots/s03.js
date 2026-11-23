// s03 (132 frames): the edge. Low on the water under the lighthouse: the headland fills the right of the frame, the
// tower stands over it, and its beam comes round. The lantern boat passes beneath, left to right; as the beam
// crosses it the boat looks up and its light answers. Admitted, it goes on in.
import * as THREE from 'three';
import { harborSky, harborSea, headland, lighthouse, hill, town, nightSky, seaLights } from '../kit/harbor.js';
import { registerFoam, mistBand, rock } from '../engine/kit/coast.js';
import { gulls } from '../engine/kit/birds.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DAY, WIND, C, NIGHT } from '../kit/look.js';

export const HEAD = [14, -60];   // the headland (x, z)
const START = [-16, -13], SPEED = 3.1;

export default {
  build(k) {
    const scene = new THREE.Scene();
    scene.add(harborSky(k, { coverage: 0.6, seed: 2.2 })); if (NIGHT) scene.add(nightSky(k));
    const { mesh: sea, mat: seaMat } = harborSea(k, { horizon: 380 }); scene.add(sea);
    const far = hill(k, { seed: 4, size: [200, 70, 150], at: [-260, -12, -420] }); scene.add(far);
    scene.add(town(k, far, { cx: -200, cz: -330, rx: 110, rz: 70, count: 40, face: 0.5, seed: 2, lit: 0.4 }));
    const hd = headland(k, { radius: 25, height: 12, seed: 9 }); hd.position.set(HEAD[0], 0, HEAD[1]); scene.add(hd);
    const light = lighthouse(k, { h: 25, beamLength: 300 }); light.position.set(HEAD[0] - 2, hd.userData.top - 0.4, HEAD[1] + 2); scene.add(light);
    // rocks at the foot of the headland, in the near water
    for (const [x, z, r, h, seed] of [[-14, -40, 4, 3, 3], [38, -34, 5, 4.5, 5], [-30, -66, 6, 4, 7]]) { const rk = rock(k, { radius: r, height: h, seed, tone: '#b9a48c', weed: false, tufts: 6 }); rk.position.set(x, 0, z); scene.add(rk); }
    for (const [x, y, z, w, h, a, seed] of [[-80, 9, -260, 900, 30, 0.5, 3]]) { const m = mistBand(k, { width: w, height: h, alpha: a, seed, color: C.haze, lie: 1, foot: 6 }); m.position.set(x, y, z); scene.add(m); }
    const camera = new THREE.PerspectiveCamera(42, k.width / k.height, 0.5, 9000); scene.add(camera);
    const boat = lanternBoat(k); boat.root.rotation.y = Math.atan2(WIND[0], WIND[1]) - 0.35; scene.add(boat.root);
    scene.add(windStrokes(k, { box: [[-60, 0.8, -50], [50, 16, 8]], count: 40, seed: 8 }), windPetals(k, { box: [[-50, 1, -40], [30, 14, 10]], count: 30, seed: 6 }));
    const birds = gulls(k, [
      { path: (t) => [-6 + Math.cos(t * 0.5) * 16, 46 + Math.sin(t * 0.8) * 2, -70 + Math.sin(t * 0.5) * 12], size: 3.2, phase: 0.2, rate: 2.4, glide: 0.5 },
      { path: (t) => [30 + Math.cos(t * 0.4 + 2) * 14, 40 + Math.sin(t * 0.7 + 1) * 1.6, -60 + Math.sin(t * 0.4 + 2) * 10], size: 2.8, phase: 0.6, rate: 2.7, glide: 0.5 },
    ]); scene.add(birds.mesh);
    const type = overlay(k, camera);
    return { scene, camera, seaMat, boat, light, birds, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, x = START[0] + WIND[0] * SPEED * t, z = START[1] + WIND[1] * SPEED * t;
    // the beam comes round once: it points at the lens side (and over the boat) at about f = 62
    const sweep = -1.9 + (f / 131) * 4.1, facing = Math.max(0, Math.cos(sweep - 0.15)), cross = Math.exp(-Math.pow((f - 62) / 11, 2));
    st.light.userData.set(0.85 + 0.5 * Math.pow(facing, 6), sweep);
    st.boat.root.position.set(x, 0, z);
    st.boat.update(f, { wind: windYaw(), gust: 0.9, look: [0.45 * k.smooth(30, 52, f) - 0.3 * k.smooth(84, 110, f), 0.75 * k.smooth(30, 52, f) * (1 - k.smooth(84, 110, f))], glow: 0.85 + 1.5 * cross, blink: f > 66 && f < 70 ? 1 : null });
    registerFoam(st.seaMat, [[x, z, 2.7, 1.7], [HEAD[0], HEAD[1], 26, 5], [-14, -40, 4.4, 1.6], [38, -34, 5.4, 1.8], [-30, -66, 6.4, 2]]); seaLights(st.seaMat, [[x, z, 1, 1]]);
    const w = st.seaMat.uniforms; w.uWake.value.set(x - WIND[0] * 1.5, z - WIND[1] * 1.5, WIND[0], WIND[1]); w.uWakeP.value.set(26, 0.2, 1.1, 0);
    const push = k.ease.inOut(f / 131);
    st.camera.position.set(-10 + push * 4, 2.3 + Math.sin(t * 0.9) * 0.07, 16 - push * 3); st.camera.lookAt(1 + push * 3, 13.5, -60);
    st.birds.update(f);
    st.type.caption('edgeA', fadeIO(k, f, 38, 126));   // once the boat has cleared the corner the words sit in
    return { ...DAY, fog: [DAY.fog[0] * 1.15, 0, 0.012, 0.9], focus: 60, focusRange: 1e6, blur: 0, bloom: DAY.bloom + 0.05 + 0.5 * cross };
  },
};
