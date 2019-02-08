import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import WorkPage from "./components/WorkPage";

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/work" component={WorkPage} />
        </Switch>
      </div>
    );
  }
}