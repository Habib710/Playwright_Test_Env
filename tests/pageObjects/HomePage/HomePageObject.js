export class HomePageObjects {

    constructor(page) {
        this.page = page;
        this.accounticon = this.page.locator("//a[@href='https://demo.evershop.io/']");
        this.shopNow = this.page.locator("//*[name()='path' and contains(@d,'M32.388 18')]");
        this.shopNow = this.page.locator("//*[name()='path' and contains(@d,'M32.388 18')]");


    }

}