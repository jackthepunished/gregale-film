// s09 (156 frames): the bay answers. From higher up: the whole anchorage, a dozen rafts out to the lighthouse. The raft
// beside the boat is awake now, its lantern mint. The wind crosses the water and, raft after raft as it reaches them,
// the lanterns that were dark come on and the awnings fill.
// The wind brings a fleet with it: a boat for each sleeping raft, and each raft wakes as its boat comes alongside.
// In the console panel the month's spending climbs toward the budget's mark as they come, and stops at it.
// (s09b is what happens when they leave.)
import * as THREE from 'three';
import { buildHarbor } from '../kit/harbor.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { gulls } from '../engine/kit/birds.js';
import { DAY, WIND } from '../kit/look.js';

// x, z, yaw, was it awake already (1) or parked (0)
export const RAFTS = [[-14, 18, 0.1, 0], [16, -8, -0.2, 1], [-36, -22, 0.2, 0], [44, 14, 0.15, 0], [8, -52, 0.1, 0], [58, -40, -0.1, 1], [-22, -78, 0.25, 0], [92, -18, 0.1, 0], [40, -96, -0.2, 0], [104, -84, 0.1, 1], [78, -140, 0.2, 0], [140, -130, -0.1, 0], [-70, -120, 0.1, 0]];
export const BOAT = [-4.5, 24];   // off the first raft's right-hand corner, clear of the caption
const FLEET = [2, 3, 4, 6, 7, 8, 10];   // the rafts a boat comes for, in the night film

export default {
  build(k) {
    const bay = buildHarbor(k, { quay: false, rafts: RAFTS.map(([x, z, yaw]) => [x, z, yaw]) }), { scene } = bay;
    const camera = new THREE.PerspectiveCamera(36, k.width / k.height, 0.5, 9000); scene.add(camera);
    const heading = Math.atan2(WIND[0], WIND[1]);
    const boat = lanternBoat(k, { spray: false }); boat.root.position.set(BOAT[0], 0, BOAT[1]); boat.root.rotation.y = heading - 0.75; scene.add(boat.root);
    const strokes = windStrokes(k, { box: [[-110, 1, -150], [150, 20, 40]], count: 90, seed: 7, length: [22, 56], thick: [0.07, 0.2], speed: 0.55 });
    scene.add(strokes, windPetals(k, { box: [[-70, 1, -60], [60, 22, 50]], count: 60, seed: 5, size: [0.2, 0.46] }));
    const birds = gulls(k, [
      { path: (t) => [-20 + t * 7, 30 + Math.sin(t * 0.8) * 2, -60 + t * 2], size: 4.4, phase: 0.2, rate: 2.4, glide: 0.4 },
      { path: (t) => [-44 + t * 7.4, 27 + Math.sin(t * 0.7 + 1) * 1.6, -72 + t * 2], size: 3.6, phase: 0.6, rate: 2.7 },
      { path: (t) => [50 + t * 5, 22 + Math.sin(t * 0.9 + 2) * 1.4, -150], size: 3, phase: 0.4, rate: 2.9 },
    ]); scene.add(birds.mesh);
    // when the wind's front reaches each raft: its distance downwind of the first, at the front's speed
    const along = RAFTS.map(([x, z]) => (x - RAFTS[0][0]) * WIND[0] + (z - RAFTS[0][1]) * WIND[1]), lo = Math.min(...along), hi = Math.max(...along);
    const when = along.map((a) => 14 + ((a - lo) / (hi - lo)) * 96);
    // the fleet: each boat rests off its raft's near corner and comes to it from upwind
    const fleet = FLEET.map((i, n) => {
      const b = lanternBoat(k, { spray: false }), rest = [RAFTS[i][0] - 6.4, RAFTS[i][1] + 7.6], from = [rest[0] - WIND[0] * (58 + n * 5) - WIND[1] * 6, rest[1] - WIND[1] * (58 + n * 5) + WIND[0] * 6];
      b.root.rotation.y = heading - 0.25; scene.add(b.root);
      return { boat: b, raft: i, rest, from };
    });
    const type = overlay(k, camera);
    return { ...bay, camera, boat, strokes, birds, when, fleet, type };
  },
  update(st, f, k) {
    const t = f / k.FPS;
    st.rafts.forEach((r, i) => {
      const on = k.smooth(st.when[i], st.when[i] + 14, f), was = RAFTS[i][3], first = i === 0;
      r.userData.set(first ? 1 : was ? 0.75 + 0.25 * on : on * (1 + 0.25 * Math.exp(-Math.pow((f - st.when[i] - 12) / 6, 2))));
      r.userData.cloth.value = (first || was ? 0.75 : 0.15 + 0.65 * on) + 0.12 * Math.sin(t * 1.5 + i * 1.7);
    });
    st.boat.update(f, { wind: windYaw(), gust: 0.9, look: [0.5, 0.35], glow: 1, way: 0, bob: 0.7 });
    // each of the fleet arrives as its raft's lantern comes on
    const lit = [[BOAT[0], BOAT[1], 1, 1]];
    for (const b of st.fleet) {
      const u = k.ease.out(k.clamp((f - (st.when[b.raft] - 64)) / 70)), x = k.lerp(b.from[0], b.rest[0], u), z = k.lerp(b.from[1], b.rest[1], u);
      b.boat.root.position.set(x, 0, z); b.boat.update(f + b.raft * 7, { wind: windYaw(), gust: 0.9, glow: 1, way: 1 - u, bob: 1 - 0.3 * u });
      if (lit.length < 4) lit.push([x, z, 0.9, 1]);
    }
    st.foam([[BOAT[0], BOAT[1], 2.5, 0.5], ...st.fleet.slice(0, 5).map((b) => [b.boat.root.position.x, b.boat.root.position.z, 2.5, 0.8])]);
    st.lights(lit);
    st.strokes.userData.power.value = 0.5 + 0.5 * k.smooth(0, 40, f);
    st.light.userData.set(0.9, 0.4 + t * 0.6);
    const p = k.ease.inOut(f / 155);
    st.camera.position.set(-30 + p * 7, 13 + p * 4.5, 62 + p * 6); st.camera.lookAt(34, -1, -70);
    st.birds.update(f);
    st.type.caption('busy', fadeIO(k, f, 30, 150));
    st.type.panel('budget', { spent: Math.round((0.3 + 0.56 * k.smooth(8, 118, f)) * 100) / 100 }, 1, f);
    return { ...DAY, fog: [DAY.fog[0] * 0.9, 0, 0.012, 0.9], focus: 80, focusRange: 1e6, blur: 0, bloom: DAY.bloom + 0.07 };
  },
};
