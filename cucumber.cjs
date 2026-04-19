const os = require("node:os");
const process = require("node:process");

const testEnv = process.env.TEST_ENV || "dev";
const browser = process.env.BROWSER || "chromium";
const parallel = Number(process.env.CUCUMBER_PARALLEL || 1);
const retry = Number(process.env.CUCUMBER_RETRY || 1);

module.exports = {
  default: {
    paths: ["features/**/*.feature"],
    require: [
      "src/support/**/*.ts",
      "src/hooks/**/*.ts",
      "src/steps/**/*.ts"
    ],
    requireModule: ["ts-node/register"],
    format: [
      "progress",
      `html:reports/cucumber/${testEnv}/${browser}/cucumber-report.html`,
      `json:reports/cucumber/${testEnv}/${browser}/cucumber-report.json`,
      `junit:reports/cucumber/${testEnv}/${browser}/cucumber-report.xml`,
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "reports/allure-results",
      environmentInfo: {
        "Environment": testEnv.toUpperCase(),
        "Browser": browser,
        "Headless": process.env.HEADLESS || "false",
        "Base URL": process.env.BASE_URL || "https://www.saucedemo.com/",
        "Operating System": `${os.platform()} - ${os.release()}`,
        "Node.js": process.version,
        "Executed At": new Date().toLocaleString("es-PE")
      }
    },
    parallel,
    retry
  }
};
