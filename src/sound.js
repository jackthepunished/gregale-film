// The soundtrack, synthesised in code: no samples, no network. renderScore(cut) -> { l, r } (Float32Array, 44.1 kHz),
// as long as the cut it is for (a cut of timeline.js: 'night', 'full', 'nightSlow', 'fullSlow'), and in time with it.
//
// In D major, gentle and sparse. Shot by shot:
//   s01   wind arriving over quiet water                 s02   Dadd9, the boat's tune on a small bell
//   s03   Bm7; a low horn as the beam crosses             s03b  the horn again, sour, as the dark boat is stopped
//   s04   Gmaj7; the spark, then three notes at once as the three lanterns come on together
//   s05-s06  under water: wind and sea go, everything is muffled; a note for each crate, each bucket, the database
//         drums, a ring for the bell
//   s11   F#m: a new lantern up, a sour cluster as it fails, the wind turning (a rush of air), and the resolve
//   s12   a plink for each preview raft            s13   a soft bell for each boat, a breath for each shadow
//   s14   two quick notes for each tool an AI visitor uses
//   s09   D, full; a chime for each lantern      s09b  the same scale falling as they go out
//   s10   G under the terminal (a tick a letter, a chime for the address), D as the name comes up
// The night film adds crickets on every surface shot, a music-box tone for the tune, and birds as the light comes.
// Everything musical is data, placed by shot (see chords(), melody(), cues()). Deterministic: seeded PRNGs only.
import { clock, total, CUTS } from './timeline.js';

const SR = 44100, FPS = 24;
let N = 0, DUR = 0;   // set by renderScore for the cut being rendered
const sec = (frame) => frame / FPS;

const chords = (S, night) => [   // [start s, notes, gain]
  [2.0, ['D3', 'A3', 'E4'], 0.5],
  [S('s02'), ['D3', 'A3', 'E4', 'F#4'], 1],
  [S('s03'), ['B2', 'F#3', 'A3', 'D4'], 1],
  [S('s03b'), ['B2', 'F3', 'A3', 'D4'], 0.95],
  [S('s04'), ['G2', 'D3', 'F#3', 'B3'], 1],
  [S('s05'), ['E2', 'B2', 'D3', 'F#3'], 0.95],
  [S('s05b'), ['C3', 'G3', 'B3', 'E4'], 0.9],
  [S('s06'), ['A1', 'E2', 'B2', 'D3'], 0.95],
  [S('s11'), ['F#2', 'C#3', 'E3', 'A3'], 1],
  [S('s11', 44), ['F#2', 'C3', 'E3', 'A3'], 0.9],
  [S('s11', 96), ['A2', 'E3', 'A3', 'C#4'], 1],
  [S('s12'), ['F#2', 'D3', 'A3', 'D4'], 1],
  [S('s13'), ['B2', 'F#3', 'A3', 'D4'], 0.85],
  [S('s14'), ['G2', 'D3', 'F#3', 'B3'], 0.95],
  [S('s14', 72), ['A2', 'E3', 'A3', 'D4'], 1],
  [S('s09'), ['D2', 'A2', 'D3', 'F#3', 'A3', 'E4'], 1.2],
  [S('s09b'), ['B2', 'F#3', 'A3', 'D4'], 0.9], [S('s09b', 84), ['G2', 'D3', 'B3'], 0.6],
  [S('s10'), ['G2', 'D3', 'G3', 'B3', 'D4'], night ? 0.85 : 1.0],
  [S('s10', 128), ['D2', 'A2', 'D3', 'F#3', 'A3'], 1.0],
];
// The boat's tune: [shot, seconds into it (as the shot is written: the cut squeezes a phrase to fit its shot), pitch, velocity]
const melody = (night) => [
  ['s02', 0.3, 'A5', 0.7], ['s02', 1.0, 'F#5', 0.55], ['s02', 1.6, 'E5', 0.5], ['s02', 2.6, 'D5', 0.55], ['s02', 3.3, 'E5', 0.5],
  ['s03', 0.3, 'F#5', 0.55], ['s03', 1.1, 'D5', 0.5], ['s03', 1.9, 'B4', 0.5], ['s03', 3.6, 'A5', 0.55], ['s03', 4.4, 'F#5', 0.48],
  ['s04', 0.3, 'B4', 0.5], ['s04', 1.1, 'D5', 0.52], ['s04', 1.9, 'F#5', 0.56],
  ['s11', 4.3, 'E5', 0.5], ['s11', 4.9, 'C#5', 0.5],
  ['s12', 0.2, 'A4', 0.45], ['s12', 3.4, 'F#5', 0.45],
  ['s14', 0.3, 'B4', 0.45], ['s14', 4.6, 'E5', 0.5],
  ['s09', 0.1, 'A5', 0.8], ['s09', 0.1, 'D5', 0.5], ['s09', 1.0, 'F#5', 0.6], ['s09', 1.7, 'E5', 0.55], ['s09', 2.6, 'D5', 0.6], ['s09', 3.4, 'E5', 0.55], ['s09', 4.2, 'A5', 0.7], ['s09', 5.2, 'B5', 0.6], ['s09', 5.9, 'A5', 0.55],
  ['s09b', 0.5, 'F#5', 0.5], ['s09b', 1.8, 'D5', 0.45], ['s09b', 3.3, 'B4', 0.42], ['s09b', 5.0, 'A4', 0.38],
  ['s10', 0.3, 'B5', 0.5], ['s10', 5.4, 'D6', 0.75], ['s10', 6.3, 'B5', 0.6], ['s10', 7.1, 'A5', 0.55], ['s10', 8.0, 'F#5', 0.5], ['s10', 8.8, 'D5', 0.55],
  ...(night ? [['s10', 9.8, 'A5', 0.4]] : []),
];
// Spot sounds, in seconds of film. S(shot, f) is when the film shows that shot's own frame f (see the shots for what
// happens then), so a cue stays on its picture however fast the cut runs the shot.
const cues = (S, night) => ({
  beam: S('s03', 62), caught: S('s03b', 46), turned: S('s03b', 86),
  spark: S('s04', 78), allOn: S('s04', 104), plink: S('s04', 120),
  crates: [44, 63, 68].map((f) => S('s05', f)),
  buckets: [12, 21, 29, 38].map((f) => S('s05b', f)), drums: S('s05b', 66),
  ring: S('s06', 36), through: S('s06', 80),
  hoist: S('s11', 18), bad: S('s11', 44), gust: S('s11', 56), good: S('s11', 96),
  branches: [0, 1, 2].map((i) => S('s12', 8 + i * 24 + 40)),
  visits: [54, 74, 94].map((f) => S('s13', f)),
  calls: [[26, 0], [46, 2], [62, 1], [80, 3], [96, 0], [108, 2]].map(([f, tool]) => [S('s14', f), tool]),
  lanterns: Array.from({ length: 13 }, (_, i) => S('s09', 14 + Math.round((i / 12) * 96) + 6)),
  out: Array.from({ length: 13 }, (_, i) => S('s09b', 40 + i * 8)),
  // the terminal (s10): the first letter at frame 34, two frames a letter, fourteen letters; then its two answers
  keys: Array.from({ length: 14 }, (_, i) => S('s10', 34 + i * 2)), built: S('s10', 34 + 28 + 12), live: S('s10', 34 + 28 + 28),
  birds: night ? [150, 171, 178, 204, 226].map((f) => S('s10', f)) : [],
});

// ---------------------------------------------------------------------------------------------------------------
const NOTE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const hz = (p) => { const m = /^([A-G])(#?)(\d)$/.exec(p); return 440 * 2 ** ((NOTE[m[1]] + (m[2] ? 1 : 0) + (Number(m[3]) - 4) * 12 - 9) / 12); };
const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
function prng(seed) { let a = (seed * 2654435761) >>> 0; return () => { a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const bus = () => ({ l: new Float32Array(N), r: new Float32Array(N) });
const pan = (p) => { const a = ((clamp(p, -1, 1) + 1) * Math.PI) / 4; return [Math.cos(a), Math.sin(a)]; };
/** Piecewise-linear automation over seconds. */
const line = (pts) => (t) => { if (t <= pts[0][0]) return pts[0][1]; for (let i = 1; i < pts.length; i++) if (t <= pts[i][0]) { const [t0, v0] = pts[i - 1], [t1, v1] = pts[i]; return v0 + ((v1 - v0) * (t - t0)) / (t1 - t0); } return pts[pts.length - 1][1]; };

/** A struck bell: partials [ratio, level, decay s]. */
const BELL = [[1, 1, 2.6], [2.0, 0.34, 1.6], [3.01, 0.16, 0.9], [4.17, 0.1, 0.5], [5.43, 0.05, 0.3]];
const BOX = [[1, 1, 1.5], [2.0, 0.5, 0.8], [4.02, 0.2, 0.35], [6.3, 0.08, 0.16]];   // the night film's tune: a music box
const GLASS = [[1, 1, 3.4], [2.76, 0.3, 1.8], [5.4, 0.12, 0.8]];
const DEEP = [[0.5, 0.8, 6], [1, 1, 5], [1.51, 0.4, 3.2], [2.52, 0.25, 2], [3.2, 0.12, 1.2]];
function strike(dest, t, f, amp, p, partials = BELL, attack = 0.004) {
  const [gl, gr] = pan(p), a = Math.round(t * SR);
  for (const [ratio, level, decay] of partials) {
    const w = 2 * Math.PI * f * ratio / SR, n = Math.min(N - a, Math.round(decay * 4 * SR)); if (n <= 0 || f * ratio > 16000) continue;
    for (let i = 0; i < n; i++) { const tt = i / SR, e = Math.min(1, tt / attack) * Math.exp(-tt / (decay * 0.38)), s = Math.sin(w * i) * e * level * amp; dest.l[a + i] += s * gl; dest.r[a + i] += s * gr; }
  }
}
/** A held reed note (the lighthouse): odd harmonics, a second voice a few cents sharp. */
function reed(dest, t0, f, len, amp, p) {
  const [gl, gr] = pan(p), a = Math.round(t0 * SR), n = Math.round(len * SR);
  for (let i = 0; i < n && a + i < N; i++) { const t = i / SR, e = Math.min(1, t / 0.4) * Math.min(1, (len - t) / 0.9), x = 2 * Math.PI * f * t, s = (Math.sin(x) + 0.4 * Math.sin(3 * x + 0.4) + 0.5 * Math.sin(2 * Math.PI * f * 1.005 * t) + 0.15 * Math.sin(5 * x)) * e * e * amp; dest.l[a + i] += s * gl; dest.r[a + i] += s * gr; }
}
/** One-pole low-pass in place, with a cutoff that can move: cut(t) in Hz. */
function lowpass(x, cut) { let y = 0, k = 0; for (let i = 0; i < x.length; i++) { if ((i & 255) === 0) k = 1 - Math.exp((-2 * Math.PI * cut(i / SR)) / SR); y += k * (x[i] - y); x[i] = y; } return x; }
const highpass = (x, hzc) => { const k = 1 - Math.exp((-2 * Math.PI * hzc) / SR); let y = 0; for (let i = 0; i < x.length; i++) { y += k * (x[i] - y); x[i] -= y; } return x; };
function noise(seed) { const r = prng(seed), x = new Float32Array(N); for (let i = 0; i < N; i++) x[i] = r() * 2 - 1; return x; }
/** A resonant band of noise whose centre moves: a state-variable filter, band-pass out. */
function band(x, centre, q) { let lo = 0, bp = 0, f = 0; const out = new Float32Array(x.length); for (let i = 0; i < x.length; i++) { if ((i & 127) === 0) f = 2 * Math.sin((Math.PI * Math.min(centre(i / SR), SR / 6)) / SR); const hi = x[i] - lo - q * bp; bp += f * hi; lo += f * bp; out[i] = bp; } return out; }
/** Smooth seeded wander, 0..1, at `rate` changes a second. */
function wander(seed, rate) { const r = prng(seed), v = Array.from({ length: Math.ceil(DUR * rate) + 3 }, () => r()); return (t) => { const p = t * rate, i = Math.floor(p), u = p - i, s = u * u * (3 - 2 * u); return v[i] * (1 - s) + v[i + 1] * s; }; }

function renderPads(out, S, night, under) {
  const r = prng(7), tmpL = new Float32Array(N), tmpR = new Float32Array(N), CH = chords(S, night), U1 = S('s11');
  CH.forEach(([t0, notes, gain], ci) => {
    const t1 = (CH[ci + 1]?.[0] ?? DUR + 3), a = Math.max(0, Math.round((t0 - 0.9) * SR)), b = Math.min(N, Math.round((t1 + 2.4) * SR));
    notes.forEach((name, ni) => {
      const f = hz(name);
      for (let v = 0; v < 3; v++) {
        const det = 1 + (v - 1) * 0.0045 + (r() - 0.5) * 0.001, w = (2 * Math.PI * f * det) / SR, ph = r() * 6.283, [gl, gr] = pan((v - 1) * 0.7 + (ni % 2 ? 0.15 : -0.15)), g = (gain * 0.055) / Math.sqrt(notes.length) * (f < 100 ? 1.5 : 1);
        for (let i = a; i < b; i++) {
          const t = i / SR, env = smooth(t0 - 0.9, t0 + 1.3, t) * (1 - smooth(t1 - 0.6, t1 + 2.3, t)), x = w * i + ph;
          // a soft saw: the first harmonics only, each a little quieter
          const s = Math.sin(x) + 0.42 * Math.sin(2 * x) + 0.24 * Math.sin(3 * x) + 0.13 * Math.sin(4 * x) + 0.07 * Math.sin(5 * x);
          tmpL[i] += s * env * g * gl; tmpR[i] += s * env * g * gr;
        }
      }
    });
  });
  // brightness: open on the surface (less so at night), closed down under water, opening again as the pedal builds
  const open = night ? 1050 : 1500, dawn = night ? (t) => 700 * smooth(S('s10', 110), S('s10', 230), t) : () => 0;
  const cut = (t) => 520 + open * (1 - under(t)) * smooth(2, 6, t) + 700 * smooth(S('s06', 20), S('s06', 100), t) * under(t) + 500 * smooth(U1, U1 + 1, t) + dawn(t);
  lowpass(tmpL, cut); lowpass(tmpR, cut);
  const lvl = line([[0, 0], [2, 0], [5, 0.8], [S('s05'), 0.85], [S('s05') + 0.3, 0.7], [S('s06'), 0.8], [U1, 1.0], [S('s09'), 1.1], [S('s10', 60), 1], [DUR - 0.2, 0]]);
  for (let i = 0; i < N; i++) { const g = lvl(i / SR); out.l[i] += tmpL[i] * g; out.r[i] += tmpR[i] * g; }
}

function renderAir(out, S, night, under) {
  const U0 = S('s05'), U1 = S('s11'), END = S('s10');
  // the gregale: two bands of noise that swell and wander, gone under water (and dropping as the bay empties, at night)
  const gust = wander(11, 0.45), gust2 = wander(12, 0.8);
  const lvl = line([[0, 0.05], [0.4, 0.08], [2.4, 0.5], [4, 0.36], [U0 - 0.5, 0.34], [U1 + 0.1, 0.34], [U1 + 1.2, 0.44], [S('s11', 54), 0.44], [S('s11', 66), 0.8], [S('s11', 100), 0.44], [S('s09'), 0.55], [S('s09b'), 0.45], [S('s09b', 150), 0.2], [END, 0.24], [DUR - 2, 0.3], [DUR, 0]]);
  const wl = band(noise(21), (t) => 380 + 520 * gust(t) + 200 * gust2(t), 0.55), wr = band(noise(22), (t) => 420 + 480 * gust(t + 0.3) + 220 * gust2(t + 0.2), 0.55);
  const hl = band(noise(23), (t) => 1700 + 1500 * gust2(t), 0.8);
  // the sea: low wash arriving in slow waves
  const sl = lowpass(noise(31), () => 420), sr = lowpass(noise(32), () => 460), wave = wander(33, 0.28);
  // under water: a low room tone
  const dl = lowpass(lowpass(noise(41), () => 130), () => 130), dr = lowpass(lowpass(noise(42), () => 140), () => 140), dw = wander(43, 0.2);
  const wind = night ? 0.72 : 1;
  for (let i = 0; i < N; i++) {
    const t = i / SR, up = 1 - under(t), g = lvl(t) * up * (0.55 + 0.75 * gust(t)) * wind, s = up * smooth(0, 1.5, t) * (0.25 + 0.75 * Math.pow(wave(t), 1.6)) * (1 - smooth(DUR - 2.5, DUR, t));
    const d = under(t) * (0.55 + 0.45 * dw(t));
    out.l[i] += wl[i] * g * 0.22 + hl[i] * g * 0.035 + sl[i] * s * 0.42 + dl[i] * d * 2.6;
    out.r[i] += wr[i] * g * 0.22 + hl[i] * g * 0.03 + sr[i] * s * 0.42 + dr[i] * d * 2.6;
  }
  if (!night) return;
  // crickets: three of them, each a run of quick chirps and a rest, never quite in step; they stop as the day comes
  const fadeOut = (t) => 1 - smooth(S('s10', 110), S('s10', 200), t);
  [[4350, 0.93, -0.6, 0.011, 51], [4820, 1.17, 0.5, 0.009, 52], [3980, 1.41, 0.1, 0.007, 53]].forEach(([f, period, p, amp, seed]) => {
    const [gl, gr] = pan(p), swell = wander(seed, 0.15), w = (2 * Math.PI * f) / SR;
    for (let i = 0; i < N; i++) {
      const t = i / SR, ph = (t / period) % 1; if (ph > 0.42) continue;
      const chirp = (ph * period * 14) % 1, e = Math.pow(Math.sin(chirp * Math.PI), 2) * (1 - under(t)) * smooth(0.5, 3, t) * (0.35 + 0.65 * swell(t)) * fadeOut(t);
      const s = Math.sin(w * i) * (1 + 0.3 * Math.sin(w * i * 0.5)) * e * amp; out.l[i] += s * gl; out.r[i] += s * gr;
    }
  });
}

function renderNotes(mel, fx, S, night) {
  const tune = night ? BOX : BELL, WOODEN = [[1, 1, 0.9], [3.9, 0.3, 0.2], [9.2, 0.08, 0.08]];
  for (const [shot, dt, p, v] of melody(night)) { const t = S.part(shot, (dt * FPS) / S.whole[shot]); strike(mel, t, hz(p), v * (night ? 0.24 : 0.2), (hz(p) > 800 ? 0.2 : -0.15), tune); strike(mel, t + 0.003, hz(p) * 1.003, v * 0.07, -0.3, tune); }
  const C = cues(S, night), at = (seconds) => seconds;
  // the lighthouse: a low reed note, far off
  reed(fx, at(C.beam) - 0.5, hz('D3'), 2.6, 0.07, 0.3);
  // the dark boat is stopped: the horn again with a note a tritone above it, and a thud; then, when it has turned, a small release
  reed(fx, at(C.caught) - 0.2, hz('D3'), 2.4, 0.075, 0.2); reed(fx, at(C.caught) - 0.1, hz('G#3'), 2.0, 0.04, 0.35);
  strike(fx, at(C.caught), hz('D2'), 0.4, 0, [[1, 1, 1.2], [1.48, 0.5, 0.6], [2.1, 0.2, 0.3]], 0.006);
  strike(fx, at(C.turned), hz('A5'), 0.07, 0.2, GLASS); strike(fx, at(C.turned) + 0.3, hz('D6'), 0.06, 0.3, GLASS);
  // the spark: three quick rising notes; then the three lanterns at once, one chord struck together; then the drop
  ['A5', 'D6', 'F#6'].forEach((p, i) => strike(fx, at(C.spark) + i * 0.16, hz(p), 0.13, -0.2 + i * 0.2, GLASS));
  ['D5', 'F#5', 'A5'].forEach((p, i) => strike(fx, at(C.allOn), hz(p), 0.16, [-0.5, 0, 0.5][i], BELL)); strike(fx, at(C.allOn), hz('D6'), 0.09, 0, GLASS);
  strike(fx, at(C.plink), hz('D5'), 0.16, 0.2, [[1, 1, 0.5], [2.4, 0.4, 0.2]]); strike(fx, at(C.plink) + 0.07, hz('A4'), 0.1, 0.25, [[1, 1, 0.7]]);
  // the crates: three wooden notes
  ['B4', 'D5', 'F#5'].forEach((p, i) => strike(fx, at(C.crates[i]), hz(p), 0.2, [-0.3, 0.3, 0][i], WOODEN, 0.002));
  // the buckets: four small notes going up; the database: a low warm one, and a second as the seam below it lights
  ['E5', 'G5', 'B5', 'D6'].forEach((p, i) => strike(fx, at(C.buckets[i]), hz(p), 0.11, i % 2 ? 0.4 : -0.4, GLASS));
  strike(fx, at(C.drums), hz('C3'), 0.3, 0, DEEP, 0.01); strike(fx, at(C.drums) + 0.45, hz('G3'), 0.16, 0.1, BELL);
  // the bell: a glass ring as the bead goes round its crown, a fuller one as it passes in and the flame answers
  strike(fx, at(C.ring), hz('E5'), 0.15, 0, GLASS); strike(fx, at(C.ring) + 0.7, hz('B5'), 0.1, -0.2, GLASS); strike(fx, at(C.through), hz('A5'), 0.13, 0.1, GLASS); strike(fx, at(C.through), hz('E5'), 0.09, -0.1, BELL);
  // the rollback: the new lantern goes up (a rising run), fails (a close, sour pair, twice), the wind turns (a rush
  // of air, falling), and the last good one is back (the run again, landing)
  ['A4', 'C#5', 'E5', 'A5'].forEach((p, i) => strike(fx, at(C.hoist) + i * 0.24, hz(p), 0.09, 0.1, GLASS));
  for (const dt of [0, 0.42]) { strike(fx, at(C.bad) + dt, hz('C5'), 0.13, -0.2, WOODEN, 0.002); strike(fx, at(C.bad) + dt, hz('C#5'), 0.12, 0.2, WOODEN, 0.002); }
  { const t0 = at(C.gust), len = 1.9, a = Math.round(t0 * SR), n = Math.round(len * SR), r = prng(77); let lo = 0, bp = 0;
    for (let i = 0; i < n && a + i < N; i++) { const u = i / n, fc = 2600 * Math.pow(0.16, u) + 220, fq = 2 * Math.sin((Math.PI * fc) / SR), x = r() * 2 - 1, hi = x - lo - 0.5 * bp; bp += fq * hi; lo += fq * bp; const s = bp * Math.pow(Math.sin(u * Math.PI), 1.3) * 0.16; fx.l[a + i] += s * (0.3 + 0.7 * u); fx.r[a + i] += s * (1 - 0.7 * u); } }
  ['E5', 'A5', 'C#6'].forEach((p, i) => strike(fx, at(C.good) + i * 0.12, hz(p), 0.11, 0.1 * i, BELL));
  // the previews: a plink as each small raft's lantern comes on, each a step up
  ['D5', 'F#5', 'A5'].forEach((p, i) => { strike(fx, at(C.branches[i]), hz(p), 0.13, 0.2 + i * 0.25, GLASS); strike(fx, at(C.branches[i]) + 0.06, hz(p) * 2, 0.05, 0.2 + i * 0.25, GLASS); });
  // shadow traffic: a soft bell as each boat arrives, and just after it a breath an octave up for its shadow
  C.visits.forEach((f, i) => { const p = ['B4', 'D5', 'F#5'][i]; strike(fx, at(f), hz(p), 0.12, -0.3, BELL); strike(fx, at(f) + 0.26, hz(p) * 2, 0.045, 0.45, [[1, 1, 2.2], [2.01, 0.2, 1.2]], 0.09); });
  // the tools: two quick notes for each call, a pitch for each tool
  C.calls.forEach(([f, tool]) => { const p = ['D5', 'G5', 'B5', 'E5'][tool]; strike(fx, at(f), hz(p), 0.13, tool / 1.5 - 1, WOODEN, 0.002); strike(fx, at(f) + 0.11, hz(p) * 1.5, 0.09, tool / 1.5 - 1, WOODEN, 0.002); strike(fx, at(f) + 0.22, hz(p) * 2, 0.045, tool / 1.5 - 1, GLASS); });
  // the bay: a chime for each lantern, climbing; and the same scale falling and fading as they go out
  const scale = ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6', 'E6', 'F#6', 'A6', 'B6', 'D6', 'A6', 'D7'];
  C.lanterns.forEach((f, i) => strike(fx, at(f), hz(scale[i]), 0.085, ((i * 5) % 7) / 3.5 - 1, GLASS));
  [...scale].reverse().forEach((p, i) => strike(fx, at(C.out[i]), hz(p) / 2, 0.075 - i * 0.003, 1 - ((i * 5) % 7) / 3.5, GLASS));
  // the terminal: a small dry tick for each letter, a soft note for 'Built', two for the address
  const kr = prng(91);
  C.keys.forEach((f) => strike(fx, at(f), 1500 + kr() * 900, 0.035 + kr() * 0.02, kr() * 0.4 - 0.2, [[1, 1, 0.03], [2.7, 0.5, 0.02], [0.31, 0.6, 0.05]], 0.001));
  strike(fx, at(C.built), hz('A5'), 0.07, -0.1, GLASS);
  strike(fx, at(C.live), hz('D6'), 0.11, 0.1, GLASS); strike(fx, at(C.live) + 0.09, hz('A6'), 0.08, 0.2, GLASS);
  // first light (the night film): a bird, two notes sliding up, answered once
  C.birds.forEach((f, i) => { const t0 = at(f), a = Math.round(t0 * SR), len = 0.16, n = Math.round(len * SR), [gl, gr] = pan(i % 2 ? 0.5 : -0.4), base = [3100, 2600, 2900, 3300, 2700][i]; let ph = 0;
    for (let rep = 0; rep < 2; rep++) for (let j = 0; j < n; j++) { const u = j / n, idx = a + j + rep * Math.round(0.2 * SR); if (idx >= N) break; ph += (2 * Math.PI * base * (1 + 0.28 * u + 0.1 * rep)) / SR; const s = Math.sin(ph) * Math.pow(Math.sin(u * Math.PI), 1.5) * 0.045; fx.l[idx] += s * gl; fx.r[idx] += s * gr; } });
}

/** A small hall: cross-fed damped delays a side. `wet(t)` is the send level over time. */
function reverb(src, out, wet) {
  for (const [x, y, delays] of [[src.l, out.l, [0.0297, 0.0371, 0.0411, 0.0437, 0.113, 0.157]], [src.r, out.r, [0.0311, 0.0353, 0.0423, 0.0449, 0.121, 0.163]]]) {
    const acc = new Float32Array(N);
    for (const d of delays) { const n = Math.round(d * SR * 2.3), buf = new Float32Array(n); let w = 0, damp = 0; const fb = 0.86;
      for (let i = 0; i < N; i++) { const o = buf[w]; damp += 0.42 * (o - damp); buf[w] = x[i] * wet(i / SR) + damp * fb; w = (w + 1) % n; acc[i] += o; } }
    for (let i = 0; i < N; i++) y[i] += acc[i] / delays.length * 1.5;
  }
}

/** The whole score for a cut. Ten seconds or so of work. */
export function renderScore(cut = 'night') {
  const night = cut.startsWith('night'), S = clock(cut);
  S.whole = Object.fromEntries(CUTS[night ? 'nightSlow' : 'fullSlow'].map((e) => [e.id, e.frames]));   // each shot's length as written
  DUR = total(cut) / FPS; N = Math.round(DUR * SR);
  // how far under water the picture is: 0 on the surface, 1 below (the cuts are hard; a few ms of ramp avoids clicks)
  const U0 = S('s05'), U1 = S('s11'), under = (t) => smooth(U0 - 0.02, U0 + 0.05, t) * (1 - smooth(U1 - 0.05, U1 + 0.02, t));
  const out = bus(), pads = bus(), mel = bus(), fx = bus(), air = bus();
  renderPads(pads, S, night, under); renderAir(air, S, night, under); renderNotes(mel, fx, S, night);
  // under water the notes lose their top and gain a longer tail
  const dry = bus();
  for (let i = 0; i < N; i++) { dry.l[i] = mel.l[i] + fx.l[i]; dry.r[i] = mel.r[i] + fx.r[i]; }
  const ncut = (t) => 9000 - 6200 * under(t); lowpass(dry.l, ncut); lowpass(dry.r, ncut);
  const tail = bus(); reverb(dry, tail, (t) => 0.34 + 0.5 * under(t)); reverb(pads, tail, () => 0.12);
  for (let i = 0; i < N; i++) { out.l[i] = pads.l[i] + air.l[i] + dry.l[i] + tail.l[i] * 0.5; out.r[i] = pads.r[i] + air.r[i] + dry.r[i] + tail.r[i] * 0.5; }
  highpass(out.l, 28); highpass(out.r, 28);
  // master: fade in and out with the picture, a soft knee, and the peak set to -1.5 dBFS
  let peak = 0;
  for (let i = 0; i < N; i++) { const t = i / SR, g = smooth(0, 0.5, t) * (1 - smooth(DUR - 1.4, DUR - 0.05, t)); out.l[i] = Math.tanh(out.l[i] * g * 2.2); out.r[i] = Math.tanh(out.r[i] * g * 2.2); peak = Math.max(peak, Math.abs(out.l[i]), Math.abs(out.r[i])); }
  const norm = peak > 0 ? 0.84 / peak : 1;
  for (let i = 0; i < N; i++) { out.l[i] *= norm; out.r[i] *= norm; }
  return out;
}
