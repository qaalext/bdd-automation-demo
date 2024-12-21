import { Given, When, Then } from "@cucumber/cucumber";
import { InventoryDetails } from "../page-objects/InventoryDetails";
import { page } from "../setup/cucumber";
import { expect } from "chai";


Then("The product name should be {string}", async (itemName : string) => {
    let inventoryDetails = new InventoryDetails(page);
    await inventoryDetails.itemName.waitFor();
    const actualItemName = await inventoryDetails.itemName.textContent();
    expect(actualItemName).equals(itemName);

})

Then("The product description should contain {string}", async (description : string) => {
    let inventoryDetails = new InventoryDetails(page);
    const actualDescription = await inventoryDetails.getItemDescription();
    expect(actualDescription).contains(description);

})

Then("The product price should be {string}", async (price : string) => {
    let inventoryDetails = new InventoryDetails(page);
    const actualPrice = await inventoryDetails.itemPrice.textContent();
    expect(actualPrice).contains(price);

})

Then("The product image should be displayed and have the correct src", async () => {
    let inventoryDetails = new InventoryDetails(page);
    const actualSRC = await inventoryDetails.getItemImageSRC();    
    expect(actualSRC).contains("/static/media/sauce-backpack");
})

Then("The add to cart button should be displayed", async () => {
    let inventoryDetails = new InventoryDetails(page);
    await inventoryDetails.addToCartButton.waitFor();
    expect(await inventoryDetails.addToCartButton.isVisible()).equals(true);        
})