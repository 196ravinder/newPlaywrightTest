import { test } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { userData } from "../data/userData";



test("Login Test", async({browser})=>{
const context = await browser.newContext(); 
const page = await context.newPage();
const login = new loginPage(browser,page); 
await login.navigateTo(userData.url);
await login.loginTestAcademy();
await context.close();
} );

