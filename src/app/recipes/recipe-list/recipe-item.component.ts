import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [
    `img {
      max-height: 50px;
    }
    `
  ]
})

export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() recipeId: number;
}
