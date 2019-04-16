import { applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import {defaultState} from "./defaultState";

function reducer(state = defaultState, action) {
    return state;
}

export const store = createStore(
    combineReducers({reducer}),
    applyMiddleware(thunk)
);