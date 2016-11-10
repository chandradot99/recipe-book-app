import { Component, OnInit, Input } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredients } from '../recipes/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  selectedItem: Ingredients = null;
  private items: Ingredients[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.items = this.shoppingService.getItems();
  }

  onSelectItem(item: Ingredients) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
