// s11 (132 frames): a rollback. The raft again, with a mast on its deck and a string of lanterns on the mast: each is
// a release, and the top one is live. A new lantern is hoisted to the top and the others go down a place. It burns
// red and gutters. The wind turns: the strokes run back the way they came, the awning and the pennant go over. The
// red lantern runs back down the mast and out; the last good one comes back to the top. The wind turns again.
import * as THREE from 'three';
import { buildHarbor } from '../kit/harbor.js';
import { releaseMast } from '../kit/props.js';
import { lanternBoat } from '../kit/lantern.js';
import { windStrokes, windPetals, windYaw } from '../kit/wind.js';
import { overlay, fadeIO } from '../kit/type.js';
import { DAY, WIND } from '../kit/look.js';

const B = [8.8, 3.4];   // the boat rests off the raft's right-hand corner, clear of the caption, looking back at the mast
const HOIST = [16, 44], BAD = 42, TURN = [56, 68], BACK = [68, 98], CALM = [96, 110];

export default {
  build(k) {
    const bay = buildHarbor(k, { quay: false, detail: 0.8, rafts: [[0, 0, 0.1], [54, -72, -0.2], [-36, -92, 0.15], [98, -150, 0.1]] }), { scene } = bay;
    const mast = releaseMast(k); mast.position.set(-2.6, 1.75, 1.9); bay.rafts[0].add(mast);
    bay.rafts[0].userData.lantern.visible = false;   // this raft's light is on its mast
    const camera = new THREE.PerspectiveCamera(40, k.width / k.height, 0.3, 9000); scene.add(camera);
    const boat = lanternBoat(k, { spray: false }); boat.root.position.set(B[0], 0, B[1]); boat.root.rotation.y = -0.5; scene.add(boat.root);
    const fwd = windStrokes(k, { box: [[-50, 0.8, -40], [40, 16, 14]], count: 40, seed: 4 });
    const rev = windStrokes(k, { box: [[-50, 0.8, -40], [40, 16, 14]], count: 46, seed: 11, dir: [-WIND[0], -WIND[1]], speed: 0.8 });
    scene.add(fwd, rev, windPetals(k, { box: [[-40, 1, -20], [20, 10, 14]], count: 26, seed: 9 }));
    bay.rafts.forEach((r, i) => { if (i) r.userData.set([0, 0.8, 0.6, 0.7][i]); });
    const type = overlay(k, camera);
    return { ...bay, camera, boat, mast, fwd, rev, type };
  },
  update(st, f, k) {
    const t = f / k.FPS;
    const s = k.smooth(HOIST[0], HOIST[1], f) * (1 - k.smooth(BACK[0], BACK[1], f)), bad = k.smooth(BAD, BAD + 8, f);
    const back = k.smooth(TURN[0], TURN[1], f) * (1 - k.smooth(CALM[0], CALM[1], f));   // how far the wind has turned
    st.mast.userData.set(s, bad, f);
    st.fwd.userData.power.value = 1 - back; st.rev.userData.power.value = back;
    st.rafts.forEach((r, i) => { r.userData.cloth.value = (i ? 0.8 : 0.75) * (1 - 1.5 * back) + 0.1 * Math.sin(t * (4 + 3 * back) + i); });
    // the boat watches the mast; it flinches when the new lantern goes red
    const flinch = Math.exp(-Math.pow((f - BAD - 6) / 5, 2));
    st.boat.update(f, { wind: windYaw() + Math.PI * back, gust: 0.8 + 0.2 * back, look: [-0.45, 0.85], blink: f > BAD + 4 && f < BAD + 10 ? 1 : null, glow: 1 - 0.25 * flinch, way: 0, bob: 0.7 + 0.5 * flinch });
    st.foam([[B[0], B[1], 2.5, 0.5]]);
    // the mast's lights on the water: the live one, mint, or the failing one
    const top = st.mast.userData.lanterns[s > 0.5 ? 0 : 1].getWorldPosition(new THREE.Vector3());
    st.lights([[B[0], B[1], 0.5, 1], [top.x, top.z, 0.9, s > 0.5 && bad > 0.5 ? 1 : 0]]);
    st.light.userData.set(0.7, 1 + t * 0.5);
    const p = k.ease.inOut(f / 131);
    st.camera.position.set(-1.6 + p * 0.8, 4.6 + Math.sin(t * 0.9) * 0.06, 26.5 - p * 1.6); st.camera.lookAt(-1.2, 7.3 - p * 0.3, 0);
    st.type.caption('rollback', fadeIO(k, f, 10, 126));
    st.type.panel('rollback', { stage: f < HOIST[0] ? 0 : f < BAD + 4 ? 1 : f < BACK[0] ? 2 : f < BACK[1] ? 3 : 4 }, 1, f);
    return { ...DAY, focus: 25, focusRange: 20, blur: 2.6, bloom: DAY.bloom + 0.25 * flinch };
  },
};
