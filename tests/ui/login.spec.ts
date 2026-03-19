import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { users } from '../../src/utils/test-data';

test.describe('Login', () => {
  test('standard user can sign in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.assertLoaded();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.assertLoaded();
  });

  test('locked out user sees an error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await loginPage.assertErrorContains('Sorry, this user has been locked out.');
  });
});
