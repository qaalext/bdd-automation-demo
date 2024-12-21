import { Then } from "@cucumber/cucumber";
import { InventoryPage } from "../page-objects/InventoryPage";
import { page } from "../setup/cucumber";
import { ShoppingCartPage } from "../page-objects/ShoppingCartPage";
import { expect } from "chai";



Then("The product name from the shopping cart should be {string}", async(productName : string) => {
    let inventoryPage = new InventoryPage(page);
    let shoppingCartPage = new ShoppingCartPage(page);
    await inventoryPage.clickShoppingCartLink();
    expect(await shoppingCartPage.getItemName(productName)).equals(productName);
    
})


Then("The product price of the product {string} should be {string}", async(productName: string, price : string) => {
    let inventoryPage = new InventoryPage(page);
    let shoppingCartPage = new ShoppingCartPage(page);
    await inventoryPage.clickShoppingCartLink();
    expect(await shoppingCartPage.getItemPrice(productName)).equals(price);
    
})


Then("The checkout button is displayed for the item in the shopping cart", async() => {
    let inventoryPage = new InventoryPage(page);
    let shoppingCartPage = new ShoppingCartPage(page);
    await inventoryPage.clickShoppingCartLink();
    expect(await shoppingCartPage.checkoutButton.isVisible()).equals(true);
    
})
