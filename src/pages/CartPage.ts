import { expect, Locator, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartItems = page.locator('.cart_item');
  }

  async assertLoaded() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async assertItemPresent(itemName: string) {
    await expect(this.page.locator('.inventory_item_name', { hasText: itemName })).toBeVisible();
  }
}
