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
        clickOnOrderPlaceButton: ":text('PLACE ORDER')",
        OrderSuccessfull: "div[aria-label='Order Placed Successfully']",
        thankYouForOrder: ".hero-primary",
        orderID: ".em-spacer-1 .ng-star-inserted",
    },
    orderLoc: {
        clickOnOrders:".fa.fa-handshake-o",
        orderIDinOrderPage:"//tbody/tr[@class='ng-star-inserted']/th",
        orderHistoryViewButton:".btn.btn-primary",
        orderSummeryID:".col-text.-main",


    },
    Assignment1:{
        email:"you@email.com",
        password:"••••••",
        logInBtn:"button",
        verifyHome:"View all →",
        clickOnAdmin:"Admin",
        manageEvent:"Manage Events",
        Title:"Title",
        Description:"Describe the event…",
        City:"e.g. Bangalore",
        Venue:"Venue",
        EventDate:"input[id='event-date-&-time']",
        Price:"0.00",
        TotalSeats:"e.g. 500",
        SubmitEvents:"+ Add Event",
        SelectEventName:"event-card",
        selectEventName2:"Test Evet Titel",
        testTitel:"//article[@id='event-card']/div/a",
        booknow:"book-now-btn",
        BookingName:"Your full name",
        bookingEmailID:"you@email.com",
        phoneNumber:"Phone Number",
        increaseSeat:"+",
        confirmBooking:"Confirm Booking",
        bookingConfirmed:" .booking-ref",
        viewMyBooking:"View My Bookings",
        firstBooking:"#booking-card",
        firstBookingID:".booking-ref",
        availableSeats:"//article/div/div/div/span",


    }
}