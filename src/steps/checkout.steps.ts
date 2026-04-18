import { When, Then, DataTable } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { getLogger } from '../utils/logger';
import { expect } from "@playwright/test";

const logger = getLogger('checkout.steps');

When('el usuario inicia el proceso de checkout', async function (this: CustomWorld) {
    logger.info('Iniciando checkout desde el carrito');

    await this.yourCartPage.verifyPage();
    await this.yourCartPage.clickCheckoutButton();
});

When('completa la información personal con:', async function (this: CustomWorld, table: DataTable) {
    logger.info('Completando información personal');

    const data = table.rowsHash(); // { firstName, lastName, zipCode }

    await this.yourInformationPage.verifyPage();
    await this.yourInformationPage.fillForm(data.firstName, data.lastName, data.zipCode);
});

When('confirma el resumen de la compra', async function (this: CustomWorld) {
    logger.info('Confirmando resumen de la compra');
    
    await this.checkoutOverviewPage.verifyPage();
    await this.checkoutOverviewPage.clickFinish();
});

Then('debería ver la confirmación de la orden', async function (this: CustomWorld) {
    logger.info('Validando confirmación de la orden');

    await this.checkoutCompletePage.verifyPage();
    await expect(this.page).toHaveURL(/checkout-complete.html/);
});

Then('debería ver el mensaje de confirmación {string}', async function (this: CustomWorld, expectedMessage: string) {
    await this.checkoutCompletePage.verifySuccessMessage(expectedMessage);
});
