// s08 (72 frames): restored. The bell again, from a little below, the surface a bright ceiling far above. The flame
// comes up the line into the dark bell and catches: the glass floods mint, bubbles go up. A bead of light leaves the
// crown for the surface, and the lens tilts up after it to the underside of the raft.
import * as THREE from 'three';
import { deepWorld, stack, bubbles, DEPTH } from '../kit/deep.js';
import { burst, particles } from '../engine/kit/fx.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DEEP, CHIP_TONE } from '../kit/look.js';

const CATCH = 14;

export default {
  build(k) {
    const world = deepWorld(k, { seed: 2 }), { scene } = world;
    const main = stack(k, { seed: 1 }); scene.add(main);
    const others = [[-33, -12, 2, 1], [21, -34, 3, 1], [-44, -60, 4, 0]].map(([x, z, seed, on]) => { const s = stack(k, { seed, withCargo: false }); s.position.set(x, 0, z); s.rotation.y = seed; s.userData.on = on; scene.add(s); return s; });
    const B = DEPTH.bell;
    scene.add(particles(k, burst(k, { at: [0, B + 3.2, 0], dir: [0, 1, 0], count: 110, speed: [1.5, 8], spread: 1.2, t: CATCH / k.FPS, jitterT: 0.5, life: [1.5, 3.5], size: [0.08, 0.32], radius: 2.2, seed: 5 }), { gravity: -1.6, drag: 0.9, lit: '#f2fff8', shade: '#9fe6d2', sway: 0.25, twos: false }));
    scene.add(bubbles(k, [0, B + 3.4, 0], { count: 30, seed: 6 }));
    const camera = new THREE.PerspectiveCamera(42, k.width / k.height, 0.3, 4000); scene.add(camera);
    const type = overlay(k, camera);
    return { ...world, camera, main, others, type };
  },
  update(st, f, k) {
    const u = st.main.userData, B = DEPTH.bell;
    const lit = f < CATCH ? 0 : k.ease.outElastic(k.clamp((f - CATCH) / 26));
    u.bell.userData.set(Math.min(1.25, lit), f);
    // in from below, then out of the crown and up
    if (f < CATCH) u.pulse(k.lerp(B - 13, B - 1.2, k.ease.out(f / CATCH)), 1.5); else if (f >= 30) u.pulse(B + 3.6 + Math.pow((f - 30) / 34, 1.7) * 17, 1.2); else u.pulse(null);
    u.key.userData.set(0, f);
    st.others.forEach((s, i) => s.userData.bell.userData.set(s.userData.on ? 1 : 0, f + i * 13));
    const tilt = k.ease.inOut(k.clamp((f - 30) / 40));
    st.camera.position.set(9.5, B - 2.6 + tilt * 1.5, 13.5); st.camera.lookAt(0, B + 0.6 + tilt * 8.5, 0);
    st.type.caption('restore', fadeIO(k, f, 10, 68, 10, 8));
    return { ...DEEP, fog: [0.013, 0, 0, 0.93], focus: 16, focusRange: 16, blur: 2.5, bloom: DEEP.bloom + 0.6 * Math.exp(-Math.pow((f - CATCH - 4) / 7, 2)) };
  },
};
