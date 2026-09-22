import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';
import { CatalogPage } from '../pages/catalog.page';
import { ProductDetailsPage } from '../pages/product-details.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { AccountPage } from '../pages/account.page';

export type PagesFixture = {
  homePage: HomePage;
  catalogPage: CatalogPage;
  pdpPage: ProductDetailsPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  accountPage: AccountPage;
};

export const test = base.extend<PagesFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  catalogPage: async ({ page }, use) => {
    await use(new CatalogPage(page));
  },
  pdpPage: async ({ page }, use) => {
    await use(new ProductDetailsPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
  }
});

export { expect } ;