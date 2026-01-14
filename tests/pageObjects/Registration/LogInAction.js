import { LogInObject } from "./LogInObject";


export class LogInInFormation {

constructor(page) {
    this.page = page;
    this.locator = new LogInObject(page);
  }


async clickOnAccountIcon(){
    await this.locator.accounticon.click();
}
async enter_Email(email){

await this.locator.logInEmail.fill(email);
await this.locator.logInEmail.fill(email);

}
async enter_Password(password){
    await this.locator.logInPasswoard.fill(password);
}
async ClickOnSingIn_Button(){
    await this.locator.logInButton.click();
}


}