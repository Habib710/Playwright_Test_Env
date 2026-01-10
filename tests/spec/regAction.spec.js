import { test } from "@playwright/test";
import { Registration } from "../pageObjects/Registration/regAction"
;



test.describe("Demo test registation Feature ",()=>{

    test("Successful Sign Up with Valid credidantal user", async ({ page }) => {

    const registration = new Registration(page);

   await page.goto("https://demo.evershop.io/");
   await registration.clickOnAccountIcon();
   await registration.clickOnAccountLink();
   await registration.enterfullName("Habib");
   await registration.enterEmail("mahabib@gmail.com");
   await registration.enterPassword("pass12345");
   await registration.ClickOnSingupButton();


    })
    
})