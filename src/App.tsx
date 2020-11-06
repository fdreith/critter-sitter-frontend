import React, { Component } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm"
import { getCurrentUser } from "./actions/currentUser";
import AuthContainer from './components/AuthContainer'
import NavBar from "./components/NavBar";

interface AppProps {
  getCurrentUser: any,
  loggedIn: any,
}

class App extends Component <AppProps>{
  componentDidMount() {
    this.props.getCurrentUser();
  }
  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.props.loggedIn}  />
        <br />
        {/* {this.props.loggedIn ? (
          //where we want to go
        ) : ( */}
          <AuthContainer />
        {/* )} */}
      </div>
    );
  }
}
  

 const mapStateToProps = (state: any) => {
  return {
     loggedIn: !!state.currentUser,
  };
 };

export default App;
