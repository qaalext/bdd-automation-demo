import { Locator, Page } from "playwright";


export class InventoryPage {
    private readonly _page : Page;
    private readonly _headerSecondaryTitle : Locator;
    private readonly _shoppingCartBadge: Locator;
    private readonly _shoppingCartLink : Locator;
    private readonly _itemName : string;
    private readonly _cartAddButton : string;
    private readonly _inventoryItems: string;

    constructor(page: Page) {
        this._page = page;  
        this._headerSecondaryTitle = page.locator(".title");
        this._shoppingCartBadge = page.locator(".shopping_cart_badge");
        this._shoppingCartLink = page.locator(".shopping_cart_link")
        this._inventoryItems = ".inventory_item";
        this._itemName = ".inventory_item_name";
        this._cartAddButton = ".btn_inventory";

    }

    public get headerSecondaryTitle() {
        return this._headerSecondaryTitle;
    }

    public get shoppingCartBadge() {
        return this._shoppingCartBadge;
    }

    private getItemByName(itemName: string): Locator {
        return this._page.locator(this._inventoryItems, { hasText: itemName });
    }

    async clickOnItemName(itemName: string) {
        await this.getItemByName(itemName).waitFor();
        await this.getItemByName(itemName)
        .locator(this._itemName)
        .click();
    }

    async addItemToShoppingCart(itemName : string) {
        await this.getItemByName(itemName).waitFor();
        await this.getItemByName(itemName)
        .locator(this._cartAddButton)
        .click();
    }

    async clickShoppingCartLink() {
        await this._shoppingCartLink.click();
    }

}