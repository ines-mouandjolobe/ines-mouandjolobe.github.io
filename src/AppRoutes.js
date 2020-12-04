import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App';

export default function BasicExample() {
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