import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: '.',
    publicDir: 'public',
    build: {
      outDir: 'dist',
    },
    plugins: [
      {
        name: 'pusher-auth-dev',
        configureServer(server) {
          server.middlewares.use('/api/pusher-auth', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }

            let body = '';
            for await (const chunk of req) body += chunk;
            const params = new URLSearchParams(body);
            const socket_id = params.get('socket_id');
            const channel_name = params.get('channel_name');

            const { default: Pusher } = await import('pusher');
            const pusher = new Pusher({
              appId: env.PUSHER_APP_ID,
              key: env.VITE_PUSHER_KEY,
              secret: env.PUSHER_SECRET,
              cluster: env.VITE_PUSHER_CLUSTER,
              useTLS: true,
            });

            const userId = `user-${socket_id.replace(/[^a-zA-Z0-9]/g, '')}`;
            const presenceData = {
              user_id: userId,
              user_info: { joinedAt: Date.now() },
            };

            const authResponse = pusher.authorizeChannel(socket_id, channel_name, presenceData);
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(authResponse));
          });
        },
      },
    ],
  };
});
