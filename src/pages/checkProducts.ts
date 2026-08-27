import { expect, Locator, Page } from "@playwright/test";
import { validateANumber } from "../utils/validateANumber";
import { createFormat } from "../utils/createFormate";
import { saveProductsToCSV } from "../utils/csvWriter";
import { parseCurrencyAmount } from "../utils/currency";

export class CheckProducts {

    private readonly listProducts : Locator;
    private readonly lblItemName : Locator;
    private readonly lblItemPrice : Locator;
    private readonly btnAddToCart : Locator;

    constructor(page : Page) {
        this.listProducts = page.locator('.inventory_item');
        this.lblItemPrice = page.locator('.inventory_item_price');
        this.btnAddToCart = page.locator('.btn_inventory');
        this.lblItemName = page.locator('.inventory_item_name');
    }

    async checkProducts(): Promise<void> {
        //const productTitles = this.listProducts.locator('.inventory_item_name');
        //const productPrices= this.listProducts.locator('.inventory_item_price');
        //const products = await productTitles.allTextContents();
        //console.log(products.length);zxczx
        await expect(this.listProducts.first()).toBeVisible();
    }

    async selectProductRandom(): Promise<void> {
        const randomIndex = Math.floor(Math.random() * await this.listProducts.count());
        await this.btnAddToCart.nth(randomIndex).click();
    }

    async selectMultipleProductsRandom(): Promise<number> {
        let index = Math.floor(Math.random() * await this.listProducts.count());
        let productNames: string[] = new Array<string>(index);
        let randomProducts = Math.floor(Math.random() * await this.listProducts.count());
        let newRandomProducts = randomProducts;
        let productsSelected: number[] = new Array<number>(index).fill(0);
        const products = [];
        let selectedProductsAmount = 0;

        if(index === 0) index = 1;

        for (let i = 0; i < index ; i++) {
            await this.btnAddToCart.nth(randomProducts).click();
            productNames.push((await this.lblItemName.nth(randomProducts).textContent())!);
            const productPrice = (await this.lblItemPrice.nth(randomProducts).textContent())!;
            products.push(createFormat((await this.lblItemName.nth(randomProducts).textContent())!, productPrice));
            selectedProductsAmount += parseCurrencyAmount(productPrice);
            productsSelected.push(randomProducts);

            do{
                newRandomProducts = Math.floor(Math.random() * await this.listProducts.count());
            }
            while(validateANumber(productsSelected, newRandomProducts) === false);

            randomProducts = newRandomProducts;
        }

        console.log(`Products selected: ${products[0].name}`);

        return selectedProductsAmount;
    }

}
