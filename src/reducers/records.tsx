export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_RECORDS':
      return action.records;
    case 'ADD_RECORD':
      return state.concat(action.record.data);
    case 'DELETE_RECORD':
      return state.filter(
        (record: any) => parseInt(record.id) !== action.recordId
      );
    default:
      return state;
  }
};
