import { Page, Locator, expect } from '@playwright/test';
import { getLogger } from '../utils/logger';
import { BasePage } from './base.page';

const logger = getLogger('YourInformationPage');

export class YourInformationPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly zipCodeInput: Locator;
  readonly continueButton: Locator;
  readonly cancelButton: Locator;
  readonly title: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.zipCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code' });
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.cancelButton = page.getByRole('button', { name: 'Go back Cancel' });
    this.errorMessage = page.getByTestId('error');
    this.title = page.getByText('Checkout: Your Information');
  }

  async verifyPage() {
    logger.info('Verificando página de Your Information');

    await expect(this.firstNameInput).toBeVisible();
    await expect(this.lastNameInput).toBeVisible();
    await expect(this.zipCodeInput).toBeVisible();
    await expect(this.continueButton).toBeVisible();
    await expect(this.cancelButton).toBeVisible();
    await expect(this.title).toBeVisible();
  }

  async fillForm(firstName: string, lastName: string, zipCode: string) {
    logger.info(`Escribiendo firstName: ${firstName}`);
    if (firstName) {
      await this.firstNameInput.fill(firstName);
    }

    logger.info(`Escribiendo lastName: ${lastName}`);
    if (lastName) {
      await this.lastNameInput.fill(lastName);
    }

    logger.info(`Escribiendo zipCode: ${zipCode}`);
    if (zipCode) {
      await this.zipCodeInput.fill(zipCode);
    }

    logger.info('Haciendo click en Continue');
    await this.continueButton.click();
  }

  async verifyErrorMessage(message: string) {
    logger.info(`Verificando mensaje de error: ${message}`);
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }

  async clickCancelButton() {
    logger.info('Haciendo click en Cancel');
    await this.cancelButton.click();
  }
}