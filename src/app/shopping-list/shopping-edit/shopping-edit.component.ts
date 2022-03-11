import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as formShoppingList from '../store/shopping-list.reducer';

import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredients;

  constructor(private shoppingListService: ShoppingListService, private store: Store<formShoppingList.AppState>) { }

  editsub: Subscription;

  ngOnInit(): void {
    this.store.select('shoppingList').subscribe(
      stateData => {
        if (stateData.editedIngredientIndex > -1) {
          this.editMode = true;
          this.editedItem = stateData.editedIngredient;
          this.editedItemIndex = stateData.editedIngredientIndex;
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
    // this.editsub = this.shoppingListService.editable.subscribe(
    //   (index: number) => {
    //     this.editMode = true;
    //     this.editedItemIndex = index;
    //     this.editedItem = this.shoppingListService.getIngredient(index);
    //     this.slForm.setValue({
    //       name: this.editedItem.name,
    //       amount: this.editedItem.amount
    //     });
    //   }
    // );
  }

  onSubmit(form: NgForm) {
    if (form.value.name != "" && form.value.amount != "") {
      const newIng = new Ingredients(form.value.name, form.value.amount);
      if (this.editMode) {
        // this.shoppingListService.updateIngredient(this.editedItemIndex, newIng);
        this.store.dispatch(new ShoppingListActions.updateIngredient({ index: this.editedItemIndex, ingredient: newIng }))
      } else {
        // this.shoppingListService.addIngredient(newIng);
        this.store.dispatch(new ShoppingListActions.AddIngredient(newIng));
      }
      this.editMode = false;
      form.reset();
    }
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }

  onDelete() {
    // this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.store.dispatch(new ShoppingListActions.deleteIngredient(this.editedItemIndex));
    this.onClear();
  }

  ngOnDestroy(): void {
    this.editsub.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
