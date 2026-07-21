import { test } from "@playwright/test";
import { loginPage1 } from "../pages/loginPage";
import { userData } from "../data/userData";
import { homePage } from "../pages/homePage";


test.skip("Login Test", async({page})=>{

const login = new loginPage1(page); 
await login.navigateTo(userData.url);
await login.loginTestAcademy();

} );

