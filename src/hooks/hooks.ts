import { After, AfterStep, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { existsSync, mkdirSync } from "fs";
import { CustomWorld } from "../support/world";
import { getLogger } from "../utils/logger";

const { DEFAULT_TIMEOUT_MS } = require("../support/cucumber");

const logger = getLogger("hooks");

setDefaultTimeout(DEFAULT_TIMEOUT_MS);

Before(async function (this: CustomWorld) {
  logger.info("Ejecutando hook Before");

  if (!existsSync("reports/screenshots")) {
    mkdirSync("reports/screenshots", { recursive: true });
    logger.info("Carpeta reports/screenshots creada");
  }

  await this.init();
  logger.info("Browser y page inicializados");
});

After(async function (this: CustomWorld, scenario) {
  logger.info({ scenario: scenario.pickle.name }, "Ejecutando hook After");
  logger.info({ status: scenario.result?.status }, "Estado del escenario");

  if (scenario.result?.status === Status.FAILED) {

    await this.attach(this.page.url(), "text/plain");
    logger.info("URL adjuntado correctamente");

    const safeName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, "_");
    const filePath = `reports/screenshots/FAILED-${safeName}.png`;

    logger.warn({ filePath }, "Tomando screenshot por fallo");

    const screenshot = await this.page.screenshot({
      path: filePath,
      fullPage: true
    });

    await this.attach(screenshot, "image/png");
    logger.info("Screenshot adjuntado correctamente");

    await this.attach(await this.page.content(), "text/html");
    logger.info("HTML adjuntado correctamente");
  }

  await this.close();
  logger.info("Browser cerrado");
});

AfterStep(async function (this: CustomWorld, step) {
  const stepScreenshot = String(process.env.STEP_SCREENSHOT ?? "")
    .trim()
    .toLowerCase();

  logger.debug(
    { step: step.pickleStep.text, stepScreenshot },
    "Ejecutando AfterStep"
  );

  if (stepScreenshot !== "true") {
    logger.debug("Captura por step desactivada");
    return;
  }

  const safeStepName = step.pickleStep.text.replace(/[^a-zA-Z0-9-_]/g, "_");
  const filePath = `reports/screenshots/${Date.now()}-${safeStepName}.png`;

  logger.info({ filePath }, "Tomando screenshot por step");

  const screenshot = await this.page.screenshot({
    path: filePath,
    fullPage: false
  });

  this.attach(screenshot, "image/png");
});
