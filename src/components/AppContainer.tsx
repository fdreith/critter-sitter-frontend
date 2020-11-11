import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Households from "./Households";
import Pets from "./Pets";

class AppContainer extends Component<any> {
  componentDidMount() {
    this.props.history.push("/home");
  }

  render() {
    return (
      <Switch>
        <Route
          path="/home"
          render={(routerProps) => (
            <Home {...routerProps} history={this.props.history} />
          )}
        />
        <Route
          path="/households"
          render={(routerProps) => (
            <Households {...routerProps} history={this.props.history} />
          )}
        />
        <Route
          path="/pets"
          render={(routerProps) => (
            <Pets {...routerProps} history={this.props.history} />
          )}
        />
      </Switch>
    );
  }
}

export default AppContainer
