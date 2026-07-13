export const locatorData = {
    loginPage:
    {
        email: "//input[@type='email']",
        password: "#userPassword",
        loginButton: "#login",
        loginSuccessful: "div[aria-label='Login Successfully']",
        blinkingText: ".blinkingText",
    },
    homePage: {
        pageLoadWaitFor: ".d-flex.flex-row.mb-2",
        selectProduct: ".card-body",
        clickOnAddToCartButton: ".btn.w-10.rounded",
        clickOnCartButton: "//button[@routerlink='/dashboard/cart']",
        clickOnCheckoutButton: "//li/button[@class='btn btn-primary']",
        selectCountry: "//input[@placeholder='Select Country']",
        countryDropDown: "//section[@class='ta-results list-group ng-star-inserted']",
        countryOption: { role: 'textbox', name: 'Select Country' },
        clickOnOrderPlaceButton:":text('PLACE ORDER')",
        OrderSuccessfull:"div[aria-label='Order Placed Successfully']",

    },
}