import { RecipesService } from './../recipes/recipes.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {  

  constructor(private recipeService: RecipesService) { }

  onStore() {
    this.recipeService.storeRecipes().subscribe(
      (data) => console.log(data)  
    );
  }

  onRetrieve() {
    this.recipeService.retrieveRecipes();
  }

}
