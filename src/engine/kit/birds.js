
// Birds: the tern (the Keeper's companion, seen close) and gulls (far flocks).
import * as THREE from 'three';

/**
 * The tern: white, grey-backed, black cap, red bill, forked tail. About 1.1 units long, facing +Z, origin under its belly.
 *   const t = tern(k); t.set({ flap: -1..1 (wings down..up), fold: 0..1 (1 = wings folded), tuck: 0..1 (head tucked, asleep), legs: 0..1,
 *     twist: radians the wings are turned about their own span, leading edge up; arch: radians of gull-wing bend (arm up, hand down) })
 * The wings are flat panels: to a lens ahead of the bird, level or raised, they are a hairline unless twisted or arched.
 */
export function tern(k, { scale = 1 } = {}) {
  const { PAL } = k, g = new THREE.Group(), body = new THREE.Group(); g.add(body);
  const id = k.newId();
  const white = k.toon({ id, color: '#fbf7ea', shade: '#b9b6d6', deep: '#8f8cb4', wobble: 0.3, wobbleScale: 4, t1: 0.0,
    fragColor: `c=mix(c,vec3(.72,.76,.82),smoothstep(.02,.06,q.y-.02+q.z*-.1));` });      // pale grey mantle above the midline
  const capMat = k.toon({ id, color: '#fbf7ea', shade: '#b9b6d6', deep: '#8f8cb4', wobble: 0.2, wobbleScale: 5,
    fragColor: `c=mix(c,vec3(.13,.12,.16),step(.03,q.y+q.z*.35));` });                    // black cap from the bill back over the crown
  const m = (geo, mat, parent, pos, rot) => { const x = new THREE.Mesh(geo, mat); if (pos) x.position.set(...pos); if (rot) x.rotation.set(...rot); parent.add(x); return x; };
  m(new THREE.SphereGeometry(0.22, 20, 14).scale(0.82, 0.8, 1.9), white, body, [0, 0.2, 0]);
  const head = new THREE.Group(); head.position.set(0, 0.3, 0.36); body.add(head);
  m(new THREE.SphereGeometry(0.135, 16, 12), capMat, head);
  m(new THREE.ConeGeometry(0.035, 0.24, 6).rotateX(Math.PI / 2), k.toon({ id, color: PAL.red, wobble: 0.1 }), head, [0, -0.02, 0.22]);
  const eyeMat = k.toon({ color: '#141318', ink: false });
  m(new THREE.SphereGeometry(0.018, 6, 6), eyeMat, head, [0.1, 0.0, 0.08]); m(new THREE.SphereGeometry(0.018, 6, 6), eyeMat, head, [-0.1, 0.0, 0.08]);
  // tail: two long streamers
  const tailGeo = new THREE.BufferGeometry();
  tailGeo.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0.09, 0, 0, 0.14, 0.05, -0.44, 0, 0, 0, -0.09, 0, 0, -0.14, 0.05, -0.44, 0.09, 0, 0, -0.09, 0, 0, 0, 0, -0.3], 3));
  tailGeo.computeVertexNormals();
  const flat = k.toon({ id, color: '#f4f0e4', shade: '#b9b6d6', side: THREE.DoubleSide, wobble: 0.1, fragColor: `c=mix(c,vec3(.6,.64,.72),step(.5,fbm3(q*3.)));` });
  m(tailGeo, flat, body, [0, 0.2, -0.36]);
  // wings: inner + outer panel each side, built in the XZ plane, pivot at the shoulder
  const wingShape = (len, chord, tip) => { const s = new THREE.Shape(); s.moveTo(0, chord * 0.5); s.quadraticCurveTo(len * 0.5, chord * 0.62, len, tip); s.quadraticCurveTo(len * 0.55, -chord * 0.2, 0, -chord * 0.5); s.closePath(); return new THREE.ShapeGeometry(s, 6).rotateX(-Math.PI / 2); };
  const wingMat = k.toon({ id, color: '#e9ebee', shade: '#aeb0cf', deep: '#8f8cb4', side: THREE.DoubleSide, wobble: 0.1, t1: -0.2,
    fragColor: `c=mix(c,vec3(.2,.2,.26),smoothstep(.34,.36,abs(q.x))*step(q.z,-.0)*.0+step(.5,abs(q.x))*step(.02,-q.z+abs(q.x)*.2-.12)*.85);` });
  const wings = {};
  for (const sgn of [-1, 1]) {
    const inner = new THREE.Group(); inner.position.set(sgn * 0.12, 0.3, 0.08); body.add(inner);
    // the arm panel keeps its full chord to the wrist, where the hand panel (0.26 wide) joins it: tapered to a point there,
    // the hand hangs off it by a corner and reads as a detached piece as soon as the wing bends
    const arm = new THREE.Shape(); arm.moveTo(0, 0.18); arm.quadraticCurveTo(0.25, 0.2, 0.5, 0.15); arm.lineTo(0.5, -0.11); arm.quadraticCurveTo(0.25, -0.17, 0, -0.18); arm.closePath();
    const gi = new THREE.ShapeGeometry(arm, 6).rotateX(-Math.PI / 2), go = wingShape(0.72, 0.26, -0.3);
    if (sgn < 0) { gi.scale(-1, 1, 1); go.scale(-1, 1, 1); }
    m(gi, wingMat, inner);
    const outer = new THREE.Group(); outer.position.set(sgn * 0.5, 0, -0.02); inner.add(outer);
    m(go, wingMat, outer);
    wings[sgn] = { inner, outer };
  }
  const legMat = k.toon({ color: PAL.red, ink: false });
  const legs = [m(new THREE.CylinderGeometry(0.012, 0.012, 0.14, 4), legMat, body, [0.05, 0.05, 0.02]), m(new THREE.CylinderGeometry(0.012, 0.012, 0.14, 4), legMat, body, [-0.05, 0.05, 0.02])];
  g.scale.setScalar(scale);
  function set({ flap = 0, fold = 0, tuck = 0, legs: lg = 1, pitch = 0, twist = 0, arch = 0 } = {}) {
    for (const sgn of [-1, 1]) {
      const w = wings[sgn];
      // flying: flap about the body's long axis; folded: swept back along the body and tucked down
      // (order YZX: the twist is about the span, applied before the flap, so a raised wing still shows its face)
      w.inner.rotation.set(-twist * (1 - fold), sgn * fold * 1.25, sgn * (flap * 0.75 + arch) * (1 - fold) - sgn * fold * 0.5, 'YZX');
      w.outer.rotation.set(0, sgn * fold * 1.6, sgn * (flap * 0.55 - 0.12 - arch * 1.7) * (1 - fold), 'YXZ');
      w.inner.scale.setScalar(1 - fold * 0.3); w.outer.scale.setScalar(1 - fold * 0.55);
    }
    head.rotation.set(tuck * 0.5, tuck * 1.9, 0); head.position.set(tuck * 0.06, 0.3 - tuck * 0.02, 0.36 - tuck * 0.2);
    legs.forEach((l) => { l.visible = lg > 0.5; });
    body.rotation.x = pitch;
  }
  set({ fold: 1 });
  return { root: g, body, head, set };
}

/** The nest: a ring of twigs and dry grass with two speckled eggs showing. About 1 unit across. */
export function nest(k) {
  const g = new THREE.Group(), r = k.rng(31);
  const twig = k.toon({ color: '#9a7b52', shade: '#9a90c0', ink: false, wobble: 0.5, wobbleScale: 6 });
  const twigs = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.018, 0.012, 1, 4), twig, 90), M = new THREE.Matrix4(), Q = new THREE.Quaternion(), C = new THREE.Color();
  for (let i = 0; i < 90; i++) {
    const a = r() * 6.283, rad = r.range(0.34, 0.56), y = r.range(0.0, 0.2);
    Q.setFromEuler(new THREE.Euler(Math.PI / 2 + r.range(-0.35, 0.35), -a + r.range(-0.5, 0.5), 0, 'YXZ'));
    M.compose(new THREE.Vector3(Math.cos(a) * rad, y, Math.sin(a) * rad), Q, new THREE.Vector3(1, r.range(0.4, 0.8), 1));
    twigs.setMatrixAt(i, M); twigs.setColorAt(i, C.set(r.pick(['#ffffff', '#e6d0a8', '#c7a887', '#f3e3b8'])));
  }
  twigs.instanceColor.needsUpdate = true; g.add(twigs);
  const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.44, 16, 8, 0, 6.283, Math.PI * 0.55, Math.PI * 0.45), k.toon({ color: '#7d6244', ink: false, side: THREE.DoubleSide })); bowl.position.y = 0.36; g.add(bowl);
  return g;
}

/**
 * Gulls: far birds as billboards, each two wing strokes that flap. birds: [{ path(t) -> [x,y,z], size, phase, rate }]
 * Returns { mesh, update(f) } where f is the shot frame (flaps are on twos).
 */
export function gulls(k, birds, { color = '#fbf6e6', shade = '#8f8cb4', fog = 0.6 } = {}) {
  const n = birds.length, geo = new THREE.InstancedBufferGeometry(), quad = new THREE.PlaneGeometry(1, 1);
  geo.index = quad.index; geo.setAttribute('position', quad.attributes.position); geo.setAttribute('uv', quad.attributes.uv); geo.setAttribute('normal', quad.attributes.normal);
  const pos = new Float32Array(n * 3), par = new Float32Array(n * 4);
  const aPos = new THREE.InstancedBufferAttribute(pos, 3), aPar = new THREE.InstancedBufferAttribute(par, 4);
  aPos.setUsage(THREE.DynamicDrawUsage); aPar.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('aPos', aPos); geo.setAttribute('aPar', aPar); geo.instanceCount = n;
  const mat = k.shader({
    billboard: true, uniforms: { uGull: { value: k.col(color) }, uGullS: { value: k.col(shade) }, uGF: { value: fog } },
    vert: `in vec3 aPos; in vec4 aPar; out vec4 vG;`,
    displace: `ctr=vec4(aPos,1.); off=position.xy*aPar.x; spin=aPar.z; vG=aPar;`,
    frag: /* glsl */ `in vec4 vG; uniform vec3 uGull,uGullS; uniform float uGF;
      vec4 surface(){ vec2 p=(vUv-.5)*2.; float ax=abs(p.x);
        float flap=vG.y;                                           // -1 wings down .. 1 wings up
        float gl=1.-min(abs(flap)*1.6,1.);                         // gliding: arm up and hand drooping, never a flat bar
        float y=p.y-(ax*flap*.75-ax*ax*flap*.25)+.1*(1.-ax)-gl*(.42*sin(ax*2.5)-.3*ax*ax);         // wing spine: a bent stroke
        float th=.11*(1.-ax*.8)+.02; float body=step(length(p*vec2(1.8,1.)-vec2(0.,-.02)),.2);
        if(max(step(abs(y),th)*step(ax,.96),body)<.5) discard;
        vec3 c=mix(uGull,uGullS,step(.62,ax)*.8+step(y,-th*.2)*.25*(1.-step(.62,ax)));
        return vec4(mix(c*uAmb,fogTint(),fogAmount()*uGF),0.); }`,   // (Gregale) c*uAmb: the ambient
  });
  const mesh = new THREE.Mesh(geo, mat); mesh.frustumCulled = false;
  function update(f) {
    const t = f / k.FPS, t2 = k.twos(f) / k.FPS;
    birds.forEach((b, i) => {
      const p = b.path(t), q = b.path(t + 0.05);
      pos[i * 3] = p[0]; pos[i * 3 + 1] = p[1]; pos[i * 3 + 2] = p[2];
      const glide = b.glide ?? 0.25, ph = (t2 * (b.rate ?? 3) + (b.phase ?? 0));
      const flap = (ph % 1) < 1 - glide || !(b.glide) ? Math.sin(ph * 6.283) : 0.25;
      par[i * 4] = b.size ?? 2; par[i * 4 + 1] = flap; par[i * 4 + 2] = Math.max(-0.5, Math.min(0.5, (q[1] - p[1]) * 0.6)) * (b.bank ?? 1); par[i * 4 + 3] = 0;
    });
    aPos.needsUpdate = true; aPar.needsUpdate = true;
  }
  update(0);
  return { mesh, update };
}
