import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";
import { getLogger } from '../utils/logger';

const logger = getLogger('LoginPage');

export class LoginPage extends BasePage {
    private readonly usernameTextBox: Locator;
    private readonly passwordTextBox: Locator;
    private readonly loginButton: Locator;
    private readonly errorMessage: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameTextBox = page.getByRole('textbox', { name: 'Username' });
        this.passwordTextBox = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('div.error h3');
    }

    async navigate(baseUrl:string){
        await this.page.goto(baseUrl);
    }

    async fillUsername(username: string) {
        await this.usernameTextBox.fill(username);
    }

    async fillPassword(password: string) {
        await this.passwordTextBox.fill(password);
    }

    async clickOnLogin() {
        await this.loginButton.click();
    }

    async fillCredentials(username: string, password: string) {
        await this.fillUsername(username);
        await this.fillPassword(password);
    }

    async loginWithCredentials(username: string, password: string) {
        this.fillCredentials(username,password);
        this.clickOnLogin();

    }

    async verifyPage() {
        logger.info('Verificando la pagina de Login');
        await expect.soft(this.usernameTextBox).toBeVisible();
        await expect.soft(this.passwordTextBox).toBeVisible();
        await expect.soft(this.loginButton).toBeVisible();
    }

    async verifyErrorMessage(message: string) {
        await expect(this.errorMessage).toHaveText(message);
    }

}

