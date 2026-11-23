// s04 (144 frames): every part of the app starts together. Close on three rafts joined by plank walks: one app, its
// three services (api, web, worker). Their lanterns are dark and their awnings slack. The boat comes alongside with
// the wind behind it; a spark leaves the boat for the nearest lantern, and all three lanterns come on in the same
// instant. Then the spark drops down the mooring into the water (s05 follows it).
import * as THREE from 'three';
import { buildHarbor } from '../kit/harbor.js';
import { walk } from '../kit/props.js';
import { glow } from '../engine/kit/fx.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DAY, WIND } from '../kit/look.js';

const A = [-23, 7], B = [-9, 4.4];   // the boat: from A, to rest at B (x, z), off the raft's end and clear of the caption
const PARTS = [[0, 0, 0.1], [16.4, -2.4, -0.06], [6.8, -14.2, 0.14]];   // the app's three rafts (x, z, yaw)
const ON = 104;   // the frame all three lanterns come on

export default {
  build(k) {
    const bay = buildHarbor(k, { quay: false, detail: 0.8, rafts: [...PARTS, [54, -72, -0.2], [-36, -92, 0.15], [98, -150, 0.1]] }), { scene } = bay;
    scene.add(walk(k, PARTS[0], PARTS[1]), walk(k, PARTS[0], PARTS[2], { inset: 4.4 }));
    const camera = new THREE.PerspectiveCamera(38, k.width / k.height, 0.3, 9000); scene.add(camera);
    const boat = lanternBoat(k); boat.root.rotation.y = Math.atan2(WIND[0], WIND[1]) - 0.75; scene.add(boat.root);
    const strokes = windStrokes(k, { box: [[-50, 0.8, -40], [40, 12, 14]], count: 34, seed: 4 });
    scene.add(strokes, windPetals(k, { box: [[-40, 1, -20], [20, 10, 14]], count: 26, seed: 9 }));
    // the spark: the request itself, for the moment it is in the air
    const spark = glow(k, { color: '#9fffd6', rays: 4 }); spark.scale.setScalar(3.4); scene.add(spark);
    bay.rafts[3].userData.set(0.8); bay.rafts[4].userData.set(0.6); bay.rafts[5].userData.set(0.7);
    const type = overlay(k, camera);
    return { ...bay, camera, boat, strokes, spark, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, u = k.ease.out(k.clamp(f / 70)), x = k.lerp(A[0], B[0], u), z = k.lerp(A[1], B[1], u), way = 1 - k.smooth(40, 72, f);
    const lan = st.rafts[0].userData.lantern;
    st.boat.root.position.set(x, 0, z);
    // it looks up at the dark lantern as it arrives
    const up = k.smooth(48, 70, f);
    st.boat.update(f, { wind: windYaw(), gust: 0.55 + 0.4 * k.smooth(20, 60, f), look: [0.55 * up, 0.6 * up], glow: 0.9 + 0.5 * Math.exp(-Math.pow((f - 80) / 6, 2)), way, bob: 1 - 0.3 * u });
    st.strokes.userData.power.value = 0.25 + 0.75 * k.smooth(16, 60, f);
    // all three at once: one beat, a little overshoot, and their awnings fill together
    const on = f < ON ? 0 : k.ease.outBack(k.clamp((f - ON) / 16)), fill = k.smooth(ON - 6, ON + 26, f);
    st.rafts.forEach((r, i) => { if (i < 3) { r.userData.set(on); r.userData.cloth.value = 0.12 + 0.7 * fill + 0.06 * Math.sin(t * 5 + i); } else r.userData.cloth.value = 0.8 + 0.15 * Math.sin(t * 1.3 + i); });
    // the spark: boat's face -> lantern (78..98), a beat at the lantern, then straight down to the water (108..120)
    st.scene.updateMatrixWorld(true);
    const from = st.boat.face.getWorldPosition(new THREE.Vector3()), to = lan.getWorldPosition(new THREE.Vector3()); to.y -= 1.1;
    const a = k.clamp((f - 78) / 20), d = k.clamp((f - 108) / 12), p = from.clone().lerp(to, k.ease.inOut(a)); p.y += Math.sin(a * Math.PI) * 2.2;
    if (d > 0) { p.copy(to); p.y = k.lerp(to.y, 0, k.ease.in(d)); }
    st.spark.position.copy(p); st.spark.userData.power.value = f < 78 || f > 120 ? 0 : 1.1 + 0.3 * Math.sin(f * 1.7);
    // a ring on the water where the spark went in
    const ring = k.clamp((f - 120) / 24), uR = st.seaMat.uniforms.uRings.value; uR[0].set(to.x, to.z, 0.4 + ring * 7, f >= 120 ? (1 - ring) * 0.9 : 0);
    st.foam([[x, z, 2.5, 1.0 * (0.4 + 0.6 * way)]]); st.lights([[x, z, 0.5, 1]]);
    const w = st.seaMat.uniforms; w.uWake.value.set(x - WIND[0] * 1.5, z - WIND[1] * 1.5, WIND[0], WIND[1]); w.uWakeP.value.set(22 * way, 0.2, 1.1, 0);
    st.light.userData.set(0.7, 1 + t * 0.5);
    const push = k.ease.inOut(f / 143);
    st.camera.position.set(2.6 - push * 0.8, 3.4 + Math.sin(t * 0.9) * 0.06, 31 - push * 3); st.camera.lookAt(3.6 + push * 0.4, 4.3 - push * 0.3, 0);
    st.type.caption('services', fadeIO(k, f, 14, 138));
    st.type.panel('services', { on: f >= ON }, k.smooth(22, 40, f), f);
    return { ...DAY, focus: 26, focusRange: 22, blur: 3 };
  },
};
