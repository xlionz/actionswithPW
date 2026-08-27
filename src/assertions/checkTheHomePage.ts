import { expect, Locator, Page } from "@playwright/test";

export class CheckTheHomePage {

    private readonly lblTitlePage : Locator;

    constructor(private readonly page : Page) {
        this.lblTitlePage = page.getByRole('heading', { name: 'manda user' })
    }

    async checkHomePage(): Promise<void> {
        await expect(this.lblTitlePage).toContainText('manda user');
    }
}