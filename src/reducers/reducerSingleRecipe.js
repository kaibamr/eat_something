import {
    GET_RECIPE_START,
    GET_RECIPE_FETCH,
    RESET_DATA
} from '../actions/types';

const INITIAL_STATE = {
    loading: false,
    data: null
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_RECIPE_START:
            return { ...state, loading: true };
        case GET_RECIPE_FETCH:
            return { ...state, data: action.payload.data, loading: false };
        case RESET_DATA:
            return INITIAL_STATE;
        default:
            return state;
    }
}
