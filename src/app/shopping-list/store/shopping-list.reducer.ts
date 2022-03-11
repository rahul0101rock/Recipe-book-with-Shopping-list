import { Ingredients } from './../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions';

const intialState = {
    ingredients: [
        new Ingredients("Almond", 20),
        new Ingredients("Chocolate Bars", 5),
        new Ingredients("Cashews", 25)
    ]
};

export function shoppingListReducer(state = intialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient, ...action.payload.ingredient
            }
            const updatedIngredients = [...state.ingredients];
            updatedIngredients[action.payload.index] = updatedIngredient;   
            return {
                ...state,
                ingredients: updatedIngredients
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.filter(
                    (ig,igIndex) => {
                        return igIndex !== action.payload;
                    }
                )
            };
        default:
            return state;
    }
}