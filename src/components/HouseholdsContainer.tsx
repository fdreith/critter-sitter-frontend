import React, { useState } from 'react';
import HouseholdInfo from './HouseholdInfo';
import HouseholdForm from './HouseholdForm';
import Modal from './Modal';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import HouseholdOverview from './HouseholdOverview';

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
              <HouseholdForm
                {...routerProps}
                history={props.history}
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
              />
            </Modal>
          )}
        ></Route>
      </Switch>

      <Link to="/households/new">
        <i className="fas fa-plus fa-2x"></i>
      </Link>
      <h2> Your Households </h2>
      <div className="grid">
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
                <h2>{household.attributes.name}</h2>
              </Link>
              <HouseholdOverview
                household={household}
                history={props.history}
              />
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HouseholdsContainer;
