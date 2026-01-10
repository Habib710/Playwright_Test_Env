import { RegistrationObjects ,LogInObject} from "./regObject";

export class Registration {
  constructor(page) {
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
export class LogInInFormation {

 constructor(page) {
    this.page = page;
    this.locator = new LogInObject(page);
  }

async enter_Email(email){

await this.locator.email.fill(email);

}
async enter_Password(password){
    await this.locator.password.fill(password);
}
async ClickOnSingIn_Button(){
    await this.locator.submit.click();
}


}