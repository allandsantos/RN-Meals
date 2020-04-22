import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal=> meal.id === action.mealId);
            if(existingIndex >= 0)
            {
                const updatedFavMeals = [...state.favoriteMeals];
                updatedFavMeals.splice(existingIndex, 1);
                return {...state, favoriteMeals: updatedFavMeals}
            }
            else
            {
                const mealForAdd = state.meals.find(meal=> meal.id === action.mealId);
                return {...state, favoriteMeals: state.favoriteMeals.concat(mealForAdd)}
            }
        case SET_FILTERS:
            const filters = action.filters;
            const filteredMeals = state.meals.filter(meal=> {
                if(!meal.isGlutenFree && filters.glutenFree){
                    return false;
                }
                if(!meal.isLactoseFree && filters.lactoseFree){
                    return false;
                }
                if(!meal.isVegetarian && filters.vegetarian){
                    return false;
                }
                if(!meal.isVegan && filters.vegan){
                    return false;
                }
                return true;
            });
            console.log(filteredMeals);
            return {...state, filteredMeals};
        default:
            return state
    }
    return state;
}

export default mealsReducer;