
// Staging helpers: dressing a surface with growth, and camera shake.
import * as THREE from 'three';

/**
 * Sample points on the upward-facing surface of a mesh by casting rays straight down over an ellipse
 * (cx, cz, rx, rz in world units). Returns world-space anchors [{ p, n, s }] for grass() / flowers().
 */
export function topPoints(k, mesh, count, r, { cx = 0, cz = 0, rx = 10, rz = 10, from = 500, minUp = 0.35, rot = 0 } = {}) {
  mesh.updateWorldMatrix(true, false);
  const ray = new THREE.Raycaster(), down = new THREE.Vector3(0, -1, 0), out = [], nm = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
  const side = mesh.material.side; mesh.material.side = THREE.DoubleSide;
  for (let i = 0, tries = 0; i < count && tries < count * 6; tries++) {
    const a = r() * Math.PI * 2, d = Math.sqrt(r()), ex = Math.cos(a) * d * rx, ez = Math.sin(a) * d * rz;
    const x = cx + ex * Math.cos(rot) - ez * Math.sin(rot), z = cz + ex * Math.sin(rot) + ez * Math.cos(rot);
    ray.set(new THREE.Vector3(x, from, z), down);
    const hit = ray.intersectObject(mesh, false)[0];
    if (!hit) continue;
    const n = hit.face.normal.clone().applyMatrix3(nm).normalize(); if (n.y < 0) n.negate();
    if (n.y < minUp) continue;
    out.push({ p: hit.point.clone(), n: n.lerp(new THREE.Vector3(0, 1, 0), 0.5).normalize(), s: 1 }); i++;
  }
  mesh.material.side = side;
  return out;
}

/** Height of a mesh's surface under (x, z), or null. */
export function topY(mesh, x, z, from = 500) {
  mesh.updateWorldMatrix(true, true);
  const hit = new THREE.Raycaster(new THREE.Vector3(x, from, z), new THREE.Vector3(0, -1, 0)).intersectObject(mesh, true)[0];
  return hit ? hit.point.y : null;
}

/** Deterministic hand-held shake: returns [dx, dy, roll] for frame f. amp in world units. */
export function shake(k, f, amp = 1, seed = 0, rate = 0.9) {
  return [(k.noise3(f * rate, seed, 1.5) - 0.5) * 2 * amp, (k.noise3(f * rate, seed + 7.1, 4.5) - 0.5) * 2 * amp, (k.noise3(f * rate * 0.7, seed + 3.3, 8.5) - 0.5) * 0.02 * amp];
}
