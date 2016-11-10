import { RecipesService } from './../recipes.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppingService } from '../../shopping-list/shopping.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe; 
  private recipeIndex: number;
  private subscription: Subscription;

  constructor( private shoppingService: ShoppingService,
               private router: Router, 
               private activatedRoute: ActivatedRoute,
               private recipeService: RecipesService  
             ) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.params.subscribe(
      (params) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
      }
    )
  }


  onAddShoppingList() {
    this.shoppingService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes',this.recipeIndex,'edit']);
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

}
