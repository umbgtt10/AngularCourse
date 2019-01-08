import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Tasty Schnitzel", "Super tasty Schnitzel",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChJQehp7OXvPOzFUeqc4rJjCvl1wtq3Rp8DiJic5-L_dXOTcU",
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries',20)
      ]),
    new Recipe("Big Far Burger", "Super fat burger!",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChJQehp7OXvPOzFUeqc4rJjCvl1wtq3Rp8DiJic5-L_dXOTcU",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 10)
      ]),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice(); // returns a copy!
  }

  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
