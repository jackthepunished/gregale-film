
// The coast: sea stacks, rocks, the far skerry with its dead tower, and the bay they make.
import * as THREE from 'three';
import { lathe, bladeGeo } from './geo.js';
import { grass, flowers, clump, kelp, creeper, windTree } from './flora.js';
import { topPoints } from './stage.js';

// The drawn look of rock, in world space so it holds still on non-uniformly scaled meshes and the sea (y = 0)
// is the same tide line for every rock in a shot:
//   beds of uneven thickness that dip a little, each its own tone, with a pen line between them that
//   presses, thins and lifts; broken joints and cracks; lighter worn planes; lichen in hard-edged spots;
//   guano streaks under the tops where birds sit; and at the waterline a wet dark band with weed in it, a
//   drawn tide mark and a ragged crust of barnacles above.
// uRock:  x beds per unit height, y crack scale, z line strength, w seed
// uRockB: xy dip of the beds, z height of the wet band (world units), w barnacle cells per unit
// uRockC: x, y guano from / full at this height (0 = none), z lichen amount, w wet darkness
// uRockD: x lichen spots per unit
const ROCK_HEAD = `uniform vec4 uRock,uRockB,uRockC,uRockD;`;
const ROCK_LOOK = `{
    vec3 w=vWorld; float sd=uRock.w;
    float warp=fbm3(w*uRock.y*.3+sd);
    float sy=(w.y+dot(w.xz,uRockB.xy))*uRock.x+(warp-.5)*3.2;
    float k0=floor(sy), fr=fract(sy);
    float cut=.22+.56*hash11(k0*1.7+sd*3.1);                       // two beds of unequal thickness per unit
    float bed=hash11((k0*2.+step(cut,fr))*1.3+sd*7.);
    c*=mix(.84,1.1,bed); c=mix(c,c*vec3(1.1,.97,.86),step(.7,bed)*.8);
    float fw=fwidth(sy); float pen=.55+1.2*vnoise3(w*uRock.y*1.7+sd);
    float dA=min(fr,1.-fr), dB=abs(fr-cut); float lid=dB<dA?k0+.5:floor(sy+.5);
    float brk=step(.45,fbm3(w*uRock.y*.8+3.+lid*.37));             // the pen lifts
    float line=(1.-smoothstep(fw*.45*pen,fw*1.35*pen,min(dA,dB)))*brk*step(fw,.3);
    float n1=fbm3(w*vec3(uRock.y,uRock.y*.16,uRock.y)+sd*3.); float d1=abs(n1-.5)/max(fwidth(n1),1e-5);
    float rk=(1.-smoothstep(.5*pen,1.5*pen,d1))*step(.54,fbm3(w*uRock.y*.4+17.));
    float n2=fbm3(w*uRock.y*.5+vec3(w.y*uRock.y*.4,0.,0.)+sd*5.); float d2=abs(n2-.47)/max(fwidth(n2),1e-5);
    rk=max(rk,(1.-smoothstep(.5,1.4,d2))*step(.6,fbm3(w*uRock.y*.3+23.+sd)));
    c=mix(c,c*1.14+vec3(.03,.02,.0),step(.62,fbm3(w*uRock.y*.55+29.+sd))*.8);
    vec2 lc=cell3(w*uRockD.x+sd);
    float lich=step(lc.x,.2+.2*lc.y)*step(.42,lc.y)*step(.53,fbm3(w*uRockD.x*.14+41.+sd))*uRockC.z;
    c=mix(c,mix(vec3(.85,.66,.3),vec3(.8,.83,.68),step(.76,lc.y)),lich);
    if(uRockC.x>0.){ float gs=step(.6,fbm3(vec3(w.x*uRock.y*4.,w.y*uRock.y*.45,w.z*uRock.y*4.)+sd))*smoothstep(uRockC.x,uRockC.y,w.y+(warp-.5)*uRockC.y*.3);
      c=mix(c,vec3(.95,.93,.84),gs*.72*(1.-top)); }
    float tb=uRockB.z; float th=w.y-(fbm3(vec3(w.x,0.,w.z)*(1.6/tb)+sd)-.5)*tb*.9;
    float wet=1.-smoothstep(tb*.97,tb,th);
    vec2 bc=cell3(w*uRockB.w+sd);
    float crust=(1.-smoothstep(tb*1.5,tb*1.75,th+(bc.y-.5)*tb*.5))*(1.-wet);
    c=mix(c,vec3(.93,.9,.78),crust*step(bc.x,.34)*step(.28,bc.y));
    c=mix(c,c*vec3(.5,.53,.68)*uRockC.w+vec3(.01,.03,.05),wet);
    float weed=wet*step(.47,fbm3(w*vec3(1.2,.6,1.2)*(1.6/tb)+7.+sd))*(1.-smoothstep(tb*.5,tb*.8,th));
    c=mix(c,mix(vec3(.2,.27,.13),vec3(.33,.38,.16),step(.5,bc.y)),weed);
    float tide=(1.-smoothstep(.5,1.6,abs(th-tb)/max(fwidth(th),1e-5)))*step(.4,fbm3(w*(2.4/tb)+sd))*.5;
    c=mix(c,uInk,max(max(line*.6,rk*.6),tide)*uRock.z*(1.-top)*(1.-weed));
  }`;
/** rockLook(beds per unit, crack scale, strength, seed, { dip, tide, barnacles, guano: [from, full], lichen, wet }) */
const rockLook = (strata, cracks, strength, seed, { dip = [0.06, -0.04], tide = 1.2, barnacles = 1.8, guano = [0, 1], lichen = 1, wet = 1, lichenScale = cracks * 2.4 } = {}) => ({
  fragHead: ROCK_HEAD, fragColor: ROCK_LOOK,
  uniforms: { uRock: { value: new THREE.Vector4(strata, cracks, strength, seed) }, uRockB: { value: new THREE.Vector4(dip[0], dip[1], tide, barnacles) }, uRockC: { value: new THREE.Vector4(guano[0], guano[1], lichen, wet) }, uRockD: { value: new THREE.Vector4(lichenScale, 0, 0, 0) } },
});

const UP = new THREE.Vector3(0, 1, 0);
/** Every vertex of a mesh as an anchor { p, n } in its parent's space (the mesh's position / rotation / scale applied). */
function surfacePoints(mesh) {
  mesh.updateMatrix(); const m = mesh.matrix, nm = new THREE.Matrix3().getNormalMatrix(m), P = mesh.geometry.attributes.position, N = mesh.geometry.attributes.normal, out = [];
  for (let i = 0; i < P.count; i++) out.push({ p: new THREE.Vector3().fromBufferAttribute(P, i).applyMatrix4(m), n: new THREE.Vector3().fromBufferAttribute(N, i).applyMatrix3(nm).normalize() });
  return out;
}
/** n of the items, picked without repeats. */
function pickN(r, list, n) { const a = list.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, Math.max(0, Math.min(a.length, Math.round(n)))); }
const anchor = (a, s = 1) => ({ p: a.p.clone(), n: a.n.clone().lerp(UP, 0.6).normalize(), s });

/**
 * Sitting sea birds as specks: a white body, a grey back, a head. pts = [{ p }] or [[x, y, z]]; size in world units.
 * Not inked. Each faces left or right.
 */
export function specks(k, pts, { size = 0.6, seed = 1 } = {}) {
  const r = k.rng(seed * 5 + 2), M = new THREE.Matrix4(), C = new THREE.Color();
  const mat = k.shader({ billboard: true, frag: /* glsl */ `vec4 surface(){ vec2 p=(vUv-.5)*2.; float dir=1.;
      #ifdef USE_INSTANCING_COLOR
        dir=vICol.r>.5?1.:-1.;
      #endif
      p.x*=dir; float body=length((p-vec2(-.1,-.3))*vec2(1.15,1.9)); float head=length(p-vec2(.42,.28));
      if(body>.8&&head>.27) discard;
      vec3 c=vec3(.98,.96,.9); c=mix(c,vec3(.6,.64,.74),step(body,.8)*step(-.32,p.y-p.x*.25)*step(head,9.)*step(.27,head));
      c=mix(c,vec3(.95,.72,.25),step(.62,p.x)*step(head,.27));
      return vec4(applyFog(c),0.); }` });
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1), mat, pts.length);
  pts.forEach((q, i) => { const p = q.p ?? new THREE.Vector3(...q), s = size * r.range(0.75, 1.25); M.makeScale(s, s, s).setPosition(p.x, p.y + s * 0.42, p.z); mesh.setMatrixAt(i, M); mesh.setColorAt(i, C.setRGB(r() < 0.5 ? 0 : 1, 1, 1)); });
  if (pts.length) mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false;
  return mesh;
}

/**
 * Wrack: kelp fronds floating at the waterline, lifting and snaking on twos. items = [[x, z, angle, length, width?], ...]:
 * each frond is rooted at (x, z) and trails away along `angle`.
 */
export function wrack(k, items, { colors = [k.PAL.kelp, '#3a4a26', '#5b6a2c', '#2f3c22'], seed = 4, y = 0.09 } = {}) {
  const r = k.rng(seed * 11 + 1), C = new THREE.Color(), M = new THREE.Matrix4();
  const mat = k.shader({ side: THREE.DoubleSide,
    displace: /* glsl */ `
      #ifdef USE_INSTANCING
        float ph = instanceMatrix[3].x*1.3+instanceMatrix[3].z*2.1; float t = uv.y;
        pos.x += sin(uTime2*1.3+ph+t*5.)*.9*t;                       // snakes sideways (x is scaled by the frond's width)
        pos.z += (sin(uTime2*1.7+ph*1.7+t*4.)*.04+.02)*t;             // lifts a little on the swell
      #endif`,
    frag: /* glsl */ `vec4 surface(){ vec3 c=vec3(1.);
      #ifdef USE_INSTANCING_COLOR
        c=vICol;
      #endif
      float e=abs(vUv.x-.5)*2.; if(e>.7+.3*sin(vUv.y*23.+vWorld.x*2.)) discard;
      c*=mix(1.08,.74,step(.3,e)); return vec4(applyFog(c),0.); }` });
  const mesh = new THREE.InstancedMesh(bladeGeo({ len: 1, w: 1, bend: 0, tip: 0.3, segs: 8 }), mat, items.length);
  items.forEach(([x, z, a, len, w = len * 0.13], i) => {
    const Y = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)), X = new THREE.Vector3(-Math.sin(a), 0, Math.cos(a));
    M.makeBasis(X.multiplyScalar(w), Y.multiplyScalar(len), new THREE.Vector3(0, len, 0)).setPosition(x, y + r() * 0.03, z);
    mesh.setMatrixAt(i, M); mesh.setColorAt(i, C.set(r.pick(colors)));
  });
  if (items.length) mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false;
  return mesh;
}

/**
 * Thrift cushions: low domes of dark leaf with pink heads standing just clear of them. spots = [[x, y, z, radius], ...]
 */
export function cushions(k, spots, { seed = 1, colors = ['#1d3f2c', '#2c5a36', '#4d7d3c', '#8aa84e'], heads = 14, size = 0.15 } = {}) {
  const g = new THREE.Group(), r = k.rng(seed * 23 + 9), fl = [];
  g.add(clump(k, spots.map(([x, y, z, s]) => [x, y, z, s, 0.55]), { seed, colors }));
  for (const [x, y, z, s] of spots) for (let j = 0, n = Math.round(heads * Math.max(0.6, s)); j < n; j++) {
    const th = 1.15 * Math.sqrt(r()), ph = r() * 6.283, n3 = new THREE.Vector3(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph));
    fl.push({ p: new THREE.Vector3(x + n3.x * s * 0.95, y + n3.y * s * 0.52, z + n3.z * s * 0.95), n: n3.lerp(UP, 0.5).normalize(), s: r.range(0.7, 1.3) });
  }
  if (fl.length) g.add(flowers(k, fl, { kind: 'thrift', height: 0.34, size, seed: seed + 2 }));
  return g;
}

/**
 * A sea stack: a steep-sided rock column standing in the water. Uneven beds drawn round it, a wet weedy band, a tide
 * mark and a barnacle crust at the waterline; turf, cushions and a ragged fringe of leaf on top; grass, thrift and
 * hanging creepers on its ledges; birds sitting on them. Origin at water level (y = 0), centre of the column.
 * opts: radius, height, seed, turf (true), depth (how far it goes below water), tone,
 *       dress 0..1+ (how much grows on it; 0 = bare, for far silhouettes), tree (a wind-bent tree on top), birds
 */
export function seaStack(k, { radius = 6, height = 18, seed = 1, turf = true, depth = 4, tone = '#d8bd92', detail = 5, dress = 1, tree = false, birds = true } = {}) {
  const { PAL } = k, g = new THREE.Group(), r = k.rng(seed * 31 + 7);
  // a fluted column with stepped ledges and a ragged crown, y in -1..1
  const geo0 = new THREE.CylinderGeometry(1, 1, 2, detail > 5 ? 56 : 44, detail > 5 ? 34 : 26, false).deleteAttribute('uv');
  const geo = k.mergeVertices(geo0);
  const p = geo.attributes.position, asp = height / radius;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), rr = Math.hypot(x, z), a = Math.atan2(z, x), t = (y + 1) / 2;
    const ca = Math.cos(a), sa = Math.sin(a);
    const big = k.fbm(ca * 1.1 + seed * 5.1, sa * 1.1 + seed * 2.3, y * asp * 0.35, 3) - 0.5;                 // the stack's overall lean and bulge
    const flute = 1 - Math.abs(k.noise3(ca * 3.4 + seed, sa * 3.4, y * asp * 0.12 + seed * 3) * 2 - 1);      // vertical buttresses
    const ledge = k.noise3(seed * 7, Math.floor(t * (5 + asp * 1.5) + k.noise3(ca * 2, sa * 2, seed) * 0.8), 0) - 0.5; // strata step in and out
    const f = (1.16 - 0.34 * t) * (1 + big * 0.75 + (flute - 0.5) * 0.3 + ledge * 0.2);
    const crown = 1 + (k.fbm(x * 2.2 + seed, z * 2.2, seed * 1.7, 3) - 0.5) * 0.5 / asp * 3;                // uneven top
    const yy = y > 0.999 ? y * crown + (1 - rr) * 0.05 : y;
    const edge = rr > 0.999 ? 1 : rr;                                                                         // cap vertices keep their fraction
    p.setXYZ(i, ca * edge * f, yy, sa * edge * f);
  }
  geo.computeVertexNormals();
  const H = height + depth, sy = H / 2, cy = height - sy;
  const tide = Math.max(1.1, Math.min(4, radius * 0.16));
  const mat = k.toon({
    color: tone, shade: '#a297c6', deep: '#655e90', patinaA: '#c4a6bd', patinaB: '#cfa670', patinaAmtA: 0.2, patinaAmtB: 0.24, patinaScale: 2.2, patinaSeed: seed,
    wobble: 0.35, wobbleScale: 1.6, seamY: 0, topAmt: turf ? 1 : 0, top: PAL.g1, topScale: 0.35, topDab: 9, mottle: 0.9, streaks: 0.5,
    ...rockLook(Math.max(0.1, 2.6 / height), Math.max(0.1, 1.5 / radius), 1, seed, { dip: [0.1 * Math.sin(seed * 2.1), 0.08 * Math.cos(seed * 1.3)], tide, barnacles: 2.4 / tide, guano: birds && dress > 0 ? [height * 0.45, height * 0.95] : [0, 1] }),
  });
  const rock = new THREE.Mesh(geo, mat); rock.scale.set(radius, sy, radius); rock.position.y = cy; rock.rotation.y = r() * 6.28; g.add(rock);
  if (turf) {
    // a crown of leaf that spills over the rim
    const spots = []; const n = 4 + Math.floor(r() * 3);
    for (let i = 0; i < n; i++) { const a = r() * 6.28, d = r() * radius * 0.5, s = radius * r.range(0.16, 0.34); spots.push([Math.cos(a) * d, height + s * 0.2, Math.sin(a) * d, s, 0.55]); }
    if (dress > 0) for (let i = 0, m = 3 + Math.floor(r() * 4); i < m; i++) { const a = r() * 6.28, s = radius * r.range(0.1, 0.2), d = radius * r.range(0.72, 0.9); spots.push([Math.cos(a) * d, height - s * r.range(0.2, 1.1), Math.sin(a) * d, s, 0.7]); }
    g.add(clump(k, spots, { seed, dabs: dress > 0 }));
  }
  if (dress > 0) {
    const pts = surfacePoints(rock), gh = Math.max(0.5, Math.min(2.6, radius * 0.13));
    const ledges = pts.filter((a) => a.n.y > 0.42 && a.p.y > tide * 2.2 && a.p.y < height * 0.96), rim = pts.filter((a) => a.p.y > height * 0.9 && a.n.y < 0.75);
    const L = pickN(r, ledges, dress * Math.min(34, 8 + radius * 1.6));
    const crown = []; for (let i = 0, n = Math.round(dress * Math.min(26, 6 + radius)); i < n; i++) { const a = r() * 6.28, d = Math.sqrt(r()) * radius * 0.62; crown.push({ p: new THREE.Vector3(Math.cos(a) * d, height * 0.995, Math.sin(a) * d), n: UP.clone() }); }
    const tufts = [...L.map((a) => anchor(a, r.range(0.6, 1.1))), ...crown.map((a) => anchor(a, r.range(0.8, 1.4)))];
    if (tufts.length) {
      g.add(grass(k, tufts, { per: 6, height: gh, width: gh * 0.13, seed, colors: ['#3f6a34', '#5f8a3a', '#86a84a', '#b9c46a', PAL.g1] }));
      g.add(flowers(k, tufts.filter((_, i) => i % 3 === 0), { kind: 'thrift', height: gh * 0.9, size: gh * 0.42, seed: seed + 1 }));
    }
    // small bushes that found a ledge, and creepers hanging from ledges and the rim
    const bushes = pickN(r, L, L.length * 0.3).map((a) => { const s = radius * r.range(0.06, 0.13); return [a.p.x, a.p.y + s * 0.3, a.p.z, s, 0.7]; });
    if (bushes.length) g.add(clump(k, bushes, { seed: seed + 4 }));
    const hang = [...pickN(r, rim, dress * Math.min(16, 4 + radius * 0.7)), ...pickN(r, L, L.length * 0.35)].map((a) => [a.p.x + a.n.x * radius * 0.03, a.p.y, a.p.z + a.n.z * radius * 0.03]);
    if (hang.length) g.add(creeper(k, hang, { per: 2, len: Math.max(1.6, radius * 0.55), gap: Math.max(0.3, radius * 0.07), leaf: Math.max(0.3, radius * 0.075), seed: seed + 6, spread: radius * 0.05 }));
    if (birds) { const sit = pickN(r, ledges.filter((a) => a.p.y > height * 0.3), dress * Math.min(9, 2 + radius * 0.3)); if (sit.length) g.add(specks(k, sit, { size: Math.max(0.5, Math.min(1.5, radius * 0.075)), seed })); }
    if (tree) { const t = windTree(k, { h: radius * (tree === true ? 0.9 : tree), seed: seed + 2 }); t.position.set(-radius * 0.2, height * 0.99, radius * 0.1); g.add(t); }
  }
  g.userData.foam = { r: radius * 1.02, w: Math.max(1.2, radius * 0.22) };
  g.userData.height = height; g.userData.radius = radius;
  return g;
}

/** A bedded crag: a blob stepped into ledges along its beds, so it has shelves for growth and reads as rock rather than a pebble. */
export function cragGeo(k, { seed = 1, detail = 5, rough = 0.7, beds = 6, squash = 0.75, freq = 1.2, ridge = 0.5, step = 0.26 } = {}) {
  const g = k.mergeVertices(new THREE.IcosahedronGeometry(1, detail).deleteAttribute('uv')), p = g.attributes.position;
  for (let j = 0; j < p.count; j++) {
    const x = p.getX(j), y = p.getY(j), z = p.getZ(j);
    const n = k.fbm(x * freq + seed * 13.1, y * freq + seed * 7.7, z * freq + seed * 3.3);
    const r2 = 1 - Math.abs(k.noise3(x * freq * 2.1 + seed, y * freq * 2.1, z * freq * 2.1) * 2 - 1);
    let d = 1 - rough * 0.5 + rough * (n * (1 - ridge) + r2 * ridge);
    const yb = (y * 0.5 + 0.5) * beds + (k.noise3(x * 1.4 + seed, z * 1.4, seed * 2.2) - 0.5) * 0.9, b = Math.floor(yb), fr = yb - b;
    d *= 1 + (k.noise3(b * 7.13 + seed * 3.1, 0.5, seed) - 0.5) * 2 * step;                        // each bed stands in or out
    const sf = fr * fr * (3 - 2 * fr), yt = ((b + (sf * sf * (3 - 2 * sf))) / beds - 0.5) * 2;      // and its face is steep, its top a shelf
    p.setXYZ(j, x * d, (y * 0.45 + yt * 0.55) * d * squash, z * d);
  }
  g.computeVertexNormals();
  return g;
}

/**
 * A wet rock, for foregrounds and skerries. Origin at water level. Drawn beds and cracks, a wet weedy base with a
 * barnacle crust, kelp hanging from it.
 * opts: tufts (grass fans on the crown, each third with a thrift head), lush 0..1+ (cushions of thrift, creepers,
 *       wrack floating round the foot), tone, weed (kelp), grassColors, grassHeight
 */
export function rock(k, { radius = 3, height = 2, seed = 1, tone = '#8f8496', weed = true, tufts = 0, lush = 0, grassColors = ['#2f5a32', '#3f6a34', '#5f8a3a', '#86a84a', '#b9c46a'], grassHeight, stretch = 0.9, detail = lush ? 14 : 5, barnacles } = {}) {
  const g = new THREE.Group(), r = k.rng(seed * 17 + 3);
  const tide = Math.max(0.5, Math.min(1.5, height * 0.3));
  const m = new THREE.Mesh(cragGeo(k, { seed, detail, beds: Math.max(3, Math.round(3 + height * 0.8)) }), k.toon({ color: tone, shade: '#8f91b6', deep: '#4f547c', patinaA: '#6a6878', patinaB: '#5c6f5a', patinaAmtA: 0.3, patinaAmtB: 0.26, patinaScale: 1.3, patinaSeed: seed, wobble: 0.4, wobbleScale: 1.5, topAmt: weed ? 0.9 : 0, top: '#5d6b33', topScale: 0.8, topDab: 14,
    mottle: 1, streaks: 0.7, cracks: 0.6,
    rim: '#ffe2a8', rimAmt: 1, ...rockLook(2.1 / Math.max(height, 0.6), 2.4 / Math.max(radius, 1), 1, seed, { dip: [0.12 * Math.sin(seed * 1.7), 0.1 * Math.cos(seed * 2.9)], tide, barnacles: barnacles ?? (lush ? 5.5 : 3.2 / tide), lichen: 1, lichenScale: lush || barnacles ? 3.2 : undefined }) }));
  m.scale.set(radius, height * 1.6, radius * stretch); m.position.y = height * 0.25; g.add(m);
  if (weed) g.add(kelp(k, Array.from({ length: lush ? 9 : 5 }, (_, i) => [Math.cos(i * 1.3 + seed) * radius * 0.75, height * (lush ? r.range(0.35, 0.8) : 0.75), Math.sin(i * 1.3 + seed) * radius * 0.6]), { per: 3, len: height * 0.9, width: radius * 0.14, seed }));
  if (tufts || lush) {
    const gh = grassHeight ?? Math.min(1.1, 0.5 + radius * 0.08);
    const pts = topPoints(k, m, tufts || Math.round(radius * 8), r, { rx: radius * 0.72, rz: radius * 0.6, minUp: 0.5 });
    g.add(grass(k, pts, { per: lush ? 8 : 5, height: gh, width: gh * 0.1, seed, colors: grassColors, spread: 0.6 }));
    g.add(flowers(k, pts.filter((_, i) => i % (lush ? 3 : 4) === 0), { kind: 'thrift', height: gh * 0.85, size: lush ? 0.2 : 0.3, seed: seed + 1 }));
    if (lush) {
      const cs = pickN(r, pts, lush * Math.min(9, 2 + radius * 1.1)).map((a) => { const s = r.range(0.32, 0.62) * Math.min(1.5, 0.6 + radius * 0.1); return [a.p.x, a.p.y + s * 0.2, a.p.z, s]; });
      if (cs.length) g.add(cushions(k, cs, { seed: seed + 3 }));
      const side = surfacePoints(m).filter((a) => a.n.y > 0.25 && a.n.y < 0.8 && a.p.y > tide * 1.6);
      const hang = pickN(r, side, lush * Math.min(10, 2 + radius)).map((a) => [a.p.x, a.p.y, a.p.z]);
      if (hang.length) g.add(creeper(k, hang, { per: 2, len: Math.max(0.9, height * 0.45), seed: seed + 6, gap: 0.24, leaf: 0.26, colors: ['#1d3f2c', '#2c5a36', '#2c5a36', '#4d7d3c', '#7d9a44'] }));
      const fr = []; for (let i = 0, n = Math.round(lush * (5 + radius * 1.6)); i < n; i++) { const a = r() * 6.283, d = radius * r.range(0.82, 1.0); fr.push([Math.cos(a) * d, Math.sin(a) * d * stretch, a + r.range(-0.7, 0.7), r.range(0.9, 2.2) * Math.min(1.4, 0.5 + radius * 0.12)]); }
      g.add(wrack(k, fr, { seed }));
    }
  }
  g.userData.foam = { r: radius * 0.95, w: Math.max(0.8, radius * 0.25) };
  return g;
}

/** The skerry: a low reef far out with a broken, unlit tower. Origin at water level. */
export function skerry(k, { scale = 1, dress = 1 } = {}) {
  const { PAL } = k, g = new THREE.Group(), r = k.rng(919);
  const reefMat = k.toon({ color: '#a8977f', shade: '#a297c6', patinaA: '#8d86a8', patinaAmtA: 0.3, patinaScale: 0.2, wobble: 0.4, topAmt: 0.7, top: PAL.g1, topScale: 0.25, topDab: 8, ...rockLook(0.34, 0.12, 1, 91, { tide: 2.4, barnacles: 1, dip: [0.09, 0.05], lichen: 1 }) });
  const reef = new THREE.Mesh(cragGeo(k, { seed: 91, rough: 0.7, squash: 0.5, freq: 1.3, ridge: 0.6, beds: 5, step: 0.2 }), reefMat);
  reef.scale.set(46, 18, 22); reef.position.y = -2; g.add(reef);
  const outliers = [];
  for (const [x, z, s, seed] of [[-34, 6, 9, 92], [36, -5, 7, 93], [-18, -12, 6, 94], [52, 4, 4, 95], [-50, -3, 5, 96]]) { const b = new THREE.Mesh(cragGeo(k, { seed, rough: 0.7, squash: 0.7, ridge: 0.6, beds: 4 }), reefMat); b.scale.set(s, s * 0.9, s * 0.8); b.position.set(x, 0, z); g.add(b); outliers.push(b); }
  const tower = new THREE.Mesh(lathe([[5, 0], [4.6, 6], [4.1, 14], [3.8, 21], [4.3, 21.5], [4.3, 22.5]], 20), k.toon({ color: '#d9c6a0', shade: '#8f86b8', deep: '#5d5788', patinaA: PAL.verdigris, patinaB: PAL.rust, patinaAmtA: 0.3, patinaAmtB: 0.25, patinaScale: 0.3, stripes: [{ y: 6, w: 1.6, color: PAL.red }, { y: 15, w: 1.4, color: PAL.red }], seamY: 0.2, side: THREE.DoubleSide, mottle: 0.7, streaks: 0.6, seamBreak: 0.7 }));
  tower.position.set(6, 5, 0); tower.rotation.z = -0.05; tower.userData.towerPart = true; g.add(tower);   // towerPart: a film that wants the bare reef can find the tower's pieces (The Tide Keeper of San Francisco does)
  // the broken crown: a few jagged teeth where the lantern room was
  for (let i = 0; i < 5; i++) { const a = i * 1.26; const t = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.5 + (i % 3) * 1.2, 0.5), k.toon({ color: PAL.cream, patinaA: PAL.rust, patinaAmtA: 0.4 })); t.position.set(6 + Math.cos(a) * 3.9, 28 + (i % 3) * 0.6, Math.sin(a) * 3.9); t.rotation.y = -a + Math.PI / 2; t.userData.towerPart = true; g.add(t); }
  if (dress > 0) {
    // turf, thrift and scrub over the reef; birds on the tower's broken rim; creepers down its seaward face
    const pts = topPoints(k, reef, Math.round(46 * dress), r, { rx: 38, rz: 17, minUp: 0.45 });
    g.add(grass(k, pts, { per: 6, height: 2.3, width: 0.3, seed: 91, colors: ['#3f6a34', '#5f8a3a', '#86a84a', '#b9c46a'] }));
    g.add(flowers(k, pts.filter((_, i) => i % 3 === 0), { kind: 'thrift', height: 2.2, size: 0.95, seed: 92 }));
    g.add(clump(k, pickN(r, pts, 12 * dress).map((a) => { const s = r.range(1.6, 3.6); return [a.p.x, a.p.y + s * 0.25, a.p.z, s, 0.6]; }), { seed: 93 }));
    const vine = creeper(k, [[2.2, 9, 2.2], [9.8, 7.5, 2.6]], { per: 2, len: 4.5, gap: 0.8, leaf: 0.8, seed: 94, spread: 1 }); vine.userData.towerPart = true; g.add(vine);
    const perched = specks(k, [[6 + 3.9, 29.2, 0.4], [6 - 2.4, 29.9, 3.0], [-30, 8.6, 5], [30, 6.6, -3], [-12, 12.4, 3]], { size: 1.5, seed: 9 }); perched.userData.towerBirds = 2; g.add(perched);   // its first two sit on the tower's rim
  }
  g.userData.foam = { r: 40, w: 7 }; g.userData.stand = new THREE.Vector3(-17, 5.5, 3);   // where a Keeper would stand, beside the tower
  g.scale.setScalar(scale);
  g.userData.towerTop = new THREE.Vector3(6, 29, 0).multiplyScalar(scale);
  return g;
}

/**
 * The sea plane, 12000 units square, as a grid that is fine near the origin and grows outward. Two giant triangles
 * lose precision when the rasteriser clips them: the painted bands then jump whenever the camera moves a little.
 */
export function seaGeo(size = 12000) {
  const half = [0]; for (let v = 6; v < size / 2; v *= 1.22) half.push(v); half.push(size / 2);
  const xs = [...half.slice(1).reverse().map((v) => -v), ...half], n = xs.length, pos = [], idx = [];
  for (const z of xs) for (const x of xs) pos.push(x, 0, z);
  for (let j = 0; j < n - 1; j++) for (let i = 0; i < n - 1; i++) { const a = j * n + i; idx.push(a, a + n, a + 1, a + 1, a + n, a + n + 1); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(pos.map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  g.setIndex(idx);
  return g;
}

/** Write a list of foam-making things into a sea material: items = Object3Ds with userData.foam, or [x, z, r, w]. */
export function registerFoam(seaMat, items) {
  const u = seaMat.uniforms.uRocks.value; let i = 0;
  for (const it of items) {
    if (i >= u.length) break;
    if (Array.isArray(it)) u[i++].set(...it);
    else if (it.userData?.foam) { const s = it.scale.x; u[i++].set(it.position.x, it.position.z, it.userData.foam.r * s, it.userData.foam.w * s); }
  }
  for (; i < u.length; i++) u[i].set(0, 0, 0, 0);
}

/**
 * The bay: sky, sea, the ring of sea stacks, the far skerry, mist bands. The Keeper sits at the origin.
 * Sun low over the sea at screen right-back. Returns { scene, sea, seaMat, stacks, skerry, sky, mist: [], look }.
 * Shots add the Keeper, foreground and effects, and may move things.
 */
export const BAY = {
  seabed: -3.2,                             // Keeper root y with the tide out (s01-s04): it sits in the shallows
  seabedHigh: -9.4,                         // ... with the tide in (s05-s14): seated, the water is at its chest gauge
  seabedDeep: -17.5,                        // ... wading in open water (s16-s17): chest deep, standing
  faceShore: 0.42,                          // keeper.root.rotation.y while it sleeps and rises (faces the camera side)
  faceSea: 2.65,                            // ... once it has turned to the skerry (s12 on)
  sun: [0.5, 0.17, -0.85],
  skerryDir: [0.47, 0, -0.88], skerryDist: 2300, skerryNear: 320,
  look: { sun: [0.5, 0.17, -0.85], fogColor: '#f3e7c8', fogSun: '#ffd58a', fog: [0.0016, 0, 0.03, 0.86], inkFade: 0.0022, focus: 80, focusRange: 1e6, blur: 0 },
};
export function buildBay(k, { skyOpts = {}, seaOpts = {}, stacks: withStacks = true, mist: withMist = true, skerryNear = false, wide = false, dress = wide ? 1 : 0.6 } = {}) {
  const { THREE: T, PAL } = k;
  const scene = new T.Scene();
  const sky = k.sky({ coverage: 0.62, cloudLow: 0.045, cloudHigh: 0.6, cloudScaleX: 1.5, cloudScaleY: 11, seed: 3.3, sunSize: 0.05, glow: 0.7, ...skyOpts }); scene.add(sky);
  const seaMat = k.sea({ horizon: 420, glitter: 1, pathWidth: 30, ...seaOpts });
  const sea = new T.Mesh(seaGeo(), seaMat); scene.add(sea);
  const stacks = [], far = [];
  if (withStacks) {
    // [x, z, radius, height, seed, tree]: a loose horseshoe open to the right-back, where the sun and the skerry are
    const layout = [[-34, -22, 7, 26, 2, 0.8], [-62, 8, 9, 17, 3], [-58, -70, 12, 38, 4, 0.7], [-120, -150, 18, 52, 5], [12, -77, 8, 30, 6], [22, -150, 11, 34, 7, 0.8],
      [-180, -330, 30, 70, 8], [-20, -420, 26, 46, 9], [150, -90, 10, 22, 10], [-240, -90, 34, 60, 11], [-400, -620, 60, 110, 12], [90, -700, 40, 60, 13]];
    for (const [x, z, rad, h, seed, tree] of layout) { const s = seaStack(k, { radius: rad, height: h, seed, detail: rad > 20 ? 6 : 5, dress: dress * (z < -500 ? 0.5 : 1), tree: dress > 0 && tree ? tree : false }); s.position.set(x, 0, z); scene.add(s); stacks.push(s); }
    if (wide) {
      // the wide shots' extra depth: needles and low reefs between the near stacks, and a far rank that pales into the haze
      for (const [x, z, rad, h, seed] of [[-84, -44, 4, 31, 21], [46, -118, 4.5, 40, 22], [-22, -128, 3.4, 24, 23], [70, -52, 3.2, 12, 24], [-150, -210, 9, 64, 25], [64, -250, 8, 50, 26],
        [-70, -260, 14, 30, 27], [120, -330, 12, 58, 28]]) { const s = seaStack(k, { radius: rad, height: h, seed, dress: z < -200 ? 0.5 : 1 }); s.position.set(x, 0, z); scene.add(s); far.push(s); }
      for (const [x, z, rad, h, seed] of [[-560, -900, 70, 190, 31], [-290, -1000, 90, 84, 32], [-60, -1150, 30, 215, 33], [330, -1150, 110, 66, 34], [-760, -520, 90, 160, 35], [640, -760, 40, 150, 36], [-150, -760, 20, 118, 37], [110, -1300, 50, 170, 38], [-205, -820, 16, 64, 39]]) {
        const s = seaStack(k, { radius: rad, height: h, seed, dress: 0, turf: true }); s.position.set(x, 0, z); scene.add(s); far.push(s); }
    }
  }
  // skerryNear: the short cut's staging. The skerry stands where the wide shots can see it, so the dead tower is
  // planted in the opening picture and answered in the last one.
  const sk = skerry(k, { scale: skerryNear ? 1.35 : 3, dress }), sd = skerryNear ? BAY.skerryNear : BAY.skerryDist;
  sk.position.set(BAY.skerryDir[0] * sd + (skerryNear ? 10 : 0), 0, BAY.skerryDir[2] * sd); sk.rotation.y = 0.5; scene.add(sk);
  const mist = [];
  if (withMist) {
    // [z, y, width, height, alpha, seed]
    for (const [z, y, w, h, a, seed] of [[-48, 3, 420, 16, 0.5, 1], [-115, 5, 700, 26, 0.6, 2], [-250, 8, 1300, 46, 0.7, 3], [-520, 14, 2600, 90, 0.75, 4]]) {
      const m = mistBand(k, { width: w, height: h, alpha: a, seed, foot: wide ? Math.min(9, 1.5 - z * 0.03) : 0 }); m.position.set(0, y, z); scene.add(m); mist.push(m);
    }
    if (wide) {
      mist[3].scale.y = 0.5; mist[3].position.y = 9;        // the far bank sits lower, so the far rank of stacks stands out of it
      // sea mist lying on the water between the planes, each drifting at its own pace, and one far wall of haze
      // [x, z, width, height, alpha, seed, speed]
      for (const [x, z, w, h, a, seed, sp] of [[-34, -12, 110, 4.5, 0.3, 11, 0.03], [50, -34, 200, 5, 0.28, 12, -0.022], [-60, -92, 420, 8, 0.4, 13, 0.018], [-150, -180, 440, 11, 0.45, 14, -0.014],
        [-140, -420, 1700, 26, 0.55, 15, 0.01], [0, -840, 4200, 44, 0.7, 16, 0.006]]) {
        const m = mistBand(k, { width: w, height: h, alpha: a, seed, speed: sp, lie: 1, foot: h * 0.45, scale: Math.max(5, w / 34) }); m.position.set(x, h * 0.5 - 0.4, z); scene.add(m); mist.push(m);
      }
    }
  }
  return { scene, sea, seaMat, stacks, far, skerry: sk, sky, mist, look: { ...BAY.look } };
}

/**
 * A band of mist: a card on the effects layer, soft drifting noise feathered to nothing at its top, foot and ends. Faces +Z.
 * opts: width, height, alpha, color, seed, speed, scale (noise cells across the width)
 */
export function mistBand(k, { width = 300, height = 20, alpha = 0.6, color = k.PAL.mist, seed = 1, speed = 0.012, scale = 7, soft = 6, lie = 0, foot = 0 } = {}) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(width, height), k.fx({
    soft, uniforms: { uMist: { value: k.col(color) }, uM: { value: new THREE.Vector4(alpha, seed * 9.1, speed, scale) }, uLie: { value: lie }, uFoot: { value: foot } },
    frag: /* glsl */ `uniform vec3 uMist; uniform vec4 uM; uniform float uLie,uFoot;
      vec4 effect(){ vec2 q=vUv*vec2(uM.w,uM.w*.22)+vec2(uTime*uM.z+uM.y,uM.y);
        float n=fbm2(q)+.25*fbm2(q*3.+5.);
        // the bank's height wanders along its length and its top is torn by the noise, so no two banks show parallel tops
        float wan=fbm2(vec2(q.x*.37+uM.y*1.7,uM.y*.61+2.))-.5;
        float y=clamp(vUv.y*(1.+wan*.9)+(n-.6)*(.16+.2*uLie),0.,1.);
        float ends=smoothstep(0.,.24,vUv.x+wan*.08)*smoothstep(1.,.76,vUv.x+wan*.08);
        // lie: the band rests on the water (dense at its foot, thinning upward) instead of floating
        float env=mix(smoothstep(0.,.45,y)*smoothstep(1.,.45,y),smoothstep(.92,.1,y)*smoothstep(0.,.3,vUv.y)*.72,uLie)*ends;
        // soft: density rises over a wide range of the noise, so a bank has no drawn outline, only thicker and thinner air
        float d=n*env*1.9;
        float a=(smoothstep(.3,.78,d)*.55+smoothstep(.62,1.15,d)*.45)*uM.x;
        a*=smoothstep(0.,.07,vUv.y)*smoothstep(1.,.9,vUv.y)*smoothstep(0.,.05,vUv.x)*smoothstep(1.,.95,vUv.x);   // nothing reaches the card's own edges
        if(uFoot>0.) a*=smoothstep(0.,uFoot,vWorld.y+(n-.6)*uFoot*.5);   // foot: the band thins into the water, unevenly, instead of standing on it as a ruled line
        return vec4(uMist*a,a); }`,
  }));
  return k.onFx(m);
}
