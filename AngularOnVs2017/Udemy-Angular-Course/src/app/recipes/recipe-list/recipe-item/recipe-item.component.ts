import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;

  constructor(private recipesService: RecipeService) { }

  ngOnInit() {
  }

  onSelected() {
    console.log('Emitting event with payload: ' + this.recipeItem);
    this.recipesService.recipeSelected.emit(this.recipeItem);
  }
}
