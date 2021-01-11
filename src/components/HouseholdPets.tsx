import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Pet from './Pet';
import { createSelector } from 'reselect';

const HouseholdPets = (props: any) => {
  let match = useRouteMatch();

  const selectedPets = createSelector(
    (state: any) => state.pets,
    (pets) =>
      pets.filter(
        (pet: any) => pet.relationships.household.data.id === props.household.id
      )
  );
  const pets = useSelector(selectedPets);
  const [pet, setPet] = useState<any>({ pet: '' });

  return (
    <div className="remove-styles">
      {pets.map((pet: any) => {
        return (
          <div key={pet.id} className="remove-styles">
            <Pet pet={pet} setPet={setPet} />
          </div>
        );
      })}
    </div>
  );
};

export default HouseholdPets;
