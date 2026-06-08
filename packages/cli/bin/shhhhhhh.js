#!/usr/bin/env node

import path from 'node:path';
import os from 'node:os';
import fs from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
	const { default: chalk } = await import('chalk');

	// Configuration
	const DEFAULT_DATA_DIR = path.join(os.homedir(), '.shhhhhhh');
	const SHHHHHHH_DATA_DIR = process.env.SHHHHHHH_DATA_DIR || DEFAULT_DATA_DIR;

	// Ensure data directory exists
	if (!fs.existsSync(SHHHHHHH_DATA_DIR)) {
		fs.mkdirSync(SHHHHHHH_DATA_DIR, { recursive: true });
	}

	// Read and print the logo
	const logoPath = path.join(__dirname, 'logo.txt');
	if (fs.existsSync(logoPath)) {
		const logoText = fs.readFileSync(logoPath, 'utf8');
		const lines = logoText.split('\n');
		
		// Apply an Aurora gradient (Top to Bottom: Purple -> Cyan)
		console.log('\n');
		lines.forEach((line, i) => {
			const ratio = i / lines.length;
			// Simple linear interpolation between a dark purple and a neon blue/cyan
			const r = Math.round(180 - (180 * ratio)); 
			const g = Math.round(50 + (100 * ratio)); 
			const b = Math.round(200 + (55 * ratio));
			console.log(chalk.rgb(r, g, b)(line));
		});
		console.log('\n');
	}

	console.log(chalk.bold.white('--- Shhhhhhh Self-Hosted ---'));
	console.log(`${chalk.gray('Data directory:')} ${chalk.cyan(SHHHHHHH_DATA_DIR)}`);
	
	process.env.PORT = process.env.PORT || '3000';
	console.log(`${chalk.gray('Port:')} ${chalk.cyan(process.env.PORT)}`);
	console.log(''); // spacer

	// Set environment variables for the backend
	process.env.SHHHHHHH_DATA_DIR = SHHHHHHH_DATA_DIR;
	process.env.SHHHHHHH_MIGRATIONS_DIR = path.join(__dirname, '..', 'drizzle');

	// Load the backend server
	const serverPath = path.join(__dirname, '..', 'dist', 'index.js');

	if (!fs.existsSync(serverPath)) {
		console.error(chalk.red('Error: Backend server not found. Did you run the build?'));
		process.exit(1);
	}

	// Execute the server
	try {
		await import(pathToFileURL(serverPath).toString());
	} catch (err) {
		console.error(chalk.red('Failed to start server:'), err);
		process.exit(1);
	}
}

main();
