import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ReduxToastr from 'react-redux-toastr'

import './App.css';

const Login = React.lazy(() => import('./components/Login'));
const Workflow = React.lazy(() => import('./container/workflow'));
const Node = React.lazy(() => import('./container/node'));
const Header = React.lazy(() => import('./components/Header'))

function App() {
  return (
    <div >
      <Suspense fallback={<div>...Loading</div>}>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick />
        <Router>
          <Header />
          <Switch>
            <Route exact component={Login} path="/" />
            <Route exact component={Workflow} path="/workflow" />
            <Route exact component={Node} path="/node/:id" />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

// const PrivateRoute = () => {

// }

export default App;
