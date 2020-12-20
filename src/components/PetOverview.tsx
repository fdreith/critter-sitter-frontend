import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getRecordsByType, displayDate } from '../utilities';

// button for records
// columns for ease on the eyes

const PetOverview = (props: any) => {
  let match = useRouteMatch();

  const events = getRecordsByType('event', props.pet.id);

  return (
    <div>
      {console.log(props.pet)}
      {/* today needs to be changed */}
      {events
        ? events.map((event: any) => {
            return (
              <p key={event.id}>
                {event.attributes.name} at{' '}
                {displayDate(event.attributes.created_at)}:{' '}
                {event.attributes.details}
              </p>
            );
          })
        : 'No events recorded yet'}
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

export default PetOverview;
