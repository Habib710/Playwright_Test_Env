import { LogInObject } from "./LogInObject";


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