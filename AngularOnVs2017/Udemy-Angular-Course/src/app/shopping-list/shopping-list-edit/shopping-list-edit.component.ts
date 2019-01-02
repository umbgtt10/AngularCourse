import { Component, OnInit, ViewChild, ContentChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() onIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  OnClickAddButton() {
    if (this.nameInputRef.nativeElement.value && this.amountInputRef.nativeElement.value) {
      var ingredient = new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value)

      this.onIngredientAdded.emit(ingredient);
    }
  }
}
