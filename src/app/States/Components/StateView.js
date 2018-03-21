import React, {Component} from "react";
import PropTypes from "prop-types";

export default class StateList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
       // this.props.fetchStateView(this.props.match.params.id);
    }

    render() {

        let stateview = this.props.stateview || [];
        let status = this.props.status;
        let error = this.props.error;

         if(status) {
             return (
             <div>
                <h2> loading.. </h2>
                <img src="/assets/loading.gif" />
            </div>
             )
         }
        
       
        return (
            <div>
                <h3>
                    <label>ID</label>: {this.props.stateview ? this.props.stateview.id: ""}
                </h3>
                <h3>
                    <label>Code</label>: {this.props.stateview ? this.props.stateview.code: ""}
                </h3>
                <h3>
                    <label>Name</label>: {this.props.stateview ? this.props.stateview.name: ""}
                </h3>
            </div>

         )
    }


}