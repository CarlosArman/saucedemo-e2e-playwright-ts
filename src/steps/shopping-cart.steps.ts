import { Given, When, Then } from '@cucumber/cucumber';
import { ShoppingPage } from '../pages/shopping.page';
import { TopBar } from '../pages/topbar.page';
import { YourCartPage } from '../pages/cart.page';
import { LoginPage } from '../pages/login.page';
import { getLogger } from '../utils/logger';
import { CustomWorld } from '../support/world';

const logger = getLogger('ShoppingCartSteps');

let shoppingPage: ShoppingPage;
let topBar: TopBar;
let yourCartPage: YourCartPage;
let loginPage: LoginPage;

Given('el usuario ha iniciado sesión en Sauce Demo', async function (this: CustomWorld) {
    logger.info('Iniciando sesión en Sauce Demo');

    loginPage = new LoginPage(this.page);
    await loginPage.navigate(this.baseUrl);
    await loginPage.fillCredentials('standard_user', 'secret_sauce');
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, "image/png");
    await loginPage.clickOnLogin();
});

Given('el usuario se encuentra en la página de productos', async function () {
    shoppingPage = new ShoppingPage(this.page);
    await shoppingPage.verifyPage();

    logger.info('Usuario en la página de productos');
});

When('agrega un producto al carrito', async function () {
    logger.info('Agregando producto al carrito');

    shoppingPage = new ShoppingPage(this.page);
    await shoppingPage.verifyAddRemove('Sauce Labs Backpack');
});

Then('el producto es agregado correctamente al carrito', async function () {
    logger.info('Validando que el producto fue agregado');

    topBar = new TopBar(this.page);
    await topBar.verifyItemCount(1);
});

Then('el contador del carrito muestra la cantidad {string}', async function (cantidad: string) {
    logger.info(`Validando contador del carrito: ${cantidad}`);

    topBar = new TopBar(this.page);
    await topBar.verifyItemCount(Number(cantidad));
}
);

Given('el usuario tiene productos agregados al carrito', async function () {
    logger.info('Asegurando que hay productos en el carrito');

    shoppingPage = new ShoppingPage(this.page);
    await shoppingPage.verifyAddRemove('Sauce Labs Backpack');

    topBar = new TopBar(this.page);
    await topBar.verifyItemCount(1);
});

When('accede al carrito de compras', async function () {
    logger.info('Accediendo al carrito de compras');

    topBar = new TopBar(this.page);
    await topBar.clickCheckoutButton();
});

Then('se muestran los productos agregados en el carrito', async function () {
    logger.info('Validando productos visibles en el carrito');

    yourCartPage = new YourCartPage(this.page);
    await yourCartPage.verifyPage();
});

Then('la información del producto es correcta', async function () {
    logger.info('Validando información del producto');

    yourCartPage = new YourCartPage(this.page);
    await yourCartPage.verifyProductName('Sauce Labs Backpack');
    await yourCartPage.verifyProductPrice('$29.99');
});