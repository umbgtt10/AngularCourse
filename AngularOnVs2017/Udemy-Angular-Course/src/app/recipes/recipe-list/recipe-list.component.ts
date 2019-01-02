import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() onClickedRecipeForwarder = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is a simple Test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChJQehp7OXvPOzFUeqc4rJjCvl1wtq3Rp8DiJic5-L_dXOTcU"),
    new Recipe("Another Test Recipe", "This is a simple Test2",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQChJQehp7OXvPOzFUeqc4rJjCvl1wtq3Rp8DiJic5-L_dXOTcU"),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClickedToBeForwarded(recipe: Recipe) {
    this.onClickedRecipeForwarder.emit(recipe);
  }
}
