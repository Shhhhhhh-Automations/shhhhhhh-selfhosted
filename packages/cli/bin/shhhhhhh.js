#!/usr/bin/env node

const path = require('node:path');
const os = require('node:os');
const fs = require('node:fs');

// Configuration
const DEFAULT_DATA_DIR = path.join(os.homedir(), '.shhhhhhh');
const SHHHHHHH_DATA_DIR = process.env.SHHHHHHH_DATA_DIR || DEFAULT_DATA_DIR;

// Ensure data directory exists
if (!fs.existsSync(SHHHHHHH_DATA_DIR)) {
	fs.mkdirSync(SHHHHHHH_DATA_DIR, { recursive: true });
}

// Set environment variables for the backend
process.env.SHHHHHHH_DATA_DIR = SHHHHHHH_DATA_DIR;
process.env.PORT = process.env.PORT || '3000';
process.env.SHHHHHHH_MIGRATIONS_DIR = path.join(__dirname, '..', 'drizzle');

console.log('--- Shhhhhhh Self-Hosted ---');
console.log(`Data directory: ${SHHHHHHH_DATA_DIR}`);
console.log(`Port: ${process.env.PORT}`);

// Load the backend server
// In the published package, 'dist/index.js' will be relative to this script
const serverPath = path.join(__dirname, '..', 'dist', 'index.js');

if (!fs.existsSync(serverPath)) {
	console.error('Error: Backend server not found. Did you run the build?');
	process.exit(1);
}

const { pathToFileURL } = require('node:url');

// Execute the server
import(pathToFileURL(serverPath)).catch(err => {
	console.error('Failed to start server:', err);
	process.exit(1);
});
