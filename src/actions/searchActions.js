import axios from 'axios';
import {
    SEARCH_RECIPES_START,
    SEARCH_RECIPES_FETCH,
    SEARCH_TERM
} from './types';

import {
    APP_KEY,
    APP_ID
} from './api';

const SEARCH_URL = 'https://api.yummly.com/v1/api/recipes?';

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

