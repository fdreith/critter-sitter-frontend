import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { setConstantValue } from 'typescript';
import { getRecordsByType, displayDate } from '../utilities';

// button for records
// columns for ease on the eyes

const Records = (props: any) => {
  let match = useRouteMatch();

  const allEvents = getRecordsByType('event', props.pet.id);
  const [numberOfEventsRendered, setNumberOfEventsRendered] = useState(5);

  const events = allEvents
    .slice(0, numberOfEventsRendered)
    .map((event: any) => (
      <div key={event.id}>
        {event.attributes.name} at {displayDate(event.attributes.created_at)}:{' '}
        {event.attributes.details}
      </div>
    ));

  const noMoreToShow = numberOfEventsRendered >= allEvents.length;

  const handleShowMore = () => {
    noMoreToShow
      ? setNumberOfEventsRendered(5)
      : setNumberOfEventsRendered(numberOfEventsRendered + 5);
  };

  console.log(events);

  return (
    <div>
      {events ? events : 'No events recorded yet'}
      <button className="button" onClick={handleShowMore}>
        {noMoreToShow ? 'Show Less' : 'Show More'}
      </button>

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

export default Records;
