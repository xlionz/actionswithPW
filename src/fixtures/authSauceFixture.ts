import { test as base, Page } from "@playwright/test";
import { LoginSaucePage } from "../pages/loginSaucePage";

type MyFixtures = {
    pageAuthSauce: Page;
}

export const test = base.extend<MyFixtures>({
    pageAuthSauce: async ({ page }, use) => {
        const loginSaucePage = new LoginSaucePage(page);

        await test.step('Given that he logins into suaces web page', async () => {
            await loginSaucePage.gotoPage();
            await loginSaucePage.login();
        });

        await use(page);
    }

});