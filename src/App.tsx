import React, { Component } from "react";
import "./App.css";
import { getCurrentUser } from "./actions/currentUser";
import AuthContainer from "./components/AuthContainer";
import NavBar from "./components/NavBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import HouseholdsContainer from "./components/Households";
import AppContainer from "./components/AppContainer";

class App extends Component<any> {
  componentDidMount() {
    getCurrentUser();
  }
  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} />
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
