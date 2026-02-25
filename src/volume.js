import * as THREE from 'three';

/**
 * Compute the volume of a closed mesh using the signed tetrahedra method.
 * V = |Σ (1/6)(p1 · (p2 × p3))| for each triangle face.
 */
export function computeVolume(geometry) {
  const pos = geometry.getAttribute('position');
  const triCount = pos.count / 3;
  let volume = 0;

  const p1 = new THREE.Vector3();
  const p2 = new THREE.Vector3();
  const p3 = new THREE.Vector3();
  const cross = new THREE.Vector3();

  for (let t = 0; t < triCount; t++) {
    p1.fromBufferAttribute(pos, t * 3);
    p2.fromBufferAttribute(pos, t * 3 + 1);
    p3.fromBufferAttribute(pos, t * 3 + 2);

    cross.crossVectors(p2, p3);
    volume += p1.dot(cross);
  }

  return Math.abs(volume) / 6;
}
