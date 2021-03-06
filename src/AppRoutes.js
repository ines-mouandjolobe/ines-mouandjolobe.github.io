import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App';

const AppRoutes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  );
}

export default AppRoutes;