import * as THREE from 'three';

/**
 * Build a classic two-pan balance scale.
 * Returns { group, leftPan, rightPan, beam, pointer }
 * so the animation can tilt the beam and lower/raise pans.
 */
export function buildScales() {
  const group = new THREE.Group();

  const metalMat = new THREE.MeshStandardMaterial({
    color: 0xc0a050,
    roughness: 0.3,
    metalness: 0.8,
  });
  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x8a7030,
    roughness: 0.4,
    metalness: 0.7,
  });
  const panMat = new THREE.MeshStandardMaterial({
    color: 0xd4b050,
    roughness: 0.35,
    metalness: 0.75,
  });

  // ── Base ──────────────────────────────────────────────────────────────
  const baseGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.12, 24);
  const base = new THREE.Mesh(baseGeo, darkMetalMat);
  base.position.y = 0.06;
  base.castShadow = true;
  group.add(base);

  // ── Center post ───────────────────────────────────────────────────────
  const postGeo = new THREE.CylinderGeometry(0.06, 0.08, 1.6, 12);
  const post = new THREE.Mesh(postGeo, metalMat);
  post.position.y = 0.92;
  post.castShadow = true;
  group.add(post);

  // Decorative ball on top
  const ballGeo = new THREE.SphereGeometry(0.1, 12, 8);
  const ball = new THREE.Mesh(ballGeo, metalMat);
  ball.position.y = 1.78;
  group.add(ball);

  // ── Beam (tilts) ──────────────────────────────────────────────────────
  const beam = new THREE.Group();
  beam.position.y = 1.7;

  const beamBarGeo = new THREE.BoxGeometry(3.0, 0.06, 0.06);
  const beamBar = new THREE.Mesh(beamBarGeo, metalMat);
  beamBar.castShadow = true;
  beam.add(beamBar);

  // Pivot marker
  const pivotGeo = new THREE.SphereGeometry(0.07, 10, 8);
  const pivot = new THREE.Mesh(pivotGeo, darkMetalMat);
  beam.add(pivot);

  group.add(beam);

  // ── Pointer (hangs from pivot) ────────────────────────────────────────
  const pointer = new THREE.Group();
  pointer.position.y = 1.7;

  const pointerGeo = new THREE.BoxGeometry(0.02, 0.5, 0.02);
  const pointerMesh = new THREE.Mesh(pointerGeo, metalMat);
  pointerMesh.position.y = -0.25;
  pointer.add(pointerMesh);

  // Little arrow tip
  const arrowGeo = new THREE.ConeGeometry(0.04, 0.08, 6);
  const arrow = new THREE.Mesh(arrowGeo, metalMat);
  arrow.position.y = -0.52;
  arrow.rotation.z = Math.PI;
  pointer.add(arrow);

  group.add(pointer);

  // ── Chains + pans ─────────────────────────────────────────────────────
  const armLength = 1.35;
  const chainLen = 0.6;

  const leftPan = buildPan(panMat, darkMetalMat, chainLen);
  leftPan.position.set(-armLength, 1.7 - chainLen, 0);
  group.add(leftPan);

  const rightPan = buildPan(panMat, darkMetalMat, chainLen);
  rightPan.position.set(armLength, 1.7 - chainLen, 0);
  group.add(rightPan);

  return { group, leftPan, rightPan, beam, pointer };
}

function buildPan(panMat, rimMat, chainLen) {
  const pan = new THREE.Group();

  // Dish
  const dishGeo = new THREE.CylinderGeometry(0.65, 0.55, 0.08, 24);
  const dish = new THREE.Mesh(dishGeo, panMat);
  dish.castShadow = true;
  dish.receiveShadow = true;
  pan.add(dish);

  // Rim
  const rimGeo = new THREE.TorusGeometry(0.6, 0.025, 8, 24);
  const rim = new THREE.Mesh(rimGeo, rimMat);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.03;
  pan.add(rim);

  return pan;
}

/**
 * Position the scale pans + beam based on a tilt amount.
 * tilt: -1 (left heavy) to +1 (right heavy). 0 = balanced.
 */
export function tiltScales(scales, tilt) {
  const maxAngle = 0.22; // radians
  const armLength = 1.35;
  const chainLen = 0.6;
  const beamY = 1.7;

  const angle = tilt * maxAngle;

  // Tilt the beam
  scales.beam.rotation.z = -angle;

  // Tilt the pointer opposite direction (gravity)
  scales.pointer.rotation.z = angle * 0.5;

  // Move pans to match beam endpoints
  const leftTip = new THREE.Vector3(-armLength, 0, 0)
    .applyAxisAngle(new THREE.Vector3(0, 0, 1), -angle);
  const rightTip = new THREE.Vector3(armLength, 0, 0)
    .applyAxisAngle(new THREE.Vector3(0, 0, 1), -angle);

  scales.leftPan.position.set(
    leftTip.x,
    beamY + leftTip.y - chainLen,
    0
  );
  scales.rightPan.position.set(
    rightTip.x,
    beamY + rightTip.y - chainLen,
    0
  );
}
