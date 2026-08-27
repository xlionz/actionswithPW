import { test, Browser, Page, expect } from '@playwright/test';

test("Mocking API responses", async ({ page }) => {

    //first we'll set up a route to intercept the API request and mock the response. then we'll navigate to the page and verify that the mocked response is displayed correctly.
    await page.route('*/**/fruits', async route => {
        const json = [{name : 'Melocoton', id : 27}];
        await route.fulfill({ json });
    });

    await page.goto('https://demo.playwright.dev/api-mocking/');

    await expect(page.getByText('Melocoton')).toBeVisible();
});

test('Add fruit in the list', async ({ page }) => {

    await page.route('*/**/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({name : 'pessi', id : 27});
        await route.fulfill({ response, json });
    });

     await page.goto('https://demo.playwright.dev/api-mocking/');

    await expect(page.getByText('pessi')).toBeVisible();
});

    