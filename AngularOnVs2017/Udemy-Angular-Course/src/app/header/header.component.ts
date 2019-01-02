import { Component, Output, EventEmitter, OnInit } from '@angular/core';

import { ScreenToShow } from '../shared/ingredient.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  screenToShow: ScreenToShow = ScreenToShow.Nothing;

  @Output() onRecipesOrShopingListToggler = new EventEmitter<ScreenToShow>();

  ngOnInit() {
    this.screenToShow = ScreenToShow.Nothing;
    this.onFireShowMenuEvent();
  }

  OnClickHeaderRecipesButtton() {
    this.screenToShow = ScreenToShow.Recipes;
    this.onFireShowMenuEvent();
  }

  OnClickHeaderShoppingListButtton() {
    this.screenToShow = ScreenToShow.ShoppingList;
    this.onFireShowMenuEvent();
  }

  onFireShowMenuEvent() {
    this.onRecipesOrShopingListToggler.emit(this.screenToShow);
  }
}
