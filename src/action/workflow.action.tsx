import { workFlowDetails } from "../type";

let nextWorkflow = 0

export const ADD_WORKFLOW = 'ADD_WORKFLOW'
export const addWorkflow = (text: workFlowDetails) => ({
    type: ADD_WORKFLOW,
    id: nextWorkflow++,
    text
})

export const FILTER_WORKFLOW = 'FILTER_WORKFLOW'
export const filterWorkflow = (text: string) => ({ type: FILTER_WORKFLOW, text })

export const DELETE_WORKFLOW = 'DELETE_WORKFLOW'
export const deleteWorkflow = (id: number) => ({ type: DELETE_WORKFLOW, id: id })

export const EDIT_WORKFLOW_STATUS = 'EDIT_WORKFLOW_STATUS'
export const editWorkflowTitle = (id: number) => ({ type: EDIT_WORKFLOW_STATUS, id })

export const CHANGE_STATUS = 'CHANGE_STATUS'
export const changeWorkflowStatus = () => ({ type: CHANGE_STATUS })
