import { Browser, BrowserContext, Page } from "@playwright/test";

export class basePage {
  protected browser: Browser;
  protected context: BrowserContext;
  protected page: Page;

  constructor(browser: Browser, page: Page) {
    this.browser = browser;
    this.page = page;
    this.context = page.context();
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}
