import { desc, eq } from 'drizzle-orm';
import { Hono } from 'hono';
import { db } from '../db';
import { credentials } from '../db/schema';
import { encrypt, decrypt } from '../utils/crypto';

const router = new Hono();

router.get('/', async (c) => {
	try {
		const results = await db
			.select()
			.from(credentials)
			.orderBy(desc(credentials.createdAt))
			.all();
		
		// Return obscured credentials (don't send raw decrypted keys to frontend)
		const obscured = results.map(cred => {
			let preview = '****';
			try {
				const decrypted = decrypt(cred.encryptedValue);
				if (decrypted.length > 8) {
					preview = decrypted.substring(0, 4) + '****' + decrypted.substring(decrypted.length - 4);
				} else {
					preview = decrypted.substring(0, 2) + '****';
				}
			} catch (e) {
				preview = 'error-decrypting';
			}
			return {
				id: cred.id,
				name: cred.name,
				type: cred.type,
				preview: preview,
				createdAt: cred.createdAt,
			};
		});
		return c.json(obscured);
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

router.post('/', async (c) => {
	try {
		const body = await c.req.json();
		const { name, type, value } = body;

		if (!name || !type || !value) {
			return c.json({ error: 'Name, type, and value are required' }, 400);
		}

		const encryptedValue = encrypt(value);

		const [newCredential] = await db.insert(credentials).values({
			name,
			type,
			encryptedValue,
		}).returning();

		return c.json({
			id: newCredential.id,
			name: newCredential.name,
			type: newCredential.type,
			createdAt: newCredential.createdAt
		});
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

router.delete('/:id', async (c) => {
	const id = c.req.param('id');
	try {
		await db.delete(credentials).where(eq(credentials.id, id));
		return c.json({ success: true });
	} catch (error: any) {
		return c.json({ error: error.message }, 500);
	}
});

export default router;
