import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
    console.log('Subscribing to event : recipeSelected');

    this.recipesService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        console.log('Caught event with payload: ' + recipe);
        this.selectedRecipe = recipe;
      }
    )
  }
}
