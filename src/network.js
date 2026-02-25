import Pusher from 'pusher-js';

let pusher = null;
let channel = null;
let myUserId = null;
let isHost = false;
let roomCode = null;

const SAFE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I or O

function generateRoomCode() {
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += SAFE_CHARS[Math.floor(Math.random() * SAFE_CHARS.length)];
  }
  return code;
}

function getChannelName(code) {
  return `presence-room-${code}`;
}

// Callbacks set by versus.js
let onOpponentJoined = null;
let onOpponentLeft = null;
let onSeed = null;
let onOpponentScore = null;
let onOpponentLeave = null;
let onOpponentRematch = null;

export function setCallbacks({ opponentJoined, opponentLeft, seed, opponentScore, opponentLeave, opponentRematch }) {
  onOpponentJoined = opponentJoined || null;
  onOpponentLeft = opponentLeft || null;
  onSeed = seed || null;
  onOpponentScore = opponentScore || null;
  onOpponentLeave = opponentLeave || null;
  onOpponentRematch = opponentRematch || null;
}

function connect() {
  if (pusher) return;

  pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
    cluster: import.meta.env.VITE_PUSHER_CLUSTER,
    authEndpoint: '/api/pusher-auth',
  });
}

export function createRoom() {
  connect();
  isHost = true;
  roomCode = generateRoomCode();
  subscribeToChannel(roomCode);
  return roomCode;
}

export function joinRoom(code) {
  connect();
  isHost = false;
  roomCode = code.toUpperCase();
  subscribeToChannel(roomCode);
  return roomCode;
}

function subscribeToChannel(code) {
  if (channel) {
    channel.unbind_all();
    pusher.unsubscribe(channel.name);
  }

  channel = pusher.subscribe(getChannelName(code));

  channel.bind('pusher:subscription_succeeded', (members) => {
    myUserId = members.myID;
    // If someone is already in the room (we're the joiner), notify
    if (members.count > 1 && onOpponentJoined) {
      onOpponentJoined();
    }
  });

  channel.bind('pusher:member_added', () => {
    if (onOpponentJoined) onOpponentJoined();
  });

  channel.bind('pusher:member_removed', () => {
    if (onOpponentLeft) onOpponentLeft();
  });

  // Game events
  channel.bind('client-seed', (data) => {
    if (onSeed) onSeed(data);
  });

  channel.bind('client-score', (data) => {
    if (data.userId === myUserId) return;
    if (onOpponentScore) onOpponentScore(data);
  });

  channel.bind('client-leave', (data) => {
    if (data.userId === myUserId) return;
    if (onOpponentLeave) onOpponentLeave();
  });

  channel.bind('client-rematch', (data) => {
    if (data.userId === myUserId) return;
    if (onOpponentRematch) onOpponentRematch();
  });
}

export function sendSeed(round, seed) {
  if (!channel) return;
  channel.trigger('client-seed', { round, seed, userId: myUserId });
}

export function sendScore(round, scoreData) {
  if (!channel) return;
  channel.trigger('client-score', { round, ...scoreData, userId: myUserId });
}

export function sendLeave() {
  if (!channel) return;
  channel.trigger('client-leave', { userId: myUserId });
}

export function sendRematch() {
  if (!channel) return;
  channel.trigger('client-rematch', { userId: myUserId });
}

export function leaveRoom() {
  if (channel) {
    sendLeave();
    channel.unbind_all();
    pusher.unsubscribe(channel.name);
    channel = null;
  }
  roomCode = null;
  isHost = false;
}

export function disconnect() {
  leaveRoom();
  if (pusher) {
    pusher.disconnect();
    pusher = null;
  }
}

export function getIsHost() {
  return isHost;
}

export function getRoomCode() {
  return roomCode;
}
