import { ShoppingListService } from './../shopping-list.service';
import { Ingredients } from './../../shared/ingredients.model';
import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static : false}) nameRef: ElementRef;
  @ViewChild('amountInput',{static : false}) amountRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    if( this.nameRef.nativeElement.value != "" && this.amountRef.nativeElement.value != "" )
    this.shoppingListService.addIngredients(new Ingredients(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value));
  }

}
