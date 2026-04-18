import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';
import { getLogger } from '../utils/logger';

const logger = getLogger('ShoppingPage');

export class ShoppingPage extends BasePage {
  private readonly  title: Locator;
  private readonly  inventoryList: Locator;
  private readonly  select: Locator;
  private readonly  itemPrice: Locator;
  private readonly  itemName: Locator;
  private readonly  itemImage: Locator;
  private readonly  addToCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.title = page.getByText('Products');
    this.inventoryList = page.getByTestId('inventory-list');
    this.select = page.locator('.product_sort_container');
    this.itemPrice = page.getByTestId('inventory-item-price');
    this.itemName = page.getByTestId('inventory-item-name');
    this.itemImage = page.locator('.inventory_item_img');
    this.addToCartButton = page.locator('.btn_inventory');
  }

  private getItemName(state: string, itemName: string): Locator {
    const newItemName = `${state} ${itemName}`
      .toLowerCase()
      .replace(/ /g, '-');

    return this.page.getByTestId(newItemName);
  }

  async verifyPage() {
    logger.info('Verificando la página de Shopping');

    await expect(this.title).toBeVisible();
    await expect(this.inventoryList).toBeVisible();
    await expect(this.select).toBeVisible();
  }

  async verifyAddRemove(itemName: string) {
    logger.info('Verificando el texto Add to Cart');

    const addToCartButton = this.getItemName('Add to cart', itemName);
    await expect(addToCartButton).toHaveText('Add to cart');

    logger.info('Haciendo click en el botón Add to Cart');
    await addToCartButton.click();

    logger.info('Verificando el texto Remove');
    await expect(this.getItemName('Remove', itemName)).toHaveText('Remove');
  }

  async verifyItemPriceByIndex(index: number, expected: string) {
    logger.info(`Verificando precio: ${expected}`);
    await expect(this.itemPrice.nth(index)).toHaveText(expected);
  }

  async clickAddToCartButton() {
    logger.info('Haciendo click en todos los botones Add to Cart');

    const count = await this.addToCartButton.count();
    for (let i = 0; i < count; i++) {
      await this.addToCartButton.nth(i).click();
    }
  }

  async orderItems(value: string) {
    logger.info(`Ordenando los items por: ${value}`);
    await this.select.selectOption(value);
  }

  async verifyItemPrice(first: string, last: string) {
    logger.info('Verificando el primer y último precio');

    await expect(this.itemPrice.first()).toHaveText(first);
    await expect(this.itemPrice.last()).toHaveText(last);
  }

  async verifyItemName(first: string, last: string) {
    logger.info('Verificando el primer y último nombre');

    await expect(this.itemName.first()).toHaveText(first);
    await expect(this.itemName.last()).toHaveText(last);
  }

  async clickImageByIndex(index: number) {
    logger.info(`Haciendo click en la imagen con index ${index}`);
    await this.itemImage.nth(index).click();
  }


}