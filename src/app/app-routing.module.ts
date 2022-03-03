import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesResolver } from './recipes/recipes.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children:[
    { path: '', component: RecipeStartComponent,resolve: [RecipesResolver] },
    { path: 'new', component: RecipeEditComponent,resolve: [RecipesResolver] },
    { path: ':id', component: RecipeDetailComponent,resolve: [RecipesResolver] },
    { path: ':id/edit', component: RecipeEditComponent,resolve: [RecipesResolver] },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
