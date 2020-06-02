import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './style.css';
import { Cards } from "../components/Card";
import * as actions from "../action/node.action";
import { workFlowDetailsT, NodeT, cardT } from "../type";
import StatusBtn from "../components/Button/status";

const Node = ({ shuffle,
    remove,
    add,
    save,
    selectedNode,
    toggleStatus,
    editContent,
    editTitle,
    setCurrentNode,
    history,
    workFlowName,
    editFlowTitle,
    clearSelectedNode
}: NodeT) => {

    useEffect(() => {
        let selectedFlow = parseInt(history.location.pathname.split('/')[2]);
        setCurrentNode(selectedFlow)

        return () => {
            clearSelectedNode()
        }
    }, [])

    return <div>
        {(workFlowName === "" || workFlowName) && <NodeOperation
            shuffle={shuffle}
            deleteNode={() => remove()}
            addNode={() => add()}
            save={save}
            editFlowTitle={(currentFlow: any) => editFlowTitle(currentFlow)}
            flowTitle={workFlowName}
        />}
        {selectedNode && <Cards
            items={selectedNode}
        >
            {(task: any) => {
                return <NodeCard
                    item={task}
                    handler={{
                        toggleStatus: (id: number) => toggleStatus(id),
                        editTitle: (id: number, text: string) => editTitle(id, text),
                        editContent: (id: number, text: string) => editContent(id, text)
                    }} />
            }}
        </Cards>}
        <div className="flex-center" >Note: Please save before leaving this page.</div>
    </div>
}

const NodeOperation = ({ shuffle, deleteNode, addNode, save, flowTitle, editFlowTitle }: any) => {

    const [flowName, setFlowName] = useState(flowTitle)

    useEffect(() => {
        setFlowName(flowName)
    })

    const taskHandler = (e: any) => {
        setFlowName(e.target.value);
        editFlowTitle(e.target.value)
    }

    return <>
        <div className="flex-row flow-operation flex-space-between">
            <div> <input onChange={(e: any) => taskHandler(e)} className="workflow-name m-l-32 " value={flowName} /> </div>
            <div className="m-r-32">
                <button className="btn shuffle-btn rounded-btn m-r-8 m-l-8" onClick={() => shuffle()}>Shuffle</button>
                <button className="btn danger-btn rounded-btn m-r-8 m-l-8" onClick={() => deleteNode()}>Delete</button>
                <button className="btn create-btn rounded-btn m-r-8 m-l-8" onClick={() => addNode()}>Add Note</button>
                <button className="btn save-btn rounded-btn m-r-8 m-l-8" onClick={() => save()}>Save</button>
            </div>
        </div>
    </>
}

const NodeCard = ({ item: { name, status, content, id }, handler: { toggleStatus, editTitle, editContent } }: cardT) => {

    const [nodeName, setName] = useState(name)
    const [nodeContent, setContent] = useState(content)

    const taskHandler = (e: any) => {
        setName(e.target.value);
        editTitle(id, e.target.value)
    }

    const contentHandler = (e: any) => {
        setContent(e.target.value);
        editContent(id, e.target.value)
    }

    return <>
        <div className="card-node">
            <div className="right-top">
                <StatusBtn
                    statusHandler={(e: any) => {
                        toggleStatus(id);
                    }}
                    status={status} />
            </div>
            <div className="flex-column">
                <div className="m-b-8">
                    <input className="title-box " onChange={(e) => taskHandler(e)} value={nodeName} />
                </div>
                <div className="m-t-8">
                    <textarea
                        className="content-box"
                        value={nodeContent}
                        onChange={(e: any) => contentHandler(e)}
                        name="comment"
                        form="usrform">
                    </textarea>
                </div>
            </div>
        </div>
    </>
}

const mapStateToProps = (state: any) => ({
        selectedNode: state.node.selectedNode.nodes,
        workFlowName: state.node.selectedNode.workFlowName
    })

const mapDispatchToProps = (dispatch: any) => ({
    setCurrentNode: (id: number) => dispatch(actions.setCurrentNode(id)),
    add: () => dispatch(actions.addNode("Node")),
    shuffle: () => dispatch(actions.shuffleNode()),
    remove: () => dispatch(actions.deleteLastNode()),
    save: () => dispatch(actions.saveNode()),
    toggleStatus: (id: number) => dispatch(actions.changeNodeStatus(id)),
    editFlowTitle: (text: string) => dispatch(actions.editFlowTitle(text)),
    clearSelectedNode: () => dispatch(actions.clearSelectedNode()),
    editContent: (id: number, text: string) => dispatch(actions.editNodeContent(id, text)),
    editTitle: (id: number, text: string) => dispatch(actions.editNodeTitle(id, text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Node)