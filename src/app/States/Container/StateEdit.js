import {connect} from "react-redux";
 
import StateEdit from "../Components/StateEdit";
import * as actions from "../State/Action";

const mapStateToProps = (state) => {
    return {
        stateedit: state.stateEditState.stateedit,
         status: state.stateEditState.status, //loading
         error: state.stateEditState.error,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       fetchStateEdit: function(id) {
            let actionFn = actions.fetchStateEdit(id);
            dispatch(actionFn);

       },
       updateStateChanges: function (stateInfo) {
            let actionFn = actions.updateStateChanges(stateInfo);
            dispatch(actionFn);

        }
    }
}

export default connect(mapStateToProps, 
                    mapDispatchToProps) (StateEdit)