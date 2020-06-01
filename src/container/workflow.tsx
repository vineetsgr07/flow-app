import React, { useState } from "react";
import { connect } from "react-redux";

import { Cards } from "../components/Card";
import * as actions from "../action/workflow.action";
import { workFlowDetails } from "../type";
import StatusBtn from "../components/Button/status";
import RemoveBtn from "../components/Button/remove";
import "./style.css";

interface workflowT {
    add: (addWorkflow: any) => void
    filter: (addWorkflow: any) => void
    remove: (id: number) => void
    editTitle: (title: string) => void
    toggleStatus: (id: number) => void
    workflow: any
    history: any
}

const Workflow = ({ add, workflow, remove, filter, editTitle, toggleStatus, history }: workflowT) => {

    const routeToNode = (id: number) => {
        history.push(`/node/${id}`);
    }

    return (
        <>
            <WorkflowOperations
                createWorkflow={() => add("Workflow")}
                filterWorkflow={(querry) => filter(querry)}
            />
            {
                workflow.length == 0 ? <div className="flex-center"> No Items Found </div> : <Cards
                    items={workflow}
                >
                    {(task: any) => {
                        return <WorkflowCard
                            item={task}
                            handler={{
                                route: (id: number) => routeToNode(id),
                                remove: (id: number) => remove(id),
                                editTitle: () => editTitle,
                                toggleStatus: (id: number) => toggleStatus(id)
                            }} />
                    }}
                </Cards>
            }
        </>
    )
}


interface WorkflowOperationsType {
    createWorkflow: () => void
    filterWorkflow: (querry: string) => void
}

const WorkflowOperations = ({ createWorkflow, filterWorkflow }: WorkflowOperationsType) => {

    const [search, setSeach] = React.useState('');
    const setFilter = (e: any) => {
        setSeach(e.target.value);
        filterWorkflow(e.target.value);
    };
    const filter = () => filterWorkflow(search);

    return (
        <>
            <div className="flex-row flow-operation flex-space-between">
                <div className="search-workflow flex-row">
                    <div className='m-l-32 m-l-8'>
                        <input  className="search-input" placeholder="Search Workflows" onChange={(e: any) => setFilter(e)} />
                    </div>
                    <div className='m-l-16'>
                        <button className="btn primary-btn rounded-btn" name="Filter" onClick={(search: any) => filter()}> Filter </button>
                    </div>
                </div>
                <div className="creare-workflow m-r-32">
                    <button
                        name="Create Workflow"
                        className="rounded-btn create-btn create-flow"
                        type="button"
                        onClick={() => createWorkflow()}>
                        Create Workflow
                    </button>
                </div>
            </div>
        </>
    )
}

interface CardHandlerT {
    route: (id: number) => void
    remove: (id: number) => void
    editTitle: () => void
    toggleStatus: (id: number) => void
}

interface cardP {
    item: workFlowDetails
    handler: CardHandlerT
}

const WorkflowCard = ({ item: { name, status, id }, handler: { remove, route, toggleStatus, editTitle } }: cardP) => {

    const [title, setTitle] = useState(name);

    return <>
        <div
            onClick={() => route(id)}
            className="card-workflow">
            <div className="right-top">
                <RemoveBtn
                    removeHandler={(e: any) => {
                        remove(id);
                        e.stopPropagation();
                    }}
                />
            </div>

            <div className="flex-column">
                <div>
                    <input
                        className="title-box"
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        value={title}
                        disabled
                    />
                </div>
                <div className="flex-row m-t-16 flex-space-between">
                    <div>{status}</div>
                    <StatusBtn
                        statusHandler={(e: any) => {
                            toggleStatus(id)
                            e.stopPropagation()
                        }}
                        status={status} />
                </div>
            </div>
        </div>
    </>
}

const mapStateToPros = (state: any) => {
    return {
        workflow: state.workflow.filterItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        add: (item: any) => dispatch(actions.addWorkflow(item)),
        filter: (id: string) => dispatch(actions.filterWorkflow(id)),
        remove: (id: number) => dispatch(actions.deleteWorkflow(id)),
        editTitle: () => dispatch(actions.editWorkflowTitle),
        toggleStatus: (id: number) => dispatch(actions.changeWorkflowStatus(id))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Workflow);