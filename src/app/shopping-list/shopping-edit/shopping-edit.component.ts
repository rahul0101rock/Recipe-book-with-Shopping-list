import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f',{static : false}) slForm :NgForm;
  editMode=false;
  editedItemIndex: number;
  editedItem: Ingredients;

  constructor(private shoppingListService: ShoppingListService) { }

  editsub: Subscription;

  ngOnInit(): void {
    this.editsub = this.shoppingListService.editable.subscribe(
      (index: number) => {
        this.editMode=true;
        this.editedItemIndex=index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onAddIngredient(form: NgForm){
    if( form.value.name != "" && form.value.amount != "" )
    this.shoppingListService.addIngredient(new Ingredients(form.value.name,form.value.amount));
  }

}
