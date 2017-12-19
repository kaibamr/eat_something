import axios from 'axios';
import {
    SEARCH_RECIPES_START,
    SEARCH_RECIPES_FETCH,
    SEARCH_TERM
} from './types';


const APP_KEY = '2e4429e06fb3b4423f9ad06aab8cabc3';
const APP_ID = 'b8d87e7c';
const SEARCH_URL = 'http://api.yummly.com/v1/api/recipes?';

export function searchTermChanged(term) {
    return {
        type: SEARCH_TERM,
        payload: term
    };
}

export function searchRecipes(term) {
    return (dispatch) => {
        dispatch({ type: SEARCH_RECIPES_START });
        searchRecipesFetch(dispatch, term);
    };
}

const searchRecipesFetch = (dispatch, term) => {
    const url = `${SEARCH_URL}_app_id=${APP_ID}&_app_key=${APP_KEY}&q=${term}`;

    axios.get(url).then((response) => {
        dispatch({ 
            type: SEARCH_RECIPES_FETCH,
            payload: response
        });
    });
};

