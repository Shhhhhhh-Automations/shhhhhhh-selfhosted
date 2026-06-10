import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull().default('Admin User'),
	email: text('email').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	role: text('role', { enum: ['admin', 'member'] }).notNull().default('admin'),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const workflows = sqliteTable('workflows', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	description: text('description'),
	isActive: integer('is_active', { mode: 'boolean' }).notNull().default(false),
	/** JSON object of global workflow variables — accessible via {{ $vars.name }} */
	variables: text('variables').notNull().default('{}'),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const nodes = sqliteTable('nodes', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	workflowId: text('workflow_id')
		.notNull()
		.references(() => workflows.id, { onDelete: 'cascade' }),
	type: text('type').notNull(), // e.g., 'webhook', 'google-docs', 'condition'
	data: text('data').notNull().default('{}'), // JSON configuration
	positionX: integer('position_x').notNull().default(0),
	positionY: integer('position_y').notNull().default(0),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const edges = sqliteTable('edges', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	workflowId: text('workflow_id')
		.notNull()
		.references(() => workflows.id, { onDelete: 'cascade' }),
	sourceNodeId: text('source_node_id')
		.notNull()
		.references(() => nodes.id, { onDelete: 'cascade' }),
	targetNodeId: text('target_node_id')
		.notNull()
		.references(() => nodes.id, { onDelete: 'cascade' }),
	sourceHandle: text('source_handle'),
	targetHandle: text('target_handle'),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
});

export const executions = sqliteTable('executions', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	workflowId: text('workflow_id')
		.notNull()
		.references(() => workflows.id, { onDelete: 'cascade' }),
	status: text('status', { enum: ['pending', 'running', 'success', 'failed'] })
		.notNull()
		.default('pending'),
	triggerPayload: text('trigger_payload'), // JSON string
	executionResult: text('execution_result'), // JSON string
	error: text('error'),
	startedAt: text('started_at').default(sql`CURRENT_TIMESTAMP`),
	finishedAt: text('finished_at'),
});

export const settings = sqliteTable('settings', {
	key: text('key').primaryKey(),
	value: text('value').notNull(),
	description: text('description'),
	updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const credentials = sqliteTable('credentials', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	name: text('name').notNull(),
	type: text('type').notNull(), // e.g. 'slack', 'github', 'openai'
	encryptedValue: text('encrypted_value').notNull(),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
	updatedAt: text('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const sessions = sqliteTable('sessions', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	device: text('device').notNull().default('Unknown Device'),
	ipAddress: text('ip_address'),
	createdAt: text('created_at').default(sql`CURRENT_TIMESTAMP`),
	lastActiveAt: text('last_active_at').default(sql`CURRENT_TIMESTAMP`),
});

export type Workflow = typeof workflows.$inferSelect;
export type NewWorkflow = typeof workflows.$inferInsert;
export type Node = typeof nodes.$inferSelect;
export type NewNode = typeof nodes.$inferInsert;
export type Edge = typeof edges.$inferSelect;
export type NewEdge = typeof edges.$inferInsert;
export type Execution = typeof executions.$inferSelect;
export type Setting = typeof settings.$inferSelect;
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Credential = typeof credentials.$inferSelect;
export type NewCredential = typeof credentials.$inferInsert;
export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
