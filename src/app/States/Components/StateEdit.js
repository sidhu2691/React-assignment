import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
export default class StateList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            name: ""
        }
    }

    componentDidMount() {
        this.inputElem.focus();
        this.props.fetchStateEdit(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            code: nextProps.stateedit.code,
            name: nextProps.stateedit.name
        })

    }
    onHandleChangeCode(e) {
        console.log(e.target.value);
        
        this.setState({
            code: e.target.value
        })
    }
    onHandleChangeName(e) {
        console.log(e.target.value);
        
        this.setState({
            name: e.target.value
        })
    }
    updateChanges() {
        let stateInfo = {'code': this.state.code, 'name': this.state.name, 'id': this.props.match.params.id};
        let a  = this.props.updateStateChanges(stateInfo);
       
    }

    render() {

        let stateedit = this.props.stateedit || [];
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

         if(stateedit.updateState) {
            <Redirect to='/states'/>
         }
        
       
        return (
            <div>
                <h3>
                    <label>Code</label>: <input type="text" value={this.state.code}
                    onChange={(e) => this.onHandleChangeCode(e) } 
                    ref={(elem) => this.inputElem = elem} />
                </h3>
                <h3>
                    <label>Name</label>: <input type="text" value={this.state.name} 
                    onChange={(e) => this.onHandleChangeName(e) } 
                    ref={(elem) => this.inputElem = elem} 
                    />
                </h3>
                <button onClick={() => this.updateChanges()}>UPDATE</button>
            </div>

         )
    }


}