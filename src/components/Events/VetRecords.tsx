import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { getEventsByType, displayDate } from '../../utilities';

const VetRecords = (props: any) => {
  let match = useRouteMatch();

  const allRecords = getEventsByType('vet', props.pet.id);

  return (
    <div>
      {allRecords.length > 0 ? (
        allRecords.map((event: any) => (
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

export default VetRecords;
