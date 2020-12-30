import { useSelector } from 'react-redux';

const sortBy = (property: any) => {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a: any, b: any) {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};

export const getEventsByType = (
  type: 'care' | 'vet' | 'reminder',
  petId: any
) => {
  const events = useSelector((state: any) => state.events);
  return events
    .filter((event: any) => event.relationships.pet.data.id === petId)
    .filter((event: any) => event.attributes.event_type === type)
    .sort(sortBy('date'));
};

export const displayDate = (unformattedDate: any) => {
  const date = new Date(unformattedDate);
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  const min = date.getMinutes();
  return `${hour}:${min} on ${month}-${date.getDate()}-${date.getFullYear()}`;
};
