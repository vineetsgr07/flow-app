export let nextNode = 1

export const ADD_FIRST_NODE = 'ADD_FIRST_NODE'
export const addFirstNode = (workflowId: number) => (dispatch: any) => {
    dispatch({ type: ADD_FIRST_NODE, id: nextNode++, flowId: workflowId })
}

export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export const setCurrentNode = (flowId: number) => (dispatch: any) => {
    dispatch({ type: SET_CURRENT_NODE, flowId })
}

export const SHUFFLE_NODE = 'SHUFFLE_NODE'
export const shuffleNode = () => (dispatch: any) => {
    dispatch({ type: SHUFFLE_NODE })
}

export const DELETE_LAST_NODE = 'DELETE_LAST_NODE'
export const deleteLastNode = () => (dispatch: any) => {
    dispatch({ type: DELETE_LAST_NODE })
}

export const DELETE_NODE = 'DELETE_NODE'
// export const deleteNode = () => (dispatch: any) => {
//     dispatch({ type: DELETE_NODE })
// }

export const ADD_NODE = 'ADD_NODE'
export const addNode = (text: string) => (dispatch: any) => {
    dispatch({ type: ADD_NODE, id: nextNode++, text })
}

export const SAVE_NODE = 'SAVE_NODE'
export const saveNode = () => (dispatch: any, getState: any) => {
    let seletedFlowName = getState().node.selectedNode.workFlowName
    let seletedFlowId = getState().node.selectedNode.workFlowID

    dispatch({ type: SAVE_NODE })
    dispatch({ type: 'EDIT_WORKFLOW_TITLE', seletedFlowName, seletedFlowId })
}

export const CHANGE_STATUS = 'CHANGE_STATUS'
export const changeNodeStatus = (id: number) => (dispatch: any) => {
    dispatch({ type: CHANGE_STATUS, id })
}

export interface NodeTextT {
    id: string
    text: string
}


export const EDIT_FLOW_TITLE = 'EDIT_FLOW_TITLE'
export const editFlowTitle = (text: string) => (dispatch: any, getState: any) => {
    let id = getState().node.selectedNode.workFlowID;
    dispatch({ type: EDIT_FLOW_TITLE, text, id })
    dispatch({ type: 'EDIT_WORKFLOW_TITLE', text, id });
}

export const EDIT_NODE_TITLE = 'EDIT_NODE_TITLE'
export const editNodeTitle = (nodeId: number, title: string) => (dispatch: any) => {
    dispatch({ type: EDIT_NODE_TITLE, nodeId, title })
}

export const EDIT_NODE_CONTENT = 'EDIT_NODE_CONTENT'
export const editNodeContent = (nodeId: number, content: string) => (dispatch: any) => {
    dispatch({ type: EDIT_NODE_CONTENT, nodeId, content })
}

export const CLEAR_SELECTED_NODE = 'CLEAR_SELECTED_NODE';
export const clearSelectedNode = () => (dispatch: any) => {
    dispatch({
        type: CLEAR_SELECTED_NODE
    })
}
