import { test } from "../../src/fixtures/authSauceFixture";
import type { Page } from "@playwright/test";
import { CheckShoppingCart } from "../../src/assertions/checkShoppingCart";
import { CheckPurchase } from "../../src/assertions/checkPurchase";
import { checkoutInformation } from "../../src/data/checkoutInformation";
import { BuyTheProducts } from "../../src/pages/buyTheProducts";
import { CheckProducts } from "../../src/pages/checkProducts";
import { ShoppingCartPage } from "../../src/pages/shoppingCartPage";

async function checkProducts(page: Page): Promise<void> {
    const checkProducts = new CheckProducts(page);
    const shoppingCartPage = new ShoppingCartPage(page);
    const checkShoppingCart = new CheckShoppingCart(shoppingCartPage);
    const buyTheProducts = new BuyTheProducts(page);
    const checkPurchase = new CheckPurchase(buyTheProducts);
    let expectedProductsAmount = 0;

    await test.step('When he should see all the products', async () => {
       //await checkProducts.checkProducts();
       //await checkProducts.selectProductRandom();
    });

    await test.step('When he should select multiple products', async () => {
        expectedProductsAmount = await checkProducts.selectMultipleProductsRandom();
    });

    await test.step('Then the shopping cart amount should match the selected products', async () => {
        await shoppingCartPage.goToCart();

        await checkShoppingCart.checkItemsAmount(expectedProductsAmount);
    });

    await test.step('When the user completes checkout for the selected products', async () => {
        await buyTheProducts.startCheckout();
        await buyTheProducts.enterCheckoutInformation(checkoutInformation);
        await buyTheProducts.continueToOrderOverview();
        await buyTheProducts.finishOrder();
    });

    await test.step('Then the purchase should be completed successfully', async () => {
        await checkPurchase.checkOrderConfirmation();
    });

}

test.describe('Purchase selected products @smokeLogin @smoke @regression @e2e @checknow', () => {
    test('User completes a purchase after validating the shopping cart total', async ({ pageAuthSauce : page}) => {
        await checkProducts(page);
    });
});
