import { expect } from "@playwright/test";
import { ShoppingCartPage } from "../pages/shoppingCartPage";

export class CheckShoppingCart {

    constructor(private readonly shoppingCartPage: ShoppingCartPage) {}

    async checkItemsAmount(expectedAmount: number): Promise<void> {
        await expect(await this.shoppingCartPage.calculateItemsAmount()).toBeCloseTo(expectedAmount, 2);
    }
}
