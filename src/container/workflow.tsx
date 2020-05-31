import React, { useState } from "react";
import { connect } from "react-redux";

import { Cards } from "../components/Card";
import "./style.css";
import * as actions from "../action/workflow.action";
import { workFlowDetails } from "../type";
import StatusBtn from "../components/Button/status";
import RemoveBtn from "../components/Button/remove";

interface workflowT {
    add: (addWorkflow: any) => void
    filter: (addWorkflow: any) => void
    remove: (id: number) => void
    editTitle: (title: string) => void
    toggleStatus: (id:number) => void
    workflow: any
    history: any
}

const Workflow = ({ add, workflow, remove, filter, editTitle, toggleStatus, history }: workflowT) => {

    const routeToNode = (id: number) => {
        history.push(`/node/${id}`)
    }

    return (
        <>
            <WorkflowOperations
                createWorkflow={() => add("Workflow")}
                filterWorkflow={(querry) => filter(querry)}
            />
            <Cards
                items={workflow}
            >
                {(task: any) => {
                    return <WorkflowCard
                        item={task}
                        handler={{
                            route: (id: number) => routeToNode(id),
                            remove: (id: number) => remove(id),
                            editTitle: () => editTitle,
                            toggleStatus: (id:number) => toggleStatus(id)
                        }} />
                }}
            </Cards>

        </>
    )
}

interface WorkflowOperationsType {
    createWorkflow: () => void
    filterWorkflow: (querry: string) => void
}

const WorkflowOperations = ({ createWorkflow, filterWorkflow }: WorkflowOperationsType) => {

    const [search, setSeach] = React.useState('');

    const setFilter = (e: any) => setSeach(e.target.value);
    const filter = () => filterWorkflow(search);

    return (
        <>
            <div className="flex-row">
                <div className="search-workflow">
                    <input placeholder="Search Workflows" onChange={(e: any) => setFilter(e)} />
                </div>
                <div className="filter-workflow">
                    <button name="Filter" onClick={(search: any) => filter()}> Filter </button>
                </div>
                <div className="creare-workflow">
                    <button name="Create Workflow"
                        type="button"
                        onClick={() => createWorkflow()}>
                        Create Workflow
                    </button>
                </div>
            </div>
        </>
    )
}

interface cardP {
    item: workFlowDetails
    handler: any
}

const WorkflowCard = ({ item: { name, status, id }, handler: { remove, route, toggleStatus } }: cardP) => {

    const [title, setTitle] = useState(name);

    return <>
        <div
            onClick={() => route(id)}
            className="card-workflow">

            <RemoveBtn
                removeHandler={(e: any) => {
                    remove(id)
                    e.stopPropagation()
                }}
            />

            <div className="flex-column">
                <div>
                    <input
                        className="title-box"
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                        onChange={(e) => {
                            setTitle(e.target.value)
                            e.stopPropagation()
                        }}
                        value={title} />
                </div>
                <div className="flex-row">
                    <div>status</div>
                    <StatusBtn
                        statusHandler={(e: any) => {
                            toggleStatus(id)
                            e.stopPropagation()
                        }}
                        status="COMPLETE" />
                </div>
            </div>
        </div>
    </>
}

const mapStateToPros = (state: any) => {
    return {
        workflow: state.workflow.filterItems.length === 0 ? state.workflow.items : state.workflow.filterItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (item: any) => dispatch(actions.addWorkflow(item)),
        filter: (id: string) => dispatch(actions.filterWorkflow(id)),
        remove: (id: number) => dispatch(actions.deleteWorkflow(id)),
        editTitle: () => dispatch(actions.editWorkflowTitle),
        toggleStatus: (id:number) => dispatch(actions.changeWorkflowStatus(id))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Workflow)

