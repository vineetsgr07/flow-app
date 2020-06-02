import { workFlowDetailsT } from "../type";
import * as action from "./actionsCreators";
import { addFirstNode } from "./node.action";
import { toastSuccess, toastInfo } from "../components/Toaster";

let nextWorkflow = 0

export const addWorkflow = (text: workFlowDetailsT) => (dispatch: any) => {
    let flowId = nextWorkflow++;
    dispatch({ type: action.ADD_WORKFLOW, id: flowId, text });
    dispatch(addFirstNode(flowId));
}

export const filterWorkflow = (text: string) => (dispatch: any) => {
    dispatch({ type: action.FILTER_WORKFLOW, text })
}

export const deleteWorkflow = (id: number) => (dispatch: any) => {
    dispatch({ type: action.DELETE_WORKFLOW, id: id })
    dispatch({ type: action.DELETE_NODE, id })
    toastInfo(`Workflow deleted.`)
}

export const editWorkflowTitle = (id: number) => (dispatch: any) => {
    dispatch({ type: action.EDIT_WORKFLOW_STATUS, id })
}

export const changeWorkflowStatus = (id: number) => (dispatch: any, getState: any) => {
    let isComplete = getState().node.NodeList
        .filter((node: any) => node.workFlowID === id)[0].nodes
        .filter((node: any) => node.status !== 'COMPLETE');
    if (isComplete.length === 0) {
        dispatch({ type: action.CHANGE_WORKFLOW_STATUS, id })
    } else {
        toastInfo(`Please complete related task .`)
    }
}

export const setPendingWorflow = (id: number) => (dispatch: any, getState: any) => {
    dispatch({ type: action.SET_PENDING_WORKFLOW, id })
}