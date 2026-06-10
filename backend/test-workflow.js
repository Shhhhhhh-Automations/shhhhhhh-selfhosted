import { sign } from 'hono/jwt';
import http from 'http';
import IORedis from 'ioredis'; // just to make sure it runs if needed

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body: data
      }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function run() {
  const token = await sign({
      id: 'mock-user-id',
      sessionId: '6b48e3b5-0e8e-4cc1-b21c-2758a48fa84a',
      email: 'test@example.com',
      role: 'admin',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  }, 'shhhhhhh-super-secret-key', 'HS256');

  const cookie = `auth_token=${token}`;

  console.log("Got cookie:", cookie.substring(0, 30) + '...');

  // Create a workflow
  const createRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/workflows',
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Cookie': cookie }
  }, JSON.stringify({ name: 'Test Workflow' }));
  
  const wf = JSON.parse(createRes.body);
  console.log("Created workflow:", wf.id);

  // Save graph
  const saveRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: `/api/workflows/${wf.id}/graph`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Cookie': cookie }
  }, JSON.stringify({
    nodes: [{ id: 'n1', type: 'webhook', data: { label: 'Web' }, position: { x: 10, y: 10 } }],
    edges: []
  }));
  
  console.log("Save status:", saveRes.status, saveRes.body);

  // Execute
  const execRes = await request({
    hostname: 'localhost',
    port: 3000,
    path: `/api/workflows/${wf.id}/execute`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Cookie': cookie }
  }, JSON.stringify({}));

  console.log("Execute status:", execRes.status, execRes.body);
}

run().catch(console.error);
