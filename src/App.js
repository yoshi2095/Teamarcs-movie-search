import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/movie/:id">
            <SingleMovie />
          </Route>
        </Switch>
      </Router>
    );
  }
}
