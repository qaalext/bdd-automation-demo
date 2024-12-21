import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from "../page-objects/LoginPage";
import { InventoryPage } from "../page-objects/InventoryPage";
import { page } from "../setup/cucumber";
import { InventoryDetails } from "../page-objects/InventoryDetails";
import { expect } from "chai";



Given("I am logged in and on the inventory page", async() => {
    let loginPage = new LoginPage(page);
    await loginPage.goToLoginPage();
    await loginPage.enterEmail(process.env.STANDARD_USERNAME!);
    await loginPage.enterPassword(process.env.STANDARD_PASSWORD!!);
    await loginPage.clickLoginButton();
})

When("I select the product {string}", async(itemName: string) => {
    let inventoryPage = new InventoryPage(page);
    await inventoryPage.clickOnItemName(itemName);
})

When("i add the product {string} to the shopping cart", async(itemName : string) => {
    let inventoryPage = new InventoryPage(page);
    await inventoryPage.addItemToShoppingCart(itemName);
})

Then("I should be redirected to the product details page", async() => {
    let inventoryDetails = new InventoryDetails(page);
    await inventoryDetails.getItemDescription()
    const currentPageUrl =  page.url();
    expect(currentPageUrl).contains("inventory-item.html")
})

Then("The shopping cart should display a badge indicating that an item was added", async() => {
    let inventoryPage = new InventoryPage(page);
    await inventoryPage.shoppingCartBadge.waitFor();
    expect(await inventoryPage.shoppingCartBadge.isVisible()).equals(true);
})