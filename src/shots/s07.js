// s07 (156 frames): the kernel. The seabed: the keystone the line is made fast to, a wind rose carved in its face, and
// on it one ember, which is the parked app: a snapshot, kept in the stone, using nothing. The bead comes down the
// line and touches the ring bolt. The rose's north-east point, the gregale's, takes light; then the whole rose; the
// ember turns from orange to mint, and the flame leaves up the line.
import * as THREE from 'three';
import { deepWorld, stack, bubbles, DEPTH } from '../kit/deep.js';
import { burst, particles } from '../engine/kit/fx.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DEEP, CHIP_TONE } from '../kit/look.js';

const TOUCH = 40, LEAVE = 104;

export default {
  build(k) {
    const world = deepWorld(k, { seed: 3, shafts: 9 }), { scene } = world;
    const main = stack(k, { seed: 1, north: -0.75 }); scene.add(main);
    const others = [[-26, -30, 2], [28, -44, 3], [-8, -74, 5]].map(([x, z, seed]) => { const s = stack(k, { seed, withCargo: false }); s.position.set(x, 0, z); s.rotation.y = seed; scene.add(s); return s; });
    const top = DEPTH.bed + 1.2;
    scene.add(bubbles(k, [0, top + 0.6, 0], { count: 30, seed: 4, spread: 0.4, rise: [1.2, 2.4], size: [0.05, 0.14] }));
    // the flame leaving: a burst of bubbles off the stone
    scene.add(particles(k, burst(k, { at: [0, top + 0.5, 0], dir: [0, 1, 0], count: 90, speed: [2, 9], spread: 1.1, t: LEAVE / k.FPS, jitterT: 0.25, life: [1.2, 3], size: [0.08, 0.3], radius: 1.4, seed: 9 }), { gravity: -1.5, drag: 1.1, lit: '#f2fff8', shade: '#9fe6d2', sway: 0.2, twos: false }));
    const camera = new THREE.PerspectiveCamera(38, k.width / k.height, 0.3, 4000); scene.add(camera);
    const type = overlay(k, camera);
    return { ...world, camera, main, others, type, top };
  },
  update(st, f, k) {
    const u = st.main.userData, top = st.top;
    // the bead down to the bolt; then, at LEAVE, the flame up and away
    const down = k.keys([[0, top + 15], [TOUCH, top + 0.75, 'out']], f), up = top + 0.75 + Math.pow(k.clamp((f - LEAVE) / 30), 2) * 34;
    if (f < TOUCH + 4) u.pulse(down, 1 + 0.15 * Math.sin(f * 1.3)); else if (f >= LEAVE) u.pulse(up, 1.5); else u.pulse(null);
    const ne = k.smooth(TOUCH, TOUCH + 16, f), all = k.smooth(TOUCH + 22, TOUCH + 52, f), wake = k.smooth(TOUCH + 6, LEAVE - 8, f), gone = k.smooth(LEAVE, LEAVE + 20, f);
    u.key.userData.rose.x = ne * (0.8 + 0.2 * Math.sin(f * 0.5)); u.key.userData.rose.y = all * 0.55 * (1 - gone * 0.5);
    u.key.userData.set(wake * (1 - gone * 0.75), f);
    u.bell.userData.set(0, f);
    st.others.forEach((s, i) => { s.userData.key.userData.set(i === 1 ? 0 : 0.0, f + i * 17); s.userData.bell.userData.set(i === 0 ? 1 : 0, f + i * 11); });
    // the lens comes in low and lifts, so the rose's face opens to it
    const p = k.ease.inOut(f / 155), a = 0.74 - p * 0.25, R = 16 - p * 4.5;
    st.camera.position.set(Math.sin(a) * R, top + 7 + p * 6, Math.cos(a) * R); st.camera.lookAt(0, top + 0.2 + gone * 2.4, 0);
    st.type.caption('kernel', fadeIO(k, f, 14, 150));
    return { ...DEEP, fog: [0.019, 0, 0, 0.95], focus: 15, focusRange: 12, blur: 3, bloom: DEEP.bloom + 0.5 * wake * (1 - gone) };
  },
};
