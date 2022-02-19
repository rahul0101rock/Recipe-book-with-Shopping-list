import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredients } from './../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[] = [
    new Recipe("Cake","This is a Cake","https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556_960_720.jpg",
    [
      new Ingredients("Bread",4),
      new Ingredients("Cream",2),
    ]),
    new Recipe("Pie","This is a pie","https://cdn.pixabay.com/photo/2018/08/30/20/47/gugelhupf-3643259_960_720.jpg",
    [
      new Ingredients("Egg",4),
      new Ingredients("Honey",1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes;
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  ingredientsToShoppingList(ingredients : Ingredients[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
