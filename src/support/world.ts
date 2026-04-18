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

  // Lazy page objects (initialized only when used, once per Scenario)
  private _loginPage?: LoginPage;
  private _shoppingPage?: ShoppingPage;
  private _topBar?: TopBar;
  private _yourCartPage?: YourCartPage;
  private _yourInformationPage?: YourInformationPage;
  private __checkoutOverviewPage?: CheckoutOverviewPage;
  private __checkoutCompletePage?: CheckoutCompletePage;

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

  get loginPage(): LoginPage {
    this.ensurePageReady();
    return (this._loginPage ??= new LoginPage(this.page));
  }

  get shoppingPage(): ShoppingPage {
    this.ensurePageReady();
    return (this._shoppingPage ??= new ShoppingPage(this.page));
  }

  get topBar(): TopBar {
    this.ensurePageReady();
    return (this._topBar ??= new TopBar(this.page));
  }

  get yourCartPage(): YourCartPage {
    this.ensurePageReady();
    return (this._yourCartPage ??= new YourCartPage(this.page));
  }

  get yourInformationPage(): YourInformationPage {
    this.ensurePageReady();
    return (this._yourInformationPage ??= new YourInformationPage(this.page));
  }

  get checkoutOverviewPage(): CheckoutOverviewPage {
    this.ensurePageReady();
    return (this.__checkoutOverviewPage ??= new CheckoutOverviewPage(this.page));
  }

  get checkoutCompletePage(): CheckoutCompletePage {
    this.ensurePageReady();
    return (this.__checkoutCompletePage ??= new CheckoutCompletePage(this.page));
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
    await this.loginPage.navigate(this.baseUrl);
    await this.loginPage.verifyPage();

    await this.loginPage.fillCredentials(username, password);

    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, "image/png");

    await this.loginPage.clickOnLogin();
  }

}

setWorldConstructor(CustomWorld);
