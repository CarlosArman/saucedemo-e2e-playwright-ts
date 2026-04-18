import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { getLogger } from '../utils/logger';

const logger = getLogger('CheckoutOverviewPage');

export class CheckoutOverviewPage extends BasePage {
    private readonly title: Locator;
    private readonly finishButton: Locator;
    private readonly cancelButton: Locator;
    private readonly subtotalLabel: Locator;
    private readonly taxLabel: Locator;
    private readonly totalLabel: Locator;

    constructor(page: Page) {
        super(page);

        this.title = page.getByText('Checkout: Overview');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.subtotalLabel = page.locator('.summary_subtotal_label');
        this.taxLabel = page.locator('.summary_tax_label');
        this.totalLabel = page.locator('.summary_total_label');
    }

    async verifyPage() {
        logger.info('Verificando página Checkout: Overview');

        await expect(this.title).toBeVisible();
        await expect(this.finishButton).toBeVisible();
        await expect(this.cancelButton).toBeVisible();
        await expect(this.subtotalLabel).toBeVisible();
        await expect(this.taxLabel).toBeVisible();
        await expect(this.totalLabel).toBeVisible();
    }

    async clickFinish() {
        logger.info('Haciendo click en Finish');
        await this.finishButton.click();
    }

    async clickCancel() {
        logger.info('Haciendo click en Cancel');
        await this.cancelButton.click();
    }

    async verifyTotalAmount(expectedTotal: string) {
        logger.info(`Verificando total: ${expectedTotal}`);
        await expect(this.totalLabel).toHaveText(expectedTotal);
    }
}