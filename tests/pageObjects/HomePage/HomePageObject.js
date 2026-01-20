export class HomePageObjects {

    constructor(page) {
        this.page = page;
        this.Home = this.page.locator("//a[@href='https://demo.evershop.io/']");
        this.shopNow = this.page.locator("//*[name()='path' and contains(@d,'M32.388 18')]");
        this.ColorSelectBlack = this.page.locator("//a[normalize-space()='Black']");

        this.addToCart = this.page.locator("//button[@class='button primary outline w-full py-3 text-lg font-base !rounded-full mt-8']")



    }

}