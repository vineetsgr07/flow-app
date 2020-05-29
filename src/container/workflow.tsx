import React from "react";
import { connect } from "react-redux";

import Card from "../components/Card";
import "./style.css";
import * as actions from "../action/workflow.action";

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
    removeWorkflow: (id: number) => void
    changeWorkflowTitle: (title: string) => void
    changeStatus: () => {}
    workflow: any
    history: any
}

const Workflow = ({ addflow, workflow, removeWorkflow, filterflow, changeWorkflowTitle, changeStatus, history }: workflowT) => {

    const routeToNode = (id: number) => {
        history.push(`/node/${id}`)
    }

    return (
        <>
            <WorkflowOperations
                createWorkflow={() => addflow("Workflow")}
                filterWorkflow={(querry) => filterflow(querry)}
            />
            <Card
                items={workflow}
                handler={
                    {
                        route: (id: number) => routeToNode(id),
                        remove: (id: number) => removeWorkflow(id),
                        editTitle: () => changeWorkflowTitle,
                        status: () => changeStatus
                    }
                }
            />
        </>
    )
}

interface WorkflowOperationsType {
    createWorkflow: () => void
    filterWorkflow: (querry: string) => void
}

const WorkflowOperations = ({ createWorkflow, filterWorkflow }: WorkflowOperationsType) => {

    const [search, setSeach] = React.useState('')

    const setFilter = (e: any) => {
        setSeach(e.target.value)
    }

    const filter = () => {
        filterWorkflow(search)
    }

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

const mapStateToPros = (state: any) => {
    return {
        workflow: state.workflow.filterItems.length === 0 ? state.workflow.items : state.workflow.filterItems
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addflow: (item: any) => dispatch(actions.addWorkflow(item)),
        filterflow: (id: string) => dispatch(actions.filterWorkflow(id)),
        removeWorkflow: (id: number) => dispatch(actions.deleteWorkflow(id)),
        changeWorkflowTitle: () => dispatch(actions.editWorkflowTitle),
        changeStatus: () => dispatch(actions.changeWorkflowStatus)
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(Workflow)

