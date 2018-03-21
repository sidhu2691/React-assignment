import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    stateedit: [],
    status: false,
    error: undefined
}

export default function StateEditReducer(state = INITIAL_STATE, action) {
    console.log("statelistReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_STATEEDIT:
            return Object.assign({}, state, {stateedit: action.payload.stateedit});

        case ActionTypes.INIT_STATEUPDATE:
            return Object.assign({}, state, {stateedit: action.payload.stateedit});    

        case ActionTypes.LOADING:
            return Object.assign({}, state, {status: action.payload.status});

        case ActionTypes.ERROR:
            return Object.assign({}, state, {error: action.payload.error});

        default:
            return state;
    }
}
