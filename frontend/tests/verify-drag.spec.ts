import { expect, test } from '@playwright/test';

test('should add a node, drag it on the canvas, and persist its coordinates upon page reload', async ({
	page,
}) => {
	// Forward page console logs to terminal
	page.on('console', (msg) => {
		console.log(`PAGE LOG [${msg.type()}]:`, msg.text());
	});

	// Navigate to home page
	await page.goto('/');

	// Check if setup is needed
	const deployButton = page.locator('button:has-text("Deploy Silently")');
	const openDashboardButton = page.locator('button:has-text("Open Dashboard")');

	if (await deployButton.isVisible()) {
		console.log('Setup is required, completing setup...');
		await deployButton.click();
		await page.waitForURL('/setup');

		// Step 1: Begin Setup
		await page.click('button:has-text("Begin Setup")');

		// Step 2: Complete Setup
		await page.fill('input#platformName', 'E2E Testing Platform');
		await page.click('button:has-text("Complete Setup")');

		// Step 3: Go to Dashboard
		await page.click('button:has-text("Go to Dashboard")');
		await page.waitForURL('/dashboard');
	} else if (await openDashboardButton.isVisible()) {
		await openDashboardButton.click();
		await page.waitForURL('/dashboard');
	} else {
		// Go directly to dashboard if already set up
		await page.goto('/dashboard');
	}

	// Wait for dashboard to load
	await expect(page.locator('h1:has-text("Dashboard")')).toBeVisible();

	// Create a new workflow
	const newWorkflowBtn = page
		.locator('button:has-text("New Workflow"), button:has-text("Create New Workflow")')
		.first();
	await newWorkflowBtn.click();

	// Wait for redirect to canvas
	await page.waitForURL(/\/dashboard\/[a-f0-9-]+/);
	const workflowUrl = page.url();
	const workflowId = workflowUrl.split('/').pop() || '';
	console.log(`Working with Workflow ID: ${workflowId}`);

	// Wait for Svelte Flow to load and add button to be visible
	const addNodeBtn = page.locator('button[title="Add Node"]');
	await expect(addNodeBtn).toBeVisible();

	// Open the node picker
	await addNodeBtn.click();

	// Click "Log (Action)" to add a node
	const logNodeOption = page.locator('button:has-text("Log (Action)")');
	await expect(logNodeOption).toBeVisible();
	await logNodeOption.click();

	// Verify the node is added to the canvas
	const node = page.locator('.svelte-flow__node').first();
	await expect(node).toBeVisible();

	// Wait for any initial layouts
	await page.waitForTimeout(500);

	// Get initial coordinates/bounding box
	const initialBox = await node.boundingBox();
	expect(initialBox).not.toBeNull();
	if (!initialBox) throw new Error('Could not get initial bounding box');

	// Drag from the top-left background area of the node card
	const dragStartX = initialBox.x + 15;
	const dragStartY = initialBox.y + 15;
	console.log(
		`Initial node position (viewport): x=${initialBox.x}, y=${initialBox.y}, w=${initialBox.width}, h=${initialBox.height}`,
	);

	// Hit test at drag start position
	const elementAtPoint = await page.evaluate(
		(pos) => {
			const el = document.elementFromPoint(pos.x, pos.y);
			return el ? { tagName: el.tagName, className: el.className, id: el.id } : null;
		},
		{ x: dragStartX, y: dragStartY },
	);
	console.log('Element at drag start click point:', elementAtPoint);

	// Perform simulated human-like drag
	await page.mouse.move(dragStartX, dragStartY);
	await page.mouse.down();
	await page.waitForTimeout(150);

	// Move in 10 steps to target (+200, +150)
	for (let i = 1; i <= 10; i++) {
		await page.mouse.move(dragStartX + 20 * i, dragStartY + 15 * i);
		await page.waitForTimeout(30);
	}

	await page.waitForTimeout(150);
	await page.mouse.up();

	// Wait a bit and get new bounding box
	await page.waitForTimeout(500);
	const boxAfterDrag = await node.boundingBox();
	if (boxAfterDrag) {
		console.log(`Node position after drag (viewport): x=${boxAfterDrag.x}, y=${boxAfterDrag.y}`);
	}

	// Wait for autosave to complete (debounce is 300ms + server request time)
	await page.waitForTimeout(1000);

	// Verify the new coordinates on the backend via evaluation fetch
	let workflowData = await page.evaluate(async (id) => {
		const res = await fetch(`/api/workflows/${id}`);
		return res.json();
	}, workflowId);

	expect(workflowData.nodes).toHaveLength(1);
	const dbNodeBefore = workflowData.nodes[0];
	console.log(
		`Persisted coordinates in DB: x=${dbNodeBefore.positionX}, y=${dbNodeBefore.positionY}`,
	);

	// Coordinates should not be 100, 100 (which is the default offset coordinates for the first node in Canvas.svelte)
	expect(dbNodeBefore.positionX).not.toBe(100);
	expect(dbNodeBefore.positionY).not.toBe(100);

	// Refresh the page
	await page.reload();

	// Wait for canvas to load
	await expect(addNodeBtn).toBeVisible();

	// Verify node is still visible on canvas
	const nodeAfter = page.locator('.svelte-flow__node').first();
	await expect(nodeAfter).toBeVisible();

	const boxAfterReload = await nodeAfter.boundingBox();
	if (boxAfterReload) {
		console.log(
			`Node position after reload (viewport): x=${boxAfterReload.x}, y=${boxAfterReload.y}`,
		);
	}

	// Verify the position in the database remains consistent after reload
	workflowData = await page.evaluate(async (id) => {
		const res = await fetch(`/api/workflows/${id}`);
		return res.json();
	}, workflowId);

	const dbNodeAfter = workflowData.nodes[0];
	console.log(
		`Persisted coordinates in DB after refresh: x=${dbNodeAfter.positionX}, y=${dbNodeAfter.positionY}`,
	);
	expect(dbNodeAfter.positionX).toBe(dbNodeBefore.positionX);
	expect(dbNodeAfter.positionY).toBe(dbNodeBefore.positionY);
});
