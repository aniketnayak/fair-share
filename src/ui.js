const homeScreen = document.getElementById('home-screen');
const hud = document.getElementById('hud');
const timerEl = document.getElementById('timer');
const hintsEl = document.getElementById('hints');
const cutBtn = document.getElementById('cut-btn');
const exitBtn = document.getElementById('exit-btn');
const scorePanel = document.getElementById('score-panel');
const scoreGrade = document.getElementById('score-grade');
const scoreValue = document.getElementById('score-value');
const scoreDetail = document.getElementById('score-detail');
const playAgainBtn = document.getElementById('play-again-btn');
const weighLabels = document.getElementById('weigh-labels');
const weighLeft = document.getElementById('weigh-left');
const weighRight = document.getElementById('weigh-right');

export function showHomeScreen() {
  homeScreen.classList.remove('hidden');
  hud.classList.add('hidden');
}

export function hideHomeScreen() {
  homeScreen.classList.add('hidden');
  hud.classList.remove('hidden');
}

export function onSinglePlayer(callback) {
  document.getElementById('btn-single-player').addEventListener('click', callback);
}

export function showExitButton(visible) {
  exitBtn.classList.toggle('hidden', !visible);
}

export function onExit(callback) {
  exitBtn.addEventListener('click', callback);
}

export function updateTimer(remaining) {
  timerEl.textContent = remaining.toFixed(2);
  if (remaining < 5) {
    timerEl.classList.add('urgent');
  } else {
    timerEl.classList.remove('urgent');
  }
}

export function showCutButton(visible) {
  cutBtn.classList.toggle('hidden', !visible);
}

export function showHints(visible) {
  hintsEl.style.display = visible ? 'block' : 'none';
}

export function showScorePanel({ grade, score, pctA, pctB }) {
  const gradeColors = {
    'PERFECT!': '#ffd700',
    S: '#ff6bff',
    A: '#00e676',
    B: '#64b5f6',
    C: '#ffee58',
    D: '#ffa726',
    F: '#ef5350',
  };

  scoreGrade.textContent = grade;
  scoreGrade.style.color = gradeColors[grade] || '#fff';
  scoreValue.textContent = `Score: ${score}`;
  scoreDetail.textContent = `${pctA}% / ${pctB}%`;
  scorePanel.classList.remove('hidden');
}

export function hideScorePanel() {
  scorePanel.classList.add('hidden');
}

export function onCut(callback) {
  cutBtn.addEventListener('click', callback);
}

export function showWeighLabels(pctA, pctB) {
  weighLeft.textContent = `${pctA}%`;
  weighRight.textContent = `${pctB}%`;
  weighLabels.classList.remove('hidden');
  // Fade in after a frame
  requestAnimationFrame(() => {
    weighLeft.classList.add('visible');
    weighRight.classList.add('visible');
  });
}

export function hideWeighLabels() {
  weighLeft.classList.remove('visible');
  weighRight.classList.remove('visible');
  weighLabels.classList.add('hidden');
}

export function onPlayAgain(callback) {
  playAgainBtn.addEventListener('click', callback);
}

// ── Mode Selector & Target HUD ────────────────────────────────────

const targetHud = document.getElementById('target-hud');
const targetRatioEl = document.getElementById('target-ratio');
const modeBtns = document.querySelectorAll('.mode-btn');

export function onModeSelect(callback) {
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      setActiveMode(mode);
      callback(mode);
    });
  });
}

export function setActiveMode(mode) {
  modeBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });
}

export function showTargetHud(smallPct, belowRound = false) {
  targetRatioEl.textContent = `${smallPct} / ${100 - smallPct}`;
  targetHud.classList.remove('hidden');
  targetHud.classList.toggle('below-round', belowRound);
}

export function hideTargetHud() {
  targetHud.classList.add('hidden');
}

// ── Versus UI ──────────────────────────────────────────────────────

const lobbyScreen = document.getElementById('lobby-screen');
const waitingScreen = document.getElementById('waiting-screen');
const roomCodeDisplay = document.getElementById('room-code-display');
const roomCodeInput = document.getElementById('room-code-input');
const versusHud = document.getElementById('versus-hud');
const roundCounter = document.getElementById('round-counter');
const waitingScoreBanner = document.getElementById('waiting-score-banner');
const roundResultScreen = document.getElementById('round-result-screen');
const matchResultScreen = document.getElementById('match-result-screen');
const disconnectScreen = document.getElementById('disconnect-screen');

const gradeColors = {
  'PERFECT!': '#ffd700',
  S: '#ff6bff',
  A: '#00e676',
  B: '#64b5f6',
  C: '#ffee58',
  D: '#ffa726',
  F: '#ef5350',
};

// Lobby
export function showLobby() {
  lobbyScreen.classList.remove('hidden');
  roomCodeInput.value = '';
}

export function hideLobby() {
  lobbyScreen.classList.add('hidden');
}

export function onVersus(callback) {
  document.getElementById('btn-versus').addEventListener('click', callback);
}

export function onCreateRoom(callback) {
  document.getElementById('btn-create-room').addEventListener('click', callback);
}

export function onJoinRoom(callback) {
  document.getElementById('btn-join-room').addEventListener('click', callback);
}

export function onLobbyBack(callback) {
  document.getElementById('btn-lobby-back').addEventListener('click', callback);
}

export function getRoomCodeInput() {
  return roomCodeInput.value.trim().toUpperCase();
}

// Waiting
export function showWaiting(code) {
  waitingScreen.classList.remove('hidden');
  roomCodeDisplay.textContent = code;
}

export function hideWaiting() {
  waitingScreen.classList.add('hidden');
}

export function onWaitingCancel(callback) {
  document.getElementById('btn-waiting-cancel').addEventListener('click', callback);
}

// Versus HUD
export function showVersusHud(round, total) {
  versusHud.classList.remove('hidden');
  roundCounter.textContent = `Round ${round} / ${total}`;
}

export function hideVersusHud() {
  versusHud.classList.add('hidden');
}

// Waiting for score
const waitingScoreText = document.getElementById('waiting-score-text');

export function showWaitingForScore(scoreData) {
  if (scoreData) {
    waitingScoreText.textContent = `Score: ${scoreData.score} (${scoreData.grade}) — ${scoreData.pctA}% / ${scoreData.pctB}%`;
  }
  waitingScoreBanner.classList.remove('hidden');
}

export function hideWaitingForScore() {
  waitingScoreBanner.classList.add('hidden');
}

// Round result
let countdownIntervalId = null;

export function showRoundResult(round, myScore, oppScore, totalRounds) {
  document.getElementById('round-result-title').textContent = `Round ${round} Result`;

  const myGradeEl = document.getElementById('rr-my-grade');
  myGradeEl.textContent = myScore.grade;
  myGradeEl.style.color = gradeColors[myScore.grade] || '#fff';
  document.getElementById('rr-my-score').textContent = myScore.score;
  document.getElementById('rr-my-detail').textContent = `${myScore.pctA}% / ${myScore.pctB}%`;

  const oppGradeEl = document.getElementById('rr-opp-grade');
  oppGradeEl.textContent = oppScore.grade;
  oppGradeEl.style.color = gradeColors[oppScore.grade] || '#fff';
  document.getElementById('rr-opp-score').textContent = oppScore.score;
  document.getElementById('rr-opp-detail').textContent = `${oppScore.pctA}% / ${oppScore.pctB}%`;

  const winnerEl = document.getElementById('round-winner');
  winnerEl.className = 'round-winner';
  if (myScore.score > oppScore.score) {
    winnerEl.textContent = 'You win this round!';
    winnerEl.classList.add('you-win');
  } else if (myScore.score < oppScore.score) {
    winnerEl.textContent = 'Opponent wins this round!';
    winnerEl.classList.add('you-lose');
  } else {
    winnerEl.textContent = 'Tied!';
    winnerEl.classList.add('tie');
  }

  // Countdown text
  const countdownEl = document.getElementById('round-countdown');
  const isLastRound = round >= totalRounds;
  let secondsLeft = 5;
  countdownEl.textContent = isLastRound ? `Results in ${secondsLeft}...` : `Next round in ${secondsLeft}...`;
  if (countdownIntervalId) clearInterval(countdownIntervalId);
  countdownIntervalId = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(countdownIntervalId);
      countdownIntervalId = null;
      countdownEl.textContent = isLastRound ? 'Loading results...' : 'Starting...';
    } else {
      countdownEl.textContent = isLastRound ? `Results in ${secondsLeft}...` : `Next round in ${secondsLeft}...`;
    }
  }, 1000);

  roundResultScreen.classList.remove('hidden');
}

export function hideRoundResult() {
  if (countdownIntervalId) {
    clearInterval(countdownIntervalId);
    countdownIntervalId = null;
  }
  roundResultScreen.classList.add('hidden');
}

// Match result
const rematchBtn = document.getElementById('btn-rematch');
const rematchStatus = document.getElementById('rematch-status');
const matchButtons = document.getElementById('match-buttons');

export function showMatchResult(result) {
  const outcomeEl = document.getElementById('match-outcome');
  outcomeEl.className = 'match-outcome';
  if (result.outcome === 'win') {
    outcomeEl.textContent = 'YOU WIN!';
    outcomeEl.classList.add('win');
  } else if (result.outcome === 'lose') {
    outcomeEl.textContent = 'YOU LOSE';
    outcomeEl.classList.add('lose');
  } else {
    outcomeEl.textContent = 'TIE!';
    outcomeEl.classList.add('tie');
  }

  const summaryEl = document.getElementById('match-rounds-summary');
  summaryEl.innerHTML = '';
  for (let i = 0; i < result.myScores.length; i++) {
    const my = result.myScores[i].score;
    const opp = result.opponentScores[i].score;
    const row = document.createElement('div');
    row.className = 'round-summary-row';
    if (my > opp) row.classList.add('round-won');
    else if (my < opp) row.classList.add('round-lost');
    row.innerHTML = `
      <span class="round-label">Round ${i + 1}</span>
      <span class="my-score">${my}</span>
      <span class="vs-label">vs</span>
      <span class="opp-score">${opp}</span>
    `;
    summaryEl.appendChild(row);
  }

  document.getElementById('match-my-avg').textContent = `You: ${result.myAvg}`;
  document.getElementById('match-opp-avg').textContent = `Opp: ${result.oppAvg}`;

  // Reset rematch UI
  matchButtons.classList.remove('hidden');
  rematchBtn.disabled = false;
  rematchBtn.textContent = 'Rematch';
  rematchStatus.classList.add('hidden');

  matchResultScreen.classList.remove('hidden');
}

export function hideMatchResult() {
  matchResultScreen.classList.add('hidden');
}

export function onMatchMenu(callback) {
  document.getElementById('btn-match-menu').addEventListener('click', callback);
}

export function onRematch(callback) {
  rematchBtn.addEventListener('click', callback);
}

export function showRematchRequested() {
  rematchBtn.disabled = true;
  rematchBtn.textContent = 'Waiting...';
  rematchStatus.textContent = 'Waiting for opponent...';
  rematchStatus.classList.remove('hidden');
}

export function showOpponentWantsRematch() {
  rematchStatus.textContent = 'Opponent wants a rematch!';
  rematchStatus.classList.remove('hidden');
}

// Disconnect
export function showDisconnect() {
  disconnectScreen.classList.remove('hidden');
}

export function hideDisconnect() {
  disconnectScreen.classList.add('hidden');
}

export function onDisconnectMenu(callback) {
  document.getElementById('btn-disconnect-menu').addEventListener('click', callback);
}

// Hide all versus overlays
export function hideAllVersusScreens() {
  hideLobby();
  hideWaiting();
  hideVersusHud();
  hideWaitingForScore();
  hideRoundResult();
  hideMatchResult();
  hideDisconnect();
}
