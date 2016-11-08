import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('dummy','this is dummy recipe', 'https://s-media-cache-ak0.pinimg.com/564x/a3/10/95/a31095e1d2aac1ff3bf7c4b809dad6a1.jpg');
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
