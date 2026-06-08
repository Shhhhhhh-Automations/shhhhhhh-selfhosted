import { eq } from 'drizzle-orm';
import { Hono } from 'hono';
import { db } from '../db';
import { nodes, workflows } from '../db/schema';
import { runWorkflow, runWorkflowFromNode } from '../engine/runner';

const router = new Hono();

/**
 * POST /api/webhooks/:workflowId
 * Triggers a workflow execution with the request body as payload.
 */
router.post('/:workflowId', async (c) => {
	const workflowId = c.req.param('workflowId');

	const workflow = await db.select().from(workflows).where(eq(workflows.id, workflowId)).get();
	if (!workflow) return c.json({ error: 'Workflow not found' }, 404);
	if (!workflow.isActive) return c.json({ error: 'Workflow is not active. Deploy it first.' }, 409);

	let payload: any = {};
	try {
		payload = await c.req.json();
	} catch {
		// Body may be empty or non-JSON, that's fine
	}

	try {
		const executionId = await runWorkflow(workflowId, payload);
		return c.json({ success: true, executionId }, 200);
	} catch (error: any) {
		return c.json({ success: false, error: error.message }, 500);
	}
});

// Per-node webhook endpoint: POST /api/webhooks/:workflowId/:nodeId
router.post('/:workflowId/:nodeId', async (c) => {
	const workflowId = c.req.param('workflowId');
	const nodeId = c.req.param('nodeId');

	const workflow = await db.select().from(workflows).where(eq(workflows.id, workflowId)).get();
	if (!workflow) return c.json({ error: 'Workflow not found' }, 404);
	if (!workflow.isActive) return c.json({ error: 'Workflow is not active. Deploy it first.' }, 409);

	const node = await db.select().from(nodes).where(eq(nodes.id, nodeId)).get();
	if (!node) return c.json({ error: 'Node not found' }, 404);
	if (node.type.toLowerCase() !== 'webhook') return c.json({ error: 'Node is not a webhook' }, 400);

	let payload: any = {};
	try {
		payload = await c.req.json();
	} catch {}

	try {
		const executionId = await runWorkflowFromNode(workflowId, nodeId, payload);
		return c.json({ success: true, executionId }, 200);
	} catch (error: any) {
		return c.json({ success: false, error: error.message }, 500);
	}
});

export default router;
