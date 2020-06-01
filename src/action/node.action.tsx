import * as action from "./actionsCreators";
import { toastSuccess, toastInfo } from "../components/Toaster";

export let nextNode = 1

export const addFirstNode = (workflowId: number) => (dispatch: any) => {
    dispatch({ type: action.ADD_FIRST_NODE, id: nextNode++, flowId: workflowId })
    toastSuccess(`Workflow ${workflowId} added.`)
}

export const setCurrentNode = (flowId: number) => (dispatch: any) => {
    dispatch({ type: action.SET_CURRENT_NODE, flowId })
}

export const shuffleNode = () => (dispatch: any) => {
    dispatch({ type: action.SHUFFLE_NODE })
    toastInfo(`Workflow Shuffle.`)
}

export const deleteLastNode = () => (dispatch: any) => {
    dispatch({ type: action.DELETE_LAST_NODE })
    toastInfo(`Last Node Deleted.`)
}

export const addNode = (text: string) => (dispatch: any) => {
    dispatch({ type: action.ADD_NODE, id: nextNode++, text })
    toastSuccess(`Node Added.`)
}

export const saveNode = () => (dispatch: any, getState: any) => {
    let seletedFlowName = getState().node.selectedNode.workFlowName
    let seletedFlowId = getState().node.selectedNode.workFlowID

    dispatch({ type: action.SAVE_NODE })
    dispatch({ type: action.EDIT_WORKFLOW_TITLE, seletedFlowName, seletedFlowId })
    toastSuccess(`Node Save.`)
}

export const changeNodeStatus = (id: number) => (dispatch: any, getState: any) => {
    let seletedFlowId = getState().node.selectedNode.workFlowID

    dispatch({ type: action.CHANGE_STATUS, id })
    dispatch({ type: action.SET_PENDING_WORKFLOW, seletedFlowId })
}

export const editFlowTitle = (text: string) => (dispatch: any, getState: any) => {
    let id = getState().node.selectedNode.workFlowID;
    dispatch({ type: action.EDIT_FLOW_TITLE, text, id })
    dispatch({ type: action.EDIT_WORKFLOW_TITLE, text, id });
}

export const editNodeTitle = (nodeId: number, title: string) => (dispatch: any) => {
    dispatch({ type: action.EDIT_NODE_TITLE, nodeId, title })
}

export const editNodeContent = (nodeId: number, content: string) => (dispatch: any) => {
    dispatch({ type: action.EDIT_NODE_CONTENT, nodeId, content })
}

export const clearSelectedNode = () => (dispatch: any) => {
    dispatch({
        type: action.CLEAR_SELECTED_NODE
    })
}
