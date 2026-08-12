import { locatorData } from "../locators/locators";
import { Page, Browser, expect } from "@playwright/test";
import { basePage } from "./basePage";

export class orderPage extends basePage {
  constructor(browser: Browser, page: Page) {
    super(browser, page);
  }
  async orderPageVerification() {
    await expect(  this.page.getByRole('heading' ,{  name: locatorData.orderLoc.orderHeading })).toHaveText("Your Orders");
    await expect(  this.page.getByText( locatorData.orderLoc.orderId )).toHaveText("Order Id");
    await expect(  this.page.getByText( locatorData.orderLoc.productImage)).toHaveText("Product Image");
    await expect(  this.page.getByText( locatorData.orderLoc.productName )).toHaveText("Name");
    await expect(  this.page.getByText( locatorData.orderLoc.productPrice )).toHaveText("Price");
    await expect(  this.page.getByText( locatorData.orderLoc.productOrderDate )).toHaveText("Ordered Date");
    await expect(  this.page.getByText( locatorData.orderLoc.productView ).first()).toHaveText("View");
    await expect(  this.page.getByText( locatorData.orderLoc.productDelete ).first()).toHaveText("Delete");
    await expect(  this.page.getByRole('button',{name: locatorData.orderLoc.productViewBtnClick}).first()).toHaveText("View");
    await expect(  this.page.getByRole( 'button',{name:locatorData.orderLoc.productDeleteBtnClick} ).first()).toHaveText("Delete");
    await this.page.getByRole('button',{name:locatorData.orderLoc.productViewBtnClick}).first().click();
    await expect(this.page.getByText('order summary')).toHaveText('order summary');
    
  }
}
