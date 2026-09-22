import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class AccountPage extends BasePage {
  readonly profileName: Locator;
  readonly profileMobile: Locator;
  readonly addressCard: Locator;

  constructor(page: Page) {
    super(page);
    this.profileName = page.locator('.w-16 + div h3');
    this.profileMobile = page.locator('.w-16 + div p');
    this.addressCard = page.locator('.md\\:col-span-2');
  }
}