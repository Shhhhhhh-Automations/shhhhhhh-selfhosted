import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import settingsRouter from './routes/settings';
import setupRouter from './routes/setup';

const app = new Hono();

// Global CORS Middleware
app.use('*', cors());

// API Routes
app.get('/api/health', (c) => {
	return c.json({
		status: 'ok',
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
	});
});

app.route('/api/settings', settingsRouter);
app.route('/api/setup', setupRouter);

// Serve static files
app.use('/*', serveStatic({ root: './public' }));

// Catch-all route to serve index.html for SPA support
app.get('*', (c) => {
	return serveStatic({ path: './public/index.html' })(c, async () => {});
});

const port = Number(process.env.PORT) || 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
