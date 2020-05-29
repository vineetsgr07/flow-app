import { SHUFFLE_NODE, DELETE_NODE, ADD_NOTE, SAVE_NODE, CHANGE_STATUS, EDIT_NODE_CONTENT, EDIT_NODE_TITLE } from "../action/node.action";


const Node = (state = [], action: any) => {
    switch (action.type) {
        case SHUFFLE_NODE:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.text,
                    completed: false
                }
            ]
        case DELETE_NODE:
            return
        case ADD_NOTE:
            return
        case SAVE_NODE:
            return
        case CHANGE_STATUS:
            return
        case EDIT_NODE_TITLE:
            return
        case EDIT_NODE_CONTENT:
            return
        default:
            return state
    }
}

export default Node