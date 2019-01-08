import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipeDetail: Recipe;
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscribeToRecipeDetailUpdate();
  }

  ngOnDestroy() {
    this.unsubscribeFromRecipeDetailUpdate();
  }

  subscribeToRecipeDetailUpdate() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => {
        var id = Number(params['id']);
        this.updateRecipeDetail(id);
      }
    )
  }

  unsubscribeFromRecipeDetailUpdate() {
    this.subscription.unsubscribe();
  }

  updateRecipeDetail(id: number) {
    this.recipeDetail = this.recipeService.getRecipe(id);
  }

  onClickToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onClickEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
