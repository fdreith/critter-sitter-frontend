import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { getEventsByType, displayDate } from '../../utilities';

const Reminders = (props: any) => {
  let match = useRouteMatch();

  const allReminders = getEventsByType('reminder', props.pet.id);

  return (
    <div>
      {allReminders.length > 0 ? (
        allReminders.map((event: any) => (
          <div key={event.id}>
            <Link to={`${match.url}/events/${event.id}`}>
              {event.attributes.name} at {displayDate(event.attributes.date)}
            </Link>
          </div>
        ))
      ) : (
        <div>'No vet records saved yet'</div>
      )}
    </div>
  );
};

export default Reminders;
