import { Locator, Page } from "playwright";



export class InventoryDetails {
    private readonly _page : Page;
    private readonly _itemDescription : Locator;
    private readonly _itemImage : Locator;
    private readonly _addToCart : Locator;
    private readonly _itemPrice: Locator;
    private readonly _itemName: Locator;

    constructor(page : Page) {
        this._page = page;
        this._itemDescription = page.locator("[data-test='inventory-item-desc']");
        this._addToCart = page.locator("#add-to-cart");
        this._itemImage = page.locator(".inventory_details_img");
        this._itemPrice = page.locator(".inventory_details_price");
        this._itemName = page.locator("[data-test='inventory-item-name']");
    }

    public get itemName() {
        return this._itemName;
    }

    public get addToCartButton() {
        return this._addToCart;
    }

    public get itemPrice() {
        return this._itemPrice;
    }

    async getItemDescription() : Promise<string | null> {
        await this._itemDescription.waitFor();
        return await this._itemDescription.textContent();
    }


    async getItemImageSRC() : Promise<string | null>{
        await this._itemImage.waitFor();
        return await this._itemImage.getAttribute("src")
    }

    async clickOnAddToCart() {
        await this._addToCart.waitFor();
        await this._addToCart.click();

    }
}