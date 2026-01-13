import { test } from "@playwright/test";
import { LogInInFormation } from "../pageObjects/Registration/LogInAction";


test.describe("-----Login Test----- ",()=>{

    test("Successful Login with valid Credential user", async ({ page }) => {

    const Login = new LogInInFormation(page);

   await page.goto("https://demo.evershop.io/");
   await Login.enter_Email("mahabib11@gmail.com");
   await Login.enter_Password("pass12345");
   await Login.ClickOnSingIn_Button();
   


    })
    
})