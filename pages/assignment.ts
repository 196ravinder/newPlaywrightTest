import { locatorData } from "../locators/locators";
import { userData } from "../data/userData"
import { basePage } from "./basePage";
import { Browser, expect,Page } from "@playwright/test";

export class assignment1 extends basePage {
    constructor( page:Page){
        super(page);
    }
    async login() {
        await this.page.getByPlaceholder(locatorData.Assignment1.email).fill(userData.AssignmentEmail);
        await this.page.getByPlaceholder(locatorData.Assignment1.password).fill(userData.AssignmentPass);
        await this.page.getByRole(locatorData.Assignment1.logInBtn).click();
        await expect(this.page.getByText(locatorData.Assignment1.verifyHome)).toBeVisible();
    }
    async addNewEvent() {
        await this.page.getByText(locatorData.Assignment1.clickOnAdmin).click();
        await this.page.getByRole('link', { name: locatorData.Assignment1.manageEvent }).first().click();
        await this.page.getByText(locatorData.Assignment1.Title).fill(userData.AssignTitle);
        await this.page.getByPlaceholder(locatorData.Assignment1.Description).fill(userData.AssignDesc);
        await this.page.getByPlaceholder(locatorData.Assignment1.City).fill(userData.AssignCity);
        await this.page.getByLabel(locatorData.Assignment1.Venue).fill(userData.AssignVenue);
        await this.page.locator(locatorData.Assignment1.EventDate).fill(userData.AssignDate);
        await this.page.getByPlaceholder(locatorData.Assignment1.Price).fill(userData.AssignPrice);
        await this.page.getByPlaceholder(locatorData.Assignment1.TotalSeats).fill(userData.AssignSeat);
        await this.page.getByRole('button', { name: locatorData.Assignment1.SubmitEvents }).click();

    }
    async bookEvent() {
        await this.page.getByTestId(locatorData.Assignment1.SelectEventName).first().waitFor();
       await expect(this.page.getByTestId(locatorData.Assignment1.SelectEventName)).toBeVisible;
        const test = await this.page.locator(locatorData.Assignment1.testTitel).allTextContents();
       // console.log(test);

        for (let i = 0; i < test.length; i++) {
            if (test[i] === 'Test Evet Titel') {

                await this.page.locator(locatorData.Assignment1.testTitel).nth(i).click();
                break;
            }
        }

       // await this.page.getByText(locatorData.Assignment1.increaseSeat).click();
        await this.page.getByPlaceholder(locatorData.Assignment1.BookingName).fill("Test Name 1");
        await this.page.getByPlaceholder(locatorData.Assignment1.bookingEmailID).fill("xyz@gmail.com");
        await this.page.getByLabel(locatorData.Assignment1.phoneNumber).fill("9999900000");
        await this.page.getByRole('button', { name: locatorData.Assignment1.confirmBooking }).click();
        const bookingID= await this.page.locator(locatorData.Assignment1.bookingConfirmed).textContent();
        //console.log(bookingID);
        await expect(this.page.locator(locatorData.Assignment1.bookingConfirmed)).toBeVisible();
        await this.page.getByRole('button',{name:locatorData.Assignment1.viewMyBooking}).click();
        await expect(this.page.locator(locatorData.Assignment1.firstBooking).first()).toBeVisible();
        await expect(this.page.url()).toBe('https://eventhub.rahulshettyacademy.com/bookings');
        await expect(this.page.locator(locatorData.Assignment1.firstBookingID).first()).toHaveText(bookingID);
       for (let i=1;i<=2;i++){
            await this.page.goBack();
        }
        await expect(this.page.getByTestId(locatorData.Assignment1.SelectEventName).first()).toBeVisible();
         for (let i = 0; i < test.length; i++) {
            if (test[i] === 'Test Evet Titel') {
                const tetx= await this.page.locator(locatorData.Assignment1.SelectEventName);
                console.log(tetx.count());
            // const seats=   await this.page.locator(locatorData.Assignment1.testTitel).nth(i).locator(locatorData.Assignment1.availableSeats).allTextContents();
            const seatsText = await this.page.locator("//div[@class='flex items-center justify-between pt-3 border-t border-gray-100']/div/span").nth(i).textContent(); 
           // console.log(seatsText);
                break;
            }
        }

    }
}