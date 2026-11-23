// Words and product on the picture.
//
// The film is told in plain sentences, one a shot, for someone who has never heard of a microVM. The technical name
// of what the shot shows is the small label above the sentence: there for the reader who wants it, easy to ignore
// for the one who does not.
// The product itself appears as the console's panel in the top left corner, which changes with what the shot is
// about (the app and its services, a release being rolled back, previews, shadow traffic, MCP tools, the budget), and
// as a terminal near the end.
//
// Sentences, the terminal and the end card are drawn on a canvas shown in front of the lens on the effects layer, so
// they sit under the same bloom, grade and grain as the picture. The panel is not: it is laid over the finished
// frame (the engine's overlay), so its white stays white.
//
// All of the film's copy is here: CAPTIONS, APP, TERMINAL, CARD, and the panels the shots ask for by name (PANELS).
import * as THREE from 'three';
import { C, NIGHT } from './look.js';

export const FONT = '"Familjen Grotesk", "Segoe UI", system-ui, sans-serif';
export const MONO = '"Spline Sans Mono", "Cascadia Mono", Consolas, monospace';

// key -> { label (the technical name, small), head, line (plain words) }
export const CAPTIONS = {
  wind: { label: 'Gregale', head: 'Gregale is a wind.', line: 'It carries people to your app.' },
  edgeA: { label: 'Edge  ·  your domain, TLS, routing', head: 'It meets them at the door,', line: '' },
  edgeB: { label: 'WAF  ·  rate limits  ·  edge rules', head: 'and keeps trouble outside.', line: '' },
  services: { label: 'Multi-service apps', head: 'Every part of your app', line: 'starts together.' },
  code: { label: 'Runtime  ·  Node, Python, any container', head: 'It runs your code', line: 'just as you wrote it,' },
  data: { label: 'Managed Postgres  ·  object storage', head: 'and keeps your data beside it.', line: '' },
  room: { label: 'Isolation  ·  a microVM for each one', head: 'Each app has a room of its own,', line: 'sealed off from everyone else’s.' },
  rollback: { label: 'Rollbacks', head: 'If a release goes wrong,', line: 'the last good one comes back.' },
  previews: { label: 'PR previews', head: 'Every change gets a copy of its own', line: 'to try before it is real.' },
  shadow: { label: 'Shadow traffic', head: 'A new version can rehearse on real visits.', line: 'No one notices.' },
  mcp: { label: 'MCP hosting', head: 'And when the visitor is an AI,', line: 'its tools are here too.' },
  busy: { label: 'Budgets  ·  spend caps', head: 'A busy night costs', line: 'what you said it could.' },
  quiet: { label: 'Scale to zero', head: 'And when the bay is quiet,', line: 'so is the bill.' },
};
// The app in the story, as the console shows it.
export const APP = { name: 'hello', url: 'hello.gregale.dev' };
// The console panel for each beat: (state the shot passes) -> { title, sub, badge: [kind, text], chips: [[kind, text], ...], bar }.
// kinds: running, waking, sleeping, bad, preview, shadow, off.
export const PANELS = {
  services: ({ on }) => ({ title: APP.name, sub: APP.url, chips: ['api', 'web', 'worker'].map((s) => [on ? 'running' : 'sleeping', s]) }),
  code: () => ({ title: APP.name, sub: APP.url, chips: ['api', 'web', 'worker'].map((s) => ['running', s]) }),
  data: ({ db, files }) => ({ title: APP.name, sub: APP.url, chips: [[db ? 'running' : 'off', 'postgres'], [files ? 'running' : 'off', 'storage']] }),
  room: () => ({ title: APP.name, sub: APP.url, badge: ['running', 'Running'] }),
  rollback: ({ stage }) => ({ title: APP.name, sub: APP.url, badge: [['running', 'v41  ·  Running'], ['waking', 'Deploying v42'], ['bad', 'v42 is failing'], ['waking', 'Rolling back'], ['running', 'v41  ·  Running']][stage] }),
  previews: ({ n }) => ({ title: APP.name, sub: n ? `pr-${40 + n}.${APP.url}` : APP.url, chips: [1, 2, 3].map((i) => [i <= n ? 'preview' : 'off', `pr-${40 + i}`]) }),
  shadow: ({ pct }) => ({ title: APP.name, sub: APP.url, chips: [['running', 'v42  ·  live'], [pct ? 'shadow' : 'off', pct ? `v43  ·  shadow ${pct}%` : 'v43  ·  staged']] }),
  mcp: ({ used = '0000' }) => ({ title: 'hello-tools', sub: 'MCP server', badge: ['running', 'Running'], chips: ['search', 'orders', 'refund', 'notify'].map((s, i) => [used[i] === '1' ? 'running' : 'off', s]) }),
  budget: ({ spent, asleep }) => ({ title: APP.name, sub: APP.url, badge: asleep ? ['sleeping', 'Sleeping'] : ['running', 'Running'], bar: { value: spent, cap: 0.86, left: 'This month', right: 'Budget' } }),
};
// The terminal near the end. `type` is typed a letter at a time; each of `out` appears whole.
export const TERMINAL = { over: 'Putting your app here takes one line.', title: 'hello — zsh', type: 'gregale deploy', out: [['Built', ''], ['Live at ', 'https://hello.gregale.dev']] };
export const CARD = { name: 'Gregale', line: 'Everything your app needs, working together.', url: 'gregale.dev' };

// The mark: Gregale's logo, read once. It is green on nothing, so its alpha is its shape and it can be laid down in
// its own green (on the console's light surfaces) or in one flat colour (on the picture).
const LOGO = typeof Image === 'undefined' ? null : await new Promise((done) => { const im = new Image(); im.onload = () => done(im); im.onerror = () => done(null); im.src = new URL('../../assets/gregale-logo.png', import.meta.url).href; });
const tints = new Map();
function logo(color) {
  if (!LOGO) return null; if (!color) return LOGO;
  if (!tints.has(color)) { const cv = document.createElement('canvas'); cv.width = cv.height = 512; const x = cv.getContext('2d'); x.drawImage(LOGO, 0, 0, 512, 512); x.globalCompositeOperation = 'source-in'; x.fillStyle = color; x.fillRect(0, 0, 512, 512); tints.set(color, cv); }
  return tints.get(color);
}

const INK = 'rgba(24,14,34,0.62)';
const PANEL_SCALE = 1.2;   // the console panel, against the sizes it is drawn at below
const KIND = { running: ['#d3fae8', '#006f40'], waking: ['#fff0c4', '#8a5a00'], sleeping: ['#eff3f1', '#55625c'], bad: ['#fde4e4', '#b42020'], preview: ['#ece4fd', '#5b21b6'], shadow: ['#e6eef6', '#35557a'], off: ['#f3f5f4', '#9aa6a0'] };
const rr = (ctx, x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };

/**
 * The film's words and product cards. `camera` must be in the scene (scene.add(camera)): the words are its child.
 *   const type = overlay(k, camera);
 *   type.caption('edgeA', alpha)        a sentence, bottom left, with its label
 *   type.panel('rollback', { stage }, alpha, f)   the console panel, top left (see PANELS); f turns a waking spinner
 *   type.terminal(f0, alpha, f)         the terminal: typing starts at frame f0
 *   type.card(alpha)                    the end card: logo, name, line, address
 *   type.clear()                        no words
 * Call what the shot shows every frame from update(). The film calls frame() before update() and ui() after it: a
 * panel that was not asked for this frame is gone.
 */
export function overlay(k, camera) {
  // ---- the words: a canvas on a card in front of the lens
  const cv = document.createElement('canvas'); cv.width = 1920; cv.height = 1080;
  const ctx = cv.getContext('2d'), tex = new THREE.CanvasTexture(cv);
  tex.minFilter = THREE.LinearFilter; tex.magFilter = THREE.LinearFilter; tex.generateMipmaps = false;
  const alpha = { value: 0 }, slide = { value: 0 }, tone = { value: 1 };
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), k.fx({
    uniforms: { tType: { value: tex }, uTA: alpha, uSlide: slide, uTone: tone },
    frag: /* glsl */ `uniform sampler2D tType; uniform float uTA,uSlide,uTone;
      vec4 effect(){ vec4 t=texture(tType,vUv+vec2(uSlide,0.)); return vec4(t.rgb*t.a*uTone,t.a)*uTA; }`,
  }));
  mesh.frustumCulled = false; mesh.renderOrder = 1000; mesh.visible = false; k.onFx(mesh); camera.add(mesh);
  const fit = () => { const d = camera.near * 1.25, H = 2 * d * Math.tan((camera.fov * Math.PI) / 360); mesh.position.set(0, 0, -d); mesh.scale.set(H * camera.aspect, H, 1); };
  let shown = null;
  const words = (key, draw, a, dx = 0, t = 1) => { fit(); if (shown !== key) { ctx.clearRect(0, 0, 1920, 1080); draw(); tex.needsUpdate = true; shown = key; } alpha.value = a; slide.value = dx; tone.value = t; mesh.visible = a > 0.001; };

  const text = (c, s, x, y, { size = 40, weight = 500, color = C.cream, align = 'left', track = 0, shadow = 16, font = FONT } = {}) => {
    c.font = `${weight} ${size}px ${font}`; c.textAlign = align; c.textBaseline = 'alphabetic'; c.fillStyle = color;
    c.shadowColor = shadow ? INK : 'transparent'; c.shadowBlur = shadow; c.shadowOffsetY = shadow ? 2 : 0;
    try { c.letterSpacing = `${track}px`; } catch {}
    c.fillText(s, x, y); if (shadow) c.fillText(s, x, y);   // twice: the shadow builds up enough to hold the letters on a bright sea
    const w = c.measureText(s).width;
    try { c.letterSpacing = '0px'; } catch {}
    c.shadowColor = 'transparent'; c.shadowBlur = 0; c.shadowOffsetY = 0;
    return w;
  };
  // the logo in one flat colour, with the same soft shadow the letters have
  const mark = (x, y, size, color, shadow = 12) => { const im = logo(color); if (!im) return; ctx.save(); ctx.shadowColor = shadow ? INK : 'transparent'; ctx.shadowBlur = shadow; ctx.drawImage(im, x, y, size, size); ctx.restore(); };

  function drawCaption(key) {
    const c = CAPTIONS[key]; if (!c) return;
    const x = 104, y = 872;
    // a soft wash under the words so they hold on any picture
    const g = ctx.createLinearGradient(0, 720, 0, 1080); g.addColorStop(0, 'rgba(20,12,30,0)'); g.addColorStop(1, 'rgba(20,12,30,0.36)'); ctx.fillStyle = g; ctx.fillRect(0, 720, 1920, 360);
    mark(x, y - 27, 34, C.mintLit);
    text(ctx, c.label.toUpperCase(), x + 48, y, { size: 21, weight: 600, color: C.mintLit, track: 3.6 });
    text(ctx, c.head, x, y + 62, { size: 50, weight: 500 });
    if (c.line) text(ctx, c.line, x, y + 122, { size: 50, weight: 500 });
  }

  // The terminal: a dark window, the command typed, and what it answers.
  function drawTerminal(typed, lines, cursor) {
    const g = ctx.createRadialGradient(960, 500, 80, 960, 500, 820); g.addColorStop(0, 'rgba(14,10,26,0.4)'); g.addColorStop(1, 'rgba(14,10,26,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 1080);
    text(ctx, TERMINAL.over, 960, 266, { size: 50, weight: 500, align: 'center', shadow: 20 });
    const w = 940, h = 318, x = 960 - w / 2, y = 344;
    ctx.save(); ctx.shadowColor = 'rgba(6,10,9,0.5)'; ctx.shadowBlur = 44; ctx.shadowOffsetY = 16; rr(ctx, x, y, w, h, 20); ctx.fillStyle = 'rgba(11,21,18,0.95)'; ctx.fill(); ctx.restore();
    rr(ctx, x + 0.5, y + 0.5, w - 1, h - 1, 20); ctx.strokeStyle = 'rgba(125,245,200,0.22)'; ctx.lineWidth = 1.5; ctx.stroke();
    for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(x + 34 + i * 26, y + 32, 7, 0, 6.283); ctx.fillStyle = 'rgba(211,250,232,0.22)'; ctx.fill(); }
    text(ctx, TERMINAL.title, 960, y + 39, { size: 20, weight: 400, color: 'rgba(211,250,232,0.5)', align: 'center', shadow: 0, font: MONO });
    ctx.fillStyle = 'rgba(125,245,200,0.12)'; ctx.fillRect(x, y + 62, w, 1.5);
    const lx = x + 46; let ly = y + 128;
    const pw = text(ctx, '$ ', lx, ly, { size: 32, weight: 500, color: C.mint, shadow: 0, font: MONO });
    const cw = text(ctx, TERMINAL.type.slice(0, typed), lx + pw, ly, { size: 32, weight: 500, color: '#f4fbf7', shadow: 0, font: MONO });
    if (cursor && !lines) { ctx.fillStyle = C.mintLit; ctx.fillRect(lx + pw + cw + 3, ly - 27, 16, 33); }
    TERMINAL.out.slice(0, lines).forEach(([a, b]) => {
      ly += 60;
      const tick = text(ctx, '✓ ', lx, ly, { size: 30, weight: 600, color: C.mint, shadow: 0, font: MONO });
      const aw = text(ctx, a, lx + tick, ly, { size: 30, weight: 400, color: 'rgba(244,251,247,0.82)', shadow: 0, font: MONO });
      if (b) { const bw = text(ctx, b, lx + tick + aw, ly, { size: 30, weight: 500, color: C.mintLit, shadow: 0, font: MONO }); ctx.fillStyle = 'rgba(125,245,200,0.6)'; ctx.fillRect(lx + tick + aw, ly + 7, bw, 2); }
    });
    if (cursor && lines >= TERMINAL.out.length) { ly += 60; const p2 = text(ctx, '$ ', lx, ly, { size: 32, weight: 500, color: C.mint, shadow: 0, font: MONO }); ctx.fillStyle = C.mintLit; ctx.fillRect(lx + p2 + 3, ly - 27, 16, 33); }
  }

  function drawCard() {
    const g = ctx.createRadialGradient(960, 500, 80, 960, 500, 780); g.addColorStop(0, 'rgba(14,10,26,0.44)'); g.addColorStop(1, 'rgba(14,10,26,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, 1920, 1080);
    mark(960 - 82, 232, 164, C.cream, 26);
    text(ctx, CARD.name, 960, 560, { size: 150, weight: 600, align: 'center', track: -2.5, shadow: 26 });
    text(ctx, CARD.line, 960, 634, { size: 42, weight: 400, align: 'center', color: '#f4ead8' });
    text(ctx, CARD.url, 960, 712, { size: 32, weight: 600, align: 'center', color: C.mintLit, track: 2 });
  }

  // ---- the console panel: its own canvas, laid over the finished frame, in the console's own colours
  const pv = document.createElement('canvas'); pv.width = 1920; pv.height = 1080;
  const px = pv.getContext('2d'), ptex = new THREE.CanvasTexture(pv);
  ptex.minFilter = THREE.LinearFilter; ptex.magFilter = THREE.LinearFilter; ptex.generateMipmaps = false;
  let want = null, have = null;
  const dot = (kind, cx, cy, spin, col) => {
    px.lineWidth = 2.6; px.strokeStyle = col; px.fillStyle = col; px.lineCap = 'round';
    if (kind === 'running') { px.beginPath(); px.arc(cx, cy, 10.5, 0, 6.283); px.fillStyle = 'rgba(0,206,145,0.28)'; px.fill(); px.beginPath(); px.arc(cx, cy, 6.2, 0, 6.283); px.fillStyle = '#00ce91'; px.fill(); }
    else if (kind === 'waking') { const a = spin * (Math.PI / 4); px.beginPath(); px.arc(cx, cy, 7.2, a, a + 4.4); px.stroke(); }
    else if (kind === 'bad') { px.beginPath(); px.moveTo(cx - 5.5, cy - 5.5); px.lineTo(cx + 5.5, cy + 5.5); px.moveTo(cx + 5.5, cy - 5.5); px.lineTo(cx - 5.5, cy + 5.5); px.stroke(); }
    else if (kind === 'preview') { px.beginPath(); px.arc(cx, cy, 6.2, 0, 6.283); px.fill(); }
    else if (kind === 'off') { px.beginPath(); px.arc(cx, cy, 6.6, 0, 6.283); px.stroke(); }
    else { px.setLineDash([4, 3.4]); px.beginPath(); px.arc(cx, cy, 7.2, 0, 6.283); px.stroke(); px.setLineDash([]); }   // sleeping, shadow: a dashed ring
  };
  const pill = (kind, label, x, y, spin, size = 21) => { const [bg, fg] = KIND[kind]; px.font = `600 ${size}px ${FONT}`; const w = px.measureText(label).width + 56; rr(px, x, y, w, 38, 19); px.fillStyle = bg; px.fill(); dot(kind, x + 21, y + 19, spin, fg); text(px, label, x + 39, y + 26, { size, weight: 600, color: fg, shadow: 0 }); return w; };
  function drawPanel(p, spin, a) {
    px.clearRect(0, 0, 1920, 1080); px.globalAlpha = a;
    px.save(); px.translate(72, 56); px.scale(PANEL_SCALE, PANEL_SCALE); px.translate(-72, -56);   // about its top left corner
    const x = 72, y = 56, pad = 24; px.font = `600 21px ${FONT}`;
    const chipsW = (p.chips ?? []).reduce((s, [, t]) => s + px.measureText(t).width + 56 + 10, 0) - 10, badgeW = p.badge ? px.measureText(p.badge[1]).width + 56 : 0;
    px.font = `600 32px ${FONT}`; const titleW = px.measureText(p.title).width; px.font = `400 19px ${MONO}`; const subW = px.measureText(p.sub ?? '').width;
    const w = Math.max(430, 104 + Math.max(titleW, subW) + (badgeW ? badgeW + 34 : 0) + pad, chipsW + pad * 2, p.bar ? 520 : 0), h = 104 + (p.chips ? 54 : 0) + (p.bar ? 70 : 0);
    px.save(); px.shadowColor = 'rgba(13,21,18,0.38)'; px.shadowBlur = 26; px.shadowOffsetY = 8; rr(px, x, y, w, h, 20); px.fillStyle = '#fbfcfb'; px.fill(); px.restore();
    rr(px, x + 0.5, y + 0.5, w - 1, h - 1, 20); px.strokeStyle = '#e4eae7'; px.lineWidth = 1; px.stroke();
    const im = logo(null); if (im) px.drawImage(im, x + 22, y + 22, 60, 60);
    text(px, p.title, x + 102, y + 50, { size: 32, weight: 600, color: '#0d1512', shadow: 0 });
    if (p.sub) text(px, p.sub, x + 102, y + 80, { size: 19, weight: 400, color: '#55625c', shadow: 0, font: MONO });
    if (p.badge) pill(p.badge[0], p.badge[1], x + w - badgeW - pad + 2, y + 33, spin);
    let yy = y + 100;
    if (p.chips) { let cx = x + pad; for (const [kind, label] of p.chips) cx += pill(kind, label, cx, yy, spin) + 10; yy += 54; }
    if (p.bar) {
      // the budget: what has been spent this month, and the cap it will not pass
      const bx = x + pad, bw = w - pad * 2, by = yy + 30;
      text(px, p.bar.left, bx, yy + 16, { size: 18, weight: 500, color: '#55625c', shadow: 0 }); text(px, p.bar.right, bx + bw * p.bar.cap, yy + 16, { size: 18, weight: 600, color: '#0d1512', shadow: 0, align: 'center' });
      rr(px, bx, by, bw, 14, 7); px.fillStyle = '#e4eae7'; px.fill();
      rr(px, bx, by, Math.max(14, bw * Math.min(p.bar.value, p.bar.cap)), 14, 7); px.fillStyle = '#00ce91'; px.fill();
      px.fillStyle = '#0d1512'; px.fillRect(bx + bw * p.bar.cap - 1.5, by - 7, 3, 28);
    }
    px.restore(); px.globalAlpha = 1;
  }

  return {
    /** The film calls this before a shot's update(): nothing is asked for yet. */
    frame() { want = null; },
    /** ...and this after it: the panel's texture if one was asked for this frame, or null. */
    ui() { if (!want) return null; if (want.key !== have) { drawPanel(want.p, want.spin, want.a); ptex.needsUpdate = true; have = want.key; } return ptex; },
    /** A sentence. a: 0..1; the words drift in from the left as they appear. */
    caption(key, a = 1) { words(key, () => drawCaption(key), a, (1 - a) * 0.012, NIGHT ? 0.84 : 1); },
    /** The console panel for a beat (see PANELS), with the state the shot is in. f turns a waking spinner, on twos. */
    panel(name, state = {}, a = 1, f = 0) {
      if (a <= 0.01) return; const p = PANELS[name](state), spin = Math.floor(f / 2) % 8, busy = JSON.stringify(p).includes('"waking"');
      want = { p, spin, a: Math.round(a * 16) / 16, key: `${name}:${JSON.stringify(state)}:${busy ? spin : 0}:${Math.round(a * 16)}` };
    },
    /** The terminal. Typing starts at frame f0, two frames a letter; the answers follow. */
    terminal(f0, a, f) {
      const n = TERMINAL.type.length, typed = Math.max(0, Math.min(n, Math.floor((f - f0) / 2))), done = f0 + n * 2;
      const lines = Math.max(0, Math.min(TERMINAL.out.length, f < done + 12 ? 0 : 1 + Math.floor((f - done - 12) / 16))), cursor = Math.floor(f / 8) % 2 === 0 || (typed > 0 && typed < n);
      words(`term:${typed}:${lines}:${cursor ? 1 : 0}`, () => drawTerminal(typed, lines, cursor), a);
    },
    card(a = 1) { words('__card', drawCard, a); },
    clear() { alpha.value = 0; mesh.visible = false; },
    /** The film calls this when it drops the shot: the panel's texture is in no material, so nothing else frees it. */
    dispose() { ptex.dispose(); tex.dispose(); pv.width = pv.height = cv.width = cv.height = 1; },
  };
}

/** A caption's alpha over a shot: in over `fin` frames starting at `a`, held, out over `fout` frames ending at `b`. */
export const fadeIO = (k, f, a, b, fin = 14, fout = 12) => k.smooth(a, a + fin, f) * (1 - k.smooth(b - fout, b, f));
