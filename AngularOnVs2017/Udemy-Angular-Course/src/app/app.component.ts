import { Component } from '@angular/core';
import { ScreenToShow } from './shared/ingredient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showRecipesOrShoppingList: ScreenToShow;

  onNavigate(showRecipesOrShoppingList: ScreenToShow) {
    this.showRecipesOrShoppingList = showRecipesOrShoppingList;
  }
}
