// s13 (120 frames): shadow traffic. The same picture a moment later. One of the small rafts is the next version,
// staged. Three boats come in with the wind for the app. As each nears, a shadow of it peels away: the same boat in
// outline only, pale, the picture showing through. The boat goes on to the app as it always would; its shadow goes
// to the new version, touches it (the small lantern answers), and is gone on the wind. Nobody on a boat saw a thing.
import * as THREE from 'three';
import base, { BRANCH, SCALE } from './s12.js';
import { lanternBoat } from '../kit/lantern.js';
import { windYaw } from '../kit/wind.js';
import { fadeIO } from '../kit/type.js';
import { DAY, WIND } from '../kit/look.js';

// each visitor: where it rests by the app's raft (x, z), and the frame it gets there
const VISITS = [{ rest: [-1.6, 7.4], at: 54 }, { rest: [-10.6, 6.6], at: 74 }, { rest: [4.6, 9.6], at: 94 }];   // close under the raft, above the caption
const NEW = 0;   // which branch is the new version

export default {
  async build(k) {
    const st = await base.build(k), heading = Math.atan2(WIND[0], WIND[1]);
    const visits = VISITS.map((v, i) => {
      const boat = lanternBoat(k, { spray: false }), ghost = lanternBoat(k, { ghost: true, spray: false });
      boat.root.rotation.y = ghost.root.rotation.y = heading - 0.3; st.scene.add(boat.root, ghost.root);
      const from = [v.rest[0] - WIND[0] * 46 - WIND[1] * (4 + i * 3), v.rest[1] - WIND[1] * 46 + WIND[0] * (4 + i * 3)];
      const to = [BRANCH[NEW].to[0] - 3.4 + i * 1.3, BRANCH[NEW].to[1] + 4.2 + i * 0.9];
      return { ...v, boat, ghost, from, to };
    });
    return { ...st, visits };
  },
  update(st, f, k) {
    const t = f / k.FPS;
    // the branches ride where s12 left them; the new version's lantern answers each shadow that reaches it
    let touch = 0;
    for (const v of st.visits) touch = Math.max(touch, Math.exp(-Math.pow((f - v.at - 6) / 6, 2)));
    st.branches.forEach((b, i) => {
      b.raft.visible = b.line.visible = true; b.raft.position.set(b.to[0], Math.sin(t * 1.6 + i * 2) * 0.05, b.to[1]); b.raft.scale.setScalar(SCALE);
      b.raft.userData.set(i === NEW ? 0.75 + 0.5 * touch : 0.55); b.raft.userData.cloth.value = 0.8 + 0.08 * Math.sin(t * 4 + i);
      b.line.userData.set(new THREE.Vector3(5.2, 1.5, k.lerp(b.from[1], b.to[1], 0.12)), new THREE.Vector3(b.to[0] - 2.6, 0.95, b.to[1]));
    });
    const foam = st.branches.map((b) => [b.to[0], b.to[1], 3.3, 0.9]), lit = [[BRANCH[NEW].to[0] + 3, BRANCH[NEW].to[1], 0.7, 0]];
    st.visits.forEach((v, i) => {
      const u = k.ease.out(k.clamp((f - (v.at - 50)) / 50)), x = k.lerp(v.from[0], v.rest[0], u), z = k.lerp(v.from[1], v.rest[1], u);
      v.boat.root.position.set(x, 0, z); v.boat.update(f + i * 9, { wind: windYaw(), gust: 0.9, glow: 1, way: 1 - u, bob: 1 - 0.3 * u });
      if (u > 0 && foam.length < 9) foam.push([x, z, 2.5, 0.5 + 0.5 * (1 - u)]); if (lit.length < 4) lit.push([x, z, 0.5, 1]);
      // the shadow: with its boat until the split, then away to the new version, there a beat, then gone downwind
      const split = k.ease.inOut(k.clamp((f - (v.at - 30)) / 34)), gone = k.clamp((f - v.at - 10) / 22);
      const gx = k.lerp(x, v.to[0], split) + WIND[0] * gone * gone * 26, gz = k.lerp(z, v.to[1], split) + WIND[1] * gone * gone * 26;
      v.ghost.root.position.set(gx, 0.25 * split + gone * 2.5, gz); v.ghost.root.visible = split > 0.01 && gone < 1;
      v.ghost.update(f + i * 9 + 4, { wind: windYaw(), glow: k.smooth(0, 0.25, split) * (1 - gone) * 0.95, bob: 0.6, way: 0 });
    });
    st.rafts.forEach((r, i) => { r.userData.set([1, 0.8, 0.6, 0.7][i]); r.userData.cloth.value = 0.78 + 0.14 * Math.sin(t * 1.3 + i); });
    st.boat.update(f + 108, { wind: windYaw(), gust: 0.9, look: [0.75, 0.3], glow: 1, way: 0, bob: 0.7 });
    st.foam(foam); st.lights(lit);
    st.light.userData.set(0.7, 5.5 + t * 0.5);
    const p = k.ease.inOut(f / 119);
    st.camera.position.set(6.7 - p * 2.2, 5.4 + p * 0.8 + Math.sin(t * 0.9) * 0.06, 32 + p * 3); st.camera.lookAt(7 - p * 2.5, 2.6, -2);
    st.type.caption('shadow', fadeIO(k, f, 8, 116));
    st.type.panel('shadow', { pct: f < 22 ? 0 : 100 }, 1, f);
    return { ...DAY, focus: 32, focusRange: 26, blur: 2.4 };
  },
};
