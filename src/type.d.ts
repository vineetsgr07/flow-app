import PropTypes from 'prop-types'
export interface workFlowDetailsT {
    name: PropTypes.string
    status: PropTypes.string
    content?: PropTypes.string
    id: number
}

export interface nodeDetailsT {
    name: PropTypes.string
    status: PropTypes.string
    content: PropTypes.string
    id: number
}
export interface NodeTaskT {
    workFlowID: number 
    title: string
    content: string
    nodes: any
}

export interface NodeTextT {
    id: string
    text: string
}

export interface NodeT {
    shuffle: () => void
    remove: () => void
    add: () => void
    setCurrentNode: (id: number) => void
    save: () => void
    toggleStatus: (id: number) => void
    editContent: (id: number, text: string) => void
    editTitle: (id: number, text: string) => void
    editFlowTitle: (flowName: any) => void
    clearSelectedNode: () => void
    selectedNode: any
    history: any
    workFlowName: string
}

export interface cardT {
    item: workFlowDetails
    handler: any
}


export interface workflowT {
    add: (addWorkflow: any) => void
    filter: (addWorkflow: any) => void
    remove: (id: number) => void
    editTitle: (title: string) => void
    toggleStatus: (id: number) => void
    workflow: any
    history: any
}

export interface WorkflowOperationsT {
    createWorkflow: () => void
    filterWorkflow: (querry: string) => void
}


export interface CardHandlerT {
    route: (id: number) => void
    remove: (id: number) => void
    editTitle: () => void
    toggleStatus: (id: number) => void
}

export interface cardWorkfllowT {
    item: workFlowDetailsT
    handler: CardHandlerT
}

export interface nodeREducerT {
    NodeList: Array<NodeTaskT>
    selectedNode: NodeTaskT
}
