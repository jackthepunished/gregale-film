// s09b (156 frames): and rests. The same bay a while later. The boats leave, one after another, going
// on downwind; a little after each has gone its raft's lantern goes out and its awning falls slack. Ours is the last
// to go, and its raft the last light on the water. Then there is only the lighthouse, the town's windows and the stars.
import base, { RAFTS, BOAT } from './s09.js';
import { windYaw } from '../kit/wind.js';
import { fadeIO } from '../kit/type.js';
import { DAY, WIND } from '../kit/look.js';

const IDLE = 30;   // frames between a boat leaving and its raft going dark: the idle timeout
export const OUT = (i) => 26 + i * 8;   // when the i-th raft (in the order they sleep) goes dark; the score follows it

export default {
  async build(k) {
    const st = await base.build(k);
    // the order they leave: the fleet from the far end of the wind first, ours last
    const order = [...st.fleet].sort((a, b) => st.when[b.raft] - st.when[a.raft]);
    const leave = new Map(order.map((b, n) => [b.raft, 6 + n * 10])); leave.set(0, 6 + order.length * 10 + 8);
    // rafts with no boat of their own were awake for someone out of frame: they sleep in among the rest
    const dark = RAFTS.map((_, i) => (leave.has(i) ? leave.get(i) + IDLE : 40 + ((i * 37) % 60)));
    return { ...st, leave, dark };
  },
  update(st, f, k) {
    const t = f / k.FPS, go = (f0) => Math.pow(k.clamp((f - f0) / 90), 1.7) * 120;   // how far downwind a boat that left at f0 has gone
    st.rafts.forEach((r, i) => {
      const off = k.smooth(st.dark[i], st.dark[i] + 12, f);
      r.userData.set((i === 0 ? 1 : 0.95) * (1 - off) * (1 - 0.25 * Math.exp(-Math.pow((f - st.dark[i] - 3) / 3, 2))));
      r.userData.cloth.value = 0.75 - 0.6 * k.smooth(st.dark[i] - 8, st.dark[i] + 24, f) + 0.1 * Math.sin(t * 1.5 + i * 1.7) * (1 - off);
    });
    const lit = [], foam = [];
    const sail = (boat, rest, f0, seed) => {
      const d = go(f0), x = rest[0] + WIND[0] * d, z = rest[1] + WIND[1] * d, way = k.smooth(f0, f0 + 20, f);
      boat.root.position.set(x, 0, z); boat.update(f + seed, { wind: windYaw(), gust: 0.9, glow: 1, way, bob: 0.7 + 0.3 * way });
      if (lit.length < 4 && d < 90) lit.push([x, z, 0.9, 1]); if (foam.length < 5 && d < 90) foam.push([x, z, 2.5, 0.5 + 0.6 * way]);
    };
    sail(st.boat, BOAT, st.leave.get(0), 0);
    for (const b of st.fleet) sail(b.boat, b.rest, st.leave.get(b.raft), b.raft * 7);
    st.foam(foam); st.lights(lit);
    st.strokes.userData.power.value = 1 - 0.55 * k.smooth(40, 150, f);   // the wind drops as the bay empties
    st.light.userData.set(0.9, 1.9 + t * 0.6);
    // the lens holds s09's last frame and lifts a little toward the stars
    const p = k.ease.inOut(f / 155);
    st.camera.position.set(-23 + p * 2, 17.5 + p * 2.5, 68 + p * 3); st.camera.lookAt(34, -1 + p * 7.5, -70);
    st.birds.update(f + 156);
    st.type.caption('quiet', fadeIO(k, f, 26, 150));
    st.type.panel('budget', { spent: 0.86, asleep: f >= st.dark[0] }, 1 - k.smooth(138, 154, f), f);   // the bar does not move: nothing is being spent
    return { ...DAY, fog: [DAY.fog[0] * 0.9, 0, 0.012, 0.9], focus: 80, focusRange: 1e6, blur: 0, bloom: DAY.bloom + 0.07 };
  },
};
