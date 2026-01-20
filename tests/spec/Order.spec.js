import { test } from "@playwright/test";
import { AddtoCardObject } from "../pageObjects/HomePage/HomePageAction";


test.describe("-----Add TO Card Test----- ", () => {

    test("Successful Add To Card ", async ({ page }) => {

        const addCart = new AddtoCardObject(page);

        await page.goto("https://demo.evershop.io/");

        await addCart.clickItem();
        await addCart.ColorSelect();
        await addCart.addCart();




    })

})