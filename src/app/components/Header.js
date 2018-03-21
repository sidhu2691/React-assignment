import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

import {NavLink} from 'react-router-dom';

export default class Header extends Component{
    constructor() {
        super(); //MUST
        console.log("Header created");
    }
        render(){
            console.log("Header created")
            return(
                <div className="header-cont">
                    <NavLink to="/" exact className="button" activeClassName="success">Home</NavLink>
                    <NavLink to="/about" exact className="button" activeClassName="success">About US</NavLink>
                    <NavLink to="/contact" exact className="button" activeClassName="success">Contact US</NavLink>
                    <NavLink to="/state" exact className="button" activeClassName="success">States</NavLink>
                </div>

            )

        }

}