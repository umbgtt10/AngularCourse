import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  OnClickAddButton() {
    if (this.nameInputRef.nativeElement.value && this.amountInputRef.nativeElement.value) {

      var ingredient = new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value);

      this.shoppingListService.addIngredient(ingredient);
    }
  }
}
