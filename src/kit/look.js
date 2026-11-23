// The film's colours and its light, in two looks.
//   day    a Mediterranean bay at the end of the day: lilac above, peach at the horizon, teal water
//   night  (?look=night) the same bay under a low moon and stars: surfaces go dark blue, and what is lit is what the
//          film is about. A sleeping raft is a silhouette; an awake one is the light in the frame.
// Gregale's mint is the colour of anything of the platform that is awake, in both.
export const NIGHT = typeof location !== 'undefined' && new URLSearchParams(location.search).get('look') === 'night';

const DAY_C = {
  mint: '#00ce91', mintLit: '#7df5c8', mintPale: '#d3fae8', mintDeep: '#006f40', forest: '#00482a',
  cream: '#fbf3dc', glow: '#fff3b8', ember: '#ff9a4a',
  // stone and plaster
  wallA: '#f2e2c4', wallB: '#eed2b6', wallC: '#e9bda8', wallD: '#f1cba4', wallE: '#e8dccd', wallF: '#f5e8d4', stone: '#d9c6a4', stoneDark: '#b7a184',
  roof: '#c8643c', roofB: '#b5552f', roofC: '#d67a4a', shutter: '#3f8f86', shutterB: '#5a7fa8', shutterC: '#7a9a5a',
  slate: '#6f6890', slateDark: '#4f4a72', brass: '#c79a45', brassDark: '#8a6a2c', rust: '#b5562f',
  wood: '#9a744c', woodDark: '#6e5136', canvas: '#f6ecd6', rope: '#d8c08a',
  // growth
  cypress: ['#143a30', '#1f5238', '#2f6b3f', '#4d8a48'], pine: ['#1d4a34', '#2f6a3e', '#4f8c46', '#8fb657'], grass: ['#2f6b3a', '#4d8a44', '#86b24e', '#cfd46a'],
  bougain: ['#a3246a', '#cf3f86', '#ee6aa4', '#f9a8c8'], petals: ['#cf3f86', '#ee6aa4', '#f9a8c8', '#fbf3dc', '#d3fae8'],
  // sea and sky
  sea0: '#1c7f86', sea1: '#2f9d97', sea2: '#7fd3bf', foam: '#fdf6e4', seaRefl: '#f3b8a0', glint: '#fff1c0',
  skyTop: '#8f79c2', skyMid: '#e9a9b4', skyHor: '#ffd69a', sun: '#fff1c0', cloudLit: '#ffd9ae', cloudMid: '#f0a09a', cloudShade: '#a987c8',
  haze: '#f2c4b4', hazeSun: '#ffd9a0',
  // the deep
  deepTop: '#3fb5a4', deepSky: '#1f8a8c', deepMid: '#1d7f86', deepLow: '#0d3f52', deepFog: '#16707a',
  ink: '#2a1d1a',
};
const NIGHT_C = {
  ...DAY_C,
  petals: ['#3a3f6a', '#4a4f7e', '#5a6a96', '#6f86a8', '#3f6a78'],
  sea0: '#071a30', sea1: '#0d2a44', sea2: '#1d4a5e', foam: '#5a88a2', seaRefl: '#2a5078', glint: '#86a8c0',
  skyTop: '#080c2a', skyMid: '#152658', skyHor: '#2b5478', sun: '#f6f1da', cloudLit: '#4a5c92', cloudMid: '#2a3668', cloudShade: '#141c44',
  haze: '#27496e', hazeSun: '#42688e',
  deepTop: '#17545e', deepSky: '#0c3a48', deepMid: '#0c3440', deepLow: '#051a26', deepFog: '#082834',
};
// First light, which the night film ends on (s10 goes from the night's colours to these).
export const DAWN_C = {
  sea0: '#1f5f78', sea1: '#3a8a94', sea2: '#8fc8bc', foam: '#fbf0e2', seaRefl: '#f2b6a2',
  skyTop: '#5a6ab0', skyMid: '#e59aa6', skyHor: '#ffd08e', sun: '#ffe9c4', cloudLit: '#ffc9a4', cloudMid: '#e88f96', cloudShade: '#8a78b8',
  haze: '#e8b0a8', hazeSun: '#ffd49a',
};
export const C = NIGHT ? NIGHT_C : DAY_C;

// Which way the gregale blows (world x, z): across the frame from the left and a little toward the lens.
export const WIND = [0.9, 0.42];
// The sun, low over the far end of the bay, left of centre; by night the moon, a little higher in the same quarter.
export const SUN = NIGHT ? [-0.31, 0.2, -0.93] : [-0.33, 0.085, -0.94];
// Ambient: what every unlit surface is multiplied by. Lights (lantern glass, windows, the boat's face) are added after it.
export const AMB = NIGHT ? [0.3, 0.4, 0.62] : [1, 1, 1];
// How much night there is, 0..1. Kits read it whenever they set a light, so a shot can let the day come (s10).
export const LIGHT = { night: NIGHT ? 1 : 0 };

/** The surface shots' look. (Named for the first film; by night it is the night's.) */
export const DAY = NIGHT ? {
  sun: SUN, fogColor: C.haze, fogSun: C.hazeSun, fog: [0.0024, 0, 0.012, 0.9], inkFade: 0.004, ambient: AMB,
  ink: 1.05, inkAlpha: 0.8, bloom: 1.1, bloomThreshold: 0.7, contrast: 0.24, saturation: 1.12, lift: 0.03, tint: [0.98, 1.0, 1.05], vignette: 0.44, grain: 0.03, paper: 0.07,
} : {
  sun: SUN, fogColor: C.haze, fogSun: C.hazeSun, fog: [0.0019, 0, 0.012, 0.9], inkFade: 0.004, ambient: AMB,
  ink: 1.1, inkAlpha: 0.86, bloom: 0.55, bloomThreshold: 0.8, contrast: 0.2, saturation: 1.1, lift: 0.045, tint: [1.02, 0.99, 0.97], vignette: 0.3, grain: 0.028, paper: 0.075,
};
/** The dawn the night film ends on: the same settings the day has, for s10 to move toward. */
export const DAWN = { fogColor: DAWN_C.haze, fogSun: DAWN_C.hazeSun, fog: [0.0021, 0, 0.012, 0.9], ambient: [0.86, 0.84, 0.92], bloom: 0.6, bloomThreshold: 0.8, vignette: 0.32 };
/** Under the water: everything goes to teal a few lengths off, light falls from above. By night it is moonlight, and little of it. */
export const DEEP = NIGHT ? {
  sun: [0.12, 0.96, -0.2], fogColor: C.deepFog, fogSun: '#1f6e6a', fog: [0.019, 0, 0, 0.95], inkFade: 0.02, ambient: [0.44, 0.62, 0.68],
  ink: 1.0, inkAlpha: 0.78, bloom: 1.2, bloomThreshold: 0.56, contrast: 0.24, saturation: 1.1, lift: 0.03, tint: [0.96, 1.02, 1.02], vignette: 0.52, grain: 0.03, paper: 0.07,
} : {
  sun: [0.12, 0.96, -0.2], fogColor: C.deepFog, fogSun: '#5fd6bb', fog: [0.016, 0, 0, 0.94], inkFade: 0.02, ambient: [1, 1, 1],
  ink: 1.05, inkAlpha: 0.8, bloom: 0.85, bloomThreshold: 0.62, contrast: 0.22, saturation: 1.08, lift: 0.04, tint: [0.96, 1.02, 1.0], vignette: 0.42, grain: 0.03, paper: 0.07,
};
// How bright the console's light card is laid down (a white card blooms): on the surface, and under water.
export const CHIP_TONE = NIGHT ? [0.58, 0.46] : [0.82, 0.6];
