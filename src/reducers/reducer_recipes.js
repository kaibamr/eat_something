import { SEARCH_RECIPES } from '../actions/index';

export default function(state = null, action ) {
    console.log('Action received', action);
    switch(action.type) {
        case SEARCH_RECIPES:
            return [action.payload.data];
    }
    
    return state;
}