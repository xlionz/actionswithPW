import { Locator, Page } from "@playwright/test";
import { parseCurrencyAmount } from "../utils/currency";

export class ShoppingCartPage {

    private readonly shoppingCartLink: Locator;
    private readonly itemPrices: Locator;

    constructor(page: Page) {
        this.shoppingCartLink = page.locator('.shopping_cart_link');
        this.itemPrices = page.locator('.cart_item .inventory_item_price');
    }

    async goToCart(): Promise<void> {
        await this.shoppingCartLink.click();
    }

    async calculateItemsAmount(): Promise<number> {
        const prices = await this.itemPrices.allTextContents();

        return prices.reduce((total, price) => total + parseCurrencyAmount(price), 0);
    }
}
