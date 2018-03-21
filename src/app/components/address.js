import React, {components} from "react";
import PropTypes from "prop-types";


export default class Address extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        
        return(
            <div className="address-cont">
            <div className="head-office-cont">
                <h2>Address List for Head office</h2>
                <p>Street: <label>{this.props.source.headoff.Street}</label> </p>
                <p>City: <label>{this.props.source.headoff.City}</label> </p>
                <p>Pincode: <label>{this.props.source.headoff.Pincode}</label> </p>
                <p>Phone-number: <label>{this.props.source.headoff['Phone-number']}</label> </p>

            </div>
            <div className="branch-office-cont">
            <h2>Address List for Branch office</h2>
            <p>Street: <label>{this.props.source.branchoff.Street}</label> </p>
            <p>City: <label>{this.props.source.branchoff.City}</label> </p>
            <p>Pincode: <label>{this.props.source.branchoff.Pincode}</label> </p>
            <p>Phone-number: <label>{this.props.source.branchoff['Phone-number']}</label> </p>

        </div>
        </div>
)
    }
}

