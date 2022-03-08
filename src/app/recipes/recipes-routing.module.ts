import { RecipesResolver } from './recipes.resolver';
import { AuthGuard } from './../auth/auth.guard';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: RecipesComponent, canActivate: [AuthGuard], children: [
      { path: '', component: RecipeStartComponent, resolve: [RecipesResolver] },
      { path: 'new', component: RecipeEditComponent, resolve: [RecipesResolver] },
      { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolver] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolver] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
