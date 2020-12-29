export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.items;
    case 'ADD_EVENT':
      return state.concat(action.item);
    case 'DELETE_EVENT':
      return state.filter(
        (event: any) => parseInt(event.id) !== action.itemId
      );
    default:
      return state;
  }
};
