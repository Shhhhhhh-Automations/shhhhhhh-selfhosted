import { Hono } from 'hono';
import { eq } from 'drizzle-orm';
import { db } from '../db';
import { workflows, nodes, edges } from '../db/schema';

const router = new Hono();

// List all workflows
router.get('/', async (c) => {
	try {
		const allWorkflows = await db.select().from(workflows).all();
		return c.json(allWorkflows);
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

// Create a new workflow
router.post('/', async (c) => {
	try {
		const body = await c.req.json().catch(() => ({}));
		const name = body.name || 'New Workflow';
		
		const id = crypto.randomUUID();
		await db.insert(workflows).values({ id, name });
		
		const newWorkflow = await db.select().from(workflows).where(eq(workflows.id, id)).get();
		return c.json(newWorkflow, 201);
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

// Get a workflow graph
router.get('/:id', async (c) => {
	const id = c.req.param('id');

	const workflow = await db.select().from(workflows).where(eq(workflows.id, id)).get();
	// Instead of a 404, return a 200 with a flag so the frontend knows to use mock data
	// This prevents the browser from logging a scary red network error.
	if (!workflow) {
		return c.json({ isNew: true, nodes: [], edges: [] });
	}

	const workflowNodes = await db.select().from(nodes).where(eq(nodes.workflowId, id)).all();
	const workflowEdges = await db.select().from(edges).where(eq(edges.workflowId, id)).all();

	return c.json({
		...workflow,
		nodes: workflowNodes,
		edges: workflowEdges
	});
});

// Save workflow graph state
router.put('/:id/graph', async (c) => {
	const id = c.req.param('id');
	const body = await c.req.json();

	try {
		// Verify workflow exists
		const workflow = await db.select().from(workflows).where(eq(workflows.id, id)).get();
		if (!workflow) {
			// Auto-create for the sake of the preview if it doesn't exist
			await db.insert(workflows).values({ id, name: 'My First Workflow' });
		}

		// Simple atomic-like replacement (delete old, insert new)
		await db.delete(nodes).where(eq(nodes.workflowId, id));
		await db.delete(edges).where(eq(edges.workflowId, id));

		if (body.nodes && body.nodes.length > 0) {
			const nodesToInsert = body.nodes.map((n: any) => ({
				id: n.id,
				workflowId: id,
				type: n.type,
				data: JSON.stringify(n.data),
				positionX: Math.round(n.position.x),
				positionY: Math.round(n.position.y)
			}));
			await db.insert(nodes).values(nodesToInsert);
		}

		if (body.edges && body.edges.length > 0) {
			const edgesToInsert = body.edges.map((e: any) => ({
				id: e.id,
				workflowId: id,
				sourceNodeId: e.source,
				targetNodeId: e.target,
				sourceHandle: e.sourceHandle,
				targetHandle: e.targetHandle
			}));
			await db.insert(edges).values(edgesToInsert);
		}

		return c.json({ success: true });
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

// Toggle deploy status
router.post('/:id/deploy', async (c) => {
	const id = c.req.param('id');
	const body = await c.req.json();

	try {
		await db.update(workflows)
			.set({ isActive: body.isActive, updatedAt: new Date().toISOString() })
			.where(eq(workflows.id, id));

		// When deploying, ensure webhook nodes have a persistent path saved in their data
		if (body.isActive) {
			const wfNodes = await db.select().from(nodes).where(eq(nodes.workflowId, id)).all();
			for (const node of wfNodes) {
				try {
					const raw = typeof node.data === 'string' ? JSON.parse(node.data) : node.data;
					if (node.type.toLowerCase() === 'webhook') {
						if (!raw.webhookPath) {
							raw.webhookPath = `/api/webhooks/${id}/${node.id}`;
							await db.update(nodes).set({ data: JSON.stringify(raw) }).where(eq(nodes.id, node.id));
						}
					}
				} catch (err) {
					console.warn('Failed to ensure webhookPath for node', node.id, err);
				}
			}
		} else {
			// On undeploy, mark workflow as inactive; cleanup could be extended to remove registrations
			// For now, keep webhookPath persisted but rely on workflow.isActive to reject incoming calls.
		}

		return c.json({ success: true, isActive: body.isActive });
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

// Delete a workflow
router.delete('/:id', async (c) => {
	const id = c.req.param('id');
	try {
		await db.delete(workflows).where(eq(workflows.id, id));
		return c.json({ success: true });
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

// Rename a workflow
router.patch('/:id', async (c) => {
	const id = c.req.param('id');
	const body = await c.req.json();
	try {
		await db
			.update(workflows)
			.set({ name: body.name, updatedAt: new Date().toISOString() })
			.where(eq(workflows.id, id));
		return c.json({ success: true });
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

export default router;

