import { expect } from "@playwright/test";
import { locatorData } from "../locators/locators";
import { userData } from "../data/userData";
import { basePage } from "./basePage";

export class homePage extends basePage {

    constructor(page: any) {
        super(page)
    }
    async addToCart() {
        await this.page.locator(locatorData.homePage.pageLoadWaitFor).waitFor();
        const products = await this.page.locator(locatorData.homePage.selectProduct);
        const productCount = await products.count();
        // await this.page.locator(locatorData.homePage.selectProduct)
        for (let i = 0; i < productCount; i++) {
            if (await products.nth(i).locator("b").textContent() === userData.productName) {
                await products.nth(i).locator(locatorData.homePage.clickOnAddToCartButton).click();
                break;
            }
        }
        await this.page.locator(locatorData.homePage.clickOnCartButton).click();
        await this.page.locator(locatorData.homePage.clickOnCheckoutButton).click();
        await this.page.locator(locatorData.homePage.selectCountry).pressSequentially(userData.selectCountry, { delay: 50 });
        const countryDropdownList = await this.page.locator(locatorData.homePage.countryDropDown);
        await countryDropdownList.waitFor();
        const optionsDropDownListCountry = await countryDropdownList.locator('button').count();

        for (let i = 0; i < optionsDropDownListCountry; i++) {
            const countryText = await countryDropdownList.locator('button').nth(i).textContent();
            if (countryText.trim() === userData.selectionData) {
                await countryDropdownList.locator('button').nth(i).click();
                break;
            }

        }
        await this.page.getByRole(locatorData.homePage.countryOption.role, { name: locatorData.homePage.countryOption.name }).click();
        await this.page.locator(locatorData.homePage.clickOnOrderPlaceButton).click();
        const OrderSuccessFuldata = await this.page.locator(locatorData.homePage.OrderSuccessfull).textContent();
        await expect(this.page.locator(locatorData.homePage.OrderSuccessfull)).toHaveText(userData.OrderSuccessful);
        await expect(this.page.locator(locatorData.homePage.thankYouForOrder)).toHaveText(userData.thankYouText);

    }
    async orderPageFun() {
        const orderIDtextData = await this.page.locator(locatorData.homePage.orderID).textContent();
        const orderDataArray = orderIDtextData.split("|");
        const orderDataValue = orderDataArray[1].trim();
        await this.page.locator(locatorData.orderLoc.clickOnOrders).click();
        // const allOrderList=  await this.page.locator(locatorData.orderLoc.orderIDinOrderPage).allTextContents();
        await this.page.locator(locatorData.orderLoc.orderIDinOrderPage).first().waitFor();
        const orderLocator = this.page.locator(locatorData.orderLoc.orderIDinOrderPage);
        const count = await orderLocator.count();
        for (let i = 0; i < count; i++) {
            const OrderID = (await orderLocator.nth(i).textContent())?.trim();

            if (OrderID === orderDataValue) {
                await expect(orderLocator.nth(i)).toHaveText(orderDataValue);
                console.log("Order id " + orderDataValue + "is found in order history page");
                await this.page.locator(locatorData.orderLoc.orderHistoryViewButton).nth(i).click();
                break;
            }
        }
        await this.page.locator(locatorData.orderLoc.orderSummeryID).waitFor();
        const orderSumData = await this.page.locator(locatorData.orderLoc.orderSummeryID).textContent();
        await expect(this.page.locator(locatorData.orderLoc.orderSummeryID)).toHaveText(orderDataValue);

    }
}