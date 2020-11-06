import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { login } from "../actions/currentUser";
import { signUp } from "../actions/currentUser";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

// interface AuthProps {
//   login:

// }

class AuthContainer extends Component {
  // componentDidMount() {
  //   this.props.history.push("/login");
  // }
  render() {
    console.log(this.props.login, this.props.signup);

    return (
      <Switch>
        <Route
          path="/login"
          render={(routerProps) => (
            <LoginForm
              {...routerProps}
              // history={this.props.history}
              login={this.props.login}
            />
          )}
        />
        <Route
          path="/signup"
          render={(routerProps) => (
            <SignUpForm {...routerProps} signUp={this.props.signUp} />
          )}
        />
      </Switch>
    );
  }
}

export default connect(null, { login, signUp })(AuthContainer);
