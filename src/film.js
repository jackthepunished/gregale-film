// Loads shots on demand and renders (shot, frame). A shot module exports:
//   export default { build(k, opts) -> state { scene, camera, ... }, update(state, f, k) -> look overrides }
// `f` is the frame inside the shot. build() runs once; update() must be a pure function of f.
// (The loader is The Tide Keeper's, MIT, Copyright (c) 2026 Reason Machines; see NOTICE.md.)
import { createEngine } from './engine/engine.js';
import { CUTS, total, shotAt } from './timeline.js';
import { NIGHT, LIGHT } from './kit/look.js';

const CUT = NIGHT ? 'night' : 'full', SHOTS = CUTS[CUT], TOTAL = total(CUT);

export const W = 1920, H = 1080, FPS = 24;

export function createFilm(canvas, opts = {}) {
  const k = createEngine(canvas, { width: W, height: H, ...opts });
  const cache = new Map();
  async function load(id, shotOpts) {
    const key = id + JSON.stringify(shotOpts ?? null);
    if (cache.has(key)) return cache.get(key);
    // keep at most two shots alive, and drop the oldest before building: scenes own GPU buffers, and three of the
    // heavy ones at once (two cached, one being built) is what a long render ran out of
    while (cache.size >= 2) { const [old] = cache.keys(), gone = cache.get(old).state; dispose(gone.scene); gone.type?.dispose?.(); cache.delete(old); }
    const mod = (await import(`./shots/${id}.js${opts.bust ? `?v=${opts.bust}` : ''}`)).default;
    const state = await mod.build(k, shotOpts ?? {});
    if (!state.scene || !state.camera) throw new Error(`${id}: build() must return { scene, camera }`);
    const entry = { mod, state };
    cache.set(key, entry);
    return entry;
  }
  function dispose(scene) {
    scene.traverse((o) => { if (!o.geometry?.userData?.shared) o.geometry?.dispose?.(); const m = o.material; (Array.isArray(m) ? m : m ? [m] : []).forEach((x) => { for (const u of Object.values(x.uniforms ?? {})) if (u?.value?.isTexture && !u.value.isDepthTexture && !u.value.isRenderTargetTexture) u.value.dispose(); x.dispose?.(); }); });
  }
  /** Render shot-local frame f. `fade` (0..1) multiplies the shot's own fade. */
  async function renderShot(id, f, shotOpts, fade = 1) {
    const { mod, state } = await load(id, shotOpts);
    const idx = SHOTS.findIndex((s) => s.id === id);
    LIGHT.night = NIGHT ? 1 : 0;   // a shot may let the day come (s10); every other frame starts from the look's own night
    state.type?.frame?.();
    const look = mod.update(state, f, k) || {};
    // the console panel, if the shot asked for one this frame, goes over the finished picture
    k.render(state.scene, state.camera, f, { ...look, fade: (look.fade ?? 1) * fade, overlay: state.type?.ui?.() ?? null }, idx + 1);
  }
  async function renderEntry(entry, i) {
    let fade = 1;
    if (entry.fadeIn) fade *= k.smooth(0, entry.fadeIn, i);
    if (entry.fadeOut) fade *= 1 - k.smooth(entry.fadeOut[0], entry.fadeOut[1], i);
    await renderShot(entry.id, entry.from + i, entry.opts, fade);
  }
  async function renderFrame(frame, cut = CUT) {
    const s = shotAt(frame, cut);
    await renderEntry(s, frame - s.start);
    return s;
  }
  return { k, CUT, CUTS, SHOTS, TOTAL, renderShot, renderEntry, renderFrame };
}
