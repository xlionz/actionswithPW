import { expect } from '@playwright/test';
import { BuyTheProducts } from '../pages/buyTheProducts';

export class CheckPurchase {
    constructor(private readonly buyTheProducts: BuyTheProducts) {}

    async checkOrderConfirmation(): Promise<void> {
        await expect(this.buyTheProducts.getOrderConfirmation()).toBeVisible();
    }
}
