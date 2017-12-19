import { combineReducers } from 'redux';
import recipesReducer from './reducerRecipes';
import reducerSingleRecipe from './reducerSingleRecipe';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  singleRecipe: reducerSingleRecipe
});

export default rootReducer;
