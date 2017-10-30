import { SEARCH_CITY, CHANGE_BOUNDS } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case SEARCH_CITY:
            return action.payload.data;
        case CHANGE_BOUNDS:
            return action.payload.data;
    }
    return state;
}