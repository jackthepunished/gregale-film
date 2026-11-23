// s10 (240 frames; 264 in the night film): out. The first picture's frame again, later, the boat going on across the
// bay with the wind. The picture softens and the product comes up over it: a terminal, one command typed, and its
// answer, which is the app's address. Then the logo and the name. Fade.
// The day film has the rafts all lit. The night film ends on first light: the sky, the sea, the haze and the ambient
// go from the night's colours to the dawn's across the shot, the stars go out, the lamps pale, and the sleeping
// rafts' lanterns come on again one by one as the day's first visitors arrive.
import * as THREE from 'three';
import { buildHarbor } from '../kit/harbor.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay } from '../kit/type.js';
import { gulls } from '../engine/kit/birds.js';
import { DAY, DAWN, DAWN_C, C, AMB, WIND, NIGHT, LIGHT } from '../kit/look.js';

const LEN = NIGHT ? 264 : 240, START = [-25, 41], SPEED = 1.5;
export const TYPE_AT = 34;   // the frame the first letter is typed (the score ticks along with it)
const mix = (a, b, t) => a + (b - a) * t;

export default {
  build(k) {
    const bay = buildHarbor(k, { rafts: [[20, -6, 0.12], [56, -80, -0.22], [100, -150, 0.1], [-16, -70, 0.2], [64, -24, 0.1]] }), { scene } = bay;
    const camera = new THREE.PerspectiveCamera(36, k.width / k.height, 0.5, 9000); scene.add(camera);
    const boat = lanternBoat(k); boat.root.rotation.y = Math.atan2(WIND[0], WIND[1]) - 0.2; scene.add(boat.root);
    scene.add(windStrokes(k, { box: [[-80, 0.8, -60], [70, 14, 46]], count: 60, seed: 2 }), windPetals(k, { box: [[-60, 1, 0], [30, 14, 60]], count: 44, seed: 3 }));
    const birds = gulls(k, [
      { path: (t) => [40 + t * 5, 34 + Math.sin(t * 0.8) * 2, -120 + t * 3], size: 5.5, phase: 0.2, rate: 2.4, glide: 0.4 },
      { path: (t) => [-30 + t * 4, 30 + Math.sin(t * 0.7 + 1) * 1.6, -150 + t * 2], size: 4, phase: 0.6, rate: 2.7 },
      { path: (t) => [90 + t * 4.4, 24 + Math.sin(t * 0.9 + 2) * 1.4, -170], size: 3.6, phase: 0.4, rate: 2.9 },
    ]); scene.add(birds.mesh);
    // dawn: each colour the sky and the sea were given, with the colour it is going to
    const sk = bay.sky.material.uniforms, se = bay.seaMat.uniforms, pair = (u, from, to) => ({ u: u.value, a: k.col(from), b: k.col(to) });
    const dawn = !NIGHT ? [] : [pair(sk.uTop, C.skyTop, DAWN_C.skyTop), pair(sk.uMid, C.skyMid, DAWN_C.skyMid), pair(sk.uHor, C.skyHor, DAWN_C.skyHor), pair(sk.uSunCol, C.sun, DAWN_C.sun),
      pair(sk.uCLit, C.cloudLit, DAWN_C.cloudLit), pair(sk.uCMid, C.cloudMid, DAWN_C.cloudMid), pair(sk.uCShade, C.cloudShade, DAWN_C.cloudShade),
      pair(se.uSeaA, C.sea1, DAWN_C.sea1), pair(se.uSeaB, C.sea0, DAWN_C.sea0), pair(se.uSeaC, C.sea2, DAWN_C.sea2), pair(se.uSeaRefl, C.seaRefl, DAWN_C.seaRefl), pair(se.uFoamCol, C.foam, DAWN_C.foam), pair(se.uGlint, C.glint, DAWN_C.sun)];
    const fog = [k.col(C.haze), k.col(DAWN_C.haze), k.col(C.hazeSun), k.col(DAWN_C.hazeSun), k.col('#000000'), k.col('#000000')];
    const type = overlay(k, camera);
    return { ...bay, camera, boat, birds, dawn, fog, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, x = START[0] + WIND[0] * SPEED * t, z = START[1] + WIND[1] * SPEED * t;
    // how far the day has come: nothing while the terminal types, then steadily to the end
    const d = NIGHT ? k.smooth(60, LEN - 40, f) : 0;
    if (NIGHT) {
      LIGHT.night = 1 - d;
      for (const p of st.dawn) p.u.copy(p.a).lerp(p.b, d);
      st.seaMat.uniforms.uNightK.value = 1 - d; st.stars.userData.power.value = 1 - k.smooth(0, 0.7, d);
      st.sky.material.uniforms.uGlow.value = mix(0.55, 0.85, d);
    }
    st.boat.root.position.set(x, 0, z); st.boat.update(f, { wind: windYaw(), gust: 0.95, glow: 1 });
    st.foam([[x, z, 2.7, 1.7]]);
    const w = st.seaMat.uniforms; w.uWake.value.set(x - WIND[0] * 1.5, z - WIND[1] * 1.5, WIND[0], WIND[1]); w.uWakeP.value.set(26, 0.2, 1.1, 0);
    // by day every raft is awake; at the end of the night they are asleep, and wake one by one as the light comes
    st.rafts.forEach((r, i) => { r.userData.cloth.value = 0.75 + 0.2 * Math.sin(t * 1.3 + i); r.userData.set((0.9 + 0.1 * Math.sin(t * 2 + i * 2.1)) * (NIGHT ? k.smooth(96 + i * 26, 112 + i * 26, f) : 1)); });
    st.lights([[x, z, 1, 1]]);
    // the picture goes soft under the terminal and stays soft under the name
    const p = k.ease.inOut(f / (LEN - 1)), soft = k.smooth(6, 30, f), term = k.smooth(12, 28, f) * (1 - k.smooth(114, 128, f)), card = k.smooth(130, 156, f);
    st.light.userData.set(0.9 - 0.5 * soft, 2.2 + t * 0.5);
    st.camera.position.set(0.5 - p * 2, 5.2 + p * 2.4, 70 + p * 6); st.camera.lookAt(0, -3 + p * 1.5, -30);
    st.birds.update(f);
    if (f < 129) st.type.terminal(TYPE_AT, term, f); else st.type.card(card);
    const look = { ...DAY, focus: 40, focusRange: 30 * (1 - soft) + 2, blur: 2 + 7 * soft, exposure: 1 - 0.14 * soft, saturation: DAY.saturation - 0.08 * soft, fade: 1 - k.smooth(LEN - 26, LEN - 1, f) };
    if (NIGHT) Object.assign(look, { fogColor: st.fog[4].copy(st.fog[0]).lerp(st.fog[1], d), fogSun: st.fog[5].copy(st.fog[2]).lerp(st.fog[3], d), fog: [mix(DAY.fog[0], DAWN.fog[0], d), 0, 0.012, 0.9],
      ambient: AMB.map((a, i) => mix(a, DAWN.ambient[i], d)), bloom: mix(DAY.bloom, DAWN.bloom, d), bloomThreshold: mix(DAY.bloomThreshold, DAWN.bloomThreshold, d), vignette: mix(DAY.vignette, DAWN.vignette, d) });
    return look;
  },
};
