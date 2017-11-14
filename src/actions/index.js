import axios from 'axios';

const APP_KEY = 'x';
const APP_ID = 'x';
const ROOT_URL = 'http://api.yummly.com/v1/api/recipes?';
export const SEARCH_RECIPES = 'search_recipes'

export function searchRecipes(term) {
    const url = `${ROOT_URL}_app_id=${APP_ID}&_app_key=${APP_KEY}&q=${term}`;
    const req = axios.get(url);

    return {
        type: SEARCH_RECIPES,
        payload: req
    };
}