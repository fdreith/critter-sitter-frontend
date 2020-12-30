import React, { useEffect } from 'react';
import './App.css';
import AuthContainer from './components/AuthContainer';
import { getCurrentUser, logout } from './actions/currentUser';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { withRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HouseholdsContainer from './components/HouseholdsContainer';
import { fetchItems } from './actions/fetch';
import EventsContainer from './components/EventsContainer';
import PetsContainer from './components/PetsContainer';

const App = withRouter(({ history, ...props }) => {
  const loggedIn = useSelector((state: any) => !!state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(fetchItems('pet'));
    dispatch(fetchItems('user'));
    dispatch(fetchItems('event'));
    history.push('/home');
  }, []);

  return (
    <div className="App">
      <NavBar loggedIn={loggedIn} history={history} logout={logout} />
      <br />
      {loggedIn ? (
        <Switch>
          <Route
            exact
            path="/home"
            render={(routerProps) => (
              <Home {...routerProps} history={history} />
            )}
          />
          <Route
            path="/households"
            render={(routerProps) => (
              <HouseholdsContainer {...routerProps} history={history} />
            )}
          />
          <Route
            path="/pets"
            render={(routerProps) => (
              <PetsContainer {...routerProps} history={history} />
            )}
          />
          <Route
            path="/events"
            render={(routerProps) => (
              <EventsContainer {...routerProps} history={history} />
            )}
          />
        </Switch>
      ) : (
        <AuthContainer history={history} />
      )}
    </div>
  );
});

export default App;
