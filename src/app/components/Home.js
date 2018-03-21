import React, {components} from "react";
import PropTypes from "prop-types";


export default class Home extends React.Component {

    
render() {  
    console.log("Home render");
    return (
    <div className="home-cont">
        <p>Welcome to react tutorials</p>
    </div>
    );
}
}
