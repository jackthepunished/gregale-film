// s03b (120 frames, the night film): the one that is turned away. The lighthouse again, a moment later; our boat has
// gone on in. A second boat comes the same way: unlit, dead glass, two red eyes. The beam stops sweeping, comes down
// onto it and holds, and goes from mint to red. The dark boat checks, turns, and goes back out the way it came.
import * as THREE from 'three';
import base, { HEAD } from './s03.js';
import { registerFoam } from '../engine/kit/coast.js';
import { glow } from '../engine/kit/fx.js';
import { seaLights } from '../kit/harbor.js';
import { lanternBoat } from '../kit/lantern.js';
import { windYaw } from '../kit/wind.js';
import { fadeIO } from '../kit/type.js';
import { DAY, WIND } from '../kit/look.js';

const IN = [-33, -15], STOP = [-8.5, -9.5], OUT = [-40, -19];   // where it comes from, where the beam stops it, where it goes (x, z)
const CAUGHT = 46, TURN = [60, 86], LEAVE = 78;

export default {
  async build(k) {
    const st = await base.build(k);
    st.boat.root.visible = false;   // ours is through
    const bad = lanternBoat(k, { dark: true }); st.scene.add(bad.root);
    const beamCol = st.light.userData.beam.material.uniforms.uBeam.value, mint = beamCol.clone(), red = new THREE.Color('#ff7a52');
    const pool = glow(k, { color: '#ff6a48' }); pool.scale.setScalar(15); st.scene.add(pool);
    return { ...st, bad, beamCol, mint, red, pool };
  },
  update(st, f, k) {
    const t = f / k.FPS, ahead = Math.atan2(WIND[0], WIND[1]) - 0.3;
    // in, checked, round, and out again faster than it came
    const a = k.ease.out(k.clamp(f / CAUGHT)), b = k.ease.in(k.clamp((f - LEAVE) / (119 - LEAVE)));
    const x = k.lerp(k.lerp(IN[0], STOP[0], a), OUT[0], b), z = k.lerp(k.lerp(IN[1], STOP[1], a), OUT[1], b), turn = k.ease.inOut(k.clamp((f - TURN[0]) / (TURN[1] - TURN[0])));
    st.bad.root.position.set(x, 0, z); st.bad.root.rotation.y = ahead + turn * Math.PI;
    const hit = k.smooth(CAUGHT - 10, CAUGHT, f) * (1 - k.smooth(92, 108, f)), flash = Math.exp(-Math.pow((f - CAUGHT - 2) / 5, 2));
    st.bad.update(f, { wind: windYaw(), gust: 0.8, look: [0.3 * hit, 0.8 * hit], blink: f > CAUGHT && f < CAUGHT + 7 ? 1 : null, way: f < CAUGHT - 6 || f > LEAVE ? 1 : 0.15, bob: 1 + 0.6 * flash });
    // the beam: sweeping, then down onto the boat and held there, red; then back to its round
    const lamp = st.light.userData.lamp.getWorldPosition(new THREE.Vector3()), sweep = -1.4 + t * 0.9;
    const aim = new THREE.Vector3(lamp.x + Math.sin(sweep) * 120, lamp.y, lamp.z + Math.cos(sweep) * 120).lerp(new THREE.Vector3(x, 1.6, z), k.ease.inOut(hit));
    st.light.userData.set(0.9 + 0.5 * hit + 0.8 * flash); st.light.userData.beam.lookAt(aim);
    st.light.userData.beam.userData.power.value = 0.6 + 1.9 * hit + 1.2 * flash;
    st.pool.position.set(x, 2.2, z); st.pool.userData.power.value = k.smooth(CAUGHT - 3, CAUGHT + 6, f) * (1 - k.smooth(86, 102, f)) * (0.55 + 0.5 * flash);
    st.beamCol.copy(st.mint).lerp(st.red, k.smooth(CAUGHT - 2, CAUGHT + 10, f) * (1 - k.smooth(88, 104, f)));
    registerFoam(st.seaMat, [[x, z, 2.7, 1.5], [HEAD[0], HEAD[1], 26, 5], [-14, -40, 4.4, 1.6], [38, -34, 5.4, 1.8], [-30, -66, 6.4, 2]]);
    seaLights(st.seaMat, [[x, z, 0.3, 1]]);
    const w = st.seaMat.uniforms, moving = f < CAUGHT - 4 || f > LEAVE + 4, back = turn > 0.5 ? -1 : 1;
    w.uWake.value.set(x - WIND[0] * 1.5 * back, z - WIND[1] * 1.5 * back, WIND[0] * back, WIND[1] * back); w.uWakeP.value.set(moving ? 22 : 0, 0.2, 1.1, 0);
    // a ring where it was stopped (the third ring: the first two glow mint at night, and this is not a welcome)
    const ring = k.clamp((f - CAUGHT) / 30); w.uRings.value[2].set(STOP[0], STOP[1], 2 + ring * 9, f >= CAUGHT ? (1 - ring) * 0.9 : 0);
    st.camera.position.set(-6 - t * 0.25, 2.3 + Math.sin(t * 0.9) * 0.07, 13 + t * 0.3); st.camera.lookAt(3.5, 13.2, -60);
    st.birds.update(f);
    st.type.caption('edgeB', fadeIO(k, f, 8, 114));
    return { ...DAY, fog: [DAY.fog[0] * 1.15, 0, 0.012, 0.9], focus: 60, focusRange: 1e6, blur: 0, bloom: DAY.bloom + 0.05 + 0.5 * flash };
  },
};
