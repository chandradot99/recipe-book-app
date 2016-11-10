import { Ingredients } from '../recipes/ingredients'

export class ShoppingService {
  constructor() { }

  private items: Ingredients[] = [];

  getItems() {
    return this.items;
  }

  addItems(items: Ingredients[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredients) {
    this.items.push(item);
  }

}
