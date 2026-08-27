import { Locator, Page } from "@playwright/test";
import type { CheckoutInformation } from "../data/checkoutInformation";

export class BuyTheProducts {

    private readonly checkoutButton: Locator;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly postalCodeInput: Locator;
    private readonly continueButton: Locator;
    private readonly finishButton: Locator;
    private readonly orderConfirmation: Locator;

    constructor(page: Page) {
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.orderConfirmation = page.getByRole('heading', { name: 'Thank you for your order!' });
    }

    async startCheckout(): Promise<void> {
        await this.checkoutButton.click();
    }

    async enterCheckoutInformation(checkoutInformation: CheckoutInformation): Promise<void> {
        await this.firstNameInput.fill(checkoutInformation.firstName);
        await this.lastNameInput.fill(checkoutInformation.lastName);
        await this.postalCodeInput.fill(checkoutInformation.postalCode);
    }

    async continueToOrderOverview(): Promise<void> {
        await this.continueButton.click();
    }

    async finishOrder(): Promise<void> {
        await this.finishButton.click();
    }

    getOrderConfirmation(): Locator {
        return this.orderConfirmation;
    }
}
