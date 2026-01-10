export class RegistrationObjects{


constructor(page) {
    this.page = page;

  this.accounticon = this.page.locator("//a[@href='https://demo.evershop.io/account/login']");
  this.createaccount = this.page.locator('a:has-text("Create an account")');
  this.fullname = this.page.locator("//input[@id='field-full_name']");
  this.email = this.page.locator("//input[@id='field-email']");
  this.password = this.page.locator("//input[@id='field-password']");
  this.submit = this.page.getByText('Sign Up');
  this.logInEmail = this.page.locator("//input[@id='field-email']");
  this.logInPasswoard = this.page.locator("//input[@id='field-password']");
  this.logInButton = this.page.locator("button[type='button'] span");
}


}