import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { getLogger } from '../utils/logger';

const logger = getLogger('CheckoutCompletePage');

export class CheckoutCompletePage extends BasePage {
    readonly title: Locator;
    readonly successMessage: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        super(page);

        this.title = page.getByText('Checkout: Complete!');
        this.successMessage = page.getByTestId('complete-header');
        this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
    }

    async verifyPage() {
        logger.info('Verificando página Checkout: Complete');

        await expect(this.title).toBeVisible();
        await expect(this.successMessage).toBeVisible();
        await expect(this.backHomeButton).toBeVisible();
    }

    async clickBackHome() {
        logger.info('Haciendo click en Back Home');
        await this.backHomeButton.click();
    }

    async verifySuccessMessage(expectedMessage: string) {
        logger.info(`Verificando mensaje de éxito: ${expectedMessage}`);
        await expect(this.successMessage).toHaveText(expectedMessage);
    }
}