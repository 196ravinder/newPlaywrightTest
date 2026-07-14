import { locatorData } from "../locators/locators";
import { basePage } from "./basePage";

export class orderPage extends basePage {
    constructor(page: any) {
        super(page);
    }
    async orderPage() {
        const orderIDtextData = await this.page.locator(locatorData.homePage.orderID).textContent();
        const orderDataArray= orderIDtextData.split("|")
        console.log(orderDataArray);

    }
}