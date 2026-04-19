import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/world";
import { getLogger } from "../utils/logger";
import { applyAllureContext } from "../support/allure-context";

const logger = getLogger("login.steps");

Given("el usuario se encuentra en la página de login de Sauce Demo", async function (this: CustomWorld) {
  await applyAllureContext(this);

  logger.info("Navegando a la página de login");

  await this.loginPage.navigate(this.baseUrl);
  await this.loginPage.verifyPage();

});

When("ingresa usuario {string} y password {string}", async function (this: CustomWorld, username: string, password: string) {
  logger.info({ username }, "Intentando login");

  await this.loginWithCredentials(username, password);
});

Then("debería ver la página de productos", async function (this: CustomWorld) {
  logger.info("Validando redirección a inventory");

  await expect(this.page).toHaveURL(/inventory.html/);
});

Then("debería ver el mensaje de error {string}", async function (this: CustomWorld, errorMessage: string) {
  logger.info("Validando mensaje de error");

  await this.loginPage.verifyErrorMessage(errorMessage);
});


Given("el usuario ha iniciado sesión en Sauce Demo", async function (this: CustomWorld) {

  await applyAllureContext(this);

  logger.info("Iniciando sesión en Sauce Demo con usuario estándar");

  await this.loginPage.navigate(this.baseUrl);
  await this.loginPage.verifyPage();
  await this.loginWithCredentials("standard_user", "secret_sauce");
});


