import * as THREE from 'three';
import { createScene } from './scene.js';
import { mulberry32 } from './potato.js';
import { generateFood } from './foods.js';
import { createCuttingPlane, getWorldPlane } from './cuttingPlane.js';
import { setupControls } from './controls.js';
import { sliceMesh } from './slicer.js';
import { computeVolume } from './volume.js';
import { computeScoreWithTarget, computeMultiSliceScore } from './scoring.js';
import { animateCinematic, animateIntermediateCut, animateMultiCinematic } from './animation.js';
import { Timer } from './timer.js';
import {
  updateTimer,
  showCutButton,
  showHints,
  showScorePanel,
  hideScorePanel,
  showWeighLabels,
  hideWeighLabels,
  showExitButton,
  showHomeScreen,
  hideHomeScreen,
  onCut,
  onPlayAgain,
  onSinglePlayer,
  onExit,
  // Slice selector & cut progress
  onSliceSelect,
  setSliceSelectorLocked,
  showCutProgress,
  hideCutProgress,
  showMultiScorePanel,
  // Mode & Target
  onModeSelect,
  showTargetHud,
  hideTargetHud,
  // Versus UI
  showLobby,
  hideLobby,
  onVersus,
  onCreateRoom,
  onJoinRoom,
  onLobbyBack,
  getRoomCodeInput,
  showWaiting,
  hideWaiting,
  onWaitingCancel,
  showVersusHud,
  hideVersusHud,
  showWaitingForScore,
  hideWaitingForScore,
  showRoundResult,
  hideRoundResult,
  showMatchResult,
  hideMatchResult,
  onMatchMenu,
  onRematch,
  showRematchRequested,
  showOpponentWantsRematch,
  showDisconnect,
  hideDisconnect,
  onDisconnectMenu,
  hideAllVersusScreens,
} from './ui.js';
import {
  hostMatch,
  guestJoin,
  reportScore,
  requestRematch,
  cleanup as versusCleanup,
  setVersusCallbacks,
  getCurrentRound,
  getTotalRounds,
  setVersusSplitMode,
  setVersusSliceCount,
} from './versus.js';

// --- State ---
const State = { MENU: -1, PLAYING: 0, CUTTING: 1, SCORED: 2 };
let state = State.MENU;
let gameMode = 'single'; // 'single' or 'versus'
let splitMode = 'classic'; // 'classic' or 'random'
let targetRatio = 50;
const TARGET_POOL = [10, 20, 25, 30, 40, 50];

// Multi-slice state
let sliceCount = 2;        // 2 (classic), 3, 4, or 5
let cutsRemaining = 0;
let cutsMade = 0;
let activePiece = null;    // current mesh being cut (starts as whole food)
let fallenPieces = [];     // array of { mesh, volume } already cut off
let currentMultiScales = null;

// --- Scene setup ---
const canvas = document.getElementById('game-canvas');
const { renderer, scene, camera } = createScene(canvas);

let potato = null;
let cuttingPlane = null;
let controls = null;
let halves = [];
let intersectionLine = null;
let currentScales = null;

// Table surface Y: table group at y=-1.2, planks at y=0.75 inside, half-thickness 0.03
const TABLE_Y = -1.2 + 0.75 + 0.03;

// --- Timer ---
const timer = new Timer({
  onTick: updateTimer,
  onExpire: () => performCut(),
});

// --- Init ---
function startRound(seed = null, target = null, slices = null) {
  // Cleanup previous round
  if (potato) scene.remove(potato);
  halves.forEach((h) => scene.remove(h));
  halves = [];
  if (intersectionLine) {
    scene.remove(intersectionLine);
    intersectionLine.geometry.dispose();
    intersectionLine = null;
  }
  if (cuttingPlane) scene.remove(cuttingPlane);
  if (controls) {
    scene.remove(controls.transform.getHelper());
    controls.dispose();
  }
  if (currentScales) {
    scene.remove(currentScales.group);
    currentScales = null;
  }
  if (currentMultiScales) {
    scene.remove(currentMultiScales.group);
    currentMultiScales = null;
  }
  // Cleanup multi-slice fallen pieces
  fallenPieces.forEach(fp => scene.remove(fp.mesh));
  fallenPieces = [];
  if (activePiece && activePiece !== potato) {
    scene.remove(activePiece);
  }
  activePiece = null;

  // New potato — use provided seed (versus) or random (solo)
  const potatoSeed = seed !== null ? seed : Math.random();
  potato = generateFood(potatoSeed);
  // Seeded RNG for layout (same in versus for both players)
  const rng = mulberry32((potatoSeed * 2147483647 + 7919) | 0);

  // Pick target ratio
  if (target !== null) {
    targetRatio = target;
  } else if (splitMode === 'random') {
    targetRatio = TARGET_POOL[Math.floor(rng() * TARGET_POOL.length)];
  } else {
    targetRatio = 50;
  }

  // Potato gets a significant offset from center — forces the player to translate
  const offsetAngle = rng() * Math.PI * 2;
  const offsetDist = 0.08 + rng() * 0.14; // 0.08–0.22 units from center
  potato.position.set(
    Math.cos(offsetAngle) * offsetDist,
    0.8,
    Math.sin(offsetAngle) * offsetDist * 0.6
  );
  potato.castShadow = true;
  potato.receiveShadow = true;
  potato.rotation.set(
    rng() * Math.PI * 2,
    rng() * Math.PI * 2,
    rng() * Math.PI * 2
  );
  scene.add(potato);

  // Cutting plane stays at scene center with a random tilt — clearly not at the potato
  cuttingPlane = createCuttingPlane();
  cuttingPlane.position.set(0, 0.8, 0);
  cuttingPlane.rotation.set(
    (rng() - 0.5) * 1.0,
    (rng() - 0.5) * 1.0,
    0
  );
  scene.add(cuttingPlane);

  // Reset camera — eye-level with the potato
  camera.position.set(0, 1.2, 3.0);
  camera.lookAt(0, 0.8, 0);

  // Controls
  controls = setupControls(camera, renderer, cuttingPlane);
  controls.orbit.target.set(0, 0.8, 0);
  scene.add(controls.transform.getHelper());

  // UI
  state = State.PLAYING;
  hideHomeScreen();
  hideScorePanel();
  hideWeighLabels();
  hideAllVersusScreens();
  showCutButton(true);
  showHints(true);
  showExitButton(true);

  if (gameMode === 'versus') {
    showVersusHud(getCurrentRound(), getTotalRounds());
  }

  if (splitMode === 'random' || targetRatio !== 50) {
    showTargetHud(targetRatio, gameMode === 'versus');
  } else {
    hideTargetHud();
  }

  // Multi-slice setup
  const effectiveSliceCount = slices !== null ? slices : sliceCount;
  cutsRemaining = effectiveSliceCount - 1;
  cutsMade = 0;
  activePiece = potato;

  if (effectiveSliceCount > 2) {
    showCutProgress(1, cutsRemaining);
  } else {
    hideCutProgress();
  }

  timer.start();
}

async function performCut() {
  if (state !== State.PLAYING) return;
  state = State.CUTTING;

  timer.stop();
  showCutButton(false);
  showHints(false);

  // Disable controls and clean up visual helpers
  controls.transform.detach();
  controls.transform.getHelper().visible = false;
  controls.orbit.enabled = false;
  if (intersectionLine) {
    scene.remove(intersectionLine);
    intersectionLine.geometry.dispose();
    intersectionLine = null;
  }

  // Get the world-space plane
  const worldPlane = getWorldPlane(cuttingPlane);

  // Transform plane into activePiece's local space
  activePiece.updateMatrixWorld(true);
  const invMatrix = new THREE.Matrix4().copy(activePiece.matrixWorld).invert();
  const localPlane = worldPlane.clone().applyMatrix4(invMatrix);

  // Slice
  const result = sliceMesh(activePiece.geometry, localPlane);

  if (!result) {
    console.warn('Cut missed the food!');
    if (cutsRemaining > 1) {
      // Intermediate miss: just skip this cut and let player try again
      state = State.PLAYING;
      showCutButton(true);
      showHints(true);
      controls.orbit.enabled = true;
      controls.transform.attach(cuttingPlane);
      controls.transform.getHelper().visible = true;
      timer.start();
      return;
    }
    const missedScore = { grade: 'F', score: 0, pctA: '100.0', pctB: '0.0' };
    if (gameMode === 'versus') {
      reportScore(missedScore);
    } else {
      showScorePanel(missedScore);
    }
    hideCutProgress();
    state = State.SCORED;
    controls.orbit.enabled = true;
    return;
  }

  // Compute volumes
  const volFront = computeVolume(result.front);
  const volBack = computeVolume(result.back);

  console.log(
    `Volume check: front=${volFront.toFixed(4)} + back=${volBack.toFixed(4)} = ${(volFront + volBack).toFixed(4)}`
  );

  // Create half meshes
  const material = activePiece.material.clone();
  const frontMesh = new THREE.Mesh(result.front, material);
  const backMesh = new THREE.Mesh(result.back, material.clone());
  frontMesh.castShadow = true;
  frontMesh.receiveShadow = true;
  backMesh.castShadow = true;
  backMesh.receiveShadow = true;

  // Copy activePiece's world transform
  frontMesh.position.copy(activePiece.position);
  frontMesh.quaternion.copy(activePiece.quaternion);
  frontMesh.scale.copy(activePiece.scale);
  backMesh.position.copy(activePiece.position);
  backMesh.quaternion.copy(activePiece.quaternion);
  backMesh.scale.copy(activePiece.scale);

  // Remove active piece and cutting plane
  scene.remove(activePiece);
  scene.remove(cuttingPlane);

  scene.add(frontMesh);
  scene.add(backMesh);

  const planeNormal = worldPlane.normal.clone();

  // ── Branch A: Intermediate cut (more cuts remaining) ──────────
  if (cutsRemaining > 1) {
    // Determine larger/smaller
    let largerMesh, smallerMesh, largerVol, smallerVol;
    if (volFront >= volBack) {
      largerMesh = frontMesh; smallerMesh = backMesh;
      largerVol = volFront; smallerVol = volBack;
    } else {
      largerMesh = backMesh; smallerMesh = frontMesh;
      largerVol = volBack; smallerVol = volFront;
    }

    // Park the smaller piece
    fallenPieces.push({ mesh: smallerMesh, volume: smallerVol });

    await animateIntermediateCut(largerMesh, smallerMesh, planeNormal);

    // Update state for next cut
    activePiece = largerMesh;
    cutsRemaining--;
    cutsMade++;
    halves = [largerMesh];

    // Re-create cutting plane at the larger piece's current position
    cuttingPlane = createCuttingPlane();
    cuttingPlane.position.copy(largerMesh.position);
    cuttingPlane.rotation.set(
      (Math.random() - 0.5) * 1.0,
      (Math.random() - 0.5) * 1.0,
      0
    );
    scene.add(cuttingPlane);

    // Re-attach controls
    controls.transform.attach(cuttingPlane);
    controls.transform.getHelper().visible = true;
    controls.orbit.enabled = true;
    scene.add(controls.transform.getHelper());

    // Update UI — only timer resets, camera stays
    showCutProgress(cutsMade + 1, cutsMade + cutsRemaining);
    showCutButton(true);
    showHints(true);

    timer.start();
    state = State.PLAYING;
    return;
  }

  // ── Branch B: Final cut ───────────────────────────────────────
  halves = [frontMesh, backMesh];
  hideCutProgress();

  const isMultiSlice = fallenPieces.length > 0;

  if (!isMultiSlice) {
    // Classic 2-piece cinematic
    currentScales = await animateCinematic(
      frontMesh,
      backMesh,
      planeNormal,
      camera,
      controls.orbit,
      scene,
      volFront,
      volBack
    );

    const { score, grade, pctA, pctB } = computeScoreWithTarget(volFront, volBack, targetRatio);
    showWeighLabels(pctA, pctB);

    await new Promise(r => setTimeout(r, 900));
    hideWeighLabels();

    if (gameMode === 'versus') {
      reportScore({ score, grade, pctA, pctB });
    } else {
      showScorePanel({ grade, score, pctA, pctB });
    }
  } else {
    // Multi-slice final cut: drop the smaller piece, then all go to scales
    let lastLarger, lastSmaller, lastLargerVol, lastSmallerVol;
    if (volFront >= volBack) {
      lastLarger = frontMesh; lastSmaller = backMesh;
      lastLargerVol = volFront; lastSmallerVol = volBack;
    } else {
      lastLarger = backMesh; lastSmaller = frontMesh;
      lastLargerVol = volBack; lastSmallerVol = volFront;
    }

    // Drop the smaller piece to the table first
    await animateIntermediateCut(lastLarger, lastSmaller, planeNormal);

    // Gather all pieces for scales
    const allPieces = [
      ...fallenPieces,
      { mesh: lastSmaller, volume: lastSmallerVol },
      { mesh: lastLarger, volume: lastLargerVol },
    ];

    const { multiScales } = await animateMultiCinematic(
      allPieces,
      camera,
      controls.orbit,
      scene
    );
    currentMultiScales = multiScales;

    // Compute multi-slice score
    const allVolumes = allPieces.map(p => p.volume);
    const { score, grade, pcts } = computeMultiSliceScore(allVolumes);

    if (gameMode === 'versus') {
      reportScore({ score, grade, pcts });
    } else {
      showMultiScorePanel({ grade, score, pcts });
    }
  }

  state = State.SCORED;
  controls.orbit.enabled = true;
}

function goToMenu() {
  // Cleanup current round
  timer.stop();
  if (potato) { scene.remove(potato); potato = null; }
  halves.forEach((h) => scene.remove(h));
  halves = [];
  if (intersectionLine) {
    scene.remove(intersectionLine);
    intersectionLine.geometry.dispose();
    intersectionLine = null;
  }
  if (cuttingPlane) { scene.remove(cuttingPlane); cuttingPlane = null; }
  if (controls) {
    scene.remove(controls.transform.getHelper());
    controls.dispose();
    controls = null;
  }
  if (currentScales) {
    scene.remove(currentScales.group);
    currentScales = null;
  }
  if (currentMultiScales) {
    scene.remove(currentMultiScales.group);
    currentMultiScales = null;
  }
  // Cleanup multi-slice fallen pieces
  fallenPieces.forEach(fp => scene.remove(fp.mesh));
  fallenPieces = [];
  if (activePiece && activePiece !== potato) {
    scene.remove(activePiece);
  }
  activePiece = null;

  // Cleanup versus if needed
  if (gameMode === 'versus') {
    versusCleanup();
  }
  gameMode = 'single';

  // Reset camera to a nice overview position
  camera.position.set(2, 2.5, 4);
  camera.lookAt(0, 0.5, 0);

  state = State.MENU;
  showHomeScreen();
  showCutButton(false);
  showHints(false);
  showExitButton(false);
  hideScorePanel();
  hideWeighLabels();
  hideTargetHud();
  hideCutProgress();
  hideAllVersusScreens();
}

// --- Versus mode callbacks ---
setVersusCallbacks({
  matchStart: () => {
    hideWaiting();
  },
  roundStart: (round, seed, target, slices) => {
    hideRoundResult();
    hideMatchResult();
    hideWaitingForScore();
    startRound(seed, target, slices);
  },
  opponentScored: (round, myScore, oppScore) => {
    hideWaitingForScore();
    hideVersusHud();
    showRoundResult(round, myScore, oppScore, getTotalRounds());
  },
  matchEnd: (result) => {
    hideRoundResult();
    hideVersusHud();
    showMatchResult(result);
  },
  disconnected: () => {
    timer.stop();
    hideAllVersusScreens();
    showDisconnect();
  },
  waiting: (scoreData) => {
    showWaitingForScore(scoreData);
  },
  rematchAccepted: () => {
    // Both agreed — new match will start via roundStart callback
    hideMatchResult();
  },
  opponentWantsRematch: () => {
    showOpponentWantsRematch();
  },
});

// --- Event bindings (solo) ---
onSliceSelect(count => { sliceCount = count; setVersusSliceCount(count); });
onModeSelect(mode => {
  splitMode = mode;
  setVersusSplitMode(mode);
  const locked = mode === 'random';
  setSliceSelectorLocked(locked);
  if (locked) sliceCount = 2;
});
onCut(() => performCut());
onPlayAgain(() => startRound());
onSinglePlayer(() => startRound());
onExit(() => goToMenu());

// --- Event bindings (versus) ---
onVersus(() => {
  document.getElementById('home-screen').classList.add('hidden');
  showLobby();
});

onCreateRoom(() => {
  gameMode = 'versus';
  const code = hostMatch();
  hideLobby();
  showWaiting(code);
});

onJoinRoom(() => {
  const code = getRoomCodeInput();
  if (code.length !== 4) return;
  gameMode = 'versus';
  hideLobby();
  showWaiting(code);
  guestJoin(code);
});

onLobbyBack(() => {
  hideLobby();
  showHomeScreen();
});

onWaitingCancel(() => {
  versusCleanup();
  gameMode = 'single';
  hideWaiting();
  showHomeScreen();
});

onRematch(() => {
  showRematchRequested();
  requestRematch();
});

onMatchMenu(() => {
  goToMenu();
});

onDisconnectMenu(() => {
  goToMenu();
});

// --- Intersection line ---
function updateIntersectionLine() {
  if (intersectionLine) {
    scene.remove(intersectionLine);
    intersectionLine.geometry.dispose();
    intersectionLine = null;
  }
  const piece = activePiece || potato;
  if (state !== State.PLAYING || !piece || !cuttingPlane) return;

  const worldPlane = getWorldPlane(cuttingPlane);
  piece.updateMatrixWorld(true);
  const invMatrix = new THREE.Matrix4().copy(piece.matrixWorld).invert();
  const localPlane = worldPlane.clone().applyMatrix4(invMatrix);

  const positions = piece.geometry.getAttribute('position');
  const triCount = positions.count / 3;
  const pts = [];

  for (let t = 0; t < triCount; t++) {
    const verts = [];
    for (let j = 0; j < 3; j++) {
      verts.push(new THREE.Vector3().fromBufferAttribute(positions, t * 3 + j));
    }
    const dists = verts.map((v) => localPlane.distanceToPoint(v));

    for (let i = 0; i < 3; i++) {
      const j = (i + 1) % 3;
      if ((dists[i] > 0 && dists[j] < 0) || (dists[i] < 0 && dists[j] > 0)) {
        const tt = dists[i] / (dists[i] - dists[j]);
        const pt = new THREE.Vector3().lerpVectors(verts[i], verts[j], tt);
        pt.applyMatrix4(piece.matrixWorld);
        pts.push(pt);
      }
    }
  }

  if (pts.length < 2) return;

  const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
  const lineMat = new THREE.LineBasicMaterial({ color: 0xffcc00, linewidth: 2 });
  intersectionLine = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(intersectionLine);
}

// --- Render loop ---
let frameCount = 0;
function animate() {
  requestAnimationFrame(animate);
  if (controls?.orbit) controls.orbit.update();
  if (state === State.PLAYING && ++frameCount % 5 === 0) {
    updateIntersectionLine();
  }
  renderer.render(scene, camera);
}

// --- Start ---
showHomeScreen();
animate();
