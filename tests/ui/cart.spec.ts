import { test } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { LoginPage } from '../../src/pages/LoginPage';
import { users } from '../../src/utils/test-data';

test.describe('Cart', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.assertLoaded();
  });

  test('user can add an item to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const itemName = 'Sauce Labs Backpack';

    await inventoryPage.addItemToCartByName(itemName);
    await inventoryPage.openCart();
    await cartPage.assertLoaded();
    await cartPage.assertItemPresent(itemName);
  });
});
