import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly heroBanner: Locator;
  readonly exploreDealsBtn: Locator;
  readonly featuredProductCards: Locator;

  constructor(page: Page) {
    super(page);
    this.heroBanner = page.locator('section').filter({ hasText: 'Great Indian Electronics Fest' });
    this.exploreDealsBtn = page.getByRole('link', { name: 'Shop The Catalog' });
    this.featuredProductCards = page.locator('.grid > div');
  }

  async clickProductCard(index: number = 0) {
    await this.featuredProductCards.nth(index).locator('img').click();
  }

  async addFeaturedProductToCart(index: number = 0) {
    await this.featuredProductCards.nth(index).getByRole('button', { name: 'Add to Cart' }).click();
  }
}