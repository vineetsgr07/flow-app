import { workFlowDetails } from "../type";
import { addFirstNode, DELETE_NODE } from "./node.action";

let nextWorkflow = 0

export const ADD_WORKFLOW = 'ADD_WORKFLOW'
export const addWorkflow = (text: workFlowDetails) => {
    return (dispatch: any) => {
        let flowId = nextWorkflow++;
        dispatch({ type: ADD_WORKFLOW, id: flowId, text });
        dispatch(addFirstNode(flowId));
    }
}

export const FILTER_WORKFLOW = 'FILTER_WORKFLOW'
export const filterWorkflow = (text: string) => {
    return (dispatch: any) => {
        dispatch({ type: FILTER_WORKFLOW, text })
    }
}

export const DELETE_WORKFLOW = 'DELETE_WORKFLOW'
export const deleteWorkflow = (id: number) => {
    return (dispatch: any) => {
        dispatch({ type: DELETE_WORKFLOW, id: id })
        dispatch({ type: DELETE_NODE, id })
    }
}

export const EDIT_WORKFLOW_STATUS = 'EDIT_WORKFLOW_STATUS'
export const editWorkflowTitle = (id: number) => {
    return (dispatch: any) => {
        dispatch({ type: EDIT_WORKFLOW_STATUS, id })
    }
}

export const CHANGE_WORKFLOW_STATUS = 'CHANGE_WORKFLOW_STATUS'
export const changeWorkflowStatus = (id: number) => {
    return (dispatch: any, getState: any) => {
        
        let isComplete = getState().node.NodeList
            .filter((node: any) => node.workFlowID === id)[0].nodes
            .filter((node: any) => node.status !== 'COMPLETE');
        if (isComplete.length === 0) {
            dispatch({ type: CHANGE_WORKFLOW_STATUS, id })
        }

    }
}
