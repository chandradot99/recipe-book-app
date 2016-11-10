import { Ingredients } from './../recipes/ingredients';
import { ShoppingService } from './shopping.service';
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredients;
  @Output() cleared = new EventEmitter();
  isAdd: boolean = true;

  constructor(private shoppingService: ShoppingService) { }

  ngOnChanges(changes) {
    if(changes.item.currentValue === null) {
      this.isAdd = true;
      this.item = {name: null, amount: null};
    }
    else {
      this.isAdd = false;
    }
  }

  onSubmit(item: Ingredients) {
    if(this.isAdd) {
      this.shoppingService.addItem(item);
      this.onClear();
    }
    else {
      this.shoppingService.editItem(this.item, item);
    }
  }

  onDelete() {
    this.shoppingService.deleteItem(this.item);
    this.onClear();
  }

  onClear() {
    this.cleared.emit(null);
  }

}
