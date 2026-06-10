const http = require('http');

const data = JSON.stringify({
  nodes: [{ id: 'n1', type: 'webhook', data: { label: 'My Webhook' }, position: { x: 10, y: 20 } }],
  edges: []
});

const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/api/workflows/test-wf-1/graph',
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}, res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => console.log('Status:', res.statusCode, 'Body:', body));
});

req.on('error', e => console.error(e));
req.write(data);
req.end();
