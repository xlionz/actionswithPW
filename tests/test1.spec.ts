import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegacion en freerangetester.', () => {
        test('links principales para ingresar.', async ({page}) => {
            await test.step('Ingresa a freerangertester home.', async () => {
                await page.goto('https://www.freerangetesters.com');
            });

            await test.step('Cuando hace click en Cursos', async () => {
                await page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true }).click();                await page.waitForURL('**/cursos');
            });

            await test.step('Entonces deberia ver la sección de cursos.', async () => {
                await expect(page).toHaveTitle('Cursos');
                page.close();
            });
        });
    });
})();