const os = require("node:os");
const process = require("node:process");

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
      "html:reports/cucumber/cucumber-report.html",
      "json:reports/cucumber/cucumber-report.json",
      "junit:reports/cucumber/cucumber-report.xml",
      "allure-cucumberjs/reporter"
    ],
    formatOptions: {
      resultsDir: "reports/allure-results",
      environmentInfo: {
        "Environment": (process.env.TEST_ENV || "qa").toUpperCase(),
        "Browser": process.env.BROWSER || "chromium",
        "Headless": process.env.HEADLESS || "false",
        "Base URL": process.env.BASE_URL || "https://www.saucedemo.com/",
        "Operating System": `${os.platform()} - ${os.release()}`,
        "Node.js": process.version,
        "Executed At": new Date().toLocaleString("es-PE")
      }
    },
    parallel: 1
  }
};
