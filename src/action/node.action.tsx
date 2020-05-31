

export let nextNode = 0

export const ADD_FIRST_NODE = 'ADD_FIRST_NODE'
export const addFirstNode = (workflowId: number) => (dispatch: any) => {
    dispatch({ type: ADD_FIRST_NODE, id: nextNode++, flowId: workflowId })
}

export const SET_CURRENT_NODE = 'SET_CURRENT_NODE';
export const setCurrentNodee = (flowId: number) => (dispatch: any) => {
    dispatch({ type: SET_CURRENT_NODE, flowId })
}

export const SHUFFLE_NODE = 'SHUFFLE_NODE'
export const shuffleNode = () => (dispatch: any) => {
    dispatch({ type: SHUFFLE_NODE })
}

export const DELETE_NODE = 'DELETE_NODE'
export const deleteNode = () => (dispatch: any) => {
    dispatch({ type: DELETE_NODE })
}

export const ADD_NOTE = 'ADD_NOTE'
export const addNode = () => (dispatch: any) => {
    dispatch({ type: ADD_NOTE, id: nextNode++ })
}

export const SAVE_NODE = 'SAVE_NODE'
export const saveNode = () => (dispatch: any) => {
    dispatch({ type: SAVE_NODE })
}

export const CHANGE_STATUS = 'CHANGE_STATUS'
export const changeNodeStatus = (id: number) => (dispatch: any) => {
    dispatch({ type: CHANGE_STATUS, id })
}

export interface NodeTextT {
    id: string
    text: string
}
export const EDIT_NODE_TITLE = 'EDIT_NODE_TITLE'
export const editNodeTitle = () => (dispatch: any) => {
    dispatch({ type: EDIT_NODE_TITLE })
}

export const EDIT_NODE_CONTENT = 'EDIT_NODE_CONTENT'
export const editNodeContent = (id: number, text: string) => (dispatch: any) => {
    dispatch({
        type: EDIT_NODE_CONTENT
    })
}
