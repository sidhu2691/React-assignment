
import React from "react";
import { BrowserRouter as Router,
Route, 
 Switch,
 } from "react-router-dom";

import {App} from "./App";
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact";
import StateList from "./States/Container/StateList"

export default function Routes(props) {
        return (
            <Router>
                <App >
                   <Switch>
                        <Route exact path="/"  component={Home} />
                        <Route exact path="/about"   component={About} />
                        <Route exact path="/contact"   component={Contact} />
                        <Route exact path="/state"   component={StateList} />
                    </Switch>
                </App>
            </Router>
        )
    }