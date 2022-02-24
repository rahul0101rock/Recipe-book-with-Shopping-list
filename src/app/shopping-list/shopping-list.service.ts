import { Ingredients } from './../shared/ingredients.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  editable= new Subject<number>();

  private ingredients:Ingredients[] = [
    new Ingredients("Almond",20),
    new Ingredients("Chocolate Bars",5),
    new Ingredients("Cashews",25)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  getIngredient(index: number){
    return this.ingredients[index];
  }

  addIngredient(ingredient : Ingredients){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients : Ingredients[]){
    this.ingredients.push(...ingredients);
  }

  updateIngredient(index: number, newingredient : Ingredients){
    this.ingredients[index] = newingredient;
  }
}
