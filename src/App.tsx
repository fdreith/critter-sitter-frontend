import React, { Component } from "react";
import "./App.css";
import AuthContainer from "./components/AuthContainer";
import { getCurrentUser, logout } from "./actions/currentUser";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { withRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Households from "./components/Households";
import Pets from "./components/Pets";
import { fetchPets } from "./actions/pets";
import { fetchEvents } from "./actions/events";

class App extends Component<any> {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.history.push("/home");
    this.props.fetchPets();
    this.props.fetchEvents();
  }
  render() {
    return (
      <div className="App">
        <NavBar
          loggedIn={this.props.loggedIn}
          history={this.props.history}
          logout={this.props.logout}
        />
        <br />
        {this.props.loggedIn ? (
          <Switch>
            <Route
              path="/home"
              render={(routerProps) => (
                <Home
                  {...routerProps}
                  history={this.props.history}
                  currentUser={this.props.currentUser}
                />
              )}
            />
            <Route
              path="/households"
              render={(routerProps) => (
                <Households
                  {...routerProps}
                  history={this.props.history}
                  currentUser={this.props.currentUser}
                  households={this.props.households}
                />
              )}
            />
            <Route
              path="/pets"
              render={(routerProps) => (
                <Pets
                  {...routerProps}
                  history={this.props.history}
                  currentUser={this.props.currentUser}
                  pets={this.props.pets}
                />
              )}
            />
          </Switch>
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
    households: state.households,
    currentUser: state.currentUser,
    pets: state.pets,
    events: state.events,
  };
};

export default withRouter(
  connect(mapStateToProps, { getCurrentUser, logout, fetchPets, fetchEvents })(
    App
  )
);
