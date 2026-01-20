import { HomePageObjects } from "./HomePageObject";


export class AddtoCardObject {

    constructor(page) {
        this.page = page;
        this.locator = new HomePageObjects(page);
    }


    async clickHome() {
        await this.locator.Home.click();
    }
    async clickItem() {
        await this.locator.shopNow.click();
    }
    async ColorSelect() {
        await this.locator.ColorSelectBlack.click();
    }
    async addCart() {
        await this.locator.addToCart.click();
    }


}