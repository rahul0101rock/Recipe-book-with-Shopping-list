import { Ingredients } from './../shared/ingredients.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients:Ingredients[] = [
    new Ingredients("Almond",20),
    new Ingredients("Chocolate Bars",5),
    new Ingredients("Cashews",25)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient : Ingredients){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients : Ingredients[]){
    this.ingredients.push(...ingredients);
  }

}
