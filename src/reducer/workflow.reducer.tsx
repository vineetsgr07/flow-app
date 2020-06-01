import { workFlowDetails } from "../type";
import * as actions from "../action/workflow.action";
import { NODE_STATUS } from "./node.reducer";

const initialState = {
    items: [],
    filterItems: []
}

const workflow = (state = initialState, action: any) => {
    switch (action.type) {

        case actions.ADD_WORKFLOW:
            return {
                ...state,
                items: [...state.items, {
                    id: action.id,
                    name: `${action.text} ${action.id}`,
                    status: 'PENDING'
                }],
                filterItems: [...state.items, {
                    id: action.id,
                    name: `${action.text} ${action.id}`,
                    status: 'PENDING'
                }]
            }

        case 'DELETE_WORKFLOW':
            const newState = state.items.filter((x: any) => x.id !== action.id)
            const newfilterItemsState = state.filterItems.filter((x: any) => x.id !== action.id)
            return { ...state, items: newState, filterItems: newfilterItemsState }

        case actions.FILTER_WORKFLOW:
            const filter = state.items.filter((item: workFlowDetails) =>
                item.name.toLocaleLowerCase().includes(action.text.toLocaleLowerCase())
            )
            return { ...state, filterItems: filter };

        case actions.CHANGE_WORKFLOW_STATUS:
            let transformWorkflow = state.items.map((task: any) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        status: nextStatus(task.status)
                    }
                } return task
            })
            return { ...state, items: transformWorkflow }

        case 'EDIT_WORKFLOW_TITLE':
            const transFormFlowTitle = state.items.map((flow: any) => {
                if (flow.id == action.id) {
                    return {
                        ...flow,
                        name: action.text
                    }
                } else {
                    return flow
                }
            })
            
            return {
                items: transFormFlowTitle,
                filterItems:transFormFlowTitle
            }

        default:
            return state
    }
}

function nextStatus(status: string) {
    switch (status) {
        case NODE_STATUS[0]:
            return NODE_STATUS[2]
        case NODE_STATUS[2]:
            return NODE_STATUS[0]
    }
}

export default workflow