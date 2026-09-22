import { test, expect } from '../../fixtures/auth.fixture';
import { TEST_USERS } from '../../../config/test-data';

test.describe('E2E: Authenticated User Flow', () => {
  test('Account dashboard reflects saved address and pre-populates checkout', async ({
    page,
    accountPage,
    homePage,
    checkoutPage
  }) => {
    // 1. Visit Account Profile
    await accountPage.goto('account');
    await expect(accountPage.profileName).toHaveText(TEST_USERS.standard.fullName);

    // 2. Add product & Go directly to Checkout
    await homePage.goto();
    await homePage.addFeaturedProductToCart(1);
    await page.goto('/#/checkout');

    // 3. Verify Form Pre-fill
    await expect(checkoutPage.fullNameInput).toHaveValue(TEST_USERS.standard.fullName);
    await expect(checkoutPage.pincodeInput).toHaveValue(TEST_USERS.standard.pincode);
  });
});