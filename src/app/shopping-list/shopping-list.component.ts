import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredients } from '../recipes/ingredients';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  private items: Ingredients[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.items = this.shoppingService.getItems();
  }

}
