import { RegistrationObjects } from "./regObject";

export class Registation{

constructor(page){
this.page = page;

this.locator = new RegistrationObjects(page);
}

async clickOnAccountIcon(){
    await this.locator.accounticon.click();
}

async clickOnAccountLink(){
    await this.locator.createaccount.click();
}

async enterfullName(fullName){
    await this.locator.fullname.fill(fullName);
}
async enterEmail(email){
    await this.locator.email.fill(email);
}
async enterPassword(password){
    await this.locator.password.fill(password);
}
async ClickOnSingupButton(){
    await this.locator.submit.click();
}

}