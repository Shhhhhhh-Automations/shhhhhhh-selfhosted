import { test, expect } from '@playwright/test';

test('theme toggle works', async ({ page }) => {
  await page.goto('/login');
  
  // Login first since we need to reach dashboard
  await page.fill('input[type="email"]', 'admin@shhhhhhh.it');
  await page.fill('input[type="password"]', 'admin');
  await page.click('button[type="submit"]');

  await page.waitForURL('**/dashboard');

  await page.goto('/dashboard/settings');
  
  // Click Appearance tab
  await page.getByText('Appearance').click();
  
  // Get initial class
  const html = await page.locator('html');
  console.log('Initial class:', await html.getAttribute('class'));
  
  // Click Dark mode
  await page.getByText('Dark mode').click();
  console.log('After Dark class:', await html.getAttribute('class'));
  
  // Click Light mode
  await page.getByText('Light mode').click();
  console.log('After Light class:', await html.getAttribute('class'));
});
