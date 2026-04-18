import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  firefox,
  webkit,
  selectors 
} from "playwright";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseUrl: string;


  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com/';
  }

  async init() {
    const browserName = (process.env.BROWSER || "chromium").toLowerCase();

    const browserType =
      browserName === "firefox"
        ? firefox
        : browserName === "webkit"
        ? webkit
        : chromium;

    this.browser = await browserType.launch({ headless: false });
    this.context = await this.browser.newContext();
    
// ✅ CLAVE: configurar data-test como test id
    selectors.setTestIdAttribute('data-test');

    this.page = await this.context.newPage();
  }

  async close() {
    if (this.context) {
      await this.context.close();
    }

    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);