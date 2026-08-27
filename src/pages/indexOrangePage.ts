import { expect, Locator, Page } from "@playwright/test";
import { OPTION_BANNER_MY_INFO } from "../utils/constants";

export class IndexOrangePage{

    constructor(private page : Page){
    }

    private getOptionBanner(name : string): Locator{
        return this.page.getByRole('link', { name: `${name}` })
    }

    async selectAnOptionFromTheBanner(): Promise<void>{

        await this.getOptionBanner(OPTION_BANNER_MY_INFO).click();
    }
}