import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.VITE_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.VITE_PUSHER_CLUSTER,
  useTLS: true,
});

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { socket_id, channel_name } = req.body;
  const userId = `user-${socket_id.replace(/[^a-zA-Z0-9]/g, '')}`;

  const presenceData = {
    user_id: userId,
    user_info: { joinedAt: Date.now() },
  };

  const authResponse = pusher.authorizeChannel(socket_id, channel_name, presenceData);
  res.status(200).json(authResponse);
}
