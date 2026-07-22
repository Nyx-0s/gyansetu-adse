const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/loginPage');

test('Institute admin can log in', async ({ page }) => {
  test.skip(!process.env.GYANSETU_URL || !process.env.GYANSETU_EMAIL || !process.env.GYANSETU_PASSWORD, 'Portal credentials are required');
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.login(process.env.GYANSETU_EMAIL, process.env.GYANSETU_PASSWORD);
  await expect(loginPage.dashboardHeading).toBeVisible();
});
