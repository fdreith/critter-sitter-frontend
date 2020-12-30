import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getEventsByType, displayDate } from '../utilities';

// button for events
// columns for ease on the eyes

const Events = (props: any) => {
  let match = useRouteMatch();

  const allEvents = getEventsByType('care', props.pet.id);
  const [numberOfEventsRendered, setNumberOfEventsRendered] = useState(5);

  const events = allEvents.slice(0, numberOfEventsRendered);

  const noMoreToShow = numberOfEventsRendered >= allEvents.length;
  const startNumberOfEvents = 5;
  const handleShowMore = () => {
    noMoreToShow
      ? setNumberOfEventsRendered(startNumberOfEvents)
      : setNumberOfEventsRendered(numberOfEventsRendered + startNumberOfEvents);
  };
  
  return (
    <div>
      {events.length > 0
        ? events.map((event: any) => (
            <div key={event.id}>
              {event.attributes.name} at {displayDate(event.attributes.date)}:{' '}
              {event.attributes.details}
            </div>
          ))
        : 'No events recorded yet'}
      {events.length >= startNumberOfEvents && (
        <button className="button" onClick={handleShowMore}>
          {noMoreToShow ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Events;
