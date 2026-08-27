import { expect, Locator, Page } from "@playwright/test";

export class checkMyProfile{
    private readonly lblProfileName : Locator;
    private readonly inputOtherId : Locator;

    constructor(page: Page){
        this.lblProfileName = page.getByRole('heading', { name: 'manda user' });
        this.inputOtherId = page.getByRole('textbox').nth(5);
    }

    async checkMyUserName(): Promise<void>{

    }

    async checkMyOtherId(): Promise<void>{
        await expect(this.inputOtherId).toBeVisible();
        await expect(this.inputOtherId).toHaveValue('4957589');
    }
}