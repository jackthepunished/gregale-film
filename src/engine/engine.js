
// The Tide Keeper film engine: a deterministic cel-and-ink renderer on three.js.
//
// One frame is five passes:
//   1. opaque scene  -> colour + aux (view normal, ink id) + depth      (layer 0, MRT)
//   2. ink           -> hand-wobbled outlines from depth / normal / id edges
//   3. fx            -> mist, spray, light beams, swooshes               (layer 1, depth-tested in the shader)
//   4. bloom         -> quarter-res bright pass, separable blur
//   5. finish        -> depth of field, fx + bloom composite, grade, paper, vignette, grain
//
// Nothing reads a clock: a frame is a pure function of (shot, frame), so any frame can be
// rendered alone, in any order, by any number of parallel workers.
import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { NOISE, COMMON_UNIFORMS, VERT_COMMON, FRAG_COMMON, FRAG_DEFS, vertMain, billboardMain } from './glsl.js';

THREE.ColorManagement.enabled = false; // colours are authored display-referred; no hidden conversions

export const FPS = 24;
export const W = 1920;
export const H = 1040;

// ---------------------------------------------------------------- math helpers (JS side)
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
export const ease = {
  linear: (t) => t,
  in: (t) => t * t * t,
  out: (t) => 1 - Math.pow(1 - t, 3),
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outBack: (t) => { const c = 1.70158; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); },
  outElastic: (t) => (t === 0 || t === 1 ? t : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI) / 3) + 1),
};
/** Keyframes: keys([[frame, value, easeName?], ...], f). Values may be numbers or arrays. The ease on a key shapes the segment arriving at it. */
export function keys(ks, f) {
  if (f <= ks[0][0]) return ks[0][1];
  for (let i = 1; i < ks.length; i++) {
    if (f <= ks[i][0]) {
      const [f0, v0] = ks[i - 1]; const [f1, v1, e] = ks[i];
      const t = (ease[e || 'inOut'])((f - f0) / (f1 - f0));
      return Array.isArray(v0) ? v0.map((v, j) => lerp(v, v1[j], t)) : lerp(v0, v1, t);
    }
  }
  return ks[ks.length - 1][1];
}
/** Hold drawings for n frames: character animation is on twos (12 drawings a second), the camera on ones. */
export const twos = (f, n = 2) => Math.floor(f / n) * n;
export function rng(seed = 1) {
  let a = (seed * 2654435761) >>> 0;
  const r = () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  r.range = (lo, hi) => lo + (hi - lo) * r();
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.sign = () => (r() < 0.5 ? -1 : 1);
  return r;
}
const h3 = (x, y, z) => { let n = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 2147483647); n = Math.imul(n ^ (n >>> 13), 1274126177); return ((n ^ (n >>> 16)) >>> 0) / 4294967296; };
export function noise3(x, y = 0, z = 0) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  let xf = x - xi, yf = y - yi, zf = z - zi;
  xf = xf * xf * (3 - 2 * xf); yf = yf * yf * (3 - 2 * yf); zf = zf * zf * (3 - 2 * zf);
  const c = (a, b, d) => h3(xi + a, yi + b, zi + d);
  return lerp(lerp(lerp(c(0, 0, 0), c(1, 0, 0), xf), lerp(c(0, 1, 0), c(1, 1, 0), xf), yf), lerp(lerp(c(0, 0, 1), c(1, 0, 1), xf), lerp(c(0, 1, 1), c(1, 1, 1), xf), yf), zf);
}
export function fbm(x, y = 0, z = 0, oct = 4) { let s = 0, a = 0.5, n = 0; for (let i = 0; i < oct; i++) { s += a * noise3(x, y, z); n += a; x = x * 2.03 + 17.1; y = y * 2.03 + 9.2; z = z * 2.03 + 5.7; a *= 0.5; } return s / n; }
export const col = (hex) => new THREE.Color(hex);

// ---------------------------------------------------------------- palette (measured from The Moss Keeper, then shifted seaward)
export const PAL = {
  ink: '#2a1d1a',
  // metal + stone
  cream: '#f0d9a8', bone: '#e6cfa0', lilac: '#8f88b4', lilacDeep: '#5f5a86', rust: '#c2502c', rustDark: '#8e3a26',
  verdigris: '#73b3a4', verdigrisDark: '#3f8079', brass: '#c9a24a', slate: '#6f7896',
  // greens
  g0: '#1f5236', g1: '#3c8444', g2: '#84b94d', g3: '#dbdb6c', pine0: '#163d33', pine1: '#2a6a48',
  // sea
  sea0: '#1f5d6b', sea1: '#3f8f93', sea2: '#8cc7b5', foam: '#fbf3dc',
  // sky + light
  skyTop: '#6aa7ae', skyMid: '#cfe0bf', skyHor: '#f7c98a', sun: '#fff4c8', cloudLit: '#fdf0cf', cloudMid: '#f3b9a0', cloudShade: '#b98aa8',
  mist: '#f6ecd2', warm: '#ffd98a',
  // accents
  thrift: '#e889a6', flower: '#fbf6e6', kelp: '#4a5a2a', red: '#c9452f',
};

// ---------------------------------------------------------------- engine
export function createEngine(canvas, { width = W, height = H, samples = 4 } = {}) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(1);
  renderer.setSize(width, height, false);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  renderer.autoClear = false;
  const S = height / H; // resolution scale, so pixel-sized effects (ink width, blur) match at any render size

  const depthTexture = new THREE.DepthTexture(width, height);
  depthTexture.type = THREE.UnsignedIntType;
  const rtMain = new THREE.WebGLRenderTarget(width, height, { count: 2, samples, depthTexture, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter });
  const mk = (w, h) => new THREE.WebGLRenderTarget(w, h, { minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, depthBuffer: false });
  const rtInk = mk(width, height), rtFx = mk(width, height);
  const bw = Math.round(width / 4), bh = Math.round(height / 4);
  const rtB1 = mk(bw, bh), rtB2 = mk(bw, bh);

  // Global uniforms: every material holds references to these same objects.
  const G = {
    uTime: { value: 0 }, uTime2: { value: 0 }, uRes: { value: new THREE.Vector2(width, height) },
    uSunV: { value: new THREE.Vector3(0, 1, 0) }, uSunW: { value: new THREE.Vector3(0.3, 0.5, -0.8).normalize() },
    uFogColor: { value: col(PAL.mist) }, uFogSun: { value: col(PAL.warm) }, uFog: { value: new THREE.Vector4(0.004, 0, 0.05, 0.9) },
    uNearFar: { value: new THREE.Vector2(0.1, 5000) },
    uAmb: { value: new THREE.Vector3(1, 1, 1) },   // (Gregale) ambient: see look.ambient
    tDepth: { value: depthTexture },
  };

  // ------------------------------------------------------------ material factories
  /** Any opaque surface. `frag` must define `vec4 surface()` returning rgb + ink id in a (0 = never inked, 1..255). */
  function shader({ frag, vert = '', displace = '', uniforms = {}, side = THREE.FrontSide, defines = {}, billboard = false, ...rest }) {
    return new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3, side: billboard ? THREE.DoubleSide : side, defines,
      uniforms: { ...G, ...uniforms },
      vertexShader: `${COMMON_UNIFORMS}${NOISE}${VERT_COMMON}${vert}${(billboard ? billboardMain : vertMain)(displace)}`,
      fragmentShader: `${FRAG_DEFS}${COMMON_UNIFORMS}${NOISE}${FRAG_COMMON}${frag}
        void main(){ vec4 s = surface(); oColor = vec4(s.rgb,1.); oAux = vec4(normalize(vNv)*.5+.5, s.a/255.); }`,
      ...rest,
    });
  }

  let nextId = 1;
  const newId = () => { nextId = (nextId % 250) + 1; return nextId; };

  /**
   * Cel-shaded hard surface: lit / shade / deep bands with a hand-wobbled terminator, posterised patina
   * patches, painted stripes along object Y, drawn seam lines, growth on up-facing faces.
   *
   * The painter's hand (all in object space, so it stays put as the thing moves):
   *   mottle   pooled washes of a slightly darker and a slightly cooler tone
   *   streaks  grime that ran down the part (along object Y)
   *   cracks   sparse hairline cracks
   *   seamBreak  seams waver and the pen lifts along them, rivets go missing
   *   moss     { amount, line, drape, scale, flowers, colors, seed }: moss lies on what faced up while the thing sat
   *            still (uniform uMossB.xyz, object space; the owner sets it) and hangs down the sides in ragged curtains
   */
  function toon(o = {}) {
    const stripes = (o.stripes || []).slice(0, 4);
    const moss = o.moss ? { amount: 1, line: 0.46, drape: 0.8, scale: 0.5, flowers: 1, colors: [PAL.g0, PAL.g1, PAL.g2, PAL.g3], seed: 0, ...o.moss } : null;
    const u = {
      uLit: { value: col(o.color ?? PAL.cream) },
      uShadeMul: { value: col(o.shade ?? '#9c93c4') }, uDeepMul: { value: col(o.deep ?? '#5d5788') },
      uBands: { value: new THREE.Vector4(o.t1 ?? 0.12, o.t2 ?? -0.42, o.wobble ?? 0.22, o.wobbleScale ?? 1.2) },
      uPatA: { value: col(o.patinaA ?? PAL.verdigris) }, uPatB: { value: col(o.patinaB ?? PAL.rust) },
      uPat: { value: new THREE.Vector4(o.patinaScale ?? 1.5, o.patinaAmtA ?? 0, o.patinaAmtB ?? 0, o.patinaSeed ?? 0) },
      uPaint: { value: new THREE.Vector4(o.mottle ?? 0, o.cracks ?? 0, o.streaks ?? 0, o.seamBreak ?? 0) },
      uTop: { value: col(o.top ?? PAL.g1) }, uTopAmt: { value: new THREE.Vector3(o.topAmt ?? 0, o.topScale ?? 3, o.topDab ?? 4) },
      uStripes: { value: [0, 1, 2, 3].map((i) => (stripes[i] ? new THREE.Vector4(stripes[i].y, stripes[i].w, stripes[i].wear ?? 0.35, 1) : new THREE.Vector4(0, 0, 0, 0))) },
      uStripeCol: { value: [0, 1, 2, 3].map((i) => col(stripes[i]?.color ?? PAL.rust)) },
      uSeam: { value: new THREE.Vector4(o.seamY ?? 0, o.seamAround ?? 0, o.seamStrength ?? 0.7, o.rivets ?? 0) }, uRivet: { value: o.rivetSize ?? 0.05 },
      uInk: { value: col(PAL.ink) }, uEmis: { value: col(o.emissive ?? '#000000') }, uId: { value: o.ink === false ? 0 : (o.id ?? newId()) },
      uRim: { value: new THREE.Vector4(...col(o.rim ?? PAL.warm).toArray(), o.rimAmt ?? 0) },
      ...(moss ? {
        uMoss: { value: new THREE.Vector4(moss.line, moss.drape, moss.scale, moss.flowers) }, uMossB: { value: new THREE.Vector4(0, 1, 0, moss.seed) }, uMossAmt: { value: moss.amount },
        uMossC: { value: moss.colors.map((c) => col(c)) },
      } : {}),
      ...(o.uniforms || {}),
    };
    return shader({
      uniforms: u, side: o.side ?? THREE.FrontSide, displace: o.displace ?? '', defines: moss ? { MOSS: 1 } : {},
      frag: /* glsl */ `
      uniform vec3 uLit,uShadeMul,uDeepMul,uPatA,uPatB,uTop,uInk,uEmis; uniform vec4 uBands,uPat,uSeam,uRim,uPaint; uniform vec3 uTopAmt; uniform float uId,uRivet;
      uniform vec4 uStripes[4]; uniform vec3 uStripeCol[4];
      #ifdef MOSS
      uniform vec4 uMoss,uMossB; uniform vec3 uMossC[4]; uniform float uMossAmt;
      #endif
      ${o.fragHead ?? ''}
      vec4 surface(){
        vec3 n = normalize(vNv); if(!gl_FrontFacing) n = -n;
        vec3 c = uLit;
        #ifdef USE_INSTANCING_COLOR
          c *= vICol;
        #endif
        vec3 q = vObj;
        float wob = (fbm3(q*uBands.w)-.5);
        // painted stripes, chipped where the paint wore off
        for(int i=0;i<4;i++){ if(uStripes[i].w>.5){ float d=abs(q.y-uStripes[i].x)-uStripes[i].y*(1.+wob*.25);
          float chip=step(uStripes[i].z, fbm3(q*uPat.x*2.3+31.+uPat.w)); c=mix(c,uStripeCol[i],(1.-smoothstep(-.004,.004,d))*chip); } }
        // patina: two posterised patch layers
        float pa=fbm3(q*uPat.x+11.+uPat.w), pb=fbm3(q*uPat.x*1.7+57.+uPat.w);
        c=mix(c,uPatA,smoothstep(1.-uPat.y-.012,1.-uPat.y+.012,pa+.18*wob)*step(.001,uPat.y));
        c=mix(c,uPatB,smoothstep(1.-uPat.z-.012,1.-uPat.z+.012,pb)*step(.001,uPat.z));
        // the painter's hand: pooled washes, grime that ran down, hairline cracks
        float crack=0., green=0.;
        if(uPaint.x>0.){ c*=mix(1.,mix(.9,1.05,smoothstep(.47,.5,pb*.6+pa*.4+wob*.2)),uPaint.x);
          c=mix(c,c*vec3(.83,.81,.95),smoothstep(.63,.65,fbm3(q*uPat.x*2.7+13.+uPat.w))*uPaint.x*.75); }
        if(uPaint.z>0.){ float sk=fbm3(vec3(q.x*5.,q.y*.42,q.z*5.)*uPat.x*1.7+uPat.w*3.); c=mix(c,c*vec3(.77,.6,.5),smoothstep(.63,.65,sk)*uPaint.z); }
        if(uPaint.y>0.){ float cn=fbm3(q*uPat.x*1.5+uPat.w*5.+40.); float dn=abs(cn-.5)/max(fwidth(cn),1e-5);
          crack=(1.-smoothstep(.5,1.4,dn))*step(.58,fbm3(q*uPat.x*.8+17.+uPat.w))*uPaint.y*.6; }
        // growth on up-facing faces
        float top=smoothstep(.55,.62,vNw.y+(fbm3(vWorld*uTopAmt.y)-.5)*.7)*uTopAmt.x;
        if(top>0.){ vec2 dab=cell3(vWorld*uTopAmt.y*uTopAmt.z);
          c=mix(c,uTop*(dab.y<.3?.78:(dab.y<.75?1.:1.2)),top); }
        #ifdef MOSS
        { vec3 upo=uMossB.xyz; float up=dot(normalize(vNo),upo); float hgt=dot(q,upo); vec3 lat=q-upo*hgt;
          float lod=clamp(1.6-fwidth(q.x*uMoss.z*9.)*2.2-fwidth(q.y*uMoss.z*9.)*2.2,0.,1.);          // leaf-sized marks fade out before they alias
          float hang=fbm3((lat+upo*hgt*.26)*uMoss.z*1.7+uMossB.w);                                   // curtains: long down the part, narrow round it
          vec2 lf=cell3(q*uMoss.z*9.+uMossB.w);
          float m=up+(hang-.5)*uMoss.y*2.+(fbm3(q*uMoss.z*4.6+uMossB.w*2.)-.5)*.34-lf.x*.2*lod;
          float ms=smoothstep(uMoss.x,uMoss.x+.025,m)*uMossAmt;
          float tone=up*.32+(lf.y-.5)*.5*lod+(fbm3(q*uMoss.z*1.4+3.+uMossB.w)-.5)*.7+.36+(dot(n,uSunV)*.5+.5)*.22;
          vec3 mc=tone<.4?uMossC[0]:(tone<.6?uMossC[1]:(tone<.82?uMossC[2]:uMossC[3]));
          mc=mix(mc,uMossC[0],(1.-smoothstep(uMoss.x+.03,uMoss.x+.11,m))*.75);                        // a curtain's hem hangs in its own shade
          vec2 fl=cell3(q*uMoss.z*13.+uMossB.w*3.+50.);
          if(fl.y>1.-uMoss.w*.1&&fl.x<.24&&m>uMoss.x+.1&&lod>.5) mc=mix(vec3(.99,.96,.88),vec3(.96,.74,.28),step(fl.x,.08));   // small white flowers
          c=mix(c,mc,ms); top=max(top,ms); green=ms; }
        #endif
        ${o.fragColor ?? ''}
        c=mix(c,uInk,crack*(1.-top));
        // drawn seams, about one pixel wide at any distance; with seamBreak they waver and the pen lifts along them
        float sw=0., sb=1.;
        if(uPaint.w>0.&&(uSeam.x>0.||uSeam.y>0.)){ sw=(fbm3(q*uPat.x*.7+5.)-.5)*uPaint.w*.42; sb=mix(1.,step(.4,fbm3(q*uPat.x*2.3+23.+uPat.w)),uPaint.w); }
        if(uSeam.x>0.){ float v=q.y*uSeam.x+sw; float d=abs(fract(v)-.5)/max(fwidth(v),1e-5); c=mix(c,uInk,(1.-smoothstep(.5,1.5,d))*uSeam.z*(1.-top)*sb); }
        if(uSeam.y>0.){ float v=atan(q.z,q.x)/6.28318*uSeam.y+sw*.5; float fw=fwidth(v); float d=abs(fract(v)-.5)/max(fw,1e-5); c=mix(c,uInk,(1.-smoothstep(.5,1.5,d))*uSeam.z*(1.-top)*step(fw,.2)*sb); }
        if(uSeam.w>0.&&uSeam.x>0.){ float v=q.y*uSeam.x+sw; float rad=length(q.xz); float dv=(abs(fract(v)-.5)-.1)/uSeam.x; float aa=atan(q.z,q.x)*uSeam.w;
          float da=(fract(aa)-.5)/uSeam.w*rad; float rv=length(vec2(dv,da)); float keep=mix(1.,step(.22,hash11(floor(aa)+floor(v)*17.3+uPat.w)),uPaint.w);
          c=mix(c,uInk,(1.-smoothstep(uRivet*.7,uRivet,rv))*.8*(1.-top)*keep); }
        // cel bands
        float ndl=dot(n,uSunV)+wob*uBands.z;
        float lit=smoothstep(uBands.x-.012,uBands.x+.012,ndl), deep=1.-smoothstep(uBands.y-.012,uBands.y+.012,ndl);
        // growth keeps its green in shade instead of going lilac with the metal
        vec3 r=mix(c*mix(uShadeMul,vec3(.74,.86,.8),green),c,lit); r=mix(r,c*mix(uDeepMul,vec3(.5,.66,.62),green),deep);
        float rim=pow(1.-max(dot(n,normalize(-vViewPos)),0.),3.)*uRim.w*max(dot(n,uSunV)*.5+.5,0.);
        r+=uRim.rgb*step(.55,rim)*.25;
        return vec4(applyFog(r)+uEmis*(1.-fogAmount()),uId);   // (Gregale) what glows is not dimmed by the ambient
      }`,
    });
  }

  /**
   * Foliage: the leaf-dab look. A lumpy blob whose surface is broken into cells, posterised into four
   * greens, with a ragged cut-out silhouette so clumps read as stamped brush marks rather than spheres.
   */
  function leaf(o = {}) {
    const c = o.colors ?? [PAL.g0, PAL.g1, PAL.g2, PAL.g3];
    return shader({
      uniforms: {
        uC0: { value: col(c[0]) }, uC1: { value: col(c[1]) }, uC2: { value: col(c[2]) }, uC3: { value: col(c[3]) },
        uLeaf: { value: new THREE.Vector4(o.dab ?? 15, o.ragged ?? 0.5, o.lump ?? 1.5, o.lumpAmt ?? 0.42) },
        uLeafB: { value: new THREE.Vector4(o.seed ?? 0, o.sway ?? 0.02, o.light ?? 0, 0) },
      },
      vert: /* glsl */ `uniform vec4 uLeaf,uLeafB;`,
      displace: /* glsl */ `pos += nrm*((fbm3(pos*uLeaf.z+uLeafB.x)-.42)*uLeaf.w);
        pos.x += sin(uTime*1.7+pos.y*2.+uLeafB.x)*uLeafB.y*max(pos.y+.5,0.);`,
      frag: /* glsl */ `
      uniform vec3 uC0,uC1,uC2,uC3; uniform vec4 uLeaf,uLeafB;
      vec4 surface(){
        vec3 n=normalize(vNv);
        vec2 ce=cell3(vObj*uLeaf.x+uLeafB.x);
        float fres=abs(dot(n,normalize(-vViewPos)));
        if(fres<uLeaf.y*(.25+ce.y*.9)) discard;
        // top-lit like a painted clump: light gathers on the upper lobes, dark pools underneath
        float v=(vNw.y*.5+.5)*.5 + (dot(n,uSunV)*.5+.5)*.38 + (ce.y-.5)*.36 + (fbm3(vObj*uLeaf.x*.16+3.+uLeafB.x)-.5)*.5 + uLeafB.z;
        vec3 c=v<.36?uC0:(v<.56?uC1:(v<.76?uC2:uC3));
        if(ce.x<.22&&ce.y>.7&&v>.46) c=uC3;           // leaf glints
        if(ce.x<.2&&ce.y<.16&&v<.62) c=uC0;           // leaf-shaped holes of shadow
        #ifdef USE_INSTANCING_COLOR
          c*=vICol;
        #endif
        return vec4(applyFog(c),0.);
      }`,
    });
  }

  /** Painted sky dome: three-stop gradient, sun with halo, and layered cloud strips lit cream on top, pink beneath. */
  function sky(o = {}) {
    const u = {
      uTop: { value: col(o.top ?? PAL.skyTop) }, uMid: { value: col(o.mid ?? PAL.skyMid) }, uHor: { value: col(o.horizon ?? PAL.skyHor) },
      uSunCol: { value: col(o.sun ?? PAL.sun) }, uSunSize: { value: o.sunSize ?? 0.035 }, uGlow: { value: o.glow ?? 0.55 },
      uCLit: { value: col(o.cloudLit ?? PAL.cloudLit) }, uCMid: { value: col(o.cloudMid ?? PAL.cloudMid) }, uCShade: { value: col(o.cloudShade ?? PAL.cloudShade) },
      // x: horizontal scale, y: vertical scale, z: drift speed, w: coverage
      uCloud: { value: new THREE.Vector4(o.cloudScaleX ?? 1.6, o.cloudScaleY ?? 9, o.drift ?? 0.004, o.coverage ?? 0.5) },
      uCloudBand: { value: new THREE.Vector2(o.cloudLow ?? 0.1, o.cloudHigh ?? 0.75) }, uSkySeed: { value: o.seed ?? 0 },
    };
    const m = new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3, side: THREE.BackSide, depthTest: false, depthWrite: false, uniforms: { ...G, ...u },
      vertexShader: `out vec3 vDir; void main(){ vDir = position; gl_Position = projectionMatrix*viewMatrix*vec4(position+cameraPosition,1.); }`,
      fragmentShader: `${COMMON_UNIFORMS}${NOISE}
      in vec3 vDir; layout(location=0) out vec4 oColor; layout(location=1) out vec4 oAux;
      uniform vec3 uTop,uMid,uHor,uSunCol,uCLit,uCMid,uCShade; uniform float uSunSize,uGlow,uSkySeed; uniform vec4 uCloud; uniform vec2 uCloudBand;
      float dens(vec2 p){ return fbm2(p)+.35*fbm2(p*3.1+7.); }
      void main(){
        vec3 d=normalize(vDir); float e=d.y;
        vec3 c=mix(uHor,uMid,smoothstep(-.02,.2,e)); c=mix(c,uTop,smoothstep(.16,.62,e));
        float sd=dot(d,uSunW);
        c=mix(c,uSunCol,clamp((pow(max(sd,0.),10.)*.4+pow(max(sd,0.),90.)*.6)*uGlow,0.,1.));
        c=mix(c,uSunCol,smoothstep(1.-uSunSize*uSunSize*.5-.0006,1.-uSunSize*uSunSize*.5+.0006,sd));
        float az=atan(d.x,-d.z);
        // strip clouds: long flat-bottomed bars, stacked in a few rows, cream on top and pink beneath
        vec2 p=vec2(az*uCloud.x+uTime*uCloud.z+uSkySeed, e*uCloud.y);
        float band=smoothstep(uCloudBand.x,uCloudBand.x+.05,e)*(1.-smoothstep(uCloudBand.y-.15,uCloudBand.y,e));
        float rows=.5+.5*sin(p.y*2.6+fbm2(vec2(p.x*.35,3.))*5.);                 // rows that wander
        float dn=dens(p)*.75+rows*.33+(vnoise(p*vec2(22.,70.))-.5)*.03;         // dry-brush edge
        float th=1.12-uCloud.w*.5;
        float m=smoothstep(th-.006,th+.006,dn)*band;
        float up=dens(p+vec2(.03,.2))*.75+(.5+.5*sin((p.y+.2)*2.6+fbm2(vec2(p.x*.35,3.))*5.))*.33;
        float lit=dn-up;                                           // thicker here than just above = the cloud's top edge
        vec3 cc=mix(uCShade,uCMid,smoothstep(-.05,-.015,lit)); cc=mix(cc,uCLit,smoothstep(.0,.025,lit));
        cc=mix(cc,uCLit,pow(max(sd,0.),4.)*.6);
        c=mix(c,cc,m*.94);
        oColor=vec4(c,1.); oAux=vec4(.5,.5,1.,0.);
      }`,
    });
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(10, 32, 16), m);
    mesh.frustumCulled = false; mesh.renderOrder = -1000; mesh.userData.sky = true;
    return mesh;
  }

  /**
   * Effects layer material (mist, spray, beams, swooshes). `frag` defines `vec4 effect()` returning
   * premultiplied rgba. Rendered after the ink so effects are never outlined; depth is tested here.
   */
  function fx({ frag, vert = '', displace = '', uniforms = {}, additive = false, soft = 0, side = THREE.DoubleSide, billboard = false, ...rest }) {
    return new THREE.ShaderMaterial({
      glslVersion: THREE.GLSL3, side, depthTest: false, depthWrite: false, transparent: true,
      blending: THREE.CustomBlending, blendEquation: THREE.AddEquation, blendSrc: THREE.OneFactor, blendDst: additive ? THREE.OneFactor : THREE.OneMinusSrcAlphaFactor,
      blendSrcAlpha: THREE.OneFactor, blendDstAlpha: additive ? THREE.OneFactor : THREE.OneMinusSrcAlphaFactor,
      uniforms: { ...G, uSoft: { value: soft }, ...uniforms },
      vertexShader: `${COMMON_UNIFORMS}${NOISE}${VERT_COMMON}${vert}${(billboard ? billboardMain : vertMain)(displace)}`,
      fragmentShader: `${FRAG_DEFS}${COMMON_UNIFORMS}${NOISE}
        in vec3 vObj; in vec3 vWorld; in vec3 vNv; in vec3 vNw; in vec3 vViewPos; in vec2 vUv;
        #ifdef USE_INSTANCING_COLOR
        in vec3 vICol;
        #endif
        layout(location=0) out vec4 oColor; uniform sampler2D tDepth; uniform float uSoft;
        float linDepth(float d){float z=d*2.-1.;return 2.*uNearFar.x*uNearFar.y/(uNearFar.y+uNearFar.x-z*(uNearFar.y-uNearFar.x));}
        ${frag}
        void main(){
          float zs=linDepth(texture(tDepth,gl_FragCoord.xy/uRes).r), zf=linDepth(gl_FragCoord.z);
          if(zf>zs) discard;
          vec4 e=effect();
          if(uSoft>0.) e*=clamp((zs-zf)/uSoft,0.,1.);
          oColor=e;
        }`,
      ...rest,
    });
  }

  // ------------------------------------------------------------ post passes
  const quadGeo = new THREE.BufferGeometry();
  quadGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]), 3));
  const quad = new THREE.Mesh(quadGeo, null); quad.frustumCulled = false;
  const quadScene = new THREE.Scene(); quadScene.add(quad);
  const quadCam = new THREE.Camera();
  const post = (frag, uniforms) => new THREE.ShaderMaterial({
    glslVersion: THREE.GLSL3, depthTest: false, depthWrite: false, uniforms,
    vertexShader: `out vec2 vUv; void main(){ vUv = position.xy*.5+.5; gl_Position = vec4(position.xy,0.,1.); }`,
    fragmentShader: `${NOISE} in vec2 vUv; layout(location=0) out vec4 oColor; ${frag}`,
  });
  const runPass = (mat, target) => { quad.material = mat; renderer.setRenderTarget(target); renderer.render(quadScene, quadCam); };

  const inkMat = post(/* glsl */ `
    uniform sampler2D tColor,tAux,tDepth; uniform vec2 uRes,uNearFar; uniform vec4 uInkP; uniform vec3 uInkCol,uFogColor; uniform float uSeed,uInkFade;
    float lin(float d){float z=d*2.-1.;return 2.*uNearFar.x*uNearFar.y/(uNearFar.y+uNearFar.x-z*(uNearFar.y-uNearFar.x));}
    void main(){
      vec2 px=1./uRes; vec2 fc=vUv*uRes;
      // the hand: a slow wobble of where the line lands, and of how hard the pen is pressed
      vec2 wob=(vec2(vnoise(fc/(70.*uInkP.w)+uSeed),vnoise(fc/(70.*uInkP.w)+uSeed+9.7))-.5)*uInkP.y*px*uInkP.w;
      vec2 u=vUv+wob;
      float press=.55+.9*vnoise(fc/(46.*uInkP.w)+uSeed*1.3);
      float w=uInkP.x*uInkP.w*press;
      vec2 o1=px*w*vec2(1.,1.), o2=px*w*vec2(1.,-1.);
      vec4 a0=texture(tAux,u-o1),a1=texture(tAux,u+o1),a2=texture(tAux,u-o2),a3=texture(tAux,u+o2);
      float d0=lin(texture(tDepth,u-o1).r),d1=lin(texture(tDepth,u+o1).r),d2=lin(texture(tDepth,u-o2).r),d3=lin(texture(tDepth,u+o2).r);
      float dmin=min(min(d0,d1),min(d2,d3));
      float nid=d0<=dmin?a0.a:(d1<=dmin?a1.a:(d2<=dmin?a2.a:a3.a)); float inked=step(.002,nid);   // only the nearer surface draws the line
      float de=(abs(d0-d1)+abs(d2-d3))/dmin; de=smoothstep(.035,.07,de);
      float ne=length(a0.rgb-a1.rgb)+length(a2.rgb-a3.rgb); ne=smoothstep(.7,1.,ne)*step(.002,min(min(a0.a,a1.a),min(a2.a,a3.a)));
      float ie=step(.0015,abs(a0.a-a1.a)+abs(a2.a-a3.a));
      float e=max(max(de,ne),ie)*inked;
      e*=smoothstep(.12,.3,press+.2);                              // the pen lifts now and then
      float far=1.-exp(-dmin*uInkFade);                            // distant lines thin out into the haze
      vec3 c=texture(tColor,vUv).rgb;
      vec3 ink=mix(uInkCol,mix(c,uFogColor,.5)*.55,far);
      oColor=vec4(mix(c,ink,e*uInkP.z*(1.-far*.6)),1.);
    }`, {
    tColor: { value: rtMain.textures[0] }, tAux: { value: rtMain.textures[1] }, tDepth: { value: depthTexture },
    uRes: G.uRes, uNearFar: G.uNearFar, uFogColor: G.uFogColor, uInkCol: { value: col(PAL.ink) },
    uInkP: { value: new THREE.Vector4(1.15, 2.2, 0.92, S) }, uSeed: { value: 0 }, uInkFade: { value: 0.006 },
  });

  const brightMat = post(/* glsl */ `
    uniform sampler2D tColor,tFx; uniform float uThresh;
    void main(){ vec4 f=texture(tFx,vUv); vec3 c=texture(tColor,vUv).rgb*(1.-f.a)+f.rgb; float l=max(c.r,max(c.g,c.b));
      oColor=vec4(c*smoothstep(uThresh,uThresh+.25,l),1.); }`,
    { tColor: { value: rtInk.texture }, tFx: { value: rtFx.texture }, uThresh: { value: 0.82 } });
  const blurMat = post(/* glsl */ `
    uniform sampler2D tColor; uniform vec2 uDir;
    void main(){ vec3 c=texture(tColor,vUv).rgb*.227;
      c+=(texture(tColor,vUv+uDir*1.385).rgb+texture(tColor,vUv-uDir*1.385).rgb)*.316;
      c+=(texture(tColor,vUv+uDir*3.231).rgb+texture(tColor,vUv-uDir*3.231).rgb)*.0703;
      oColor=vec4(c,1.); }`, { tColor: { value: null }, uDir: { value: new THREE.Vector2() } });

  const noOverlay = new THREE.DataTexture(new Uint8Array(4), 1, 1); noOverlay.needsUpdate = true;   // (Gregale) look.overlay
  const finishMat = post(/* glsl */ `
    uniform sampler2D tOver; uniform sampler2D tColor,tFx,tBloom,tDepth; uniform vec2 uRes,uNearFar; uniform float uFrame,uS;
    uniform vec4 uDof;      // focus distance, in-focus range, max blur px, 0
    uniform vec4 uGradeA;   // exposure, contrast, saturation, bloom
    uniform vec3 uLift,uTint; uniform vec4 uFin; // vignette, grain, paper, fade (0 = black)
    uniform vec3 uFadeCol;
    float lin(float d){float z=d*2.-1.;return 2.*uNearFar.x*uNearFar.y/(uNearFar.y+uNearFar.x-z*(uNearFar.y-uNearFar.x));}
    float coc(vec2 u){ float z=lin(texture(tDepth,u).r); return clamp((abs(z-uDof.x)-uDof.y)/max(uDof.x,.001),0.,1.)*uDof.z*uS; }
    void main(){
      vec2 px=1./uRes;
      float r=coc(vUv); vec3 c=texture(tColor,vUv).rgb;
      if(uDof.z>0.){
        // gather blur: samples that are themselves sharp do not smear onto blurred neighbours
        vec3 acc=c; float wsum=1.; float rr=uDof.z*uS;
        for(int i=0;i<28;i++){ float fi=float(i)+.5; float rad=sqrt(fi/28.)*rr; float a=fi*2.39996;
          vec2 o=vec2(cos(a),sin(a))*rad*px; float sc=coc(vUv+o); float w=smoothstep(rad-1.,rad+1.,sc);
          acc+=texture(tColor,vUv+o).rgb*w; wsum+=w; }
        c=acc/wsum;
      }
      vec4 f=texture(tFx,vUv); c=c*(1.-f.a)+f.rgb;
      c+=texture(tBloom,vUv).rgb*uGradeA.w;
      // grade
      c*=uGradeA.x;
      float l=dot(c,vec3(.299,.587,.114));
      c=mix(vec3(l),c,uGradeA.z);
      c=clamp(c,0.,1.); c=mix(c,c*c*(3.-2.*c),uGradeA.y);
      c=c*uTint;
      c=c*(1.-uLift)+uLift*1.0*vec3(.55,.75,.72)+uLift*.0;      // lifted, slightly teal blacks: the faded-print look
      // paper tooth and a faint horizontal brush drag
      vec2 fc=vUv*uRes/uS;
      float paper=fbm2(fc*.55)-.5; float drag=vnoise(fc*vec2(.012,.9))-.5;
      c*=1.+uFin.z*(paper*.9+drag*.55);
      // vignette
      vec2 q=vUv-.5; c*=1.-uFin.x*smoothstep(.35,1.05,length(q*vec2(1.25,1.)));
      vec4 ov=texture(tOver,vUv); c=mix(c,ov.rgb,ov.a);                // (Gregale) the overlay: over the graded picture, under the grain
      // grain, held for two frames like the drawings
      float g=hash21(floor(fc*.5)+floor(uFrame/2.)*17.31)-.5; c+=g*uFin.y;   // two-pixel grain: reads as film, and survives encoding
      c=mix(uFadeCol,c,uFin.w);
      oColor=vec4(clamp(c,0.,1.),1.);
    }`, {
    tColor: { value: rtInk.texture }, tFx: { value: rtFx.texture }, tBloom: { value: rtB1.texture }, tDepth: { value: depthTexture }, tOver: { value: noOverlay },
    uRes: G.uRes, uNearFar: G.uNearFar, uFrame: { value: 0 }, uS: { value: S },
    uDof: { value: new THREE.Vector4(20, 10, 0, 0) }, uGradeA: { value: new THREE.Vector4(1, 0.18, 1.05, 0.5) },
    uLift: { value: new THREE.Vector3(0.05, 0.05, 0.05) }, uTint: { value: new THREE.Vector3(1.02, 1.0, 0.94) },
    uFin: { value: new THREE.Vector4(0.28, 0.035, 0.07, 1) }, uFadeCol: { value: col('#07060a') },
  });

  const DEFAULT_LOOK = {
    sun: [0.35, 0.42, -0.84], fogColor: PAL.mist, fogSun: PAL.warm, fog: [0.004, 0, 0.05, 0.9],
    ink: 1.15, inkWobble: 2.2, inkAlpha: 0.92, inkFade: 0.006,
    focus: 20, focusRange: 1e6, blur: 0,
    exposure: 1, contrast: 0.18, saturation: 1.05, bloom: 0.5, bloomThreshold: 0.82,
    ambient: [1, 1, 1],
    lift: 0.05, tint: [1.02, 1.0, 0.94], vignette: 0.28, grain: 0.028, paper: 0.07, fade: 1, fadeColor: '#07060a',
  };

  /** Render one frame. `look` overrides DEFAULT_LOOK for this frame. */
  function render(scene, camera, frame, look = {}, seed = 0) {
    const L = { ...DEFAULT_LOOK, ...look };
    G.uTime.value = frame / FPS; G.uTime2.value = Math.floor(frame / 2) * 2 / FPS;
    G.uSunW.value.set(...L.sun).normalize();
    camera.updateMatrixWorld(); camera.updateProjectionMatrix();
    G.uSunV.value.copy(G.uSunW.value).transformDirection(camera.matrixWorldInverse);
    G.uFogColor.value.set(L.fogColor); G.uFogSun.value.set(L.fogSun); G.uFog.value.set(...L.fog);
    G.uNearFar.value.set(camera.near, camera.far);
    G.uAmb.value.set(...L.ambient);

    camera.layers.set(0);
    renderer.setRenderTarget(rtMain); renderer.setClearColor(0x000000, 0); renderer.clear();
    renderer.render(scene, camera);

    inkMat.uniforms.uInkP.value.set(L.ink, L.inkWobble, L.inkAlpha, S); inkMat.uniforms.uSeed.value = seed * 3.7; inkMat.uniforms.uInkFade.value = L.inkFade;
    runPass(inkMat, rtInk);

    camera.layers.set(1);
    renderer.setRenderTarget(rtFx); renderer.setClearColor(0x000000, 0); renderer.clear();
    renderer.render(scene, camera);
    camera.layers.set(0);

    brightMat.uniforms.uThresh.value = L.bloomThreshold;
    runPass(brightMat, rtB1);
    blurMat.uniforms.tColor.value = rtB1.texture; blurMat.uniforms.uDir.value.set(1.6 / bw, 0); runPass(blurMat, rtB2);
    blurMat.uniforms.tColor.value = rtB2.texture; blurMat.uniforms.uDir.value.set(0, 1.6 / bh); runPass(blurMat, rtB1);
    blurMat.uniforms.tColor.value = rtB1.texture; blurMat.uniforms.uDir.value.set(3.2 / bw, 0); runPass(blurMat, rtB2);
    blurMat.uniforms.tColor.value = rtB2.texture; blurMat.uniforms.uDir.value.set(0, 3.2 / bh); runPass(blurMat, rtB1);

    const fu = finishMat.uniforms;
    fu.uFrame.value = frame + seed * 1000;
    fu.tOver.value = L.overlay || noOverlay;
    fu.uDof.value.set(L.focus, L.focusRange, L.blur, 0);
    fu.uGradeA.value.set(L.exposure, L.contrast, L.saturation, L.bloom);
    fu.uLift.value.setScalar(L.lift); fu.uTint.value.set(...L.tint);
    fu.uFin.value.set(L.vignette, L.grain, L.paper, L.fade); fu.uFadeCol.value.set(L.fadeColor);
    runPass(finishMat, null);
  }

  /**
   * Painted sea: two flat water tones in drifting bands, sky colour toward the horizon, cream glint dashes that
   * gather into a path under the sun, ragged foam skirts round rocks, ring waves and a wake. Never inked.
   * Animate by writing to mat.uniforms.uRings / uRocks / uWake.
   */
  function sea(o = {}) {
    const v4 = (n) => Array.from({ length: n }, () => new THREE.Vector4(0, 0, 0, 0));
    const u = {
      uSeaA: { value: col(o.a ?? PAL.sea1) }, uSeaB: { value: col(o.b ?? PAL.sea0) }, uSeaC: { value: col(o.c ?? PAL.sea2) },
      uSeaRefl: { value: col(o.reflect ?? PAL.skyHor) }, uFoamCol: { value: col(o.foam ?? PAL.foam) }, uGlint: { value: col(o.glint ?? PAL.sun) },
      // x pattern scale, y glitter amount, z glint threshold, w distance at which the sky reflection takes over
      uSeaP: { value: new THREE.Vector4(o.scale ?? 1, o.glitter ?? 1, o.glints ?? 0.7, o.horizon ?? 260) },
      uSeaQ: { value: new THREE.Vector4(o.fog ?? 0.5, o.pathWidth ?? 40, o.shallows ?? 0.62, o.speed ?? 1) },
      uRocks: { value: v4(24) }, uRings: { value: v4(6) }, uWake: { value: new THREE.Vector4() }, uWakeP: { value: new THREE.Vector4(0, 0.5, 0, 0) },
    };
    const m = shader({
      uniforms: { ...u, ...(o.uniforms || {}) },   // (Gregale) o.uniforms and o.fragHead: for what o.fragColor needs
      frag: /* glsl */ `
      uniform vec3 uSeaA,uSeaB,uSeaC,uSeaRefl,uFoamCol,uGlint; uniform vec4 uSeaP,uSeaQ,uRocks[24],uRings[6],uWake,uWakeP;
      ${o.fragHead ?? ''}
      vec4 surface(){
        vec2 p=vWorld.xz; float dist=length(vViewPos); float t=uTime2*uSeaQ.w;
        float n1=fbm2(vec2(p.x*.045,p.y*.2)*uSeaP.x+vec2(t*.04,t*.1));
        float n2=fbm2(vec2(p.x*.1,p.y*.5)*uSeaP.x+vec2(-t*.06,t*.22)+7.);
        float far=1.-exp(-dist/uSeaP.w);
        vec3 c=mix(uSeaB,uSeaA,smoothstep(.485,.5,n1));
        c=mix(c,uSeaC,smoothstep(uSeaQ.z,uSeaQ.z+.015,n1+.12*n2)*(1.-far*.6));
        c=mix(c,uSeaRefl,far*.9);
        // glints, gathered into a path toward the sun
        vec3 V=normalize(vWorld-cameraPosition);
        float path=pow(max(dot(normalize(uSunW.xz),normalize(V.xz)),0.),uSeaQ.y)*uSeaP.y;
        float th=mix(uSeaP.z,.4,clamp(path,0.,1.));
        float dash=smoothstep(th,th+.012,n2+.25*(vnoise(vec2(p.x*.5,p.y*2.6)*uSeaP.x+t*.5)-.5));
        c=mix(c,mix(uSeaC,uGlint,.35+.65*clamp(path,0.,1.)),dash*(.5+.5*clamp(path,0.,1.)));
        // foam
        float edge=fbm2(p*.45+vec2(0.,t*.15)); float foam=0.; float dark=0.;
        for(int i=0;i<24;i++){ float w=uRocks[i].w; if(w>0.){ vec2 d=p-uRocks[i].xy; float fi=float(i);
          float ang=atan(d.y,d.x); float e=length(d)-uRocks[i].z*(1.+.2*(vnoise(vec2(ang*2.5+fi*7.,fi))-.5));
          float lap=.5+.5*sin(t*1.2+fi*1.7);
          float skirt=w*(.3+.3*lap)+(edge-.5)*w*1.3;
          foam=max(foam,1.-smoothstep(skirt,skirt+.04*w,e));
          float ph=fract(t*.16+hash11(fi*1.31)); float rr=w*(.9+ph*2.4);
          foam=max(foam,(1.-smoothstep(w*.05,w*.11,abs(e-rr+(edge-.5)*w)))*(1.-ph)*step(.42,edge));
          dark=max(dark,(1.-smoothstep(0.,w*2.5,e))*.35); } }
        for(int i=0;i<6;i++){ float st=uRings[i].w; if(st>0.){ float e=length(p-uRings[i].xy)-uRings[i].z+(edge-.5)*uRings[i].z*.08;
          float wd=.03*uRings[i].z+.25; foam=max(foam,(1.-smoothstep(wd*.5,wd,abs(e)))*st*step(.3,edge+st*.4));
          dark=max(dark,(1.-smoothstep(0.,wd*3.,abs(e+wd*2.)))*st*.5); } }
        if(uWakeP.x>0.){ vec2 d=p-uWake.xy; vec2 dir=normalize(uWake.zw); float al=-dot(d,dir); float pe=abs(dot(d,vec2(-dir.y,dir.x)));
          float inside=step(0.,al)*step(al,uWakeP.x); float half_=al*uWakeP.y+uWakeP.z; float fade=1.-al/uWakeP.x;
          foam=max(foam,inside*(1.-smoothstep(.0,.9+al*.02,abs(pe-half_+(edge-.5)*3.)))*fade);
          foam=max(foam,inside*step(pe,half_)*step(.56-.2*fade,fbm2(d*.35+vec2(0.,t*.6)))*fade); }
        c=mix(c,uSeaB*.82,dark*(1.-foam));
        c=mix(c,uFoamCol,clamp(foam,0.,1.));
        ${o.fragColor ?? ''}
        return vec4(mix(c,fogTint(),fogAmount()*uSeaQ.x),0.);
      }`,
    });
    return m;
  }

  /** Smooth unit blob geometry (shared vertices, so displacement keeps soft normals). */
  const blobCache = new Map();
  function blobGeo(detail = 5) {
    if (!blobCache.has(detail)) { const g = mergeVertices(new THREE.IcosahedronGeometry(1, detail).deleteAttribute('uv')); g.computeVertexNormals(); g.userData.shared = true; blobCache.set(detail, g); }
    return blobCache.get(detail);
  }
  /** Rock: a blob displaced on the CPU. opts: seed, rough (0..1), squash (y scale), detail, freq, ridge (0..1 for craggy facets). */
  function rockGeo({ seed = 1, rough = 0.55, squash = 0.8, detail = 5, freq = 1.3, ridge = 0.35 } = {}) {
    const g = mergeVertices(new THREE.IcosahedronGeometry(1, detail).deleteAttribute('uv'));
    const p = g.attributes.position;
    for (let j = 0; j < p.count; j++) {
      const x = p.getX(j), y = p.getY(j), z = p.getZ(j);
      const n = fbm(x * freq + seed * 13.1, y * freq + seed * 7.7, z * freq + seed * 3.3);
      const r2 = 1 - Math.abs(noise3(x * freq * 2.1 + seed, y * freq * 2.1, z * freq * 2.1) * 2 - 1);
      const d = 1 - rough * 0.5 + rough * (n * (1 - ridge) + r2 * ridge);
      p.setXYZ(j, x * d, y * d * squash, z * d);
    }
    g.computeVertexNormals();
    return g;
  }

  /** Put an object (and its children) on the effects layer. */
  const onFx = (obj) => { obj.traverse((o) => o.layers.set(1)); return obj; };

  const kit = { THREE, G, PAL, renderer, width, height, S, shader, toon, leaf, sky, sea, fx, onFx, blobGeo, rockGeo, mergeVertices, newId, render, clamp, lerp, smooth, ease, keys, twos, rng, noise3, fbm, col, FPS };
  return kit;
}
