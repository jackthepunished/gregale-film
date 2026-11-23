// s05 (132 frames): the runtime. Under the raft. The spark comes through the surface as a bead of light on the mooring
// line and the lens goes down with it, to the cargo slung under the deck: three crates in a rope net, stencilled NODE,
// PYTHON and OCI. Each takes the light as the bead passes, and the bead goes on down.
import * as THREE from 'three';
import { deepWorld, stack, bubbles, DEPTH } from '../kit/deep.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DEEP, CHIP_TONE } from '../kit/look.js';

export default {
  build(k) {
    const world = deepWorld(k), { scene } = world;
    const main = stack(k, { seed: 1 }); scene.add(main);
    const others = [[-34, -44, 2], [30, -64, 3], [-70, -110, 4]].map(([x, z, seed], i) => { const s = stack(k, { seed, withCargo: i < 2 }); s.position.set(x, 0, z); s.rotation.y = seed; s.userData.bell.userData.set(i === 1 ? 0 : 1); s.userData.key.userData.set(0); scene.add(s); return s; });
    scene.add(bubbles(k, [0, -0.5, 0], { count: 46, seed: 2, spread: 0.7, rise: [0.3, 1.2], span: 2.5, size: [0.06, 0.2] }));
    const camera = new THREE.PerspectiveCamera(40, k.width / k.height, 0.3, 4000); scene.add(camera);
    const type = overlay(k, camera);
    return { ...world, camera, main, others, type };
  },
  update(st, f, k) {
    const t = f / k.FPS, u = st.main.userData, top = DEPTH.cargo + 4;
    // the bead: in at the surface, slow through the cargo, then away down the line
    const y = k.keys([[0, 0.6], [26, top - 0.2, 'out'], [96, top - 6.4, 'linear'], [131, -19, 'in']], f);
    u.pulse(y, 1 + 0.15 * Math.sin(f * 1.3));
    // each crate glows as the bead comes level with it, and keeps a little of it
    for (const c of u.cargo.userData.items) { const cy = top + c.position.y, near = Math.exp(-Math.pow((y - cy) / 1.25, 2)), kept = k.smooth(cy + 0.3, cy - 1.2, y) * 0.16; c.material.uniforms.uEmis.value.setRGB((near * 0.3 + kept) * 0.3, (near * 0.3 + kept) * 0.8, (near * 0.3 + kept) * 0.5); }
    u.cargo.rotation.y = 0.5 + Math.sin(t * 0.5) * 0.06; u.cargo.rotation.z = Math.sin(t * 0.7) * 0.02;
    u.bell.userData.set(0, f); u.key.userData.set(0, f);
    const cy = k.keys([[0, -1.6], [84, DEPTH.cargo - 0.6, 'inOut'], [131, DEPTH.cargo - 1.4, 'inOut']], f), sw = Math.sin(t * 0.6) * 0.3;
    st.camera.position.set(10.5 + sw, cy + 0.6, 15.5 - sw * 0.5); st.camera.lookAt(0, cy - 0.6, 0);
    u.data.userData.sway(f);
    st.type.caption('code', fadeIO(k, f, 20, 104));   // the cut leaves this shot at frame 108
    st.type.panel('code', {}, 1, f);
    return { ...DEEP, fog: [0.014, 0, 0, 0.94], focus: 18, focusRange: 14, blur: 3.5 };
  },
};
