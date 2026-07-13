import { Page } from "@playwright/test";

export class basePage{
    page:any

    constructor (page:any){
        this.page=page;
    }
    async navigateTo(url:any){
        await this.page.goto(url);
        //await this.page.waitForLoadState('networkidle');
        //await this.page.locator("#burgundy").waitFor();
    }
   
}