import * as THREE from 'three';

export function createCuttingPlane() {
  const group = new THREE.Group();
  group.name = 'cuttingPlane';

  // Semi-transparent fill — sized to match potato
  const planeGeo = new THREE.PlaneGeometry(0.9, 0.9);
  const planeMat = new THREE.MeshBasicMaterial({
    color: 0x4488ff,
    transparent: true,
    opacity: 0.15,
    side: THREE.DoubleSide,
    depthWrite: false,
  });
  const planeMesh = new THREE.Mesh(planeGeo, planeMat);
  group.add(planeMesh);

  // Wireframe border
  const edgeGeo = new THREE.EdgesGeometry(planeGeo);
  const edgeMat = new THREE.LineBasicMaterial({
    color: 0x4488ff,
    transparent: true,
    opacity: 0.6,
  });
  const edgeLine = new THREE.LineSegments(edgeGeo, edgeMat);
  group.add(edgeLine);

  return group;
}

/**
 * Get the THREE.Plane in world space from the cutting plane group.
 */
export function getWorldPlane(cuttingPlaneGroup) {
  const normal = new THREE.Vector3(0, 0, 1);
  normal.applyQuaternion(cuttingPlaneGroup.quaternion).normalize();
  const point = new THREE.Vector3();
  cuttingPlaneGroup.getWorldPosition(point);
  const plane = new THREE.Plane();
  plane.setFromNormalAndCoplanarPoint(normal, point);
  return plane;
}
