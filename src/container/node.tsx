import React, { useEffect } from "react";
import { connect } from "react-redux";
import './style.css';
import { Cards } from "../components/Card";
import * as actions from "../action/node.action";
import { workFlowDetails, NodeTaskT } from "../type";
import StatusBtn from "../components/Button/status";

interface NodeT {
    shuffle: () => void
    remove: () => void
    add: () => void
    setCurrentNode: (id: number) => void
    save: () => void
    toggleStatus: (id: number) => void
    editContent: (id: number, text: string) => void
    editTitle: (string: any) => void
    NodeList: any
    history: any
}

const Node = ({ shuffle, remove, add, save, NodeList, toggleStatus, editContent, editTitle, setCurrentNode, history }: NodeT) => {

    useEffect(() => {
        let selectedFlow = parseInt(history.location.pathname.split('/')[2]);
        setCurrentNode(selectedFlow)
    }, [])

    return <div>
        <NodeOperation
            shuffle={shuffle}
            deleteNode={remove}
            addNode={() => add()}
            save={save}
        />
        <Cards
            items={NodeList}
        >
            {(task: any) => {
                return <NodeCard
                    item={task}
                    handler={{
                        toggleStatus: (id: number) => toggleStatus(id),
                        editTitle: (id: string) => editTitle(id),
                        editContent: (id: number, text: string) => editContent(id, text)
                    }} />
            }}
        </Cards>
    </div>
}

interface cardP {
    item: workFlowDetails
    handler: any
}

const NodeCard = ({ item: { name, status, content, id }, handler: { toggleStatus } }: cardP) => {

    console.log("id", id)
    return <>
        <div className="card-node">
            <StatusBtn
                statusHandler={(e: any) => {
                    toggleStatus(id);
                }}
                status={status} />
            {name}
            {status}
            {content}
        </div>
    </>
}

const NodeOperation = ({ shuffle, remove, addNode, save, nodeName }: any) => {

    return <>
        <div className="flex-row">
            <div> <input value={nodeName} /> </div>
            <button onClick={() => shuffle()}>Shuffle</button>
            <button onClick={() => remove()}>Delete</button>
            <button onClick={() => addNode()}>Add Note</button>
            <button onClick={() => save()}>Save</button>
        </div>
    </>
}

const mapStateToProps = (state: any) => {
    return {
        NodeList: state.node.selectedNode.nodes
    }
}

const mapDispatchToProps = (dispatch: any) => ({

    setCurrentNode: (id: number) => dispatch(actions.setCurrentNodee(id)),
    add: () => dispatch(actions.addNode()),
    shuffle: () => dispatch(actions.shuffleNode()),
    remove: () => dispatch(actions.deleteNode()),
    save: () => dispatch(actions.saveNode()),
    toggleStatus: (id: number) => dispatch(actions.changeNodeStatus(id)),
    editContent: (id: number, text: string) => dispatch(actions.editNodeContent(id, text)),
    editTitle: () => dispatch(actions.editNodeTitle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Node)