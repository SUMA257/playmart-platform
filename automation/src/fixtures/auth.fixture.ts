import { test as baseTest, expect } from './base.fixture';
import { TEST_USERS } from '../../config/test-data';

export type AuthFixture = {
  authenticatedUser: typeof TEST_USERS.standard;
};

export const test = baseTest.extend<AuthFixture>({
  authenticatedUser: async ({ page }, use) => {
    const user = TEST_USERS.standard;
    // Seeds test state directly through browser context
    await page.addInitScript((u) => {
      window.localStorage.setItem('playmart_user_session', JSON.stringify(u));
    }, user);
    await use(user);
  }
});

export { expect };