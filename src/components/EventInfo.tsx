import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Events from './Events';


const EventInfo = (props: any) => {
  let match = useRouteMatch();

  const currentUser = useSelector((state: any) => state.currentUser);

  return (
    <div>
      <h2>{props.event.attributes.name} </h2>
      <p>{props.event.attributes.care_instructions}</p>
      {props.event.relationships.owner.data.id === currentUser.id && (
        <Link to={`${match.url}/edit`} className="button">
          Edit
        </Link>
      )}
      <h3>Events:</h3>
      <Events event={props.event} history={props.history} />

      <h3>Reminders:</h3>
      {/* reminders component */}
    </div>
  );
};

export default EventInfo;
