
// Effects: spray and falling water, drifting petals, the lighthouse beam, glows.
// Particles are stateless: every particle's position is a closed-form function of the shot time,
// so any frame renders alone. Spray and petals are flat cut-out shapes (no ink, no soft sprites).
import * as THREE from 'three';

/**
 * Ballistic particles. `list` is an array of
 *   { p: [x,y,z] origin, v: [x,y,z] velocity (units/s), t: birth (s), life: seconds, size, color?: '#hex', stretch?: 0..n }
 * opts: gravity (units/s^2), drag (1/s), twos (default true: motion held for two frames), lit / shade colours,
 *       shape: 'blob' (ragged foam), 'drop' (teardrop along velocity), 'petal'
 *       sway: sideways flutter amplitude (petals), grow: size multiplier over life [start, end]
 *       fx: draw on the effects layer, after the ink (shape 'petal' only). Small things adrift in the air are then never
 *           outlined: on the inked layer a petal a few pixels wide in front of a rock picks up the rock's line all round
 *           and reads as a dark-rimmed capsule.
 * Returns a Mesh; nothing to update per frame (it reads uTime / uTime2).
 */
export function particles(k, list, { gravity = 30, drag = 0.6, twos = true, lit = k.PAL.foam, shade = '#bcd3cf', shape = 'blob', sway = 0, grow = [0.6, 1.4], fog = true, timeOffset = { value: 0 }, fx = false } = {}) {
  const n = list.length;
  const geo = new THREE.InstancedBufferGeometry();
  const quad = new THREE.PlaneGeometry(1, 1);
  geo.index = quad.index; geo.setAttribute('position', quad.attributes.position); geo.setAttribute('uv', quad.attributes.uv); geo.setAttribute('normal', quad.attributes.normal);
  const o = new Float32Array(n * 3), v = new Float32Array(n * 3), l = new Float32Array(n * 4), c = new Float32Array(n * 3), col = new THREE.Color();
  list.forEach((q, i) => {
    o.set(q.p, i * 3); v.set(q.v, i * 3); l.set([q.t ?? 0, q.life ?? 1, q.size ?? 1, q.stretch ?? 0], i * 4);
    col.set(q.color ?? '#ffffff'); c.set([col.r, col.g, col.b], i * 3);
  });
  geo.setAttribute('aOrigin', new THREE.InstancedBufferAttribute(o, 3)); geo.setAttribute('aVel', new THREE.InstancedBufferAttribute(v, 3));
  geo.setAttribute('aLife', new THREE.InstancedBufferAttribute(l, 4)); geo.setAttribute('aCol', new THREE.InstancedBufferAttribute(c, 3));
  geo.instanceCount = n;
  const common = {
    billboard: true,
    uniforms: { uP: { value: new THREE.Vector4(gravity, drag, sway, shape === 'blob' ? 0 : shape === 'drop' ? 1 : 2) }, uGrow: { value: new THREE.Vector2(...grow) }, uLitC: { value: k.col(lit) }, uShadeC: { value: k.col(shade) }, uFogOn: { value: fog ? 1 : 0 }, uT0: timeOffset },
    vert: /* glsl */ `in vec3 aOrigin; in vec3 aVel; in vec4 aLife; in vec3 aCol; uniform vec4 uP; uniform vec2 uGrow; uniform float uT0; out vec4 vP; out vec3 vPC;`,
    displace: /* glsl */ `
      float now = ${twos ? 'uTime2' : 'uTime'} + uT0;
      float age = now - aLife.x; float u = age/aLife.y; float alive = step(0.,age)*step(u,1.);
      float dr = max(uP.y,1e-3); float ta = (1.-exp(-dr*age))/dr;               // drag: velocity decays
      vec3 wpos = aOrigin + aVel*ta + vec3(0.,-.5*uP.x*age*age,0.);
      float seed = fract(aLife.x*13.7+aOrigin.x*3.1+aOrigin.z*7.3+aVel.y);
      wpos.x += sin(age*2.3+seed*40.)*uP.z; wpos.z += cos(age*1.7+seed*25.)*uP.z*.7;
      ctr = vec4(wpos,1.);
      float sz = aLife.z*mix(uGrow.x,uGrow.y,clamp(u,0.,1.))*alive*smoothstep(1.,.8,u);
      off = position.xy*sz;
      // stretch along the screen-space direction of travel
      vec3 vel = aVel*exp(-dr*age) + vec3(0.,-uP.x*age,0.);
      vec2 sv = (viewMatrix*vec4(vel,0.)).xy; float sl = length(sv);
      if(aLife.w>0. && sl>1e-3){ vec2 d = sv/sl; float along = dot(position.xy,vec2(0.,1.)); off = (position.x*vec2(d.y,-d.x) + along*d*(1.+aLife.w*min(sl*.06,3.)))*sz; }
      if(uP.w>1.5){ off.y *= mix(.6,1.,abs(cos(age*(2.2+seed*2.6)+seed*17.))); spin = seed*6.28+age*(1.5+seed*2.); }   // a petal rocks as it drifts, never down to a sliver
      vP = vec4(u,seed,alive,0.); vPC = aCol;`,
  };
  // a petal: round at one end, drawn out to a point at the other. Returns its half width at p.x.
  const PETAL = `float petalHalf(float x){ return .46*pow(max(1.-x*x,0.),.62)*(1.-.32*x); }`;
  const mat = fx ? k.fx({ ...common,
    frag: /* glsl */ `in vec4 vP; in vec3 vPC; uniform vec4 uP; uniform vec3 uLitC,uShadeC; uniform float uFogOn; ${PETAL}
      vec4 effect(){ if(vP.z<.5) discard; vec2 p=(vUv-.5)*2.; float hw=petalHalf(p.x);
        float a=1.-smoothstep(hw-fwidth(p.y)*1.5,hw,abs(p.y)); if(a<.01) discard;          // this layer has no multisampling: the edge is feathered here
        vec3 c=mix(uShadeC,uLitC,step(-.12*hw,p.y))*vPC;
        if(uFogOn>.5){ float d=length(vViewPos), f=1.-exp(-d*uFog.x), h=exp(-max(vWorld.y-uFog.y,0.)*uFog.z);
          c=mix(c,mix(uFogColor,uFogSun,pow(max(dot(normalize(vViewPos),uSunV),0.),5.)),clamp(f*mix(.45,1.,h),0.,uFog.w)); }
        return vec4(c*a,a); }`,
  }) : k.shader({ ...common,
    frag: /* glsl */ `in vec4 vP; ${PETAL} in vec3 vPC; uniform vec4 uP; uniform vec3 uLitC,uShadeC; uniform float uFogOn;
      vec4 surface(){ if(vP.z<.5) discard; vec2 p=(vUv-.5)*2.; float r=length(p); vec3 c;
        if(uP.w<.5){ float n=vnoise(vUv*3.+vP.y*37.); if(r>.55+.45*n-vP.x*.25) discard;
          c=mix(uShadeC,uLitC,step(-.15,p.y+(n-.5)*.9)); }
        else if(uP.w<1.5){ float w=.42*(1.-smoothstep(-.9,1.,p.y)*.75); if(abs(p.x)>w||abs(p.y)>.95) discard; c=mix(uShadeC,uLitC,step(0.,p.x+.1)); }
        else { float hw=petalHalf(p.x); if(abs(p.y)>hw) discard; c=mix(uShadeC,uLitC,step(-.12*hw,p.y)); }
        c*=vPC;
        return vec4(uFogOn>.5?applyFog(c):c,0.); }`,
  });
  const m = new THREE.Mesh(geo, mat); m.frustumCulled = false;
  return fx ? k.onFx(m) : m;
}

/** A burst: `count` particles thrown from around `at` in a cone about `dir`. Returns a list for particles(). */
export function burst(k, { at = [0, 0, 0], dir = [0, 1, 0], count = 60, speed = [8, 20], spread = 0.6, t = 0, jitterT = 0.15, life = [0.8, 1.6], size = [0.4, 1.2], radius = 1, seed = 1, stretch = 0, color } = {}) {
  const r = k.rng(seed), out = [], d = new THREE.Vector3(...dir).normalize(), q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
  for (let i = 0; i < count; i++) {
    const th = spread * Math.sqrt(r()), ph = r() * 6.283, sp = r.range(...speed);
    const v = new THREE.Vector3(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph)).applyQuaternion(q).multiplyScalar(sp);
    const a = r() * 6.283, rr = Math.sqrt(r()) * radius;
    out.push({ p: [at[0] + Math.cos(a) * rr, at[1], at[2] + Math.sin(a) * rr], v: [v.x, v.y, v.z], t: t + r() * jitterT, life: r.range(...life), size: r.range(...size), stretch, color });
  }
  return out;
}

/** Petals and seeds drifting across a box: [min, max] corners, wind vector. Loops every `period` seconds. */
export function petals(k, { box = [[-30, 0, -10], [30, 25, 30]], count = 40, wind = [1.2, -0.35, 0.3], size = [0.18, 0.42], colors = [k.PAL.thrift, '#f6d6e0', k.PAL.flower, '#f2b7c8'], seed = 9, span = 14 } = {}) {
  const r = k.rng(seed), list = [];
  for (let i = 0; i < count; i++) {
    const p = [0, 1, 2].map((a) => r.range(box[0][a], box[1][a]));
    const t0 = -r() * span;
    list.push({ p, v: wind.map((w) => w * r.range(0.6, 1.4)), t: t0, life: span * 1.6, size: r.range(...size), color: r.pick(colors) });
  }
  return particles(k, list, { gravity: 0, drag: 0.0001, twos: false, shape: 'petal', sway: 0.5, grow: [1, 1], lit: '#ffffff', shade: '#d8c8d0', fx: true });
}

/**
 * The lighthouse beam: a long wedge of light on the effects layer, cut into flat tones by drifting noise.
 * Add it to keeper.head at the lamp; rotate .rotation.y to sweep. Set .userData.power.value (0..1).
 */
export function beam(k, { length = 420, spread = 0.085, color = '#ffe9a8' } = {}) {
  const power = { value: 0 };
  const geo = new THREE.ConeGeometry(length * Math.tan(spread), length, 28, 1, true).rotateX(-Math.PI / 2).translate(0, 0, length / 2); // apex at origin, opening along +Z
  const mat = k.fx({
    additive: true, side: THREE.DoubleSide, uniforms: { uPow: power, uBeam: { value: k.col(color) }, uLen: { value: length } },
    frag: /* glsl */ `uniform float uPow,uLen; uniform vec3 uBeam;
      vec4 effect(){ float along=clamp(vObj.z/uLen,0.,1.);
        float n=fbm3(vec3(vWorld.xz*.02,vWorld.y*.05+uTime*.15));
        float edge=abs(dot(normalize(vNv),normalize(-vViewPos)));               // brightest through the middle of the cone
        float a=(.3+.7*step(.45,n))*smoothstep(0.,.5,edge)*pow(1.-along,1.4)*.34*uPow;
        return vec4(uBeam*a,0.); }`,
  });
  const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; m.userData.power = power;
  return k.onFx(m);
}

/** A round additive glow billboard (sun glare, lamp bloom, the far light). Scale it to size; userData.power drives it. */
export function glow(k, { color = '#ffe2a0', rays = 0 } = {}) {
  const power = { value: 1 };
  const m = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), k.fx({
    billboard: true, additive: true, uniforms: { uPow: power, uGC: { value: k.col(color) }, uRays: { value: rays } },
    frag: /* glsl */ `uniform float uPow,uRays; uniform vec3 uGC;
      vec4 effect(){ vec2 p=(vUv-.5)*2.; float r=length(p), a=atan(p.y,p.x);
        float g=pow(max(1.-r,0.),2.4)*.8+step(r,.16)*.5;
        if(uRays>0.) g+=pow(max(1.-r,0.),1.1)*pow(abs(cos(a*uRays*.5)),60.)*.5;
        return vec4(uGC*g*uPow,0.); }`,
  }));
  m.userData.power = power; m.frustumCulled = false;
  return k.onFx(m);
}

/**
 * A wall of spray for the splash: big ragged sheets rising and falling, three flat tones cut from noise.
 * It is a set of large billboards, each a posterised plume. list: [{ p, size, t, life, rise }]
 */
export function plumes(k, list, { lit = k.PAL.foam, mid = '#cfe3d6', shade = '#8fb9b4' } = {}) {
  const parts = list.map((q) => ({ p: q.p, v: [q.drift ?? 0, q.rise ?? 14, 0], t: q.t ?? 0, life: q.life ?? 2, size: q.size ?? 20 }));
  const n = parts.length, geo = new THREE.InstancedBufferGeometry(), quad = new THREE.PlaneGeometry(1, 1);
  geo.index = quad.index; geo.setAttribute('position', quad.attributes.position); geo.setAttribute('uv', quad.attributes.uv); geo.setAttribute('normal', quad.attributes.normal);
  const o = new Float32Array(n * 3), v = new Float32Array(n * 3), l = new Float32Array(n * 3);
  parts.forEach((q, i) => { o.set(q.p, i * 3); v.set(q.v, i * 3); l.set([q.t, q.life, q.size], i * 3); });
  geo.setAttribute('aOrigin', new THREE.InstancedBufferAttribute(o, 3)); geo.setAttribute('aVel', new THREE.InstancedBufferAttribute(v, 3)); geo.setAttribute('aLife', new THREE.InstancedBufferAttribute(l, 3));
  geo.instanceCount = n;
  const mat = k.shader({
    billboard: true, uniforms: { uA: { value: k.col(lit) }, uB: { value: k.col(mid) }, uC: { value: k.col(shade) } },
    vert: `in vec3 aOrigin; in vec3 aVel; in vec3 aLife; out vec3 vPl;`,
    displace: /* glsl */ `float age=uTime2-aLife.x; float u=age/aLife.y; float alive=step(0.,age)*step(u,1.);
      float up=1.-pow(1.-clamp(u*1.6,0.,1.),2.);                               // shoots up fast, hangs, then sinks
      ctr=vec4(aOrigin+vec3(aVel.x*age,aVel.y*aLife.y*.5*(up-u*u*.9),0.),1.);
      off=position.xy*aLife.z*alive*vec2(1.,.7+up*.9);
      vPl=vec3(u,fract(aOrigin.x*.37+aOrigin.z*.11),alive);`,
    frag: /* glsl */ `in vec3 vPl; uniform vec3 uA,uB,uC;
      vec4 surface(){ if(vPl.z<.5) discard; vec2 p=(vUv-.5)*2.;
        float n=fbm2(vUv*vec2(4.5,3.2)+vec2(vPl.y*31.,-uTime2*1.6+vPl.y*7.))+.3*(vnoise(vUv*vec2(14.,9.)+vPl.y*11.)-.5);
        float body=1.-length(p*vec2(1.15,.9)); float cut=body+(n-.5)*1.7-vPl.x*vPl.x*.8;
        if(cut<.2) discard;
        vec3 c=cut<.42?uC:(cut<.72?uB:uA);
        return vec4(mix(applyFog(c),c,.5),0.); }`,
  });
  const m = new THREE.Mesh(geo, mat); m.frustumCulled = false;
  return m;
}
