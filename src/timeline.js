// The edit. Every boundary is a hard cut; 24 frames a second. The day film and the night film (?look=night) are the
// same shots; only the ending differs in length (the night film's s10 is a dawn).
//
// A visitor comes in on the wind (s01, s02). The lighthouse meets them at the door (s03) and turns trouble away
// (s03b). They reach the app, whose three services start together (s04). Under it: the code as it was written (s05),
// its database and files (s05b), and the sealed room it runs in (s06). Back on the water: a bad release is rolled
// back (s11), changes are tried on small copies (s12), a new version rehearses on shadows of real visits (s13), and
// AI visitors use the tools a server offers them (s14). A fleet comes and the budget holds (s09); the fleet goes and
// the bay rests (s09b). Then one command in a terminal, and the name (s10).
//
// Each cut is a list of [shot, from, to, speed]: the cut plays the shot's own frames `from`..`to`, `speed` of them to
// one frame of film. A shot is written at an easy pace (its animation, its caption's fades, its cues are all in its own
// frames); the edit decides how briskly it goes by.
//   the film (the default)   most shots at about one and a half times their own pace, and the slack trimmed off the
//                            front of two of them: 54 s by night, 53 s by day
//   ?pace=slow               every shot whole and at its own pace: 82.5 s by night, 81.5 s by day
//
// (s07 and s08, the keystone and the flame's return, are from the first film and are in no cut now.)
export const FPS = 24;
export const SLOW = typeof location !== 'undefined' && new URLSearchParams(location.search).get('pace') === 'slow';

const tile = (list) => list.reduce((acc, [id, from, to, speed]) => { const prev = acc[acc.length - 1]; acc.push({ id, from, to, speed, frames: Math.round((to - from) / speed), start: prev ? prev.start + prev.frames : 0 }); return acc; }, []);
const BRISK = [['s01', 0, 96, 1.3], ['s02', 22, 74, 1], ['s03', 0, 132, 1.5], ['s03b', 0, 120, 1.5], ['s04', 28, 144, 1.5], ['s05', 0, 108, 1.5], ['s05b', 0, 108, 1.5], ['s06', 0, 108, 1.5],
  ['s11', 0, 132, 1.35], ['s12', 0, 108, 1.5], ['s13', 0, 120, 1.5], ['s14', 0, 132, 1.5], ['s09', 0, 156, 1.6], ['s09b', 0, 156, 1.8]];
const WHOLE = BRISK.map(([id, , to]) => [id, 0, id === 's02' ? 96 : to, 1]);

export const CUTS = {
  full: tile([...BRISK, ['s10', 0, 240, 1.4]]),        // 1281 frames, 53.4 s
  night: tile([...BRISK, ['s10', 0, 264, 1.4]]),       // 1299 frames, 54.1 s
  fullSlow: tile([...WHOLE, ['s10', 0, 240, 1]]),      // 1956 frames, 81.5 s
  nightSlow: tile([...WHOLE, ['s10', 0, 264, 1]]),     // 1980 frames, 82.5 s
};
export const total = (cut) => CUTS[cut].reduce((s, x) => s + x.frames, 0);
export const shotAt = (frame, cut = 'full') => CUTS[cut].find((s) => frame >= s.start && frame < s.start + s.frames) ?? CUTS[cut][CUTS[cut].length - 1];
/**
 * A cut's clock, for the score: at(shot, f) is the time in seconds at which the film shows that shot's own frame f
 * (f = the shot's first frame in the cut if left out). at.part(shot, u) is the time a fraction u (0..1) of the way
 * through the shot's place in the cut, however much of the shot the cut plays.
 */
export function clock(cut) {
  const by = Object.fromEntries(CUTS[cut].map((e) => [e.id, e]));
  const at = (shot, f) => { const e = by[shot]; return (e.start + ((f ?? e.from) - e.from) / e.speed) / FPS; };
  at.part = (shot, u) => (by[shot].start + u * by[shot].frames) / FPS;
  return at;
}
