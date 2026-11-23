
// Growth: grass, flowers, leaf clumps, the wind-bent tree, kelp. Nothing here is inked.
import * as THREE from 'three';
import { bladeGeo, taperTube, aimY } from './geo.js';

const M = new THREE.Matrix4(), Q = new THREE.Quaternion(), Q2 = new THREE.Quaternion(), S = new THREE.Vector3(), UP = new THREE.Vector3(0, 1, 0), C = new THREE.Color();

/**
 * Grass: fans of blades at anchor points [{p, n}]. Each anchor grows `per` blades leaning out from its normal.
 * opts: per, height, width, colors, seed, sway
 */
export function grass(k, anchors, { per = 5, height = 0.6, width = 0.07, colors = [k.PAL.g1, k.PAL.g2, k.PAL.g3, k.PAL.g2], seed = 1, sway = 0.08, spread = 0.5 } = {}) {
  const r = k.rng(seed);
  const mat = k.shader({
    side: THREE.DoubleSide, uniforms: { uSway: { value: sway } },
    vert: `uniform float uSway;`,
    displace: /* glsl */ `
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x*1.7+instanceMatrix[3].z*2.3+instanceMatrix[3].y;
        pos.x += sin(uTime*1.9+ph)*uSway*uv.y*uv.y; pos.z += cos(uTime*1.3+ph*.7)*uSway*.6*uv.y*uv.y;
      #endif`,
    frag: /* glsl */ `vec4 surface(){ vec3 c=vec3(1.);
      #ifdef USE_INSTANCING_COLOR
        c=vICol;
      #endif
      c*=mix(.62,1.08,smoothstep(0.,.75,vUv.y)); return vec4(applyFog(c),0.); }`,
  });
  const mesh = new THREE.InstancedMesh(bladeGeo({ len: 1, w: 1, bend: 0.35 }), mat, anchors.length * per);
  let i = 0;
  for (const a of anchors) {
    Q.setFromUnitVectors(UP, a.n);
    for (let j = 0; j < per; j++) {
      const h = height * r.range(0.55, 1.25) * (a.s ?? 1);
      Q2.setFromEuler(new THREE.Euler(r.range(0.05, spread), r() * 6.283, 0, 'YXZ'));
      S.set(width * (a.s ?? 1) * r.range(0.7, 1.3), h, h);
      M.compose(a.p, Q.clone().multiply(Q2), S);
      mesh.setMatrixAt(i, M); mesh.setColorAt(i, C.set(r.pick(colors))); i++;
    }
  }
  mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false;
  return mesh;
}

/**
 * Flowers on stalks at anchors. kind 'thrift' = a pink pom, 'star' = five petals with a yellow eye.
 * Returns a Group (stalks + heads).
 */
export function flowers(k, anchors, { kind = 'thrift', height = 0.7, size = 0.16, colors, seed = 2, sway = 0.07 } = {}) {
  const r = k.rng(seed);
  colors = colors ?? (kind === 'thrift' ? [k.PAL.thrift, '#f2a3b8', '#d9708f'] : [k.PAL.flower, '#f6d6e0', '#d9cdf0']);
  const g = new THREE.Group();
  const tops = anchors.map((a) => { const h = height * r.range(0.6, 1.2) * (a.s ?? 1); const lean = new THREE.Vector3(r.range(-0.25, 0.25), 1, r.range(-0.25, 0.25)).normalize(); Q.setFromUnitVectors(UP, a.n); return { a, h, dir: lean.applyQuaternion(Q) }; });
  // stalks
  const stalkMat = k.shader({ side: THREE.DoubleSide, uniforms: { uSway: { value: sway }, uCol: { value: k.col(k.PAL.g1) } }, vert: `uniform float uSway;`,
    displace: `#ifdef USE_INSTANCING
      float ph = instanceMatrix[3].x*1.7+instanceMatrix[3].z*2.3+instanceMatrix[3].y; pos.x += sin(uTime*1.9+ph)*uSway*uv.y*uv.y;
      #endif`,
    frag: `uniform vec3 uCol; vec4 surface(){ return vec4(applyFog(uCol*mix(.7,1.,vUv.y)),0.); }` });
  const stalks = new THREE.InstancedMesh(bladeGeo({ len: 1, w: 1, bend: 0.0, tip: 0.6, segs: 2 }), stalkMat, tops.length);
  // heads: billboards
  const headMat = k.shader({
    billboard: true, uniforms: { uKind: { value: kind === 'thrift' ? 0 : 1 }, uSway: { value: sway }, uEye: { value: k.col('#f0c23a') } }, vert: `uniform float uSway;`,
    displace: `float ph = ctr.x*1.7+ctr.z*2.3+ctr.y; ctr.x += sin(uTime*1.9+ph)*uSway; spin = ph;`,
    frag: /* glsl */ `uniform float uKind; uniform vec3 uEye;
      vec4 surface(){ vec2 p=(vUv-.5)*2.; float rr=length(p), a=atan(p.y,p.x); vec3 c=vec3(1.);
        #ifdef USE_INSTANCING_COLOR
          c=vICol;
        #endif
        if(uKind<.5){ if(rr>.82+.16*cos(a*7.)) discard; c*=mix(.8,1.12,step(.1,p.y+.25*cos(a*3.))); c=mix(c,c*.72,step(rr,.28)*step(p.y,-.02)); }
        else { if(rr>.38+.6*abs(cos(a*2.5))) discard; c=mix(c,uEye,step(rr,.24)); }
        return vec4(applyFog(c),0.); }`,
  });
  const heads = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), headMat, tops.length);
  tops.forEach(({ a, h, dir }, i) => {
    Q.setFromUnitVectors(UP, dir); S.set(size * 0.16, h, h); M.compose(a.p, Q, S); stalks.setMatrixAt(i, M);
    const top = a.p.clone().add(dir.clone().multiplyScalar(h)); const s = size * r.range(0.75, 1.3) * (a.s ?? 1);
    M.compose(top, Q.identity(), S.set(s, s, s)); heads.setMatrixAt(i, M); heads.setColorAt(i, C.set(r.pick(colors)));
  });
  heads.instanceColor.needsUpdate = true; stalks.frustumCulled = heads.frustumCulled = false;
  g.add(stalks, heads);
  return g;
}

/**
 * Leaf dabs: leaf-shaped marks scattered over the surface of blobs (spots = [[x, y, z, radius, squashY?], ...]),
 * light ones above and dark ones beneath, so a clump's edge is drawn leaves instead of a ragged outline.
 */
export function leafDabs(k, spots, { per = 34, size = 0.26, colors = [k.PAL.g0, k.PAL.g1, k.PAL.g2, k.PAL.g3], seed = 1, sway = 0.015 } = {}) {
  const r = k.rng(seed * 7 + 5);
  const mat = k.shader({
    billboard: true, uniforms: { uSway: { value: sway } }, vert: `uniform float uSway;`,
    displace: `float ph = ctr.x*3.1+ctr.z*4.3+ctr.y*2.7; ctr.x += sin(uTime*1.7+ph)*uSway; spin = ph*5.;`,
    frag: /* glsl */ `vec4 surface(){ vec2 p=(vUv-.5)*2.; float w=.5*pow(max(1.-p.y*p.y,0.),.7)*(1.-.25*p.y);
        if(abs(p.x)>w) discard; vec3 c=vec3(1.);
        #ifdef USE_INSTANCING_COLOR
          c=vICol;
        #endif
        c*=mix(.86,1.06,step(0.,p.x+p.y*.2)); return vec4(applyFog(c),0.); }`,
  });
  const n = spots.reduce((a, sp) => a + Math.max(8, Math.round(per * Math.min(1.6, 0.6 + sp[3] * 0.25))), 0);
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, n);
  let i = 0;
  for (const [x, y, z, s, sq = 0.78] of spots) {
    const cnt = Math.max(8, Math.round(per * Math.min(1.6, 0.6 + s * 0.25)));
    for (let j = 0; j < cnt; j++) {
      const u = r.range(-0.75, 1), a = r() * 6.283, h = Math.sqrt(1 - u * u), rad = s * r.range(0.98, 1.2);
      const sz = size * Math.pow(s, 0.7) * r.range(0.6, 1.25);
      M.makeScale(sz, sz, sz).setPosition(x + Math.cos(a) * h * rad, y + u * rad * sq, z + Math.sin(a) * h * rad);
      mesh.setMatrixAt(i, M);
      const tone = Math.max(0, Math.min(3, Math.floor((u * 0.5 + 0.5) * 3.1 + r.range(-0.7, 0.9))));
      mesh.setColorAt(i, C.set(colors[tone])); i++;
    }
  }
  mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false;
  return mesh;
}

/**
 * A clump of leaf blobs: spots = [[x, y, z, radius, squashY?], ...].
 * dabs (default on) scatters leaf marks over it; bloom / tufts add that many small flowers / grass fans per unit of radius.
 */
export function clump(k, spots, { colors, seed = 1, dab, ragged, dabs = true, bloom = 0, tufts = 0, bloomKind = 'star', bloomColors } = {}) {
  const g = new THREE.Group();
  spots.forEach(([x, y, z, s, sq = 0.78], i) => {
    const m = new THREE.Mesh(k.blobGeo(5), k.leaf({ seed: seed * 13.7 + i * 7.3, colors, dab: (dab ?? 15) / Math.max(0.6, Math.sqrt(s)), ragged }));
    m.position.set(x, y, z); m.scale.set(s, s * sq, s); g.add(m);
  });
  if (dabs) g.add(leafDabs(k, spots, { colors, seed }));
  if (bloom || tufts) {
    const r = k.rng(seed * 19 + 11), fl = [], gr = [];
    const on = (x, y, z, s, sq, list, cnt) => { for (let j = 0; j < cnt; j++) { const th = 1.0 * Math.sqrt(r()), ph = r() * 6.283;
      const n = new THREE.Vector3(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph));
      list.push({ p: new THREE.Vector3(x + n.x * s * 0.98, y + n.y * s * sq * 0.98, z + n.z * s * 0.98), n: n.clone().lerp(UP, 0.45).normalize(), s: r.range(0.7, 1.25) }); } };
    for (const [x, y, z, s, sq = 0.78] of spots) { on(x, y, z, s, sq, fl, Math.round(bloom * s)); on(x, y, z, s, sq, gr, Math.round(tufts * s)); }
    if (gr.length) g.add(grass(k, gr, { per: 4, height: 0.55, width: 0.07, seed: seed + 3 }));
    if (fl.length) g.add(flowers(k, fl, { kind: bloomKind, height: 0.5, size: 0.2, seed: seed + 5, colors: bloomColors }));
  }
  return g;
}

/**
 * Creepers: leafy strands hanging from anchor points [[x, y, z], ...], swaying on twos with `swing` like kelp.
 * Each anchor gets `per` strands of length len*(0.5..1.3) with a leaf every `gap` units.
 */
export function creeper(k, anchors, { per = 3, len = 2.4, gap = 0.27, leaf = 0.3, seed = 6, colors = [k.PAL.g0, k.PAL.g1, k.PAL.g1, k.PAL.g2, k.PAL.pine1, '#8a9a3c'], swing = { value: 0 }, spread = 0.35 } = {}) {
  const r = k.rng(seed * 3 + 1), g = new THREE.Group();
  const SWAY = `(sin(uTime2*1.5+PH+T*3.)*.05+uSwing*.16)*T*T*LEN`;
  const pos = [], uv = [], ph = [], ln = [], idx = [], leaves = [];
  for (const a of anchors) for (let j = 0; j < per; j++) {
    const L = len * r.range(0.5, 1.3), x = a[0] + r.range(-spread, spread), z = a[2] + r.range(-spread, spread), p = r() * 6.283, wig = r.range(0.04, 0.12), segs = 7, base = pos.length / 3;
    const at = (t) => [x + Math.sin(t * 7 + p) * wig, a[1] - t * L, z + Math.cos(t * 5 + p) * wig];
    for (let i = 0; i <= segs; i++) { const t = i / segs, c = at(t), w = 0.028 * (1 - t * 0.5); pos.push(c[0] - w, c[1], c[2], c[0] + w, c[1], c[2]); uv.push(0, t, 1, t); ph.push(p, p); ln.push(L, L); }
    for (let i = 0; i < segs; i++) { const q = base + i * 2; idx.push(q, q + 1, q + 2, q + 1, q + 3, q + 2); }
    for (let d = gap * r.range(0.3, 1), sd = 1; d < L; d += gap * r.range(0.7, 1.4), sd = -sd) { const t = d / L, c = at(t); leaves.push({ c: [c[0] + sd * leaf * 0.3, c[1], c[2]], t, L, p, s: leaf * r.range(0.7, 1.25) * (1 - t * 0.3), spin: sd * r.range(0.5, 1.3) + Math.PI }); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  geo.setAttribute('aPh', new THREE.Float32BufferAttribute(ph, 1)); geo.setAttribute('aLen', new THREE.Float32BufferAttribute(ln, 1));
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(pos.length).fill(0).map((_, i) => (i % 3 === 2 ? 1 : 0)), 3)); geo.setIndex(idx);
  const stems = new THREE.Mesh(geo, k.shader({ side: THREE.DoubleSide, uniforms: { uSwing: swing, uCol: { value: k.col('#3d4a2c') } }, vert: `uniform float uSwing; in float aPh; in float aLen;`,
    displace: `{ float T=uv.y, PH=aPh, LEN=aLen; pos.x += ${SWAY}; pos.z += cos(uTime2*1.1+PH)*.04*T*T*LEN; }`,
    frag: `uniform vec3 uCol; vec4 surface(){ return vec4(applyFog(uCol),0.); }` }));
  stems.frustumCulled = false; g.add(stems);
  const mat = k.shader({ billboard: true, uniforms: { uSwing: swing }, vert: `uniform float uSwing;`,
    displace: `#ifdef USE_INSTANCING
      { float T=instanceMatrix[1].x, LEN=instanceMatrix[1].y, PH=instanceMatrix[2].x; ctr.x += ${SWAY}; ctr.z += cos(uTime2*1.1+PH)*.04*T*T*LEN; spin = instanceMatrix[2].y + sin(uTime2*1.5+PH+T*3.)*.12; }
      #endif`,
    frag: /* glsl */ `vec4 surface(){ vec2 p=(vUv-.5)*2.; float w=.46*pow(max(1.-p.y*p.y,0.),.6)*(1.-.3*p.y); if(abs(p.x)>w) discard; vec3 c=vec3(1.);
        #ifdef USE_INSTANCING_COLOR
          c=vICol;
        #endif
        c*=mix(.84,1.05,step(0.,p.x)); return vec4(applyFog(c),0.); }` });
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, leaves.length);
  leaves.forEach((l, i) => { M.makeScale(l.s, 1, 1).setPosition(l.c[0], l.c[1], l.c[2]); const e = M.elements; e[4] = l.t; e[5] = l.L; e[6] = 0; e[8] = l.p; e[9] = l.spin; e[10] = 0; mesh.setMatrixAt(i, M); mesh.setColorAt(i, C.set(r.pick(colors))); });
  if (leaves.length) mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false; g.add(mesh);
  return g;
}

/**
 * The wind-bent tree: a trunk leaning with the wind (+x), roots gripping what it stands on, and a flat
 * canopy streaming downwind. Origin at the base. `h` is its height.
 */
export function windTree(k, { h = 4, seed = 3, lean = 0.9 } = {}) {
  const r = k.rng(seed), g = new THREE.Group();
  const bark = k.toon({ color: '#7a5540', shade: '#8a7fb0', deep: '#5d5788', wobble: 0.5, wobbleScale: 3 / h, patinaA: '#5a3f33', patinaAmtA: 0.3, patinaScale: 4 / h });
  const top = new THREE.Vector3(lean * h * 0.75, h, 0);
  const trunk = new THREE.Mesh(taperTube([[0, -0.03 * h, 0], [0.02 * h, 0.3 * h, 0.03 * h], [lean * h * 0.22, 0.62 * h, -0.02 * h], [lean * h * 0.5, 0.85 * h, 0.02 * h], top], 0.085 * h, 0.022 * h, { segs: 16, radial: 7 }), bark);
  g.add(trunk);
  for (let i = 0; i < 2; i++) { // boughs
    const t0 = new THREE.Vector3(lean * h * (0.2 + i * 0.2), h * (0.6 + i * 0.16), 0), e = t0.clone().add(new THREE.Vector3(lean * h * 0.45, h * r.range(0.08, 0.2), h * r.range(-0.25, 0.25)));
    g.add(new THREE.Mesh(taperTube([t0, t0.clone().lerp(e, 0.5).add(new THREE.Vector3(0, h * 0.06, 0)), e], 0.035 * h, 0.012 * h, { segs: 8, radial: 5 }), bark));
  }
  for (let i = 0; i < 5; i++) { // roots
    const a = (i / 5) * 6.283 + r.range(-0.4, 0.4), L = h * r.range(0.22, 0.36);
    g.add(new THREE.Mesh(taperTube([[0, 0.1 * h, 0], [Math.cos(a) * L * 0.45, 0.05 * h, Math.sin(a) * L * 0.45], [Math.cos(a) * L, -0.05 * h, Math.sin(a) * L]], 0.04 * h, 0.012 * h, { segs: 8, radial: 5 }), bark));
  }
  const spots = [];
  for (let i = 0; i < 7; i++) spots.push([top.x + h * (0.05 + i * 0.085) * lean + r.range(-0.05, 0.05) * h, top.y + h * r.range(-0.1, 0.1) - i * 0.012 * h, r.range(-0.2, 0.2) * h, h * r.range(0.16, 0.26) * (1 - i * 0.06), 0.55]);
  spots.push([top.x - 0.05 * h, top.y + 0.02 * h, 0, h * 0.2, 0.6]);
  g.add(clump(k, spots, { seed, colors: [k.PAL.pine0, k.PAL.g0, k.PAL.g1, k.PAL.g2] }));
  g.userData.top = top;
  return g;
}

/**
 * Kelp: ribbons hanging from anchor points (object space of whatever you add the result to), swaying on twos.
 * anchors: [[x, y, z], ...]; each gets `per` ribbons of length len*(0.6..1.3).
 */
export function kelp(k, anchors, { per = 3, len = 3, width = 0.45, seed = 5, colors = [k.PAL.kelp, '#3a4a26', '#6b7a34'], swing = { value: 0 } } = {}) {
  const r = k.rng(seed);
  const mat = k.shader({
    side: THREE.DoubleSide, uniforms: { uSwing: swing },
    vert: `uniform float uSwing;`,
    displace: /* glsl */ `
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x*1.3+instanceMatrix[3].z*2.1;
        float t = uv.y; pos.x += (sin(uTime2*1.6+ph+t*3.)*.06+uSwing*.5)*t*t; pos.z += cos(uTime2*1.1+ph)*.05*t*t;
        pos.x += sin(t*9.+ph)*.04;
      #endif`,
    frag: /* glsl */ `vec4 surface(){ vec3 c=vec3(1.);
      #ifdef USE_INSTANCING_COLOR
        c=vICol;
      #endif
      float e=abs(vUv.x-.5)*2.; if(e>.72+.28*sin(vUv.y*26.+vWorld.x*3.)) discard;
      c*=mix(1.,.72,step(.25,e)); return vec4(applyFog(c),0.); }`,
  });
  const geo = bladeGeo({ len: 1, w: 1, bend: 0, tip: 0.35, segs: 8 });
  const mesh = new THREE.InstancedMesh(geo, mat, anchors.length * per);
  let i = 0; const down = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI);
  for (const a of anchors) for (let j = 0; j < per; j++) {
    const L = len * r.range(0.6, 1.3);
    Q.setFromEuler(new THREE.Euler(r.range(-0.12, 0.12), r() * 6.283, r.range(-0.12, 0.12))).premultiply(down);
    M.compose(new THREE.Vector3(a[0] + r.range(-0.25, 0.25), a[1], a[2] + r.range(-0.25, 0.25)), Q, S.set(width * r.range(0.6, 1.2), L, L));
    mesh.setMatrixAt(i, M); mesh.setColorAt(i, C.set(r.pick(colors))); i++;
  }
  mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false;
  return mesh;
}
