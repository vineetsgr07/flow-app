import PropTypes from 'prop-types'
export interface workFlowDetails {
    name: PropTypes.string
    status: PropTypes.string
    content?: PropTypes.string
    id: string
}
export interface NodeTaskT {
    workFlowID: number 
    title: string
    content: string
    nodes: any
}
