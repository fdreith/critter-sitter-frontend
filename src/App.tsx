import React, { Component } from 'react';
import './App.css';
import AuthContainer from './components/AuthContainer';
import { getCurrentUser, logout } from './actions/currentUser';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HouseholdsContainer from './components/HouseholdsContainer';
import { fetchItems } from './actions/fetch';
import EventsContainer from './components/EventsContainer';
import PetsContainer from './components/PetsContainer';

class App extends Component<any> {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.fetchItems('pet');
    this.props.fetchItems('user');
    this.props.history.push('/home');
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
              exact
              path="/home"
              render={(routerProps) => (
                <Home
                  {...routerProps}
                  history={this.props.history}
                />
              )}
            />
            <Route
              path="/households"
              render={(routerProps) => (
                <HouseholdsContainer
                  {...routerProps}
                  history={this.props.history}
                  households={this.props.households}
                />
              )}
            />
            <Route
              path="/pets"
              render={(routerProps) => (
                <PetsContainer
                  {...routerProps}
                  history={this.props.history}
                  pets={this.props.pets}
                />
              )}
            />
            <Route
              path="/events"
              render={(routerProps) => (
                <EventsContainer
                  {...routerProps}
                  history={this.props.history}
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
    pets: state.pets,
    events: state.events
  };
};

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    logout,
    fetchItems,
  })(App)
);
