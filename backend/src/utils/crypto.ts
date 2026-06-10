import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';

// Default key for development. In production, this should be provided via environment variables.
// The key must be exactly 32 bytes long for aes-256-gcm.
const getEncryptionKey = () => {
	const key = process.env.SHHHHHHH_MASTER_KEY || 'default-insecure-32-byte-dev-key';
	if (Buffer.from(key, 'utf-8').length !== 32) {
		// Pad or truncate to ensure exactly 32 bytes
		const buf = Buffer.alloc(32);
		Buffer.from(key, 'utf-8').copy(buf);
		return buf;
	}
	return Buffer.from(key, 'utf-8');
};

export function encrypt(text: string): string {
	const iv = crypto.randomBytes(16);
	const key = getEncryptionKey();
	const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
	let encrypted = cipher.update(text, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	const authTag = cipher.getAuthTag();
	return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
}

export function decrypt(text: string): string {
	const [ivHex, authTagHex, encryptedHex] = text.split(':');
	if (!ivHex || !authTagHex || !encryptedHex) {
		throw new Error('Invalid encrypted format');
	}
	const iv = Buffer.from(ivHex, 'hex');
	const authTag = Buffer.from(authTagHex, 'hex');
	const key = getEncryptionKey();
	const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
	decipher.setAuthTag(authTag);
	let decrypted = decipher.update(encryptedHex, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted;
}
