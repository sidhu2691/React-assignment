import * as ActionTypes from './action-types';

const INITIAL_STATE = {
    stateview: [],
    status: false,
    error: undefined
}

export default function StateViewReducer(state = INITIAL_STATE, action) {
    console.log("statelistReducer ", state, action);
    switch(action.type) {
        case ActionTypes.INIT_STATEVIEW:
            return Object.assign({}, state, {stateview: action.payload.stateview});

        case ActionTypes.LOADING:
            return Object.assign({}, state, {status: action.payload.status});

        case ActionTypes.ERROR:
            return Object.assign({}, state, {error: action.payload.error});

        default:
            return state;
    }
}