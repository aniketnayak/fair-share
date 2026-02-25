import * as THREE from 'three';
import { buildScales, tiltScales, buildMultiScales } from './scales.js';

// ── Easing helpers ──────────────────────────────────────────────────────

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function easeOutBounce(t) {
  if (t < 1 / 2.75) return 7.5625 * t * t;
  if (t < 2 / 2.75) return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
  if (t < 2.5 / 2.75) return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
  return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
}

// ── Tween runner ────────────────────────────────────────────────────────

function tween(duration, onUpdate) {
  return new Promise(resolve => {
    const start = performance.now();
    function tick() {
      const raw = Math.min((performance.now() - start) / duration, 1);
      onUpdate(raw);
      if (raw < 1) requestAnimationFrame(tick);
      else resolve();
    }
    requestAnimationFrame(tick);
  });
}

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// ── Scale geometry constants (must match scales.js) ─────────────────────
const ARM_LENGTH = 1.35;
const CHAIN_LEN = 0.6;
const BEAM_Y = 1.7;
const MAX_ANGLE = 0.22;

// Where a potato half center sits above a pan surface
const PAN_OFFSET_Y = 0.18;

function getPanWorldPos(scalesGroup, side, tilt) {
  const angle = tilt * MAX_ANGLE;
  const tip = new THREE.Vector3(side * ARM_LENGTH, 0, 0)
    .applyAxisAngle(new THREE.Vector3(0, 0, 1), -angle);
  return new THREE.Vector3(
    scalesGroup.position.x + tip.x,
    scalesGroup.position.y + BEAM_Y + tip.y - CHAIN_LEN + PAN_OFFSET_Y,
    scalesGroup.position.z
  );
}

// ── Main cinematic sequence ─────────────────────────────────────────────

export async function animateCinematic(
  frontMesh,
  backMesh,
  planeNormal,
  camera,
  orbit,
  scene,
  volumeFront,
  volumeBack
) {
  const dir = planeNormal.clone().normalize();

  const camStart = camera.position.clone();
  const targetStart = orbit.target.clone();

  const center = frontMesh.position.clone()
    .add(backMesh.position)
    .multiplyScalar(0.5);

  // ── Phase 1: Camera swoop (500ms) ────────────────────────────────────
  const camEnd = new THREE.Vector3(2.0, 1.6, 2.8);
  const targetEnd = center.clone().add(new THREE.Vector3(0, 0.1, 0));

  await tween(500, raw => {
    const t = easeInOutCubic(raw);
    camera.position.lerpVectors(camStart, camEnd, t);
    orbit.target.lerpVectors(targetStart, targetEnd, t);
    camera.lookAt(orbit.target);
  });

  // ── Phase 2: Split apart (600ms) ───────────────────────────────────────
  const splitDist = 0.35;
  const startF = frontMesh.position.clone();
  const startB = backMesh.position.clone();
  const splitF = startF.clone().add(dir.clone().multiplyScalar(splitDist));
  const splitB = startB.clone().add(dir.clone().multiplyScalar(-splitDist));

  const tiltAxisF = new THREE.Vector3(
    Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5
  ).normalize();
  const tiltAxisB = new THREE.Vector3(
    Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5
  ).normalize();
  const startQuatF = frontMesh.quaternion.clone();
  const startQuatB = backMesh.quaternion.clone();
  const endQuatF = startQuatF.clone().multiply(
    new THREE.Quaternion().setFromAxisAngle(tiltAxisF, 0.1)
  );
  const endQuatB = startQuatB.clone().multiply(
    new THREE.Quaternion().setFromAxisAngle(tiltAxisB, -0.1)
  );

  await tween(600, raw => {
    const t = easeOutCubic(raw);
    frontMesh.position.lerpVectors(startF, splitF, t);
    backMesh.position.lerpVectors(startB, splitB, t);
    frontMesh.quaternion.slerpQuaternions(startQuatF, endQuatF, t);
    backMesh.quaternion.slerpQuaternions(startQuatB, endQuatB, t);
  });

  await wait(250);

  // ── Phase 3: Bring in scale, move halves to pans (900ms) ─────────────
  const scales = buildScales();
  // Place scale on the table surface
  const tableY = -1.2 + 0.75 + 0.03;
  scales.group.position.set(0, tableY, 0);
  scales.group.scale.setScalar(0);
  tiltScales(scales, 0);
  scene.add(scales.group);

  // Camera moves to front-on view of the scale
  const camScale = new THREE.Vector3(0, 1.6, 4.5);
  const camScaleTarget = new THREE.Vector3(0, 0.6, 0);
  const camPhase3Start = camera.position.clone();
  const targetPhase3Start = orbit.target.clone();

  // Landing positions (on pans, balanced)
  const landLeftPos = getPanWorldPos(scales.group, -1, 0);
  const landRightPos = getPanWorldPos(scales.group, 1, 0);

  const splitEndF = frontMesh.position.clone();
  const splitEndB = backMesh.position.clone();
  const splitEndQuatF = frontMesh.quaternion.clone();
  const splitEndQuatB = backMesh.quaternion.clone();
  const landQuatF = new THREE.Quaternion();
  const landQuatB = new THREE.Quaternion();

  await tween(900, raw => {
    const t = easeInOutCubic(raw);

    // Scale fades in fast
    const scaleUp = easeOutCubic(Math.min(raw * 2.5, 1));
    scales.group.scale.setScalar(scaleUp);

    // Halves arc to pan positions
    frontMesh.position.lerpVectors(splitEndF, landLeftPos, t);
    backMesh.position.lerpVectors(splitEndB, landRightPos, t);

    // Parabolic arc
    const arc = 0.3 * 4 * t * (1 - t);
    frontMesh.position.y += arc;
    backMesh.position.y += arc;

    // Straighten rotation
    frontMesh.quaternion.slerpQuaternions(splitEndQuatF, landQuatF, t);
    backMesh.quaternion.slerpQuaternions(splitEndQuatB, landQuatB, t);

    // Camera transition
    camera.position.lerpVectors(camPhase3Start, camScale, t);
    orbit.target.lerpVectors(targetPhase3Start, camScaleTarget, t);
    camera.lookAt(orbit.target);
  });

  // Snap to exact pan positions
  frontMesh.position.copy(landLeftPos);
  backMesh.position.copy(landRightPos);

  await wait(300);

  // ── Phase 4: Weigh-out — beam tilts (1000ms) ─────────────────────────
  const total = volumeFront + volumeBack;
  // tilt: positive = right heavy (right pan dips)
  const finalTilt = (volumeBack - volumeFront) / total;

  await tween(1000, raw => {
    const t = easeOutBounce(raw);
    const currentTilt = finalTilt * t;
    tiltScales(scales, currentTilt);

    // Move halves with their pans
    const leftPos = getPanWorldPos(scales.group, -1, currentTilt);
    const rightPos = getPanWorldPos(scales.group, 1, currentTilt);
    frontMesh.position.copy(leftPos);
    backMesh.position.copy(rightPos);
  });

  // Dramatic pause
  await wait(700);

  return scales;
}

// ── Multi-slice helpers ──────────────────────────────────────────────

function easeInQuad(t) {
  return t * t;
}

const TABLE_SURFACE_Y = -1.2 + 0.75 + 0.03;

/**
 * Intermediate cut animation: split apart, smaller piece drops to table.
 * Larger piece stays in place (camera doesn't move).
 */
export async function animateIntermediateCut(largerMesh, smallerMesh, planeNormal) {
  const dir = planeNormal.clone().normalize();

  // Phase 1: Split halves apart (300ms)
  const startL = largerMesh.position.clone();
  const startS = smallerMesh.position.clone();
  const splitL = startL.clone().add(dir.clone().multiplyScalar(0.15));
  const splitS = startS.clone().add(dir.clone().multiplyScalar(-0.15));

  await tween(300, raw => {
    const t = easeOutCubic(raw);
    largerMesh.position.lerpVectors(startL, splitL, t);
    smallerMesh.position.lerpVectors(startS, splitS, t);
  });

  // Phase 2: Smaller piece drops to table (500ms)
  const dropStart = smallerMesh.position.clone();
  const dropEnd = new THREE.Vector3(
    dropStart.x + (Math.random() - 0.5) * 0.1,  // slight x drift
    TABLE_SURFACE_Y + 0.1,
    dropStart.z + (Math.random() - 0.5) * 0.1   // slight z drift
  );
  const startQuatS = smallerMesh.quaternion.clone();
  const tumbleQuat = startQuatS.clone().multiply(
    new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(Math.random() - 0.5, 0.2, Math.random() - 0.5).normalize(),
      0.4
    )
  );

  await tween(500, raw => {
    // Gravity-like: accelerate down, then bounce at landing
    const fallT = Math.min(raw * 1.4, 1);  // reach bottom at ~70% of duration
    const t = fallT < 1 ? easeInQuad(fallT) : 1;
    const bounceT = raw > 0.7 ? easeOutBounce((raw - 0.7) / 0.3) : 1;

    smallerMesh.position.lerpVectors(dropStart, dropEnd, t);
    // Small upward bounce after landing
    if (raw > 0.7) {
      smallerMesh.position.y += (1 - bounceT) * 0.04;
    }
    smallerMesh.quaternion.slerpQuaternions(startQuatS, tumbleQuat, easeOutCubic(raw));
  });
  smallerMesh.position.copy(dropEnd);
}

/**
 * Final multi-slice cinematic: all N pieces arc onto N individual platform scales.
 * Returns Promise resolving with { multiScales }.
 */
export async function animateMultiCinematic(allPieces, camera, orbit, scene) {
  const count = allPieces.length;

  // Phase 1: Camera swoop to front-on overview (500ms)
  const camStart = camera.position.clone();
  const targetStart = orbit.target.clone();
  const camEnd = new THREE.Vector3(0, 1.8, 4.5);
  const camTargetEnd = new THREE.Vector3(0, 0.5, 0);

  await tween(500, raw => {
    const t = easeInOutCubic(raw);
    camera.position.lerpVectors(camStart, camEnd, t);
    orbit.target.lerpVectors(targetStart, camTargetEnd, t);
    camera.lookAt(orbit.target);
  });

  // Phase 2: N individual scale platforms pop in (700ms)
  const multiScales = buildMultiScales(count);
  multiScales.group.position.set(0, TABLE_SURFACE_Y, 0);
  multiScales.group.scale.setScalar(0);
  scene.add(multiScales.group);

  await tween(700, raw => {
    const scaleUp = easeOutBounce(Math.min(raw * 1.5, 1));
    multiScales.group.scale.setScalar(scaleUp);
  });
  multiScales.group.scale.setScalar(1);

  // Phase 3: Each piece arcs to its scale platform (900ms + stagger)
  const spacing = 2.8 / count;
  const startX = -(count - 1) * spacing / 2;
  const DISH_Y = TABLE_SURFACE_Y + 0.06 + 0.25 + 0.02;

  // Compute each piece's geometry center so we can center it on the dish
  const landingPositions = allPieces.map((piece, i) => {
    piece.mesh.geometry.computeBoundingBox();
    const bb = piece.mesh.geometry.boundingBox;
    const geoCenter = new THREE.Vector3();
    bb.getCenter(geoCenter);
    // geoCenter is in local space — apply mesh scale to get world offset
    geoCenter.multiply(piece.mesh.scale);
    const halfHeight = (bb.max.y - bb.min.y) * piece.mesh.scale.y * 0.5;

    return new THREE.Vector3(
      startX + i * spacing - geoCenter.x,
      DISH_Y + halfHeight,
      -geoCenter.z
    );
  });

  const arcPromises = allPieces.map((piece, i) => {
    return new Promise(resolve => {
      const delay = i * 100;
      setTimeout(async () => {
        const arcStart = piece.mesh.position.clone();
        const arcEnd = landingPositions[i];
        const startQuat = piece.mesh.quaternion.clone();
        const endQuat = new THREE.Quaternion(); // upright

        await tween(900, raw => {
          const t = easeInOutCubic(raw);
          piece.mesh.position.lerpVectors(arcStart, arcEnd, t);
          piece.mesh.position.y += 0.3 * 4 * t * (1 - t);
          piece.mesh.quaternion.slerpQuaternions(startQuat, endQuat, t);
        });
        piece.mesh.position.copy(arcEnd);
        resolve();
      }, delay);
    });
  });
  await Promise.all(arcPromises);

  await wait(200);

  // Phase 4: Scale platforms sink proportionally to weight (600ms)
  const volumes = allPieces.map(p => p.volume);
  const maxVol = Math.max(...volumes);
  const sinkAmounts = volumes.map(v => (v / maxVol) * 0.08);

  const originalDishYs = multiScales.platforms.map(p => p.dish.position.y);
  const originalPieceYs = allPieces.map(p => p.mesh.position.y);

  await tween(600, raw => {
    const t = easeOutBounce(raw);
    for (let i = 0; i < count; i++) {
      const sink = sinkAmounts[i] * t;
      multiScales.platforms[i].dish.position.y = originalDishYs[i] - sink;
      allPieces[i].mesh.position.y = originalPieceYs[i] - sink;
    }
  });

  // Phase 5: Hold (500ms)
  await wait(500);

  return { multiScales };
}
