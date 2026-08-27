import { expect, Locator, Page } from "@playwright/test";
import { users } from "../data/users";

export class LoginSaucePage {

    private readonly inputUser : Locator;
    private readonly inputPassword : Locator;
    private readonly buttonLogin : Locator;

    constructor(private readonly page : Page) {
        this.inputUser = page.locator('#user-name');
        this.inputPassword = page.locator('#password');
        this.buttonLogin = page.locator('#login-button');
    };

    async gotoPage(): Promise<void> {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async closePage(): Promise<void> {
        await this.page.close();
    }

    async login(): Promise<void> {
        const userType = process.env.USER_TYPE;
        const user = users[userType as keyof typeof users];

        await this.inputUser.fill("standard_user");
        await this.inputPassword.fill("secret_sauce");

        //await this.inputUser.fill(user.username);
        //await this.inputPassword.fill(user.password);
        await this.buttonLogin.click();
    }
}