import { useSelector } from 'react-redux';

// const sortBy = (property: any) => {
//   let sortOrder = 1;
//   if (property[0] === '-') {
//     sortOrder = -1;
//     property = property.substr(1);
//   }
//   return function (a: any, b: any) {
//     const result =
//       a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
//     return result * sortOrder;
//   };
// };

const sortByDate = (events: any) => {
  return events.sort(function (a: any, b: any) {
    const dateA = a.attributes.date;
    const dateB = b.attributes.due_date;
    if (dateA < dateB) {
      return -1;
    }
    if (dateA > dateB) {
      return 1;
    }
    return 0;
  });
};

export const getEventsByType = (
  type: 'care' | 'vet' | 'reminder',
  petId: any
) => {
  const events = useSelector((state: any) => state.events);
  return sortByDate(
    events
      .filter((event: any) => event.relationships.pet.data.id === petId)
      .filter((event: any) => event.attributes.event_type === type)
  );
  // .sort(sortBy('date'));
};

export const displayDate = (unformattedDate: any) => {
  const date = new Date(unformattedDate);
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  const min = date.getMinutes();
  return `${hour}:${min} on ${month}-${date.getDate()}-${date.getFullYear()}`;
};
