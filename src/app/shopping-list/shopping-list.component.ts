import { Observable } from 'rxjs';
import { ShoppingListService } from './shopping-list.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as formShoppingList from './store/shopping-list.reducer';
import * as ShoppingListActions from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Observable<{ ingredients: Ingredients[] }>;
  

  constructor(private shoppingListService: ShoppingListService, private store: Store<formShoppingList.AppState>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
  }

  onEditItem(index: number) {
    // this.shoppingListService.editable.next(index);
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

}
