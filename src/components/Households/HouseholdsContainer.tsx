import React, { useState } from 'react';
import HouseholdInfo from './HouseholdInfo';
import HouseholdForm from './HouseholdForm';
import Modal from '../Modal';
import { Switch, Route, useRouteMatch, Link, Redirect } from 'react-router-dom';
import HouseholdsGrid from './HouseholdsGrid';
import PetInfo from '../Pets/PetInfo';
import EventInfo from '../Events/EventInfo';
import PetForm from '../Pets/PetForm';
import EventForm from '../Events/EventForm';

const HouseholdsContainer = (props: any) => {
  let match = useRouteMatch();

  return (
    <div className="contianer">
      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <HouseholdForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/pets/:id/events/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <EventForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/pets/:id/events/:id`}
          render={(routerProps) => (
            <Modal>
              <EventInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/pets/:id/events/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <EventForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/pets/:id/events/:id`}
          render={(routerProps) => (
            <Modal>
              <EventInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/pets/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <PetForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/pets/:id`}
          render={(routerProps) => (
            <Modal>
              <PetInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/pets/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <PetForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/pets/:id`}
          render={(routerProps) => (
            <Modal>
              <PetInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/events/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <EventForm
                {...routerProps}
                history={props.history}
                event={event}
              />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/events/:id`}
          render={(routerProps) => (
            <Modal>
              <EventInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <HouseholdForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id`}
          render={(routerProps) => (
            <Modal>
              <HouseholdInfo {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
      </Switch>

      <Link to="/events/new">
        <i className="fas fa-plus fa-2x"></i>
      </Link>
      <h2> Your Households </h2>
      <HouseholdsGrid />
    </div>
  );
};

export default HouseholdsContainer;
