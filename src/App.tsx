import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

const Login = React.lazy(() => import('./components/Login'));
const Workflow = React.lazy(() => import('./container/workflow'));
const Node = React.lazy(() => import('./container/node'));

function App() {
  return (
    <div >
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={Workflow} path="/workflow" />
            <Route component={Node} path="/node/:id" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

const PrivateRoute = () => {

}

export default App;
