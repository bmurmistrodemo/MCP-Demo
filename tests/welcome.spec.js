// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

const welcomeURL = 'file://' + path.resolve('UI - Pages/welcome.html');

test('welcome page - title and dashboard cards', async ({ page }) => {
  await page.goto(welcomeURL);
  await expect(page).toHaveTitle('Welcome - MyApp');
  await expect(page.locator('#welcomeHeading')).toHaveText('Hello back, User!!!!');
  await expect(page.locator('.dashboard-cards .card')).toHaveCount(3);
});
