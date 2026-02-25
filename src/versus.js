import {
  createRoom,
  joinRoom,
  leaveRoom,
  setCallbacks,
  sendSeed,
  sendScore,
  sendLeave,
  sendRematch,
  getIsHost,
  getRoomCode,
} from './network.js';

const TOTAL_ROUNDS = 3;
const OPPONENT_TIMEOUT_MS = 90000;
const ROUND_RESULT_DELAY_MS = 5000;

// Match state
let currentRound = 0;
let myScores = [];
let opponentScores = [];
let waitingForScore = false;
let opponentTimeoutId = null;
let autoAdvanceId = null;
let matchOver = false;
let myRematchRequested = false;
let opponentRematchRequested = false;

// Callbacks into main.js / UI
let onMatchStart = null;
let onRoundStart = null;
let onOpponentScored = null;
let onMatchEnd = null;
let onDisconnect = null;
let onWaiting = null;
let onRematchAccepted = null;
let onOpponentWantsRematch = null;

export function setVersusCallbacks({
  matchStart, roundStart, opponentScored, matchEnd,
  disconnected, waiting, rematchAccepted, opponentWantsRematch,
}) {
  onMatchStart = matchStart || null;
  onRoundStart = roundStart || null;
  onOpponentScored = opponentScored || null;
  onMatchEnd = matchEnd || null;
  onDisconnect = disconnected || null;
  onWaiting = waiting || null;
  onRematchAccepted = rematchAccepted || null;
  onOpponentWantsRematch = opponentWantsRematch || null;
}

function resetMatch() {
  currentRound = 0;
  myScores = [];
  opponentScores = [];
  waitingForScore = false;
  matchOver = false;
  myRematchRequested = false;
  opponentRematchRequested = false;
  clearOpponentTimeout();
  clearAutoAdvance();
}

function clearOpponentTimeout() {
  if (opponentTimeoutId) {
    clearTimeout(opponentTimeoutId);
    opponentTimeoutId = null;
  }
}

function clearAutoAdvance() {
  if (autoAdvanceId) {
    clearTimeout(autoAdvanceId);
    autoAdvanceId = null;
  }
}

function startOpponentTimeout() {
  clearOpponentTimeout();
  opponentTimeoutId = setTimeout(() => {
    if (onDisconnect) onDisconnect();
    cleanup();
  }, OPPONENT_TIMEOUT_MS);
}

export function hostMatch() {
  resetMatch();
  const code = createRoom();
  setupNetworkCallbacks();
  return code;
}

export function guestJoin(code) {
  resetMatch();
  joinRoom(code);
  setupNetworkCallbacks();
}

function setupNetworkCallbacks() {
  setCallbacks({
    opponentJoined: handleOpponentJoined,
    opponentLeft: handleOpponentLeft,
    seed: handleSeed,
    opponentScore: handleOpponentScore,
    opponentLeave: handleOpponentLeft,
    opponentRematch: handleOpponentRematch,
  });
}

function handleOpponentJoined() {
  if (onMatchStart) onMatchStart();
  if (getIsHost()) {
    startNextRound();
  }
}

function handleOpponentLeft() {
  clearOpponentTimeout();
  clearAutoAdvance();
  // Don't show disconnect if the match is already over
  if (matchOver) return;
  if (onDisconnect) onDisconnect();
}

function startNextRound() {
  currentRound++;
  waitingForScore = false;

  const seed = Math.random() * 2147483647;

  if (getIsHost()) {
    sendSeed(currentRound, seed);
  }

  if (onRoundStart) onRoundStart(currentRound, seed);
}

function handleSeed(data) {
  if (!getIsHost()) {
    currentRound = data.round;
    waitingForScore = false;
    if (onRoundStart) onRoundStart(data.round, data.seed);
  }
}

export function reportScore(scoreData) {
  sendScore(currentRound, scoreData);
  myScores.push(scoreData);
  waitingForScore = true;

  if (opponentScores.length >= currentRound) {
    showRoundResult();
  } else {
    startOpponentTimeout();
    if (onWaiting) onWaiting(scoreData);
  }
}

function handleOpponentScore(data) {
  clearOpponentTimeout();
  opponentScores.push({
    score: data.score,
    grade: data.grade,
    pctA: data.pctA,
    pctB: data.pctB,
  });

  if (myScores.length >= currentRound) {
    showRoundResult();
  }
}

function showRoundResult() {
  waitingForScore = false;
  clearOpponentTimeout();

  const myScore = myScores[currentRound - 1];
  const oppScore = opponentScores[currentRound - 1];

  if (currentRound >= TOTAL_ROUNDS) {
    // Last round — show result briefly, then match end
    if (onOpponentScored) onOpponentScored(currentRound, myScore, oppScore);
    autoAdvanceId = setTimeout(() => {
      matchOver = true;
      const result = computeMatchResult();
      if (onMatchEnd) onMatchEnd(result);
    }, ROUND_RESULT_DELAY_MS);
  } else {
    // Mid-match — show result, auto-advance after delay
    if (onOpponentScored) onOpponentScored(currentRound, myScore, oppScore);
    autoAdvanceId = setTimeout(() => {
      if (getIsHost()) {
        startNextRound();
      }
      // Guest waits for seed from host
    }, ROUND_RESULT_DELAY_MS);
  }
}

function computeMatchResult() {
  const myAvg = myScores.reduce((sum, s) => sum + s.score, 0) / myScores.length;
  const oppAvg = opponentScores.reduce((sum, s) => sum + s.score, 0) / opponentScores.length;

  let outcome;
  if (Math.abs(myAvg - oppAvg) < 0.5) outcome = 'tie';
  else if (myAvg > oppAvg) outcome = 'win';
  else outcome = 'lose';

  return {
    outcome,
    myScores: [...myScores],
    opponentScores: [...opponentScores],
    myAvg: Math.round(myAvg * 10) / 10,
    oppAvg: Math.round(oppAvg * 10) / 10,
  };
}

// --- Rematch ---
export function requestRematch() {
  myRematchRequested = true;
  sendRematch();

  if (opponentRematchRequested) {
    startRematch();
  }
}

function handleOpponentRematch() {
  opponentRematchRequested = true;

  if (myRematchRequested) {
    startRematch();
  } else {
    if (onOpponentWantsRematch) onOpponentWantsRematch();
  }
}

function startRematch() {
  currentRound = 0;
  myScores = [];
  opponentScores = [];
  waitingForScore = false;
  matchOver = false;
  myRematchRequested = false;
  opponentRematchRequested = false;
  clearAutoAdvance();
  clearOpponentTimeout();

  if (onRematchAccepted) onRematchAccepted();

  if (getIsHost()) {
    startNextRound();
  }
}

export function cleanup() {
  resetMatch();
  leaveRoom();
}

export function getCurrentRound() {
  return currentRound;
}

export function getTotalRounds() {
  return TOTAL_ROUNDS;
}

export function isMatchOver() {
  return matchOver;
}
