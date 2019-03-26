import {combineReducers, createStore} from "redux";
import {defaultState} from "./defaultState";

function reducer(state = defaultState, action) {
    return state;
}

export const store = createStore(
    combineReducers({reducer})
);