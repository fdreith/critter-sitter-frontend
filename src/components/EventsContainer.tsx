import React, { useState } from 'react';
import Modal from './Modal';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import EventForm from './EventForm';
import EventInfo from './EventInfo';

const EventsContainer = (props: any) => {
  let match = useRouteMatch();

  return (
    <div className="contianer">
      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <EventForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <EventForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id`}
          render={(routerProps) => (
            <Modal>
              <EventInfo
                {...routerProps}
                history={props.history}
              />
            </Modal>
          )}
        ></Route>
      </Switch>
    </div>
  );
};

export default EventsContainer;
