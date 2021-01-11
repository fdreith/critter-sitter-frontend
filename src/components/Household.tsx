import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import HouseholdPets from './HouseholdPets';

const Household = (props: any) => {
  let match = useRouteMatch();

  return (
    <div key={props.household.id} className="remove-styles">
      <Link
        onClick={() => props.setHousehold(props.household)}
        to={{
          pathname: `/households/${props.household.id}`,
          state: { showModal: true }
        }}
        key={props.household.id}
      >
        <h2>{props.household.attributes.name}</h2>
      </Link>
      <HouseholdPets household={props.household} />
    </div>
  );
};

export default Household;
