import * as actions from "../action/node.action";
import { NodeTaskT, nodeDetailsT } from "../type";

interface nodeREducer {
    NodeList: Array<NodeTaskT>
    selectedNode: NodeTaskT
}

const initialState: nodeREducer = {
    NodeList: [],
    selectedNode: { workFlowID: 0, title: '', content: '', nodes: [] }
}

export const NODE_STATUS = ['COMPLETE', "INPROGRESS", "PENDING"]

const Node = (state = initialState, action: any) => {
    switch (action.type) {

        case actions.ADD_FIRST_NODE:
            return {
                ...state,
                NodeList: [...state.NodeList, {
                    workFlowID: action.flowId,
                    workFlowName: `Workflow ${action.flowId}`,
                    nodes: [{
                        name: `Node ${action.id}`,
                        id: action.id,
                        status: 'PENDING'
                    }]
                }]
            }

        case actions.SET_CURRENT_NODE:
            let filterSelectedNode = state.NodeList.filter(node => node.workFlowID === action.flowId).pop()
            return { ...state, selectedNode: filterSelectedNode }

        case actions.ADD_NODE:
            return {
                ...state,
                selectedNode: {
                    ...state.selectedNode,
                    nodes: [...state.selectedNode.nodes, {
                        id: action.id,
                        name: `${action.text} ${action.id}`,
                        status: 'PENDING'
                    }]
                }
            }

        case actions.SHUFFLE_NODE:
            return {
                ...state,
                selectedNode: {
                    ...state.selectedNode,
                    nodes: JSON.parse(JSON.stringify(shuffle(state.selectedNode.nodes)))
                }
            }

        case actions.DELETE_NODE:
            const newState = state.NodeList.filter((x: any) => x.workFlowID !== action.id)
            return { ...state, NodeList: newState }

        case actions.DELETE_LAST_NODE:
            if (state.selectedNode.nodes.length === 1) return state;
            state.selectedNode.nodes.pop()
            return {
                ...state, selectedNode: {
                    ...state.selectedNode,
                    nodes: JSON.parse(JSON.stringify(shuffle(state.selectedNode.nodes)))
                }
            }

        case actions.SAVE_NODE:
            const tansformNodeList = state.NodeList.map(node => (node.workFlowID === state.selectedNode.workFlowID) ? state.selectedNode : node)
            const tansformNodeListCopy = JSON.parse(JSON.stringify(tansformNodeList));
            return { ...state, NodeList: tansformNodeListCopy }

        case actions.CHANGE_STATUS:
            const transformNode = state.selectedNode.nodes.map((node: any) =>
                (action.id === node.id) ? {
                    ...node, status: nextStatus(node.status)
                } : node)
            return { ...state, selectedNode: { ...state.selectedNode, nodes: transformNode } }

        case actions.EDIT_FLOW_TITLE:
            const transformNodeListTitle = state.NodeList.map((node: any) =>
                (action.id === node.workFlowID) ? {
                    ...node, workFlowName: action.text
                } : node)
            return { ...state, NodeList: transformNodeListTitle, selectedNode: { ...state.selectedNode, workFlowName: action.text } }

        case actions.EDIT_NODE_TITLE:
            const editNodeTitle = state.selectedNode.nodes.map((node: nodeDetailsT) => (node.id === action.nodeId) ? { ...node, name: action.title } : node)
            return { ...state, selectedNode: { ...state.selectedNode, nodes: editNodeTitle } }

        case actions.EDIT_NODE_CONTENT:
            const editNodeContent = state.selectedNode.nodes.map((node: nodeDetailsT) => (node.id === action.nodeId) ? { ...node, content: action.content } : node)
            return { ...state, selectedNode: { ...state.selectedNode, nodes: editNodeContent } }

        case actions.CLEAR_SELECTED_NODE:
            return { ...state, selectedNode: [] }

        default:
            return state
    }
}

function shuffle(array: any) {
    const randomArray = array.sort(() => Math.random() - 0.5);
    return randomArray;
}

function nextStatus(status: string) {
    switch (status) {
        case NODE_STATUS[0]:
            return NODE_STATUS[1]
        case NODE_STATUS[1]:
            return NODE_STATUS[2]
        case NODE_STATUS[2]:
            return NODE_STATUS[0]
    }
}

export default Node