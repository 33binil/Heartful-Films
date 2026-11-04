import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, Plugin} from 'vite';

function paymentStatusPlugin(): Plugin {
  const statusFile = path.resolve(__dirname, 'payment-status.json');

  const getStatus = () => {
    try {
      if (fs.existsSync(statusFile)) {
        return JSON.parse(fs.readFileSync(statusFile, 'utf-8'));
      }
    } catch (err) {
      console.error('Error reading payment status file:', err);
    }
    return { locked: true, updatedAt: new Date().toISOString() };
  };

  const saveStatus = (data: { locked: boolean }) => {
    try {
      const payload = {
        locked: data.locked,
        updatedAt: new Date().toISOString()
      };
      fs.writeFileSync(statusFile, JSON.stringify(payload, null, 2), 'utf-8');
      return payload;
    } catch (err) {
      console.error('Error writing payment status file:', err);
      return null;
    }
  };

  const handleMiddleware = (req: any, res: any, next: () => void) => {
    if (!req.url) return next();
    const url = new URL(req.url, 'http://localhost');

    if (url.pathname === '/api/payment-status') {
      if (req.method === 'GET') {
        const current = getStatus();
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
        res.end(JSON.stringify(current));
        return;
      }

      if (req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: Buffer) => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body || '{}');
            if (typeof parsed.locked === 'boolean') {
              const updated = saveStatus({ locked: parsed.locked });
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, status: updated }));
              return;
            }
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Field `locked` must be a boolean' }));
          } catch (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
          }
        });
        return;
      }
    }
    next();
  };

  return {
    name: 'payment-status-api',
    configureServer(server) {
      server.middlewares.use(handleMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleMiddleware);
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), paymentStatusPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

