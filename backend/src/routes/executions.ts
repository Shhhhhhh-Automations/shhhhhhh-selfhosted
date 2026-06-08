import { Hono } from 'hono';
import { db } from '../db';
import { executions } from '../db/schema';
import { eq, desc } from 'drizzle-orm';

const router = new Hono();

/** GET /api/executions?workflowId=xxx — list executions for a workflow */
router.get('/', async (c) => {
	const workflowId = c.req.query('workflowId');
	try {
		if (workflowId) {
			const results = await db
				.select()
				.from(executions)
				.where(eq(executions.workflowId, workflowId))
				.orderBy(desc(executions.startedAt))
				.limit(50)
				.all();
			return c.json(results);
		}
		const results = await db
			.select()
			.from(executions)
			.orderBy(desc(executions.startedAt))
			.limit(100)
			.all();
		return c.json(results);
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

/** GET /api/executions/:id — get a single execution detail */
router.get('/:id', async (c) => {
	const id = c.req.param('id');
	try {
		const execution = await db.select().from(executions).where(eq(executions.id, id)).get();
		if (!execution) return c.json({ error: 'Execution not found' }, 404);
		return c.json(execution);
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

export default router;
