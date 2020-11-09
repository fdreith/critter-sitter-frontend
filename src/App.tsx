import React, { Component } from "react";
import "./App.css";
import { getCurrentUser } from "./actions/currentUser";
import AuthContainer from "./components/AuthContainer";
import NavBar from "./components/NavBar";
import { withRouter } from "react-router-dom"; 
import { connect } from "react-redux";


class App extends Component<any> {
  componentDidMount() {
    getCurrentUser();
  }
  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn} />
        <br />
        {this.props.loggedIn ? "home" : <AuthContainer history={this.props.history}/>}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loggedIn: !!state.currentUser,
  };
};

export default withRouter(
  connect(mapStateToProps, { getCurrentUser})(
    App
  )
);
