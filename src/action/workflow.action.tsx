import { workFlowDetails } from "../type";
import * as action from "./actionsCreators";
import { addFirstNode } from "./node.action";

let nextWorkflow = 0

export const addWorkflow = (text: workFlowDetails) => {
    return (dispatch: any) => {
        let flowId = nextWorkflow++;
        dispatch({ type: action.ADD_WORKFLOW, id: flowId, text });
        dispatch(addFirstNode(flowId));
    }
}

export const filterWorkflow = (text: string) => {
    return (dispatch: any) => {
        dispatch({ type: action.FILTER_WORKFLOW, text })
    }
}

export const deleteWorkflow = (id: number) => {
    return (dispatch: any) => {
        dispatch({ type: action.DELETE_WORKFLOW, id: id })
        dispatch({ type: action.DELETE_NODE, id })
    }
}

export const editWorkflowTitle = (id: number) => {
    return (dispatch: any) => {
        dispatch({ type: action.EDIT_WORKFLOW_STATUS, id })
    }
}

export const changeWorkflowStatus = (id: number) => {
    return (dispatch: any, getState: any) => {
        
        let isComplete = getState().node.NodeList
            .filter((node: any) => node.workFlowID === id)[0].nodes
            .filter((node: any) => node.status !== 'COMPLETE');
        if (isComplete.length === 0) {
            dispatch({ type: action.CHANGE_WORKFLOW_STATUS, id })
        }

    }
}