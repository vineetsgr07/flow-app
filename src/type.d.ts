import PropTypes from 'prop-types'
export interface workFlowDetails {
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