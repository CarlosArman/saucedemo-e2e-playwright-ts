import { Before, After } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { getLogger } from "../utils/logger";

const logger = getLogger("browser-hooks");

Before(async function (this: CustomWorld) {
  logger.info("Inicializando browser...");
  await this.init();
  logger.info("Browser inicializado correctamente");
});

After(async function (this: CustomWorld) {
    logger.info("Cerrando browser...");
    await this.close();
    logger.info("Browser cerrado correctamente");
});
