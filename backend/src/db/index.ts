import { drizzle as drizzleBetterSqlite } from 'drizzle-orm/better-sqlite3';
import { drizzle as drizzleBunSqlite } from 'drizzle-orm/bun-sqlite';
import { migrate as migrateBetterSqlite } from 'drizzle-orm/better-sqlite3/migrator';
import { migrate as migrateBunSqlite } from 'drizzle-orm/bun-sqlite/migrator';
import * as schema from './schema';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = process.env.SHHHHHHH_DATA_DIR || process.cwd();
const dbPath = process.env.DATABASE_URL || path.join(dataDir, 'shhhhhhh.db');

// Detect if we are running in Bun
const isBun = typeof Bun !== 'undefined';

let db: any;
let dbClient: any;

if (isBun) {
	console.log('Detected Bun runtime. Using bun:sqlite.');
	// Using dynamic import to prevent Node from trying to resolve bun:sqlite
	const { Database } = require('bun:sqlite');
	dbClient = new Database(dbPath);
	db = drizzleBunSqlite(dbClient, { schema });
} else {
	console.log('Detected Node runtime. Using better-sqlite3.');
	const Database = require('better-sqlite3');
	dbClient = new Database(dbPath);
	db = drizzleBetterSqlite(dbClient, { schema });
}

export { db };

export async function migrateDb() {
	console.log('Running migrations...');
	const migrationsPath = process.env.SHHHHHHH_MIGRATIONS_DIR || path.join(process.cwd(), 'drizzle');
	
	if (isBun) {
		await migrateBunSqlite(db, { migrationsFolder: migrationsPath });
	} else {
		await migrateBetterSqlite(db, { migrationsFolder: migrationsPath });
	}
	
	console.log('Migrations complete.');
}
