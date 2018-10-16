//The Redux Store component

import { createStore, combineReducers } from 'redux';
import deepFreeze from 'deep-freeze';

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {};

let empty_link={
    value:""
};

function link(state = empty_link, action) {
    switch (action.type) {
        case 'UPDATE_URL_FORM':
            return action.data;
        case 'CLEAR_URL_FORM':
            return empty_link;
        default:
            return state;
    }
}

let empty_short_link="";

function shortLink(state = empty_short_link, action) {
    switch (action.type) {
        case 'SHORT_LINK':
            return action.data;
        case 'CLEAR_SHORT_LINK':
            return empty_short_link;
        default:
            return state;
    }
}

let empty_error="";

function error(state = empty_error, action) {
    switch (action.type) {
        case 'ERROR':
            return action.data;
        case 'CLEAR_ERROR' :
            return empty_error;
        default:
            return state;
    }
}

function root_reducer(state0, action) {
    let reducer = combineReducers({link, shortLink, error});
    let state1 = reducer(state0, action);
    return deepFreeze(state1);
};

let store = createStore(root_reducer, persistedState);
export default store;