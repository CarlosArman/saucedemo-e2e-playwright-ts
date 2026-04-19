import { devConfig } from "./dev.config";
import { uatConfig } from "./uat.config";
import { prodConfig } from "./prod.config";

const env = (process.env.TEST_ENV || "dev").toLowerCase();

const environmentMap = {
  dev: devConfig,
  uat: uatConfig,
  prod: prodConfig,
};

export const environmentConfig =
  environmentMap[env as keyof typeof environmentMap] || devConfig;
