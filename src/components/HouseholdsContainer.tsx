import React, { useState } from 'react';
import HouseholdInfo from './HouseholdInfo';
import HouseholdForm from './HouseholdForm';
import Modal from './Modal';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

const HouseholdsContainer = (props: any) => {
  let match = useRouteMatch();

  const [household, setHousehold] = useState<any>({ household: '' });

  return (
    <div className="contianer">
      <Link to="/households/new" className="button">
        New Household
      </Link>

      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <HouseholdForm
                {...routerProps}
                history={props.history}
                currentUser={props.currentUser}
              />
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
                currentUser={props.currentUser}
              />
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
                currentUser={props.currentUser}
              />
            </Modal>
          )}
        ></Route>
      </Switch>

      <h2> Your Households </h2>
      {props.households.map((household: any) => {
        return (
          <div key={household.id}>
            <Link
              onClick={() => setHousehold(household)}
              to={{
                pathname: `/households/${household.id}`,
                state: { showModal: true }
              }}
              key={household.id}
            >
              {household.attributes.name}
            </Link>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default HouseholdsContainer;
