import { eq, sql } from 'drizzle-orm';
import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';
import type { MiddlewareHandler } from 'hono';
import { db } from '../db';
import { sessions } from '../db/schema';

export const JWT_SECRET = process.env.JWT_SECRET || 'shhhhhhh-super-secret-key';

export const requireAuth: MiddlewareHandler = async (c, next) => {
	const token = getCookie(c, 'auth_token');

	if (!token) {
		console.log('requireAuth failed: No token provided in cookies');
		return c.json({ error: 'Unauthorized: No token provided' }, 401);
	}

	try {
		const decodedPayload = await verify(token, JWT_SECRET, 'HS256') as any;
		
		if (!decodedPayload.sessionId) {
			console.log('requireAuth failed: No sessionId in token');
			return c.json({ error: 'Unauthorized: Legacy token format' }, 401);
		}

		// Verify session exists in DB
		const session = await db.select().from(sessions).where(eq(sessions.id, decodedPayload.sessionId)).get();
		if (!session) {
			console.log('requireAuth failed: Session revoked or not found');
			return c.json({ error: 'Unauthorized: Session expired or revoked' }, 401);
		}

		// Fire and forget update last active
		db.update(sessions)
			.set({ lastActiveAt: sql`CURRENT_TIMESTAMP` })
			.where(eq(sessions.id, session.id))
			.run();

		c.set('user', decodedPayload);
		await next();
	} catch (error) {
		console.log('requireAuth failed: Invalid or expired token', error);
		return c.json({ error: 'Unauthorized: Invalid or expired token' }, 401);
	}
};
