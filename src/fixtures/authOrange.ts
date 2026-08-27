import { test as base, Page } from "@playwright/test";
import { LoginOrangePage } from "../pages/loginOrange";

type MyFixtures = {
    pageAuthOrange: Page;
}

export const test = base.extend<MyFixtures>({
    pageAuthOrange: async ({ page }, use) => {
        const loginOrangePage = new LoginOrangePage(page);
        
        await test.step('Given that he logins into orangehrm web page', async () => {
            await loginOrangePage.goToPage();
            await loginOrangePage.logIn();
        });
        await use(page);
    }
});