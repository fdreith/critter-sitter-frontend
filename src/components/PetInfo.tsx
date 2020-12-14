import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// button for records
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
      {console.log(props.pet)}
      <h3>Events:</h3>
      {/* today needs to be changed */}
      {/* {props.pet.relationships.events.data.length > 1
        ? props.pet.relationships.events.data
            .filter((event: any) => event.attributes.created_on === 'today')
            .map((event: any) => {
              return (
                <p key={event.id}>
                  {event.attributes.event_type} at {event.attributes.created_at}
                  : {event.attributes.details}
                </p>
              );
            })
        : 'No events logged yet today'} */}

      <h3>Reminders:</h3>
      {/* today needs to be changed */}
      {/* {props.pet.relationships.records.reminders.length > 1
        ? props.pet.relationships.records.reminders.data
            .filter((reminder: any) => reminder.attributes.date > 'today')
            .map((reminder: any) => {
              return (
                <p key={reminder.id}>
                  {reminder.attributes.record_type} due{' '}
                  {reminder.attributes.date}: {reminder.attributes.details}
                </p>
              );
            })
        : 'No upcoming reminders'} */}
    </div>
  );
};

export default PetInfo;
