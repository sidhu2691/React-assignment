import {connect} from "react-redux";
 
import StateList from "../Components/StateList";
import * as actions from "../State/Action";

const mapStateToProps = (state) => {
    return {
         statelist: state.stateState.statelist,
         //status: state.teamState.status, //loading
         //error: state.teamState.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("Manikkkkk");
    return {
       fetchStateList: function() {
            let actionFn = actions.fetchStateList();
            dispatch(actionFn);

       }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateList)