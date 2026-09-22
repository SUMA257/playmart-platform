import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class CatalogPage extends BasePage {
  readonly categoryDropdown: Locator;
  readonly productCards: Locator;
  readonly emptyStateNotice: Locator;

  constructor(page: Page) {
    super(page);
    this.categoryDropdown = page.locator('#category-filter');
    this.productCards = page.locator('.grid > div');
    this.emptyStateNotice = page.getByText('No matching products found');
  }

  async filterByCategory(category: 'Electronics' | 'Audio' | 'Home' | 'Fashion') {
    await this.categoryDropdown.selectOption(category);
  }

  async openProductById(productId: string) {
    await this.page.locator(`[onclick*="${productId}"]`).first().click();
  }

  async getDisplayedProductCount(): Promise<number> {
    return await this.productCards.count();
  }
}