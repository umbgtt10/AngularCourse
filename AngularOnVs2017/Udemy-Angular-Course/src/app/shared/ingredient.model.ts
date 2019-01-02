export class Ingredient {   
  constructor(public name: string, public amount: number) {}
}


export enum ScreenToShow {
  Nothing = 0,
  Recipes = 1,
  ShoppingList = 2,
  Both = 3,
}
