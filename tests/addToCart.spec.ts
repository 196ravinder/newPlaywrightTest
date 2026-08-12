import { test } from "@playwright/test";
import { addToCart } from "../pages/addToCart";
import { userData } from "../data/userData";
import { loginPage } from "../pages/loginPage";

test("Product Add to Cart", async ({ browser }) => {
  const context = await browser.newContext({
    storageState: "auth.json",
  });

  const page = await context.newPage();
  const homePage1 = new addToCart(browser, page);
  const login = new loginPage(browser,page); 
  await login.navigateTo(userData.url);
  await homePage1.addToCart();
  await homePage1.orderPageFun();
  await context.close();
});
