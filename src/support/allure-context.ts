import * as allure from "allure-js-commons";

export async function applyAllureContext(world: any) {
  if (world.__allureContextApplied) return;

  const meta = world.allureMeta ?? {};
  const browser = meta.browser ?? "chromium";
  const env = meta.env ?? "qa";
  const feature = meta.feature ?? "feature";
  const scenario = meta.scenario ?? "scenario";

  await allure.parameter("browser", browser);
  await allure.parameter("environment", env);
  await allure.historyId(`${feature}::${scenario}::${env}::${browser}`);

  world.__allureContextApplied = true;
}