import React from "react";
import { connect } from "react-redux";

import Card from "../components/Card";
import "./style.css";
import { addWorkflow, filterWorkflow, deleteWorkflow } from "../action/workflow.action";

const workFlowData = [
    {
        name: 'Workflow 1',
        status: 'COMPLETED',
    },
    {
        name: 'Workflow 1',
        status: 'COMPLETED',
    }
]

interface workflowT {
    addflow: (addWorkflow: any) => void
    filterflow: (addWorkflow: any) => void
    deleteflow: (id: number) => void
    changeWorkflowTitle: (title: string) => void
    workflow: any
    history: any
}

const Workflow = ({ addflow, workflow, deleteflow, filterflow, changeWorkflowTitle, history }: workflowT) => {

    const routeToNode = (id: number) => {
        debugger
        history.push(`/node/${id}`)
    }

    return (
        <>
            <WorkflowOperations
                createWorkflow={() => addflow("Workflow")}
                filterWorkflow={() => filterflow}
            />
            <Card
                items={workflow}
                handler={
                    {
                        route: (id: number) => routeToNode(id),
                        deleteCard: (id: number) => deleteflow(id),
                        editTitle: () => changeWorkflowTitle
                    }
                }
            />
        </>
    )
}

interface WorkflowOperationsType {
    createWorkflow: () => void
    filterWorkflow: () => void
}

const WorkflowOperations = ({ createWorkflow, filterWorkflow }: WorkflowOperationsType) => {
    return (
        <>
            <div className="flex-row">
                <div className="search-workflow">
                    <input placeholder="Search Workflows" />
                </div>
                <div className="filter-workflow">
                    <button name="Filter" onClick={() => filterWorkflow}> Filter </button>
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

const mapStateToPros = (state: any) => {
    debugger
    return {
        workflow: state.workflow.items
    }
}

const mapDispatchToProps = (dipatch: any) => {
    return {
        addflow: (item: any) => dipatch(addWorkflow(item)),
        filterflow: (id: string) => dipatch(filterWorkflow(id)),
        deleteflow: (id: number) => dipatch(deleteWorkflow(id)),
        changeWorkflowTitle: (title: string) => { }
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Workflow)

