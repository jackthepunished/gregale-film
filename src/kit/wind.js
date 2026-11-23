// The gregale made visible: brush strokes of air that run downwind over the water, and what the wind carries.
// Everything is stateless: a stroke's place is a closed-form function of the shot time.
import * as THREE from 'three';
import { petals } from '../engine/kit/fx.js';
import { C, WIND } from './look.js';

/**
 * Wind strokes: `count` long thin ribbons scattered through a box ([min, max] corners), lying along the wind, each with
 * a bright head that runs its length and a dry-brushed tail. userData.power (0..1) fades the whole set, so a shot can
 * let the wind arrive.
 * opts: length [min, max], thick [min, max] (world units), speed (lengths a second), colors, curl (how far a stroke bows)
 */
export function windStrokes(k, { box = [[-60, 1, -60], [60, 14, 40]], count = 40, length = [16, 40], thick = [0.09, 0.22], speed = 0.5, seed = 1, colors = [C.cream, C.mintPale, '#ffffff'], curl = 1, dir = WIND } = {}) {
  const r = k.rng(seed * 53 + 9), power = { value: 1 };
  const mat = k.fx({
    side: THREE.DoubleSide, uniforms: { uWP: power, uWS: { value: speed }, uCurl: { value: curl } }, vert: `uniform float uCurl;`,
    // the unit card is bowed (in units of its own thickness, which the instance scale then makes world units)
    displace: /* glsl */ `
      #ifdef USE_INSTANCING_COLOR
        float ph=instanceColor.x*6.283; pos.y += (sin(uv.x*3.6+ph+uTime*.9)*5.+sin(uv.x*8.+ph*2.)*1.6)*uCurl; pos.z += sin(uv.x*2.4+ph*1.7)*.02;
      #endif`,
    frag: /* glsl */ `uniform float uWP,uWS;
      vec4 effect(){ float ph=vICol.x, u=vUv.x, v=abs(vUv.y-.5)*2.;
        float h=fract(uTime*uWS*(.7+.6*vICol.y)+ph)*1.7-.2, tail=.34+.22*vICol.y;
        float along=(u-(h-tail))/tail; if(along<0.||along>1.) discard;
        float w=pow(along,.55)*(1.-smoothstep(.9,1.,along));
        float a=1.-smoothstep(w*.55,w,v);
        a*=step(.34,vnoise(vec2(u*46.+ph*31.,ph*9.))+along*.75);
        a*=smoothstep(0.,.06,u)*smoothstep(1.,.94,u)*uWP;
        vec3 c=mix(vec3(.83,.98,.92),vec3(1.,.98,.9),vICol.z);
        return vec4(c*a*.8,a*.8); }`,
  });
  const mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1, 40, 1), mat, count), M = new THREE.Matrix4(), Q = new THREE.Quaternion(), col = new THREE.Color();
  const yaw = Math.atan2(-dir[1], dir[0]);
  for (let i = 0; i < count; i++) {
    const p = [0, 1, 2].map((a) => r.range(box[0][a], box[1][a])), len = r.range(...length), th = r.range(...thick);
    Q.setFromEuler(new THREE.Euler(r.range(-0.04, 0.04), yaw + r.range(-0.07, 0.07), r.range(-0.03, 0.03), 'YXZ'));
    M.compose(new THREE.Vector3(...p), Q, new THREE.Vector3(len, th, 1)); mesh.setMatrixAt(i, M);
    mesh.setColorAt(i, col.setRGB(r(), r(), r()));
  }
  mesh.instanceMatrix.needsUpdate = true; mesh.instanceColor.needsUpdate = true; mesh.frustumCulled = false; mesh.userData.power = power;
  void colors;
  return k.onFx(mesh);
}

/** Petals torn from the town's bougainvillea, going downwind through a box. */
export function windPetals(k, { box, count = 46, seed = 3, speed = 9, size = [0.16, 0.36], colors = C.petals } = {}) {
  return petals(k, { box, count, seed, size, colors, wind: [WIND[0] * speed, -0.25, WIND[1] * speed], span: 12 });
}

/** The world yaw the wind blows toward (for the boat's pennant). */
export const windYaw = (dir = WIND) => Math.atan2(-dir[1], dir[0]);
