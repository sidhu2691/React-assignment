// bootstraping

import React from "react";

import {render} from "react-dom";

import Routes from "./app/Routes";

import {createStore} from "redux";

import {Provider} from "react-redux";
import {combineReducers, applyMiddleware} from 'redux';

import thunk from "redux-thunk";

import StateListReducer from "./app/States/State/StateListReducer";
import StateEditReducer from "./app/States/State/StateEditReducer";
import StateViewReducer from "./app/States/State/StateViewReducer";

function loggerMiddleware(store) {
        return function(next) {
            return function(action) {
                console.log("LOGGER", action, typeof action);
                //forward action to next middleware or reducers
                let result = next(action);
                return result;
            }
        }
    }


const rootReducers = combineReducers({

       stateState: StateListReducer,
       stateViewState: StateViewReducer,
       stateEditState: StateEditReducer
    
    })
    
const store = createStore(rootReducers, applyMiddleware(loggerMiddleware, thunk));


//bind virtual dom to real dom

//render => diffing, patching real dom

render(
        <Provider store= {store}>
                <Routes />
        </Provider>, //virtual dom
        document.getElementById("root") //real dom
)