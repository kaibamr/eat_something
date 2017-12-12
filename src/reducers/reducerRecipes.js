import { 
    SEARCH_RECIPES_START,
    SEARCH_RECIPES_FETCH,
    SEARCH_TERM
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    data: null,
    term: ''
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_TERM:
            return { ...state, term: action.payload };
        case SEARCH_RECIPES_START:
            return { ...state, loading: true, term: '', data: null };
        case SEARCH_RECIPES_FETCH:
            return { ...state, data: action.payload.data.matches, loading: false };
        default:
            return state;
    }
}
