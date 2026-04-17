import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { CustomWorld } from "../support/world";
import { getLogger } from "../utils/logger";

const logger = getLogger("login.steps");

const environment = process.env.TEST_ENV || "qa";
const browser = process.env.BROWSER || "chromium";
const baseUrl = process.env.BASE_URL || "https://www.saucedemo.com/";

Given("el usuario ingresa a la página de login", async function (this: CustomWorld) {
  logger.info("Navegando a la página de login");

  const loginPage = new LoginPage(this.page);
  await this.page.goto(baseUrl);
  await loginPage.verifyPage();

});

When(
  "ingresa usuario {string} y password {string}",
  async function (this: CustomWorld, username: string, password: string) {
    logger.info({ username }, "Intentando login");

    const loginPage = new LoginPage(this.page);
    await loginPage.loginWithCredentials(username, password);
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, "image/png");
    await loginPage.clickOnLogin();
  }
);

Then("debería ver la página de productos", async function (this: CustomWorld) {
  logger.info("Validando redirección a inventory");
  await expect(this.page).toHaveURL(/inventory.html/);
});

Then(
  "debería ver el mensaje de error {string}",
  async function (this: CustomWorld, errorMessage: string) {
    logger.info("Validando mensaje de error");

    const loginPage = new LoginPage(this.page);
    await loginPage.verifyErrorMessage(errorMessage);
  }
);