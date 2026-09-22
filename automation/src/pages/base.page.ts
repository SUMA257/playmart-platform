import { Page, Locator } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;
  readonly logoLink: Locator;
  readonly searchInput: Locator;
  readonly catalogNav: Locator;
  readonly accountNav: Locator;
  readonly cartNav: Locator;
  readonly cartCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoLink = page.getByRole('link', { name: 'PlayMart' });
    this.searchInput = page.locator('#site-search');
    this.catalogNav = page.getByRole('link', { name: 'Catalog' });
    this.accountNav = page.getByRole('link', { name: 'Account' });
    this.cartNav = page.locator('nav').getByRole('link', { name: 'Cart' });
    this.cartCounter = page.locator('#cart-counter');
  }

  async goto(path: string = '') {
    await this.page.goto(`/#/${path}`);
  }

  async getCartCount(): Promise<number> {
    const text = await this.cartCounter.innerText();
    return parseInt(text.trim(), 10) || 0;
  }

  async searchProduct(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press('Enter');
  }
}