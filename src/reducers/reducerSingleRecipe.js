import {
    GET_RECIPE_START,
    GET_RECIPE_FETCH
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
            console.log(action.payload.data);
            return { ...state, data: action.payload.data, loading: false };
        default:
            return state;
    }
}
