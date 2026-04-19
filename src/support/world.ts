import { IWorldOptions, World, setWorldConstructor } from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  firefox,
  selectors,
  webkit,
} from "playwright";
import { LoginPage } from "../pages/login.page";
import { ShoppingPage } from "../pages/shopping.page";
import { TopBar } from "../pages/topbar.page";
import { YourCartPage } from "../pages/cart.page";
import { YourInformationPage } from "../pages/checkout-your-information.page";
import { CheckoutOverviewPage } from "../pages/checkout-overview.page";
import { CheckoutCompletePage } from "../pages/checkout-complete.page";

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  baseUrl: string;

  constructor(options: IWorldOptions) {
    super(options);
    this.baseUrl = process.env.BASE_URL || "https://www.saucedemo.com/";
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
    selectors.setTestIdAttribute("data-test");

    this.page = await this.context.newPage();
  }

  private ensurePageReady() {
    if (!this.page) {
      throw new Error(
        "World.page no está inicializado. Asegúrate de ejecutar world.init() en un Before hook."
      );
    }
  }

  private pages = new Map<string, unknown>();

  private getOrCreate<T>(key: string, factory: () => T): T {
    this.ensurePageReady();
    if (!this.pages.has(key)) this.pages.set(key, factory());
    return this.pages.get(key) as T;
  }

  get loginPage(): LoginPage {
    return this.getOrCreate("LoginPage", () => new LoginPage(this.page));
  }

  get shoppingPage(): ShoppingPage {
    return this.getOrCreate("ShoppingPage", () => new ShoppingPage(this.page));
  }

  get topBar(): TopBar {
    return this.getOrCreate("TopBar", () => new TopBar(this.page));
  }

  get yourCartPage(): YourCartPage {
    return this.getOrCreate("YourCartPage", () => new YourCartPage(this.page));
  }

  get yourInformationPage(): YourInformationPage {
    return this.getOrCreate("YourInformationPage", () => new YourInformationPage(this.page));
  }

  get checkoutOverviewPage(): CheckoutOverviewPage {
    return this.getOrCreate("CheckoutOverviewPage", () => new CheckoutOverviewPage(this.page));
  }

  get checkoutCompletePage(): CheckoutCompletePage {
    return this.getOrCreate("CheckoutCompletePage", () => new CheckoutCompletePage(this.page));
  }

  async close() {
    if (this.context) {
      await this.context.close();
    }

    if (this.browser) {
      await this.browser.close();
    }
  }

  /* ✅ MÉTODO REUTILIZABLE DE LOGIN */
  async loginWithCredentials(username: string, password: string): Promise<void> {

    await this.loginPage.fillCredentials(username, password);

    const screenshot = await this.page.screenshot({ fullPage: true });

    await this.attach(screenshot, "image/png");

    await this.loginPage.clickOnLogin();
  }

}

if (process.env.CUCUMBER_WORKER_ID !== undefined || process.argv.some(a => a.includes("cucumber"))) {
  setWorldConstructor(CustomWorld);
}
