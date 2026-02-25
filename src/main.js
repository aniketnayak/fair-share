import * as THREE from 'three';
import { createScene } from './scene.js';
import { generatePotato } from './potato.js';
import { createCuttingPlane, getWorldPlane } from './cuttingPlane.js';
import { setupControls } from './controls.js';
import { sliceMesh } from './slicer.js';
import { computeVolume } from './volume.js';
import { computeScore } from './scoring.js';
import { animateCinematic } from './animation.js';
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
} from './versus.js';

// --- State ---
const State = { MENU: -1, PLAYING: 0, CUTTING: 1, SCORED: 2 };
let state = State.MENU;
let gameMode = 'single'; // 'single' or 'versus'

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
function startRound(seed = null) {
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

  // New potato — use provided seed (versus) or random (solo)
  const potatoSeed = seed !== null ? seed : Math.random();
  potato = generatePotato(potatoSeed);
  potato.position.set(0, 0.8, 0);
  potato.castShadow = true;
  potato.receiveShadow = true;
  scene.add(potato);

  // Cutting plane starts at potato center
  cuttingPlane = createCuttingPlane();
  cuttingPlane.position.copy(potato.position);
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

  // Transform plane into potato's local space
  potato.updateMatrixWorld(true);
  const invMatrix = new THREE.Matrix4().copy(potato.matrixWorld).invert();
  const localPlane = worldPlane.clone().applyMatrix4(invMatrix);

  // Slice
  const result = sliceMesh(potato.geometry, localPlane);

  if (!result) {
    console.warn('Cut missed the potato!');
    const missedScore = { grade: 'F', score: 0, pctA: '100.0', pctB: '0.0' };
    if (gameMode === 'versus') {
      reportScore(missedScore);
    } else {
      showScorePanel(missedScore);
    }
    state = State.SCORED;
    controls.orbit.enabled = true;
    return;
  }

  // Compute volumes
  const volFront = computeVolume(result.front);
  const volBack = computeVolume(result.back);
  const volOriginal = computeVolume(potato.geometry);

  console.log(
    `Volume check: front=${volFront.toFixed(4)} + back=${volBack.toFixed(4)} = ${(volFront + volBack).toFixed(4)}, original=${volOriginal.toFixed(4)}`
  );

  // Create half meshes
  const material = potato.material.clone();
  const frontMesh = new THREE.Mesh(result.front, material);
  const backMesh = new THREE.Mesh(result.back, material.clone());
  frontMesh.castShadow = true;
  frontMesh.receiveShadow = true;
  backMesh.castShadow = true;
  backMesh.receiveShadow = true;

  // Copy potato's world transform (includes the 0.45 scale)
  frontMesh.position.copy(potato.position);
  frontMesh.quaternion.copy(potato.quaternion);
  frontMesh.scale.copy(potato.scale);
  backMesh.position.copy(potato.position);
  backMesh.quaternion.copy(potato.quaternion);
  backMesh.scale.copy(potato.scale);

  // Remove original potato and plane
  scene.remove(potato);
  scene.remove(cuttingPlane);

  scene.add(frontMesh);
  scene.add(backMesh);
  halves = [frontMesh, backMesh];

  // Run cinematic sequence (returns scales object)
  const planeNormal = worldPlane.normal.clone();
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

  // Show weigh percentages, then score
  const { score, grade, pctA, pctB } = computeScore(volFront, volBack);
  showWeighLabels(pctA, pctB);

  await new Promise(r => setTimeout(r, 900));

  hideWeighLabels();

  if (gameMode === 'versus') {
    // Send score to opponent, don't show solo score panel
    reportScore({ score, grade, pctA, pctB });
  } else {
    showScorePanel({ grade, score, pctA, pctB });
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
  hideAllVersusScreens();
}

// --- Versus mode callbacks ---
setVersusCallbacks({
  matchStart: () => {
    hideWaiting();
  },
  roundStart: (round, seed) => {
    hideRoundResult();
    hideMatchResult();
    hideWaitingForScore();
    startRound(seed);
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
  if (state !== State.PLAYING || !potato || !cuttingPlane) return;

  const worldPlane = getWorldPlane(cuttingPlane);
  potato.updateMatrixWorld(true);
  const invMatrix = new THREE.Matrix4().copy(potato.matrixWorld).invert();
  const localPlane = worldPlane.clone().applyMatrix4(invMatrix);

  const positions = potato.geometry.getAttribute('position');
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
        pt.applyMatrix4(potato.matrixWorld);
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
