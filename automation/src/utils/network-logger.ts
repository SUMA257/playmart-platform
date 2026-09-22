import { Page, Request, Response } from '@playwright/test';

export interface InterceptedCall {
  url: string;
  method: string;
  status: number;
}

export class NetworkLogger {
  private calls: InterceptedCall[] = [];

  constructor(private page: Page) {}

  start() {
    this.page.on('response', (res: Response) => {
      this.calls.push({
        url: res.url(),
        method: res.request().method(),
        status: res.status()
      });
    });
  }

  getFailedRequests(): InterceptedCall[] {
    return this.calls.filter(c => c.status >= 400);
  }

  hasRequestTo(urlPart: string): boolean {
    return this.calls.some(c => c.url.includes(urlPart));
  }
}