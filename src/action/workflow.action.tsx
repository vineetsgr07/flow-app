import { workFlowDetails } from "../type";

let nextWorkflow = 0

export const ADD_WORKFLOW = 'ADD_WORKFLOW'
export const addWorkflow = (text: workFlowDetails) => {
    return {
        type: ADD_WORKFLOW,
        id: nextWorkflow++,
        text
    }
}

export const FILTER_WORKFLOW = 'FILTER_WORKFLOW'
export const filterWorkflow = (text: string) => ({
    type: FILTER_WORKFLOW,
    id: nextWorkflow++,
    text
})

export const DELETE_WORKFLOW = 'DELETE_WORKFLOW'
export const deleteWorkflow = (id: number) => {
    return {
        type: DELETE_WORKFLOW,
        id: id
    }
}