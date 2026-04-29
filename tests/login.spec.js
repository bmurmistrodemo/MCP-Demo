// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

const loginURL = 'file://' + path.resolve('UI - Pages/login.html');

test('login page - title and form elements', async ({ page }) => {
  await page.goto(loginURL);
  await expect(page).toHaveTitle('Login Page');
  await expect(page.getByRole('heading', { name: 'Welcome Back' })).toBeVisible();
  await expect(page.locator('#loginBtn')).toBeVisible();

});
