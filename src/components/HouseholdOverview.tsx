import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useRouteMatch } from 'react-router-dom';
import Events from './Events';

const HouseholdOverview = (props: any) => {
  let match = useRouteMatch();

  const selectPets = createSelector(
    (state: any) => state.pets,
    (pets) =>
      pets.filter(
        (pet: any) => pet.relationships.household.data.id === props.household.id
      )
  );

  const pets = useSelector(selectPets);

  return (
    <div key={props.household.id}>
      {pets.map((pet: any) => {
        return (
          <div key={pet.id}>
            <h3>{pet.attributes.name}</h3>
            <Events pet={pet} history={props.history} />
          </div>
        );
      })}
    </div>
  );
};

export default HouseholdOverview;
