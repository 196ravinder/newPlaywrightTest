import { test } from "@playwright/test";
import { loginPage } from "../pages/loginPage";
import { userData } from "../data/userData";
import { orderPage } from "../pages/ordersPage";
import { commonFunctions } from "../utils/commonFunctions";

test.only("Order Verification", async ({ browser }) => {
  const context = await browser.newContext({
    storageState: "auth.json",
  });

  const page = await context.newPage();
  const orderPageData = new orderPage(browser, page);
  const login = new loginPage(browser, page);
  const common = new commonFunctions(browser, page);
  await login.navigateTo(userData.url);
  await common.clickOnOrders();
  await orderPageData.orderPageVerification();
  await context.close();
});
