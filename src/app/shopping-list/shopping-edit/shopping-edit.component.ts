import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(form: NgForm){
    if( form.value.name != "" && form.value.amount != "" )
    this.shoppingListService.addIngredient(new Ingredients(form.value.name,form.value.amount));
  }

}
