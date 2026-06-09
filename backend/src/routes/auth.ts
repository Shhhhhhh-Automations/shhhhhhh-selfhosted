import { eq, sql } from 'drizzle-orm';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import { setCookie, getCookie } from 'hono/cookie';
import bcrypt from 'bcryptjs';
import { db } from '../db';
import { users, settings } from '../db/schema';
import { usePayload } from '../hooks/usePayload';
import { requireAuth, JWT_SECRET } from '../middleware/auth';

const router = new Hono();

router.post('/login', async (c) => {
	const body = await usePayload(c);
	const { email, password } = body;

	if (!email || !password) {
		return c.json({ error: 'Email and password required' }, 400);
	}

	const normalizedEmail = email.toLowerCase();
	const user = await db.select().from(users).where(eq(users.email, normalizedEmail)).get();
	if (!user) {
		console.log('Login failed: user not found for email:', email);
		return c.json({ error: 'Invalid credentials' }, 401);
	}

	const isValid = await bcrypt.compare(password, user.passwordHash);
	if (!isValid) {
		console.log('Login failed: invalid password for email:', email);
		return c.json({ error: 'Invalid credentials' }, 401);
	}

	const token = await sign(
		{
			id: user.id,
			email: user.email,
			role: user.role,
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 7 days
		},
		JWT_SECRET,
		'HS256'
	);

	setCookie(c, 'auth_token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'Lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});

	return c.json({ success: true, user: { id: user.id, email: user.email, role: user.role } });
});

router.post('/setup', async (c) => {
	// Only allow if no users exist
	const existingUsers = await db.select().from(users).limit(1).all();
	if (existingUsers.length > 0) {
		return c.json({ error: 'Setup already complete' }, 403);
	}

	const body = await usePayload(c);
	const { email, password, platformName } = body;

	if (!email || !password || !platformName) {
		return c.json({ error: 'Email, password, and platform name required' }, 400);
	}

	const passwordHash = await bcrypt.hash(password, 10);
	
	// Create the admin user
	const [newUser] = await db.insert(users).values({
		email: email.toLowerCase(),
		passwordHash,
		role: 'admin',
	}).returning();

	// Configure the instance settings
	await db
		.insert(settings)
		.values([
			{ key: 'is_configured', value: 'true', description: 'Whether the platform has completed the setup wizard' },
			{ key: 'platform_name', value: platformName, description: 'The name of this instance' },
		])
		.onConflictDoUpdate({
			target: settings.key,
			set: { value: sql`excluded.value`, updatedAt: sql`CURRENT_TIMESTAMP` },
		});

	const token = await sign(
		{
			id: newUser.id,
			email: newUser.email,
			role: newUser.role,
			exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
		},
		JWT_SECRET,
		'HS256'
	);

	setCookie(c, 'auth_token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'Lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});

	return c.json({ success: true, user: { id: newUser.id, email: newUser.email, role: newUser.role } });
});

router.post('/logout', async (c) => {
	setCookie(c, 'auth_token', '', {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'Lax',
		path: '/',
		maxAge: 0,
	});
	return c.json({ success: true });
});

router.get('/me', requireAuth, async (c) => {
	const user = c.get('user');
	if (!user) {
		console.log('/me failed: no user in context');
		return c.json({ error: 'Unauthorized' }, 401);
	}
	return c.json({ success: true, user: { id: user.id, email: user.email, role: user.role } });
});

export default router;
