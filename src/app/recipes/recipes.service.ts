import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredients } from './ingredients';

@Injectable()
export class RecipesService {
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe('recipe1','this is first dummy recipe', 'https://s-media-cache-ak0.pinimg.com/564x/a3/10/95/a31095e1d2aac1ff3bf7c4b809dad6a1.jpg', 
      [
        new Ingredients('ingredient1',2),
        new Ingredients('ingredient2',3)
      ]
    ),
    new Recipe('recipe2','this is second dummy recipe', 'http://i164.photobucket.com/albums/u8/hemi1hemi/COLOR/COL9-6.jpg',
      [
        new Ingredients('ingredient3',1),
        new Ingredients('ingredient4',2)
      ]
    )
  ]

  getRecipes() {
    return this.recipes;
  }

}
