import { eq } from 'drizzle-orm';
import { Hono } from 'hono';
import { db } from '../db';
import { settings } from '../db/schema';

const router = new Hono();

// Check if a specific setting exists
router.get('/status', async (c) => {
	const isConfigured = await db
		.select()
		.from(settings)
		.where(eq(settings.key, 'is_configured'))
		.get();

	return c.json({
		isConfigured: !!isConfigured && isConfigured.value === 'true',
		version: '0.1.0',
	});
});

export default router;
