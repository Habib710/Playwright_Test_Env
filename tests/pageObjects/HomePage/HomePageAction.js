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


}