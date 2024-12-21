import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../setup/cucumber";
import { LoginPage } from "../page-objects/LoginPage";
import { expect } from "chai";
import { InventoryPage } from "../page-objects/InventoryPage";



// positive
Given(`I am on the login page`, async() => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
})


When("I login with {string} and {string}", async(usernameKey: string, passwordKey: string) => {
    let loginPage = new LoginPage(page);
    const username = process.env[usernameKey];
    const password = process.env[passwordKey];
    await loginPage.enterEmail(username!);
    await loginPage.enterPassword(password!);
    await loginPage.clickLoginButton();

})

Then("I should see the inventory page", async() => {
    let inventoryPage = new InventoryPage(page);
    await inventoryPage.headerSecondaryTitle.waitFor();
    expect(await inventoryPage.headerSecondaryTitle.textContent()).equals("Products");
})


Then("I should receive an error message",  async() => {
    let loginPage = new LoginPage(page);
    await loginPage.errorMessage.waitFor();
    expect(await loginPage.errorMessage.textContent())
    .contains("Epic sadface: Username and password do not match any user in this service");
})

