import { Page, Locator, expect } from '@playwright/test';
import { getLogger } from '../utils/logger';
import { BasePage } from './base.page';

const logger = getLogger('TopBar');

export class TopBar extends BasePage {
    private readonly  itemCounter: Locator;
    private readonly  burgerMenuButton: Locator;
    private readonly  checkoutButton: Locator;

    constructor(page: Page) {
        super(page);

        this.itemCounter = page.getByTestId('shopping-cart-badge');
        this.burgerMenuButton = page.getByRole('button', { name: 'Open Menu' });
        this.checkoutButton = page.getByTestId('shopping-cart-link');
    }

    async verifyPage() {
        logger.info('Verificando top bar');
        await expect(this.itemCounter).toBeVisible();
        await expect(this.burgerMenuButton).toBeVisible();
        await expect(this.checkoutButton).toBeVisible();
    }

    async verifyItemCount(expectedCount: number) {
        logger.info('Verificando la cantidad de items');
        await expect(this.itemCounter).toHaveText(String(expectedCount));
    }

    async clickBurgerMenuButton() {
        logger.info('Haciendo click en el burger menu button');
        await this.burgerMenuButton.click();
    }

    async clickCheckoutButton() {
        logger.info('Haciendo click en el botón checkout');
        await this.checkoutButton.click();
    }
}