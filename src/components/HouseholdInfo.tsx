import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { Link, useRouteMatch } from 'react-router-dom';
import { selectHousehold, selectUser } from '../utilities';

const HouseholdInfo = (props: any) => {
  let match = useRouteMatch();
  const household = selectHousehold(props.match.params.id);

  const selectPets = createSelector(
    (state: any) => state.pets,
    (pets) =>
      pets.filter(
        (pet: any) => pet.relationships.household.data.id === household.id
      )
  );
  const [owner, setOwner] = useState(
    selectUser(household.relationships.owner.data.id)
  );
  const pets = useSelector(selectPets);
  const currentUser = useSelector((state: any) => state.currentUser);
  return (
    <div key={household.id}>
      <h2>{household.attributes.name} Household</h2>
      <p>Address: {household.attributes.address}</p>
      <p>
        Owner: {owner.attributes.first_name} {owner.attributes.last_name}{' '}
      </p>
      {household.relationships.owner.data.id === currentUser.id && (
        <Link to={`${match.url}/edit`} className="button">
          Edit
        </Link>
      )}

      <h3>Pets:</h3>
      {pets.map((pet: any) => (
        <div key={pet.id}>
          {/* works */}
          {/* <Link to={{ pathname: `/pets/${pet.id}` }}> */}
          <Link to={`${match.url}/pets/${pet.id}`}>{pet.attributes.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HouseholdInfo;
