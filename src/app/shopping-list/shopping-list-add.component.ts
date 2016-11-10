import { Ingredients } from './../recipes/ingredients';
import { ShoppingService } from './shopping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list-add',
  templateUrl: './shopping-list-add.component.html',
  styleUrls: ['./shopping-list-add.component.css']
})
export class ShoppingListAddComponent implements OnInit {
  isAdd: boolean = true;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
  }

  onSubmit(item: Ingredients) {
    if(this.isAdd) {
      this.shoppingService.addItem(item);
    }
    else {

    }
  }

}
