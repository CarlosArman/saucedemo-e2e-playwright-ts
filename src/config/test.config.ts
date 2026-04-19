import { environmentConfig } from "./index";

export const testConfig = {
  environment: environmentConfig.name,
  baseUrl: process.env.BASE_URL || environmentConfig.baseUrl,
  credentials: environmentConfig.credentials,
  browser: (process.env.BROWSER ?? "chromium").toLowerCase(),
  headless: (process.env.HEADLESS ?? "true") === "true",
  stepScreenshot:
    String(process.env.STEP_SCREENSHOT ?? "")
      .trim()
      .toLowerCase() === "true",
};
