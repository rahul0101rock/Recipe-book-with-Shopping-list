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
  @Output() ingAdded = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    if( this.nameRef.nativeElement.value != "" && this.amountRef.nativeElement.value != "" )
    this.ingAdded.emit(new Ingredients(this.nameRef.nativeElement.value,this.amountRef.nativeElement.value));
  }

}
