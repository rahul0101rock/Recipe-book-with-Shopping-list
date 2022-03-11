import { Ingredients } from './../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions'

const intialState = {
    ingredients: [
        new Ingredients("Almond", 20),
        new Ingredients("Chocolate Bars", 5),
        new Ingredients("Cashews", 25)
    ]
};

export function shoppingListReducer(state = intialState, action: ShoppingListActions.AddIngredient) {
    switch(action.type){
        case ShoppingListActions.ADD_INGREDIENT : 
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        default:
            return state;
    }
}