import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingService } from '../../shopping-list/shopping.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe; 

  constructor( private shoppingService: ShoppingService ) { }

  ngOnInit() {
  }

  onAddShoppingList() {
    this.shoppingService.addItems(this.selectedRecipe.ingredients);
  }

}
