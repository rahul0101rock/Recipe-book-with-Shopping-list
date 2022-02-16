import { Ingredients } from './../shared/ingredients.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients:Ingredients[] = [
    new Ingredients("Eggs",4),
    new Ingredients("Chocolate Bars",5),
    new Ingredients("Bread",10)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredients(ingredient : Ingredients){
    this.ingredients.push(ingredient);
  }
}
