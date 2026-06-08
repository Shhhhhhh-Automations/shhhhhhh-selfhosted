import { Hono } from 'hono';
import { executeIsolatedNode } from '../engine/runner';

const router = new Hono();

router.post('/test-node', async (c) => {
	try {
		const body = await c.req.json();
		
		if (!body || !body.nodeId || !body.type) {
			return c.json({ success: false, error: 'Invalid payload: missing nodeId or type' }, 400);
		}

		const result = await executeIsolatedNode({
			nodeId: body.nodeId,
			type: body.type,
			data: body.data || {},
			previousData: body.previousData
		});

		return c.json({
			executedAt: new Date().toISOString(),
			...result
		});

	} catch (error: any) {
		return c.json({ success: false, error: error.message }, 500);
	}
});

export default router;
