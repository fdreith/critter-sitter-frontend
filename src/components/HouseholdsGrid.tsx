import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Household from './Household';

const HouseholdsGrid = (props: any) => {
  let match = useRouteMatch();

  const households = useSelector((state: any) => state.households);

  return (
    <div className="grid">
      {households.map((household: any) => {
        return (
          <div key={household.id} className="remove-styles">
            <Household
              household={household}
              setHousehold={props.setHousehold}
              history={props.history}
            />
            <br />
          </div>
        );
      })}
      <span>
        <Link to="/households/new">
          <i className="icon fas fa-plus fa-2x" />
          <span className="large">Add Household</span>
        </Link>
      </span>
    </div>
  );
};

export default HouseholdsGrid;
