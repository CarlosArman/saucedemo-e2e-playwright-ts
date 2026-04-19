import { After, AfterStep, Before, Status } from "@cucumber/cucumber";
import { existsSync, mkdirSync } from "fs";
import { CustomWorld } from "../support/world";
import { getLogger } from "../utils/logger";
import { sanitizeFileName } from "../utils/sanitize";
import { testConfig } from "../config/test.config";
import crypto from "node:crypto";

const logger = getLogger("reporting-hooks");

Before(async function (this: CustomWorld, scenario) {
    if (!existsSync("reports/screenshots")) {
        mkdirSync("reports/screenshots", { recursive: true });
    }

    // Correlation ID por escenario
    const scenarioId = crypto.randomUUID();
    (this as any).scenarioId = scenarioId;

    logger.info(
        { scenario: scenario.pickle.name, scenarioId },
        "Escenario iniciado"
    );

    if (this.context) {
        await this.context.tracing.start({
            screenshots: true,
            snapshots: true,
            sources: true,
        });
    }
});

After(async function (this: CustomWorld, scenario) {
    const scenarioId = (this as any).scenarioId;

    if (scenario.result?.status === Status.FAILED) {
        if (!this.page) return;

        const safeName = sanitizeFileName(scenario.pickle.name);

        const screenshotPath = `reports/screenshots/FAILED-${safeName}.png`;
        const screenshot = await this.page.screenshot({
            path: screenshotPath,
            fullPage: true,
        });

        await this.attach(screenshot, "image/png");

        if (this.context) {
            const tracePath = `reports/trace-${safeName}.zip`;
            await this.context.tracing.stop({ path: tracePath });
            logger.error(
                { scenarioId, tracePath },
                "Escenario fallido - Trace guardado"
            );
        }
    } else {
        if (this.context) {
            await this.context.tracing.stop();
        }
    }

    logger.info({ scenarioId }, "Escenario finalizado");
});

AfterStep(async function (this: CustomWorld, step) {
    if (!testConfig.stepScreenshot || !this.page) return;

    const safeStepName = sanitizeFileName(step.pickleStep.text);
    const filePath = `reports/screenshots/${Date.now()}-${safeStepName}.png`;

    const screenshot = await this.page.screenshot({
        path: filePath,
        fullPage: false,
    });

    await this.attach(screenshot, "image/png");
});
