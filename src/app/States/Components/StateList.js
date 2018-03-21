import React, {Component} from "react";
import PropTypes from "prop-types";
import {NavLink} from 'react-router-dom';
// import CompanyProfile from "./CompanyProfile";
// import Team from "./Team";
export default class StateList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchStateList()
    }

    // viewStateInfo(id) {
    //     //this.props.fetchStateList(id);
    // }

    render() {
        console.log("render about component");
        let statelist = this.props.statelist || [];
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
                <table >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Code</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            statelist.map( state => ( 

                                <tr key={state.id}>
                                    <td>{state.id}</td>
                                    <td>{state.code}</td>
                                    <td>{state.name}</td>
                                    <td><NavLink to={`/states/view/${state.id}`} className="button">View</NavLink><NavLink to={`/states/edit/${state.id}`} className="button">Edit</NavLink></td>
                                    
                                </tr>

                            
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        )
    }
}