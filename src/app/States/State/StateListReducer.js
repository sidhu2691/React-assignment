import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    statelist: [],
    status: false,
    error: undefined
}

export default function StateListReducer(state = INITIAL_STATE, action) {
    console.log("statelistReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_STATELIST:
            return Object.assign({}, state, {statelist: action.payload.statelist});

        case ActionTypes.LOADING:
            return Object.assign({}, state, {status: action.payload.status});

        case ActionTypes.ERROR:
            return Object.assign({}, state, {error: action.payload.error});

        default:
            return state;
    }
}