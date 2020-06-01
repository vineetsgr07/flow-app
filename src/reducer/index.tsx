import { combineReducers } from "redux";
import workflow from "./workflow.reducer";
import node from "./node.reducer";
import { reducer as toastrReducer } from 'react-redux-toastr';

export default combineReducers({
    workflow,
    node,
    toastr: toastrReducer
})