const { Database } = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(process.cwd(), 'shhhhhhh.db'));
try {
  const stmt = db.prepare('INSERT INTO workflows (id, name, description, is_active, variables, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)');
  stmt.run('test-id', 'test name', null, 0, '{}', new Date().toISOString(), new Date().toISOString());
  console.log('SUCCESS');
} catch (e) {
  console.error('ERROR:', e.message);
}
