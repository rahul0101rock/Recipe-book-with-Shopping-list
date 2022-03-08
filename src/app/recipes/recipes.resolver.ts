import { RecipeService } from './recipe.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<Recipe[]> {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Recipe[] {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0)
      return this.dataStorageService.fetchRecipes();
    else
      return recipes;
  }
}
