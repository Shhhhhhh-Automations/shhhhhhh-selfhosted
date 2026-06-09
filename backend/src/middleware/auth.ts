import { getCookie } from 'hono/cookie';
import { verify } from 'hono/jwt';
import type { MiddlewareHandler } from 'hono';

export const JWT_SECRET = process.env.JWT_SECRET || 'shhhhhhh-super-secret-key';

export const requireAuth: MiddlewareHandler = async (c, next) => {
	const token = getCookie(c, 'auth_token');

	if (!token) {
		console.log('requireAuth failed: No token provided in cookies');
		return c.json({ error: 'Unauthorized: No token provided' }, 401);
	}

	try {
		const decodedPayload = await verify(token, JWT_SECRET, 'HS256');
		c.set('user', decodedPayload);
		await next();
	} catch (error) {
		console.log('requireAuth failed: Invalid or expired token', error);
		return c.json({ error: 'Unauthorized: Invalid or expired token' }, 401);
	}
};
