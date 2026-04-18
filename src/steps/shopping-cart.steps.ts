import { Given, When, Then, DataTable } from "@cucumber/cucumber";
import { getLogger } from "../utils/logger";
import { CustomWorld } from "../support/world";

const logger = getLogger("shopping-cart.steps");

Given("el usuario se encuentra en la página de productos", async function (
    this: CustomWorld
) {
    await this.shoppingPage.verifyPage();
    logger.info("Usuario en la página de productos");
});

When("agrega un producto al carrito", async function (this: CustomWorld) {
    logger.info("Agregando producto al carrito");
    await this.shoppingPage.verifyAddRemove("Sauce Labs Backpack");
});

Then("el producto es agregado correctamente al carrito",
    async function (this: CustomWorld) {
        logger.info("Validando que el producto fue agregado");
        await this.topBar.verifyItemCount(1);
    }
);

Then("el contador del carrito muestra la cantidad {string}",
    async function (this: CustomWorld, cantidad: string) {
        logger.info(`Validando contador del carrito: ${cantidad}`);
        await this.topBar.verifyItemCount(Number(cantidad));
    }
);

Given("el usuario tiene productos agregados al carrito", async function (
    this: CustomWorld
) {
    logger.info("Asegurando que hay productos en el carrito");

    await this.shoppingPage.verifyAddRemove("Sauce Labs Backpack");
    await this.topBar.verifyItemCount(1);
});

When("accede al carrito de compras", async function (this: CustomWorld) {
    logger.info("Accediendo al carrito de compras");
    await this.topBar.clickCheckoutButton();
});

Then("se muestran los productos agregados en el carrito", async function (
    this: CustomWorld
) {
    logger.info("Validando productos visibles en el carrito");
    await this.yourCartPage.verifyPage();
});

Then("la información del producto es correcta", async function (this: CustomWorld) {
    logger.info("Validando información del producto");
    await this.yourCartPage.verifyProductName("Sauce Labs Backpack");
    await this.yourCartPage.verifyProductPrice("$29.99");
});


When('agrega los siguientes productos al carrito:', async function (this: CustomWorld, table: DataTable) {
    logger.info('Agregando productos al carrito');

    const products = table.rows().map(row => row[0]);

    for (const product of products) {
        await this.shoppingPage.verifyAddRemove(product);
    }
});

Then('se muestran los productos agregados en el carrito con su precio correcto:',
    async function (this: CustomWorld, table: DataTable) {
        logger.info('Validando productos y precios en el carrito');

        await this.yourCartPage.verifyPage();

        const products = table.hashes();

        for (const item of products) {
            const { producto, precio } = item;
            await this.yourCartPage.verifyProductWithPrice(producto, precio);
        }
    }
);

Given( 'el usuario se encuentra en la página del carrito de compras',
  async function (this: CustomWorld) {
    logger.info('Navegando a la página del carrito de compras');

    await this.topBar.clickCheckoutButton();
    await this.yourCartPage.verifyPage();
  }
)
