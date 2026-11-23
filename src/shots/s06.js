// s06 (108 frames in the cut): a room of its own. Deeper: the bell. A glass sphere in a brass cage on the mooring
// line, sealed, a flame inside it: the running app. Behind it other rafts' bells hang in the green distance, each on
// its own line. The bead comes down, goes once round the crown of the bell, passes into it, and the flame answers.
import * as THREE from 'three';
import { deepWorld, stack, bubbles, DEPTH } from '../kit/deep.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DEEP, CHIP_TONE } from '../kit/look.js';

const OTHERS = [[-33, -12, 2, 1], [21, -34, 3, 1], [-44, -60, 4, 0], [10, -78, 5, 1], [52, -70, 6, 0]];   // x, z, seed, running

export default {
  build(k) {
    const world = deepWorld(k, { seed: 2 }), { scene } = world;
    const main = stack(k, { seed: 1 }); scene.add(main);
    const others = OTHERS.map(([x, z, seed, on]) => { const s = stack(k, { seed, withCargo: false }); s.position.set(x, 0, z); s.rotation.y = seed; s.userData.on = on; s.userData.key.userData.set(0); scene.add(s); if (on) scene.add(bubbles(k, [x, DEPTH.bell + 3.4, z], { count: 26, seed, spread: 0.5 })); return s; });
    const camera = new THREE.PerspectiveCamera(40, k.width / k.height, 0.3, 4000); scene.add(camera);
    const type = overlay(k, camera);
    return { ...world, camera, main, others, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, u = st.main.userData, B = DEPTH.bell, crown = B + 3.5;
    // the bead: down to the crown, once round it, through the bell, and on
    const y = k.keys([[0, B + 11], [34, crown, 'out'], [70, crown - 0.1, 'linear'], [88, B - 3.4, 'inOut'], [131, B - 15, 'in']], f);
    const round = k.clamp((f - 34) / 36), ang = round * Math.PI * 2, rad = Math.sin(round * Math.PI) * 1.25;
    u.pulse(y, 1 + 0.15 * Math.sin(f * 1.3), Math.cos(ang) * rad, Math.sin(ang) * rad);
    // passing through, the dark bell shows a breath of light and is dark again
    const through = Math.exp(-Math.pow((f - 80) / 5, 2));
    u.bell.userData.set(1 + 0.2 * through, f); u.data.userData.set(1, 1); u.data.userData.sway(f);
    st.others.forEach((s, i) => s.userData.bell.userData.set(s.userData.on ? 1 : 0, f + i * 13));
    const a = 0.62 + (f / 131) * 0.3, R = 15.5;
    st.camera.position.set(Math.sin(a) * R, B + 1.6 - (f / 131) * 0.8, Math.cos(a) * R); st.camera.lookAt(0, B + 0.3, 0);
    st.type.caption('room', fadeIO(k, f, 12, 104));   // the cut leaves this shot at frame 108
    st.type.panel('room', {}, 1, f);
    return { ...DEEP, focus: 15, focusRange: 12, blur: 3 };
  },
};
