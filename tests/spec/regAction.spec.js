import test from "@playwright/test";
import { Registation } from "../pageObjects/Registration/regAction";

test.describe("Demo test registation Feature ",()=>{

    test("Successful Sign Up with Valid credidantal user",async ({page})=>{
   const registation = new Registation(page);
   await page.goto("https://demo.evershop.io/");
   await registation.clickOnAccountIcon();
   await registation.clickOnAccountLink();
   await registation.enterfullName("Habib");
   await registation.enterEmail("mahabib@gmail.com");
   await registation.enterPassword("pass12345");
   await registation.ClickOnSingupButton();


    })
    test("UnSuccessful Sign Up with InValid credidantal user",async ()=>{



    })
})