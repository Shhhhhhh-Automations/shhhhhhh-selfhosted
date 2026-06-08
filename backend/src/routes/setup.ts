import { sql } from 'drizzle-orm';
import { Hono } from 'hono';
import { db } from '../db';
import { settings } from '../db/schema';

const router = new Hono();

router.post('/', async (c) => {
	const body = await c.req.json();
	const { platformName } = body;

	try {
		await db
			.insert(settings)
			.values([
				{
					key: 'is_configured',
					value: 'true',
					description: 'Whether the platform has completed the setup wizard',
				},
				{
					key: 'platform_name',
					value: platformName || 'shhhhhhh.it',
					description: 'The name of this instance',
				},
			])
			.onConflictDoUpdate({
				target: settings.key,
				set: { value: sql`excluded.value`, updatedAt: sql`CURRENT_TIMESTAMP` },
			});

		return c.json({ success: true });
	} catch (error) {
		return c.json({ success: false, error: (error as Error).message }, 500);
	}
});

export default router;
