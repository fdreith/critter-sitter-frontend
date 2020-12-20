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

export const getRecordsByType = (
  type: 'event' | 'vet' | 'reminder',
  petId: any
) => {
  const records = useSelector((state: any) => state.records);
  return records
    .filter((record: any) => record.relationships.pet.data.id === petId)
    .filter((record: any) => record.attributes.record_type === type)
    .sort(sortBy(type === 'reminder' ? 'date' : 'created_at'));
};

export const displayDate = (unformattedDate: any) => {
  const date = new Date(unformattedDate);
  const month = date.getMonth() + 1;
  const hour = date.getHours();
  const min = date.getMinutes();
  return `${hour}:${min} on ${month}-${date.getDate()}-${date.getFullYear()}`;
};
