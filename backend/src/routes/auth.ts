import { eq, sql } from 'drizzle-orm';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import { setCookie, getCookie } from 'hono/cookie';
import bcrypt from 'bcryptjs';
import { db } from '../db';
import { users, settings, sessions } from '../db/schema';
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

	const userAgent = c.req.header('User-Agent') || 'Unknown Device';
	const ipAddress = c.req.header('x-forwarded-for') || '127.0.0.1';

	const [session] = await db.insert(sessions).values({
		userId: user.id,
		device: userAgent,
		ipAddress: ipAddress
	}).returning();

	const token = await sign(
		{
			id: user.id,
			sessionId: session.id,
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

	return c.json({ success: true, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
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

	const userAgent = c.req.header('User-Agent') || 'Unknown Device';
	const ipAddress = c.req.header('x-forwarded-for') || '127.0.0.1';

	const [session] = await db.insert(sessions).values({
		userId: newUser.id,
		device: userAgent,
		ipAddress: ipAddress
	}).returning();

	const token = await sign(
		{
			id: newUser.id,
			sessionId: session.id,
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

	return c.json({ success: true, user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role } });
});

router.post('/logout', requireAuth, async (c) => {
	const user = c.get('user');
	if (user?.sessionId) {
		await db.delete(sessions).where(eq(sessions.id, user.sessionId)).run();
	}

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
	const dbUser = await db.select().from(users).where(eq(users.id, user.id)).get();
	if (!dbUser) {
		return c.json({ error: 'Unauthorized' }, 401);
	}
	return c.json({ success: true, user: { id: dbUser.id, name: dbUser.name, email: dbUser.email, role: dbUser.role } });
});

router.put('/profile', requireAuth, async (c) => {
	const user = c.get('user');
	const body = await usePayload(c);
	const { name, email } = body;

	if (!name || !email) {
		return c.json({ error: 'Name and email required' }, 400);
	}

	const normalizedEmail = email.toLowerCase();
	
	try {
		await db.update(users)
			.set({ name, email: normalizedEmail })
			.where(eq(users.id, user.id))
			.run();
		
		return c.json({ success: true });
	} catch (error) {
		return c.json({ error: 'Failed to update profile. Email might be in use.' }, 400);
	}
});

router.put('/password', requireAuth, async (c) => {
	const user = c.get('user');
	const body = await usePayload(c);
	const { currentPassword, newPassword } = body;

	if (!currentPassword || !newPassword) {
		return c.json({ error: 'Current and new passwords required' }, 400);
	}

	const dbUser = await db.select().from(users).where(eq(users.id, user.id)).get();
	if (!dbUser) return c.json({ error: 'User not found' }, 404);

	const isValid = await bcrypt.compare(currentPassword, dbUser.passwordHash);
	if (!isValid) {
		return c.json({ error: 'Incorrect current password' }, 401);
	}

	const passwordHash = await bcrypt.hash(newPassword, 10);
	
	await db.update(users)
		.set({ passwordHash })
		.where(eq(users.id, user.id))
		.run();
		
	return c.json({ success: true });
});

router.get('/sessions', requireAuth, async (c) => {
	const user = c.get('user');
	const allSessions = await db.select().from(sessions).where(eq(sessions.userId, user.id)).all();
	
	const mappedSessions = allSessions.map(s => ({
		id: s.id,
		device: s.device,
		location: s.ipAddress,
		current: s.id === user.sessionId,
		lastActive: s.lastActiveAt
	}));
	
	return c.json(mappedSessions);
});

router.delete('/sessions/:id', requireAuth, async (c) => {
	const user = c.get('user');
	const sessionId = c.req.param('id');
	
	// Delete the session ONLY if it belongs to the current user
	await db.delete(sessions).where(sql`${sessions.id} = ${sessionId} AND ${sessions.userId} = ${user.id}`).run();
	
	return c.json({ success: true });
});

export default router;
