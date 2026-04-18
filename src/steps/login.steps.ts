import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { CustomWorld } from "../support/world";
import { getLogger } from "../utils/logger";

const logger = getLogger("login.steps");

Given("el usuario se encuentra en la página de login de Sauce Demo", async function (this: CustomWorld) {
  logger.info("Navegando a la página de login");
  
  const loginPage = new LoginPage(this.page);
  await loginPage.navigate(this.baseUrl);
  await loginPage.verifyPage();

});

When("ingresa usuario {string} y password {string}", async function (this: CustomWorld, username: string, password: string) {
  logger.info({ username }, "Intentando login");
 
  const loginPage = new LoginPage(this.page);
  await loginPage.fillCredentials(username, password);
  
  const screenshot = await this.page.screenshot({ fullPage: true });
  await this.attach(screenshot, "image/png");
  
  await loginPage.clickOnLogin();
}
);

Then("debería ver la página de productos", async function (this: CustomWorld) {
  logger.info("Validando redirección a inventory");
  
  await expect(this.page).toHaveURL(/inventory.html/);
});

Then("debería ver el mensaje de error {string}", async function (this: CustomWorld, errorMessage: string) {
  logger.info("Validando mensaje de error");

  const loginPage = new LoginPage(this.page);
  await loginPage.verifyErrorMessage(errorMessage);
}
);