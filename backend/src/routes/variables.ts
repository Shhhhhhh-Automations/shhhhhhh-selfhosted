import { eq } from 'drizzle-orm';
import { Hono } from 'hono';
import { db } from '../db';
import { workflows } from '../db/schema';
import { usePayload } from '../hooks/usePayload';

const app = new Hono();

/**
 * GET /api/workflows/:id/variables
 * Returns the global variables object for a workflow.
 */
app.get('/:id/variables', async (c) => {
	const id = c.req.param('id');
	const [wf] = await db
		.select({ variables: workflows.variables })
		.from(workflows)
		.where(eq(workflows.id, id))
		.limit(1);

	if (!wf) return c.json({ error: 'Workflow not found' }, 404);

	let vars: Record<string, any> = {};
	try {
		vars = JSON.parse(wf.variables || '{}');
	} catch {
		vars = {};
	}

	return c.json({ variables: vars });
});

/**
 * PUT /api/workflows/:id/variables
 * Replaces the global variables object for a workflow.
 * Body: { variables: { key: value, ... } }
 */
app.put('/:id/variables', async (c) => {
	const id = c.req.param('id');
	const body = await usePayload(c);

	if (!body || typeof body.variables !== 'object' || Array.isArray(body.variables)) {
		return c.json({ error: 'Body must contain a "variables" object' }, 400);
	}

	const [existing] = await db
		.select({ id: workflows.id })
		.from(workflows)
		.where(eq(workflows.id, id))
		.limit(1);

	if (!existing) return c.json({ error: 'Workflow not found' }, 404);

	await db
		.update(workflows)
		.set({
			variables: JSON.stringify(body.variables),
			updatedAt: new Date().toISOString(),
		})
		.where(eq(workflows.id, id));

	return c.json({ variables: body.variables });
});

/**
 * PATCH /api/workflows/:id/variables
 * Merges (upsert) variables into the existing object without removing others.
 * Body: { variables: { key: value, ... } }
 */
app.patch('/:id/variables', async (c) => {
	const id = c.req.param('id');
	const body = await usePayload(c);

	if (!body || typeof body.variables !== 'object' || Array.isArray(body.variables)) {
		return c.json({ error: 'Body must contain a "variables" object' }, 400);
	}

	const [wf] = await db
		.select({ variables: workflows.variables })
		.from(workflows)
		.where(eq(workflows.id, id))
		.limit(1);

	if (!wf) return c.json({ error: 'Workflow not found' }, 404);

	let existing: Record<string, any> = {};
	try {
		existing = JSON.parse(wf.variables || '{}');
	} catch {
		existing = {};
	}

	const merged = { ...existing, ...body.variables };
	await db
		.update(workflows)
		.set({
			variables: JSON.stringify(merged),
			updatedAt: new Date().toISOString(),
		})
		.where(eq(workflows.id, id));

	return c.json({ variables: merged });
});

/**
 * DELETE /api/workflows/:id/variables/:key
 * Removes a single variable by key.
 */
app.delete('/:id/variables/:key', async (c) => {
	const id = c.req.param('id');
	const key = c.req.param('key');

	const [wf] = await db
		.select({ variables: workflows.variables })
		.from(workflows)
		.where(eq(workflows.id, id))
		.limit(1);

	if (!wf) return c.json({ error: 'Workflow not found' }, 404);

	let vars: Record<string, any> = {};
	try {
		vars = JSON.parse(wf.variables || '{}');
	} catch {
		vars = {};
	}

	delete vars[key];

	await db
		.update(workflows)
		.set({
			variables: JSON.stringify(vars),
			updatedAt: new Date().toISOString(),
		})
		.where(eq(workflows.id, id));

	return c.json({ variables: vars });
});

export default app;
