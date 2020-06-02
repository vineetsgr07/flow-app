import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// TODO: inprogress, not complete
const PrivateRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        if (roles && roles.indexOf(currentUser.role) === -1) {
            return <Redirect to={{ pathname: '/' }} />
        }

        return <Redirect to={{ pathname: '/workflow', state: { from: props.location } }} />
    }} />
)

export default PrivateRoute