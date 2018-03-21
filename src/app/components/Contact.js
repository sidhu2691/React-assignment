import React, {components} from "react";
import PropTypes from "prop-types";
import Address from "./address"

export default class Contact extends React.Component {

    render() {  
        console.log("Contact render calling");
        const addcollection = {
            "headoff" :{
                
                    'Street': 'Sector 30', 
                    'City': 'Gurugram',
                    'Pincode': '122001',
                    'Phone-number': '0124-123456'
        
            },

                "branchoff" :
                    {
                        'Street': 'Sector 31',
                        'City': 'Gurugram',
                        'Pincode': '122001',
                        'Phone-number': '0124-123456'
        
                    }
        }
    
        // JSON.stringify (addcollection)

        return (
        <div className="Conatct-cont">
            <p>Welcome to Contact us</p>
            <Address source = {addcollection}/>
            
        </div>
        );
    }

}