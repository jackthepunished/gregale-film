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
// (s07 and s08, the keystone and the flame's return, are from the first film and are in no cut now.)
const tile = (list) => list.reduce((acc, [id, frames]) => { const prev = acc[acc.length - 1]; acc.push({ id, frames, from: 0, start: prev ? prev.start + prev.frames : 0 }); return acc; }, []);
const BODY = [['s01', 96], ['s02', 96], ['s03', 132], ['s03b', 120], ['s04', 144], ['s05', 108], ['s05b', 108], ['s06', 108], ['s11', 132], ['s12', 108], ['s13', 120], ['s14', 132], ['s09', 156], ['s09b', 156]];

export const CUTS = {
  full: tile([...BODY, ['s10', 240]]),    // 1956 frames, 81.5 s
  night: tile([...BODY, ['s10', 264]]),   // 1980 frames, 82.5 s
};
export const total = (cut) => CUTS[cut].reduce((s, x) => s + x.frames, 0);
export const shotAt = (frame, cut = 'full') => CUTS[cut].find((s) => frame >= s.start && frame < s.start + s.frames) ?? CUTS[cut][CUTS[cut].length - 1];
/** Each shot's first frame in a cut: { s01: 0, s02: 96, ... }. */
export const starts = (cut) => Object.fromEntries(CUTS[cut].map((s) => [s.id, s.start]));
