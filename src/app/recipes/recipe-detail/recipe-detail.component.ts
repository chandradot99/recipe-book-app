import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingService } from '../../shopping-list/shopping.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe; 
  private recipeIndex: number = 1;

  constructor( private shoppingService: ShoppingService, private router: Router ) { }

  ngOnInit() {
  }

  onAddShoppingList() {
    this.shoppingService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDelete() {
    this.router.navigate(['/recipes']);
  }

}
