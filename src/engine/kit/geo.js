
// Geometry helpers shared by the kits.
import * as THREE from 'three';

/** Lathe from [[radius, y], ...] ordered bottom to top (that order gives outward normals). */
export const lathe = (pts, seg = 40) => new THREE.LatheGeometry(pts.map(([x, y]) => new THREE.Vector2(x, y)), seg);

/** A tube along a curve whose radius tapers from r0 to r1. */
export function taperTube(points, r0, r1, { segs = 18, radial = 8, power = 1 } = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map((p) => (p.isVector3 ? p : new THREE.Vector3(...p))));
  const frames = curve.computeFrenetFrames(segs, false);
  const pos = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, c = curve.getPointAt(t), r = r0 + (r1 - r0) * Math.pow(t, power);
    for (let j = 0; j < radial; j++) {
      const a = (j / radial) * Math.PI * 2, n = frames.normals[i], b = frames.binormals[i];
      pos.push(c.x + (Math.cos(a) * n.x + Math.sin(a) * b.x) * r, c.y + (Math.cos(a) * n.y + Math.sin(a) * b.y) * r, c.z + (Math.cos(a) * n.z + Math.sin(a) * b.z) * r);
    }
  }
  for (let i = 0; i < segs; i++) for (let j = 0; j < radial; j++) {
    const a = i * radial + j, b = i * radial + ((j + 1) % radial), c = a + radial, d = b + radial;
    idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  g.setIndex(idx); g.computeVertexNormals();
  // computeVertexNormals may point inward depending on the frame's handedness: flip if so
  const p0 = new THREE.Vector3().fromBufferAttribute(g.attributes.position, 0), n0 = new THREE.Vector3().fromBufferAttribute(g.attributes.normal, 0);
  if (n0.dot(p0.clone().sub(curve.getPointAt(0))) < 0) { g.index.array.reverse(); g.computeVertexNormals(); }
  return g;
}

/** A blade/ribbon: a strip `len` long along +Y, `w` wide at the base, tapering to `tip`*w, bowed forward by `bend`. */
export function bladeGeo({ len = 1, w = 0.08, tip = 0, bend = 0.3, segs = 4 } = {}) {
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= segs; i++) {
    const t = i / segs, ww = w * (1 - t * (1 - tip)) * 0.5, y = len * t, z = bend * len * t * t;
    pos.push(-ww, y, z, ww, y, z); uv.push(0, t, 1, t);
  }
  for (let i = 0; i < segs; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}

/** Points with outward normals on the top cap of a sphere. */
export function capPoints(center, radius, count, r, { maxAngle = 1.0, minAngle = 0 } = {}) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const th = minAngle + (maxAngle - minAngle) * Math.sqrt(r()), ph = r() * Math.PI * 2;
    const n = new THREE.Vector3(Math.sin(th) * Math.cos(ph), Math.cos(th), Math.sin(th) * Math.sin(ph));
    out.push({ p: n.clone().multiplyScalar(radius).add(center), n });
  }
  return out;
}

/** Orient an object's +Y to a direction. */
const UP = new THREE.Vector3(0, 1, 0);
export const aimY = (obj, dir) => { obj.quaternion.setFromUnitVectors(UP, dir.clone().normalize()); return obj; };

/** Two-bone IK. Returns the middle joint position for root -> target with bone lengths a, b, bending toward `pole`. */
export function ik2(root, target, a, b, pole) {
  const d = target.clone().sub(root); let L = d.length();
  const maxL = (a + b) * 0.999; if (L > maxL) { d.multiplyScalar(maxL / L); L = maxL; }
  const minL = Math.abs(a - b) * 1.05 + 0.01; if (L < minL) { d.normalize().multiplyScalar(minL); L = minL; }
  const dir = d.clone().normalize();
  const cosA = (a * a + L * L - b * b) / (2 * a * L);
  const sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
  const perp = pole.clone().sub(dir.clone().multiplyScalar(pole.dot(dir)));
  if (perp.lengthSq() < 1e-6) perp.set(0, 0, 1); perp.normalize();
  const mid = root.clone().add(dir.clone().multiplyScalar(a * cosA)).add(perp.multiplyScalar(a * sinA));
  const end = root.clone().add(d);
  return { mid, end };
}
