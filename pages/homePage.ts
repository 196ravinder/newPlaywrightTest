import { expect } from "@playwright/test";
import { locatorData } from "../locators/locators";
import { userData } from "../data/userData";
import { basePage } from "./basePage";

export class homePage extends basePage{

    constructor(page: any){
        super(page)
    }
    async addToCart(){
        await this.page.locator(locatorData.homePage.pageLoadWaitFor).waitFor();
        const products=  await this.page.locator(locatorData.homePage.selectProduct);
        const productCount = await products.count();
       // await this.page.locator(locatorData.homePage.selectProduct)
       for(let i=0; i<productCount; i++){
       if( await products.nth(i).locator("b").textContent()===userData.productName)
       {
       await products.nth(i).locator(locatorData.homePage.clickOnAddToCartButton).click();
       break;
       }
       }
       await this.page.locator(locatorData.homePage.clickOnCartButton).click();
       await this.page.locator(locatorData.homePage.clickOnCheckoutButton).click();
       await this.page.locator(locatorData.homePage.selectCountry).pressSequentially(userData.selectCountry,{delay:50});
       const countryDropdownList= await this.page.locator(locatorData.homePage.countryDropDown);
      await countryDropdownList.waitFor();
      const optionsDropDownListCountry= await countryDropdownList.locator('button').count();

       for(let i=0; i<optionsDropDownListCountry; i++){
        const countryText= await countryDropdownList.locator('button').nth(i).textContent();
        if(countryText=== userData.selectionData){
            await countryDropdownList.locator('button').nth(i).click();
            break;
        }

       }
       //await this.page.getByRole(locatorData.homePage.clickOnPlaceOrder).click();
       await this.page.getByRole(locatorData.homePage.clickOnPlaceOrder.role,{ name: locatorData.homePage.clickOnPlaceOrder.name }).click();

    }
}