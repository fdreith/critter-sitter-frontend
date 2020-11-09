import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { login } from "../actions/currentUser";
import { signUp } from "../actions/currentUser";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";


class AuthContainer extends Component<any> {
  componentDidMount() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <Switch>
        <Route
          path="/login"
          render={(routerProps) => (
            <LoginForm
              {...routerProps}
              history={this.props.history}
              login={this.props.login}
            />
          )}
        />
        <Route
          path="/register"
          render={(routerProps) => (
            <SignUpForm
              {...routerProps}
              departments={this.props.departments}
              signUp={this.props.signUp}
            />
          )}
        />
      </Switch>
    );
  }
}

export default connect(null, { login, signUp })(AuthContainer);
