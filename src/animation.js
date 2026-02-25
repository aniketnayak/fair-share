import * as THREE from 'three';
import { buildScales, tiltScales } from './scales.js';

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
