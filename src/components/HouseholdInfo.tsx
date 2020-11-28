import React from 'react';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { useState } from 'react';
import Modal from './Modal';
import HouseholdEdit from './HouseholdEdit';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';

const HouseholdInfo = (props: any) => {
  let match = useRouteMatch();

  const selectPets = createSelector(
    (state: any) => state.pets,
    (pets) =>
      pets.filter(
        (pet: any) => pet.relationships.household.data.id === props.household.id
      )
  );

  const pets = useSelector(selectPets);
  const currentUser = useSelector((state: any) => state.currentUser);

  return (
    <div>
      <h2>{props.household.attributes.name} Household</h2>
      <p>{props.household.attributes.address}</p>
      {props.household.relationships.owner.data.id === currentUser.id && (
        <Link to={`${match.url}/edit`} className="button">
          Edit
        </Link>
      )}

      <h3>Pets:</h3>
      {pets.map((pet: any) => {
        return <p key={pet.id}>{pet.attributes.name}</p>;
      })}
    </div>
  );
};

export default HouseholdInfo;
