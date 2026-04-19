import { Before } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";

Before(function (this: CustomWorld, { pickle, gherkinDocument }) {
  (this as any).allureMeta = {
    browser: process.env.BROWSER || "chromium",
    env: process.env.TEST_ENV || "qa",
    feature: gherkinDocument?.feature?.name ?? "feature",
    scenario: pickle.name,
  };

  (this as any).__allureContextApplied = false;
});