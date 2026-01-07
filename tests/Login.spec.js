import { test, expect } from '@playwright/test';
import { clear } from 'console';



test('Login test fail', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  
  await expect(page).toHaveURL(/web/);

//   Negetive test to log in......
  await page.getByPlaceholder("Username").type("Adn")
  await page.locator("//input[@placeholder='Password']").type("admin123")
  await page.locator('button:has-text("Login")').click()

  await page.waitForTimeout(5000)

 const errorMessageLocator = page.locator(':text-is("Invalid credentials")');
    await expect(errorMessageLocator).toBeVisible();

  await usernameField.clear();
    await passwordField.clear();
  await page.getByPlaceholder("Username").type("Admin")
  await page.locator("//input[@placeholder='Password']").type("admin123")

  await page.locator('button:has-text("Login")').click()


})

//   positive test to log in............

test('Login test new ', async ({ page }) => {

      await usernameField.clear();
    await passwordField.clear();
  await page.getByPlaceholder("Username").type("Admin")
  await page.locator("//input[@placeholder='Password']").type("admin123")

  await page.locator('button:has-text("Login")').click()

   await page.waitForTimeout(5000)

  



});