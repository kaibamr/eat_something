import { combineReducers } from 'redux';
import recipesReducer from './reducerRecipes';

const rootReducer = combineReducers({
  recipes: recipesReducer
});

export default rootReducer;
