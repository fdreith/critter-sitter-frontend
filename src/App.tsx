import React, { Component } from "react";
import "./App.css";
import AuthContainer from "./components/AuthContainer";
import { getCurrentUser } from "./actions/currentUser";

import NavBar from "./components/NavBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppContainer from "./components/AppContainer";

class App extends Component<any> {
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    console.log(this.props.loggedIn)
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} history={this.props.history} />
        <br />
        {this.props.loggedIn ? (
          <AppContainer history={this.props.history} />
        ) : (
          <AuthContainer history={this.props.history} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
