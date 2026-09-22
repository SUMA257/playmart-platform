import { test as base } from './base.fixture';

export type PreloadedCartFixture = {
  cartWithItem: void;
};

export const testWithCart = base.extend<PreloadedCartFixture>({
  cartWithItem: async ({ homePage }, use) => {
    await homePage.goto();
    await homePage.addFeaturedProductToCart(0);
    await use();
  }
});