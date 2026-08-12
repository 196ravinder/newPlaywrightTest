import { Browser, BrowserContext, expect,Page } from "@playwright/test";
import {userData} from "../data/userData";
import { locatorData } from "../locators/locators";
import { basePage } from "./basePage";


export class loginPage extends basePage{
     newWebContext!: BrowserContext;
  newPage!: Page;
constructor(browser:Browser,page:Page){
    super(browser,page);
}

async loginTestAcademy(){
await this.page.locator(locatorData.loginPage.email).fill(userData.email);
await this.page.locator(locatorData.loginPage.password).fill(userData.password);
//await this.page.pause();
await this.page.locator(locatorData.loginPage.loginButton).click();

//const text=await this.page.locator(locatorData.loginPage.loginSuccessful).textContent();
await expect(this.page.locator(locatorData.loginPage.loginSuccessful)).toHaveText(userData.loginSuccessFullMsg);
//await this.page.pause();
await expect(this.page.locator(locatorData.loginPage.blinkingText)).toHaveClass(/blink/);
await this.context.storageState({path:'auth.json'});
 this.newWebContext=await this.browser.newContext({storageState:'auth.json'});
 this.newPage = await this.newWebContext.newPage();
}
}