export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_RECORDS':
      return action.items;
    case 'ADD_RECORD':
      return state.concat(action.item.data);
    case 'DELETE_RECORD':
      return state.filter(
        (record: any) => parseInt(record.id) !== action.itemId
      );
    default:
      return state;
  }
};
