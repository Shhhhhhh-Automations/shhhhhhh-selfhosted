import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';
import path from 'node:path';

const dataDir = process.env.SHHHHHHH_DATA_DIR || process.cwd();
const dbPath = process.env.DATABASE_URL || path.join(dataDir, 'shhhhhhh.db');

const sqlite = new Database(dbPath);
export const db = drizzle(sqlite, { schema });
