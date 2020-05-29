

export const SHUFFLE_NODE = 'SHUFFLE_NODE'
export const shuffleNode = () => ({ type: SHUFFLE_NODE })

export const DELETE_NODE = 'DELETE_NODE'
export const deleteNode = () => ({ type: DELETE_NODE })

export const ADD_NOTE = 'ADD_NOTE'
export const addNote = () => ({ type: ADD_NOTE })

export const SAVE_NODE = 'SAVE_NODE'
export const saveNode = (id: number) => ({
    type: SAVE_NODE,
    id
})

export const CHANGE_STATUS = 'SAVE_NODE'
export const changeNodeStatus = () => ({
    type: CHANGE_STATUS
})

export interface NodeTextT {
    id: string
    text: string
}
export const EDIT_NODE_TITLE = 'EDIT_NODE_TITLE'
export const editNodeTitle = () => ({
    type: EDIT_NODE_TITLE
})

export const EDIT_NODE_CONTENT = 'EDIT_NODE_CONTENT'
export const editNodeContent = ({ id, text }: NodeTextT) => ({
    type: EDIT_NODE_CONTENT
})