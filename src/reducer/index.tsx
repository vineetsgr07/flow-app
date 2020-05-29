import { combineReducers } from "redux";
import workflow from "./workflow.reducer";
import node from "./node.reducer";

export default combineReducers({
    workflow,
    node
})