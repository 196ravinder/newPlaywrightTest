import { Browser, Page } from "@playwright/test";
import { basePage } from "../pages/basePage";
import { locatorData } from "../locators/locators";

export class commonFunctions extends basePage {
  constructor(browser: Browser, page: Page) {
    super(browser, page);
  }
  async clickOnOrders() {
    await this.page.locator(locatorData.orderLoc.clickOnOrders).click();
    
  }
}
