import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';

const Render = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      {/* <Route path="/someroute">
          <SomeComponent />
        </Route> */}
    </Switch>
  </Router>
);

export default Render;
