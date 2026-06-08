import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import * as schema from './schema';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = process.env.SHHHHHHH_DATA_DIR || process.cwd();
const dbPath = process.env.DATABASE_URL || path.join(dataDir, 'shhhhhhh.db');

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });

export async function migrateDb() {
	console.log('Running migrations...');
	const migrationsPath = process.env.SHHHHHHH_MIGRATIONS_DIR || path.join(process.cwd(), 'drizzle');
	await migrate(db, { migrationsFolder: migrationsPath });
	console.log('Migrations complete.');
}
