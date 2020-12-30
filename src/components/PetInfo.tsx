import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Events from './Events';

// button for events
// columns for ease on the eyes

const PetInfo = (props: any) => {
  let match = useRouteMatch();

  const currentUser = useSelector((state: any) => state.currentUser);

  return (
    <div>
      <h2>{props.pet.attributes.name} </h2>
      <p>{props.pet.attributes.care_instructions}</p>
      {props.pet.relationships.owner.data.id === currentUser.id && (
        <Link to={`${match.url}/edit`} className="button">
          Edit
        </Link>
      )}
      <h3>Events:</h3>
      <Events pet={props.pet} history={props.history} />

      <h3>Reminders:</h3>
      {/* reminders component */}

    </div>
  );
};

export default PetInfo;
