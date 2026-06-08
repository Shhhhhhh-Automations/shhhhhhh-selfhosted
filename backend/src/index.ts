import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import settingsRouter from './routes/settings';
import setupRouter from './routes/setup';
import engineRouter from './routes/engine';
import workflowsRouter from './routes/workflows';
import webhooksRouter from './routes/webhooks';
import executionsRouter from './routes/executions';
import { migrateDb } from './db';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
app.route('/api/engine', engineRouter);
app.route('/api/workflows', workflowsRouter);
app.route('/api/webhooks', webhooksRouter);
app.route('/api/executions', executionsRouter);

// Serve static files using absolute path
const publicDir = path.join(__dirname, '..', 'public');

app.use('/*', serveStatic({ root: path.relative(process.cwd(), publicDir) }));

// Catch-all route to serve index.html for SPA support
app.get('*', (c) => {
	return serveStatic({ path: path.relative(process.cwd(), path.join(publicDir, 'index.html')) })(
		c,
		async () => {},
	);
});

const port = Number(process.env.PORT) || 3000;

async function startServer() {
	try {
		await migrateDb();
		console.log(`Server is running on port ${port}`);

		serve({
			fetch: app.fetch,
			port,
		});
	} catch (err) {
		console.error('Failed to start server:', err);
		process.exit(1);
	}
}

startServer();
