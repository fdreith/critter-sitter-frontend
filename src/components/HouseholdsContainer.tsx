import React, { useState } from 'react';
import HouseholdInfo from './HouseholdInfo';
import HouseholdForm from './HouseholdForm';
import Modal from './Modal';
import { Switch, Route, useRouteMatch, Link, Redirect } from 'react-router-dom';
import HouseholdsGrid from './HouseholdsGrid';
import PetInfo from './PetInfo';
import EventInfo from './EventInfo';

const HouseholdsContainer = (props: any) => {
  let match = useRouteMatch();

  const [household, setHousehold] = useState<any>({ household: '' });

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
          path={`${match.path}/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <HouseholdForm
                {...routerProps}
                household={household}
                history={props.history}
              />
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
          path={`${match.path}/pets/:id/events/:id`}
          render={(routerProps) => (
            <Modal>
              <EventInfo {...routerProps} history={props.history} />
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
          path={`${match.path}/pets/:id`}
          render={(routerProps) => (
            <Modal>
              <PetInfo {...routerProps} history={props.history} />
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
          path={`${match.path}/:id`}
          render={(routerProps) => (
            <Modal>
              <HouseholdInfo
                {...routerProps}
                household={household}
                history={props.history}
              />
            </Modal>
          )}
        ></Route>
      </Switch>

      <Link to="/events/new">
        <i className="fas fa-plus fa-2x"></i>
      </Link>
      <h2> Your Households </h2>
      <HouseholdsGrid setHousehold={setHousehold} />
    </div>
  );
};

export default HouseholdsContainer;
