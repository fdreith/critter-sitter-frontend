import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectEvent, selectPet, selectUser } from '../utilities';


const EventInfo = (props: any) => {
  let match = useRouteMatch();

  const currentUser = useSelector((state: any) => state.currentUser);
  const event = selectEvent(props.match.params.id);
  const pet = selectPet(event.relationships.pet.data.id);
  const user = selectUser(event.relationships.user.data.id);

  return (
    <div>
      <h2>
        {pet.attributes.name} was {event.attributes.name}
      </h2>
      <p>
        at {event.attributes.date} by {user.attributes.name}
      </p>
      <p>Details: {event.attributes.details}</p>
      {event.relationships.user.data.id === currentUser.id && (
        <Link to={`${match.url}/edit`} className="button">
          Edit
        </Link>
      )}
    </div>
  );
};

export default EventInfo;
