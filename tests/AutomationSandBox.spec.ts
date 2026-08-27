import { test, Browser, Page, expect } from '@playwright/test';

(async () => {

    let browser: Browser;
    let page: Page;

    test.describe('Tring to leanr playwright by mysfel.', () => {
        test('E2E about page freeranger', async ({page}) => {
           //test.info().annotations.push({              we can use annotations to add extra information to our tests, like tags, descriptions, etc. this can be useful for filtering and organizing our tests. also we can use it to add custom metadata to our tests, which can be useful for reporting and debugging.
           //        type: 'pruebafill', 
           //        description: 'This is a test annotation for the fill action.' 
           //    });
            await test.step('Open the web.', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            });

            await test.step('Click on the button to generate ', async () => {
                await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();
            });

           // await test.step('Should see the element is genere after three seconds.', async () => {
           //     await expect(page.getByText('OMG, aparezco después de 3').);
           //     page.close();
           // });

            await test.step('Fills the input whit any info. @pruebafill', async () => {
                await test.step('Fills the input whit any info.', async () => {
                await page.getByRole('textbox', { name: 'Un aburrido texto' }).fill('Learning Playwright by myself'); // u can use function type() to simulate typing
                    //also u can use press() to simulate key press
                });
            });

            await test.step('Click on the checkbox.', async () => {
                //await page.getByRole('checkbox', { name: 'Pizza 🍕' }).check(); //this also applies to radiobutton's
                const sandBoxPage = new SandBoxPage(page);
                await sandBoxPage.checkPizza();
            });

           await test.step('If he want to uncheck the checkbox.', async () => {
                await page.getByRole('checkbox', { name: 'Pizza 🍕' }).uncheck();
            });

            await test.step('Verify if the check is checked.', async () => {
                await expect(page.getByLabel('Pizza 🍕'), 'the checkbox is already checked').not.toBeChecked(); //also we can use only toBeCheck(), without 'not'. also you can use expect.soft 
           })

           await test.step('Verify the elements of the dropdown.', async () => {
            const options = ['Fútbol', 'Basketball', 'Tennis'];
            for (const option of options) {
                const element = await page.$(`//option[text() = "${option}"]`);
                if (element) {
                    console.log(`The option "${option}" is present in the dropdown.`);
                }
                else {
                    throw new Error(`The option "${option}" is NOT present in the dropdown.`);
                }
            }
           });

           await test.step('Select an option from the dropdown.', async () => {
            await page.getByLabel('Dropdown').scrollIntoViewIfNeeded();
            await page.getByLabel('Dropdown').selectOption('Basketball');
           });

           await test.step('Select an option from the fake dropdown.', async () => {
            await page.getByLabel('Dropdown').scrollIntoViewIfNeeded();
            await page.getByRole('button', { name: 'Día de la semana' }).click();
            await page.getByRole('link', { name: 'Jueves' }).click();
           });

           await test.step('Verify de elements in the static table.', async () => {
            const columnValue = await page.locator("//h2[text() = 'Tabla estática']//parent::div//tbody/tr/td[2]").allTextContents();
            const expectedNames = ['Messi', 'Ronaldo', 'Mbappe'];

            await expect(columnValue, 'The values in the second column of the static table are not the expected ones').toEqual(expectedNames);
           });

           await test.step('Verify de elements in the dynamic table.', async () => {
            const columnValue = await page.locator("//h2[text() = 'Tabla dinámica']//parent::div//tbody/tr/td").allTextContents();
            console.log(columnValue);

            await page.reload();

            const columnValueAfterReload = await page.locator("//h2[text() = 'Tabla dinámica']//parent::div//tbody/tr/td").allTextContents();
            console.log(columnValueAfterReload);

            await expect(columnValue).not.toEqual(columnValueAfterReload);
           });

            await test.step('Close the page.', async () => {
                 await page.close();
            });
        })
    });

})();