import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('recipe1','this is first dummy recipe', 'https://s-media-cache-ak0.pinimg.com/564x/a3/10/95/a31095e1d2aac1ff3bf7c4b809dad6a1.jpg', []),
    new Recipe('recipe2','this is second dummy recipe', 'http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg', [])
  ]

  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
