# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: suace\check-the-all-products.spec.ts >> Purchase selected products @smokeLogin @smoke @regression @e2e @checknow >> User completes a purchase after validating the shopping cart total
- Location: tests\suace\check-the-all-products.spec.ts:47:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.count: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - generic [ref=e12]: "5"
      - generic [ref=e15]:
        - generic [ref=e16]: Products
        - generic [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: Name (A to Z)
          - combobox [ref=e20]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e24]:
      - generic [ref=e25]:
        - link [ref=e27] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e28]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - link "Sauce Labs Backpack" [ref=e31] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e33]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e34]:
            - generic [ref=e35]: $29.99
            - button "Add to cart" [ref=e36] [cursor=pointer]
      - generic [ref=e37]:
        - link [ref=e39] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e40]
        - generic [ref=e41]:
          - generic [ref=e42]:
            - link "Sauce Labs Bike Light" [ref=e43] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e45]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e46]:
            - generic [ref=e47]: $9.99
            - button "Remove" [ref=e48] [cursor=pointer]
      - generic [ref=e49]:
        - link [ref=e51] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e52]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e55] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e57]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e58]:
            - generic [ref=e59]: $15.99
            - button "Remove" [ref=e60] [cursor=pointer]
      - generic [ref=e61]:
        - link [ref=e63] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - link "Sauce Labs Fleece Jacket" [ref=e67] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e69]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e70]:
            - generic [ref=e71]: $49.99
            - button "Remove" [ref=e72] [cursor=pointer]
      - generic [ref=e73]:
        - link [ref=e75] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]:
            - link "Sauce Labs Onesie" [ref=e79] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e81]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e82]:
            - generic [ref=e83]: $7.99
            - button "Remove" [ref=e84] [cursor=pointer]
      - generic [ref=e85]:
        - link [ref=e87] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e91] [cursor=pointer]:
              - /url: "#"
            - generic [ref=e93]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e94]:
            - generic [ref=e95]: $15.99
            - button "Remove" [ref=e96] [cursor=pointer]
  - contentinfo [ref=e97]:
    - list [ref=e98]:
      - listitem [ref=e99]:
        - link "Twitter" [ref=e100] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e101]:
        - link "Facebook" [ref=e102] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e103]:
        - link "LinkedIn" [ref=e104] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e105]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | import { validateANumber } from "../utils/validateANumber";
  3  | import { createFormat } from "../utils/createFormate";
  4  | import { saveProductsToCSV } from "../utils/csvWriter";
  5  | import { parseCurrencyAmount } from "../utils/currency";
  6  | 
  7  | export class CheckProducts {
  8  | 
  9  |     private readonly listProducts : Locator;
  10 |     private readonly lblItemName : Locator;
  11 |     private readonly lblItemPrice : Locator;
  12 |     private readonly btnAddToCart : Locator;
  13 | 
  14 |     constructor(page : Page) {
  15 |         this.listProducts = page.locator('.inventory_item');
  16 |         this.lblItemPrice = page.locator('.inventory_item_price');
  17 |         this.btnAddToCart = page.locator('.btn_inventory');
  18 |         this.lblItemName = page.locator('.inventory_item_name');
  19 |     }
  20 | 
  21 |     async checkProducts(): Promise<void> {
  22 |         //const productTitles = this.listProducts.locator('.inventory_item_name');
  23 |         //const productPrices= this.listProducts.locator('.inventory_item_price');
  24 |         //const products = await productTitles.allTextContents();
  25 |         //console.log(products.length);zxczx
  26 |         await expect(this.listProducts.first()).toBeVisible();
  27 |     }
  28 | 
  29 |     async selectProductRandom(): Promise<void> {
  30 |         const randomIndex = Math.floor(Math.random() * await this.listProducts.count());
  31 |         await this.btnAddToCart.nth(randomIndex).click();
  32 |     }
  33 | 
  34 |     async selectMultipleProductsRandom(): Promise<number> {
  35 |         let index = Math.floor(Math.random() * await this.listProducts.count());
  36 |         let productNames: string[] = new Array<string>(index);
  37 |         let randomProducts = Math.floor(Math.random() * await this.listProducts.count());
  38 |         let newRandomProducts = randomProducts;
  39 |         let productsSelected: number[] = new Array<number>(index).fill(0);
  40 |         const products = [];
  41 |         let selectedProductsAmount = 0;
  42 | 
  43 |         if(index === 0) index = 1;
  44 | 
  45 |         for (let i = 0; i < index ; i++) {
  46 |             await this.btnAddToCart.nth(randomProducts).click();
  47 |             productNames.push((await this.lblItemName.nth(randomProducts).textContent())!);
  48 |             const productPrice = (await this.lblItemPrice.nth(randomProducts).textContent())!;
  49 |             products.push(createFormat((await this.lblItemName.nth(randomProducts).textContent())!, productPrice));
  50 |             selectedProductsAmount += parseCurrencyAmount(productPrice);
  51 |             productsSelected.push(randomProducts);
  52 | 
  53 |             do{
> 54 |                 newRandomProducts = Math.floor(Math.random() * await this.listProducts.count());
     |                                                                                        ^ Error: locator.count: Test timeout of 30000ms exceeded.
  55 |             }
  56 |             while(validateANumber(productsSelected, newRandomProducts) === false);
  57 | 
  58 |             randomProducts = newRandomProducts;
  59 |         }
  60 | 
  61 |         console.log(`Products selected: ${products[0].name}`);
  62 | 
  63 |         return selectedProductsAmount;
  64 |     }
  65 | 
  66 | }
  67 | 
```