import { test } from "@playwright/test";
import { loginPage1 } from "../pages/loginPage";
import { userData } from "../data/userData";
import { homePage } from "../pages/homePage";


test.only("Product Add to Cart", async({page,context})=>{

const homePage1=new homePage(page);
const login = new loginPage1(page); 
await login.navigateTo(userData.url);
await login.loginTestAcademy();
await homePage1.addToCart();

})
