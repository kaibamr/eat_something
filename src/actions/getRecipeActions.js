import axios from 'axios';
import {
    GET_RECIPE_START,
    GET_RECIPE_FETCH,
    RESET_DATA
} from './types';

import {
    APP_ID,
    APP_KEY
} from './api';

const SEARCH_URL = 'http://api.yummly.com/v1/api/recipe/';

export function getRecipe(id) {
    return (dispatch) => {
        dispatch({ type: GET_RECIPE_START });
        getRecipeFetch(dispatch, id);
    };
}

export function resetData() {
    return {
        type: RESET_DATA
    };
}

const getRecipeFetch = (dispatch, id) => {
    const url = `${SEARCH_URL}${id}?_app_id=${APP_ID}&_app_key=${APP_KEY}`;
    axios.get(url).then((response) => {
        dispatch({ 
            type: GET_RECIPE_FETCH,
            payload: response
        });
    });
};