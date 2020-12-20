import React, { useState } from 'react';
import HouseholdInfo from './HouseholdInfo';
import HouseholdForm from './HouseholdForm';
import Modal from './Modal';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import HouseholdOverview from './HouseholdOverview';
import RecordForm from './RecordForm';

const RecordsContainer = (props: any) => {
  let match = useRouteMatch();

  return (
    <div className="contianer">
      <Switch>
        <Route
          path={`${match.path}/new`}
          render={(routerProps) => (
            <Modal>
              <RecordForm {...routerProps} history={props.history} />
            </Modal>
          )}
        ></Route>
        <Route
          path={`${match.path}/:id/edit`}
          render={(routerProps) => (
            <Modal>
              <RecordForm
                {...routerProps}
                history={props.history}
              />
            </Modal>
          )}
        ></Route>
        {/* <Route
          path={`${match.path}/:id`}
          render={(routerProps) => (
            <Modal>
              <RecordInfo
                {...routerProps}
                history={props.history}
              />
            </Modal>
          )}
        ></Route> */}
      </Switch>

    </div>
  );
};

export default RecordsContainer;
