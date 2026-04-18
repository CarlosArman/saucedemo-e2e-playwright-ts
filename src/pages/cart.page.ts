import { expect, Locator, Page } from "@playwright/test";
import { getLogger } from "../utils/logger";
import { BasePage } from "./base.page";

const logger = getLogger("YourCartPage");

export class YourCartPage extends BasePage {

    private readonly checkoutButton: Locator;
    private readonly continueShoppingButton: Locator;
    private readonly title: Locator;
    private readonly itemContainer: Locator;
    private readonly itemPrice: Locator;
    private readonly itemName: Locator;

    constructor(page: Page) {
        super(page)
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.continueShoppingButton = page.getByRole('button', { name: 'Go back Continue Shopping' });
        this.title = page.getByText('Your Cart');
        this.itemContainer = page.getByTestId('cart-list');
        this.itemPrice = page.getByTestId('inventory-item-price');
        this.itemName = page.getByTestId('inventory-item-name');
    }

    async verifyPage() {
        logger.info('Verificando la pagina Your Cart');
        await expect.soft(this.checkoutButton).toBeVisible();
        await expect.soft(this.continueShoppingButton).toBeVisible();
        await expect.soft(this.title).toBeVisible();
        await expect.soft(this.itemContainer).toBeVisible();
    }

    async clickCheckoutButton() {
        logger.info('Haciendo click en el botón checkout');
        await this.checkoutButton.click();
    }

    async clickContinueShoppingButton() {
        logger.info('Haciendo click en el botón continue');
        await this.continueShoppingButton.click();
    }

    async verifyProductName(productName: string) {
        await expect(this.itemName).toHaveText(productName);
    }

    async verifyProductPrice(productPrice: string) {
        await expect(this.itemPrice).toHaveText(productPrice);
    }

}