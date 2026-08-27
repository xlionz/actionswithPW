import type { Page } from "@playwright/test";
import { test } from "../../src/fixtures/authOrange";
import { IndexOrangePage } from "../../src/pages/indexOrangePage";
import { checkMyProfile } from "../../src/assertions/checkMyProfile";


async function selectAnOption(page : Page): Promise<void>{
    const indexPage = new IndexOrangePage(page);

    await indexPage.selectAnOptionFromTheBanner();
}

async function checkMyNameFromMyInfo(page : Page): Promise<void>{
    const checkMyName = new checkMyProfile(page);

    await checkMyName.checkMyUserName();
}

async function checkMyOtherIdFromMyInfo(page : Page): Promise<void>{
    const checkMyProfilePage = new checkMyProfile(page);

    await checkMyProfilePage.checkMyOtherId();
}

test.describe('Given he makes a Log In @LoginOrange', () => {
    test('Successful Log In', async ({ pageAuthOrange : page}) => {
        
    })
})

test.describe('View My Profile @ViewMyProfile', () => {

    test('Validate Other Id', async ({ pageAuthOrange : page}) => {
        await selectAnOption(page);
        await checkMyOtherIdFromMyInfo(page);
    })
})
