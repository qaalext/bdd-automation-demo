import { Locator, Page } from "playwright";

export class ShoppingCartPage{

    private readonly _page : Page;
    private readonly _checkoutButton : Locator
    private readonly _itemList : string;
    private readonly _itemPrice : string;
    private readonly _removeButton : string;
    private readonly _itemName : string;

    constructor(page : Page) {
        this._page = page;
        this._checkoutButton = page.locator(".checkout_button");
        this._itemList = ".cart_item";
        this._itemPrice = ".inventory_item_price";
        this._removeButton = ".cart_button";
        this._itemName = ".inventory_item_name";
            
    }

    public get removeButton () {
        return this._removeButton;
    }

    public get checkoutButton () {
        return this._checkoutButton;
    }

    getItemByName(name: string){
        return this._page.locator(this._itemList, { hasText: name});
    }

    async getItemName(name: string) : Promise<string | null>{
        await this.getItemByName(name).waitFor();
        return await this.getItemByName(name)
        .locator(this._itemName)
        .textContent();
    }

    async getItemPrice(name: string) : Promise<string | null>{
        await this.getItemByName(name).waitFor();
        return await this.getItemByName(name)
        .locator(this._itemPrice)
        .textContent();
    }

}