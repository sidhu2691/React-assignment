import React from "react";


import Header from "./components/Header"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export class App extends React.Component {
    
    render() {
        console.log("App render",this.props.children);
        return(
            <div> 
                <Header/>               
                {this.props.children}
            </div>
        )
        
    }
}  