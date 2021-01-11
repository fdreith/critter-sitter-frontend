import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Events from './Events';
import { createSelector } from 'reselect';

const PetInfo = (props: any) => {
  let match = useRouteMatch();

  const currentUser = useSelector((state: any) => state.currentUser);

  const selectedPet = createSelector(
    (state: any) => state.pets,
    (pets) => pets.filter((pet: any) => pet.id === props.match.params.id)[0]
  );
  const pet = useSelector(selectedPet);
  return (
    <div>
      <h2>{pet.attributes.name} </h2>
      <p>{pet.attributes.care_instructions}</p>
      {pet.relationships.owner.data.id === currentUser.id && (
        <Link to={`${match.url}/edit`} className="button">
          Edit
        </Link>
      )}
      <h3>Events:</h3>
      <Events pet={pet} history={props.history} />

      <h3>Reminders:</h3>
      {/* reminders component */}
    </div>
  );
};

export default PetInfo;
