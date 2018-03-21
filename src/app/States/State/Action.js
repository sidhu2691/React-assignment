import * as ActionTypes from "./action-types";
import * as service from "./service"

export function initStateList(statelist){
    return {
        type: ActionTypes.INIT_STATELIST,
        payload: {
            statelist: statelist
        }
    }
}

export function initStateView(stateview){
    return {
        type: ActionTypes.INIT_STATEVIEW,
        payload: {
            stateview: stateview
        }
    }
}

export function initStateEdit(stateedit){
    return {
        type: ActionTypes.INIT_STATEEDIT,
        payload: {
            stateedit   : stateedit
        }
    }
}


export function loading(status){
    return {
        type: ActionTypes.LOADING,
        payload: {
            status: status
        }
    }
}
//return action as object.

export function initError(error) {
    return {
        type: ActionTypes.ERROR,
        payload: {
            error: error
        }
    }
}

//ASYNC Calls, actions
// as per thunk, returns action as function
export function fetchStateList() {
    // called by thunk
    return function(dispatch ){
        console.log("Called by thunk");
        //ajax call
        // fetch(...).then((products) => dispatch(products));
        dispatch(loading(true));
        service.getStateList()
        .then (statelist => { 
            console.log(statelist)
            let action = initStateList(statelist);
            //action object
            dispatch(action);
            dispatch(loading(false));
        })
    }
}

//ASYNC Calls, actions
// as per thunk, returns action as function
export function fetchStateView(id) {
    // called by thunk
    return function(dispatch ){
        console.log("Called by thunk");
        //ajax call
        // fetch(...).then((products) => dispatch(products));
        dispatch(loading(true));
        service.getStateView(id)
        .then (stateview => { 
            console.log(stateview)
            let action = initStateView(stateview);
            //action object
            dispatch(action);
            dispatch(loading(false));
        })
    }
}

//ASYNC Calls, actions
// as per thunk, returns action as function
export function fetchStateEdit(id) {
    debugger;
    // called by thunk
    return function(dispatch ){
        console.log("Called by thunk");
        //ajax call
        // fetch(...).then((products) => dispatch(products));
        dispatch(loading(true));
        service.getStateView(id)
        .then (stateedit => { 
            console.log(stateedit)
            let action = initStateEdit(stateedit);
            //action object
            dispatch(action);
            dispatch(loading(false));
        })
    }
}

//ASYNC Calls, actions
// as per thunk, returns action as function
export function updateStateChanges(stateInfo) {
    // called by thunk
    return function(dispatch ){
        console.log("Called by thunk");
        //ajax call
        // fetch(...).then((products) => dispatch(products));
        dispatch(loading(true));
        service.updateStateChanges(stateInfo)
        .then (stateupdate => { 
            // console.log(stateupdate)
            stateupdate = Object.assign({}, stateupdate, {updateState: true});
            
            let action = initStateEdit(stateupdate);
            // //action object
             dispatch(action);
             
            dispatch(loading(false));
        })
    }
}