import React from "react";
import { connect } from "react-redux";
import './style.css';
import Cards from "../components/Card";
import * as actions from "../action/node.action";

interface NodeT {
    shuffleHandler: () => void
    deleteHandler: () => void
    addNoteHandler: () => void
    saveHandler: () => void
    changeStatus: (id: number) => void
    onChangeTaskContent: (string: any) => void
    changeTaskTitle: (string: any) => void
    tasks: any
}

const Node = ({ shuffleHandler, deleteHandler, addNoteHandler, saveHandler, tasks, changeStatus, onChangeTaskContent, changeTaskTitle }: NodeT) => {
    return <div>
        <NodeOperation
            shuffle={shuffleHandler}
            deleteNode={deleteHandler}
            addNote={addNoteHandler}
            save={saveHandler}
        />
        <Cards
            items={tasks}
            handler={{
                status: (id: number) => changeStatus(id),
                editTitle: (id: string) => changeTaskTitle(id),
                editContent: (id: string) => onChangeTaskContent(id)
            }}
        />
    </div>
}

const NodeOperation = ({ shuffle, deleteHandler, addNote, saveHandler, nodeName }: any) => {

    return <>
        <div className="flex-row">
            <div> <input value={nodeName} /> </div>
            <button onClick={() => shuffle}>Shuffle</button>
            <button onClick={() => deleteHandler}>Delete</button>
            <button onClick={() => addNote}>Add Note</button>
            <button onClick={() => saveHandler}>Save</button>
        </div>
    </>
}

const mapStateToProps = (state: any) => ({
    tasks: state.node.tasks
})

const mapDispatchToProps = (dispatch: any) => ({
    shuffleHandler: () => dispatch(actions.shuffleNode()),
    deleteHandler: () => dispatch(actions.deleteNode),
    addNoteHandler: () => dispatch(actions.addNote),
    saveHandler: () => dispatch(actions.saveNode),
    changeStatus: () => dispatch(actions.changeNodeStatus),
    onChangeTaskContent: () => dispatch(actions.editNodeContent),
    changeTaskTitle: () => dispatch(actions.editNodeTitle)
})

export default connect(mapStateToProps, mapDispatchToProps)(Node)