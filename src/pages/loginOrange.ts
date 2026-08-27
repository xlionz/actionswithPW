import { expect, Locator, Page } from "@playwright/test";

export class LoginOrangePage {
    private readonly inputUser : Locator;
    private readonly inputPassword : Locator;
    private readonly buttonLogin : Locator;

    constructor(private readonly page : Page) {
        this.inputUser = page.getByRole('textbox', { name: 'Username' });
        this.inputPassword = page.getByRole('textbox', { name: 'Password' });
        this.buttonLogin = page.getByRole('button', { name: 'Login' });
    }

    async goToPage(): Promise<void> {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async logIn(): Promise<void> {
        await this.inputUser.fill('Admin');
        await this.inputPassword.fill('admin123');
        await this.buttonLogin.click();
    }
}