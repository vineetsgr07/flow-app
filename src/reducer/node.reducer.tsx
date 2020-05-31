import * as actions from "../action/node.action";
import { NodeTaskT } from "../type";

interface nodeREducer {
    NodeList: Array<NodeTaskT>
    selectedNode: NodeTaskT
}

const initialState: nodeREducer = {
    NodeList: [],
    selectedNode: { workFlowID: 0, title: '', content: '', nodes: [] }
}

const NODE_STATUS = ['COMPLETE', "INPROGRESS", "PENDING"]

const Node = (state = initialState, action: any) => {
    switch (action.type) {

        case actions.ADD_FIRST_NODE:
            return {
                ...state,
                NodeList: [...state.NodeList, {
                    workFlowID: action.flowId,
                    nodes: [{
                        id: action.id,
                        name: "Task",
                        status: 'PENDING'
                    }]
                }]
            }

        case actions.SET_CURRENT_NODE:
            let filterSelectedNode = state.NodeList.filter(node => node.workFlowID === action.flowId).pop()
            return { ...state, selectedNode: filterSelectedNode }

        case actions.ADD_NOTE:
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
                    nodes: shuffle(state.selectedNode.nodes)
                }
            }

        case actions.DELETE_NODE:
            const newState = state.NodeList.filter((x: any) => x.id !== action.id)
            return { ...state, NodeList: newState }

        case actions.SAVE_NODE:
            const tansformNodeList = state.NodeList.map(node => {
                if (node.workFlowID === state.selectedNode.workFlowID) {
                    return state.selectedNode;
                } else {
                    return node
                }
            })
            const tansformNodeListCopy = JSON.parse(JSON.stringify(tansformNodeList));
            return { ...state, NodeList: tansformNodeListCopy }

        case actions.CHANGE_STATUS:
            const transformNode = state.selectedNode.nodes.map((node: any) => {
                if (action.id === node.id) {
                    return {
                        ...node,
                        status: nextStatus(node.status)
                    }
                } else {
                    return node
                }
            })
            return { ...state, selectedNode: { workFlowID: state.selectedNode.workFlowID, nodes: transformNode } }

        case actions.EDIT_NODE_TITLE:
            return
        case actions.EDIT_NODE_CONTENT:
            return
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