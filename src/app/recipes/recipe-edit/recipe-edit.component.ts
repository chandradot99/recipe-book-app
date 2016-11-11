import { RecipesService } from './../recipes.service';
import { Recipe } from './../recipe';
import { Ingredients } from './../ingredients';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit, OnDestroy {
  private isNew: boolean;
  private subscription: Subscription;
  private recipeIndex: number;
  private recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, 
              private recipeService: RecipesService, 
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params) => {
        if(params.hasOwnProperty('id')) {
          this.isNew = false;
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
        }
        else {
          this.isNew = true;
        }
      }
    )
    this.initForm();
  }

  private initForm() {
    let recipeName: string = '';
    let recipeImagePath: string = '';
    let recipeDescription: string = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if(!this.isNew) {
      for(let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          this.formBuilder.group({
            name: [this.recipe.ingredients[i].name, Validators.required],
            amount: [this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern('\\d+')]]
          })
          // new FormGroup({
          //   name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
          //   amount: new FormControl(this.recipe.ingredients[i].amount, [Validators.required, Validators.pattern('\\d+')])
          // })          
        )
      }
      recipeName = this.recipe.name;
      recipeImagePath = this.recipe.imagePath;
      recipeDescription = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImagePath, Validators.required],
      description: [recipeDescription, Validators.required],
      ingredients: recipeIngredients
    })

  }

  onSubmit() {
    const newRecipe = this.recipeForm.value; 
    if(this.isNew) {
      this.recipeService.addRecipe(newRecipe);
    }
    else {
      this.recipeService.editRecipe(this.recipe,newRecipe);
    }
    this.navigateBack();
  }

  onCancel() {
    this.navigateBack();
  }

  onAddItem(name: string, amount: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [Validators.required, Validators.pattern('\\d+')])        
      })
    );
  }

  onDeleteItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index);
  }

  private navigateBack() {
    this.router.navigate(['../']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
