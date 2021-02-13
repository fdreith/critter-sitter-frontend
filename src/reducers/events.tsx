export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.items;
    case 'ADD_EVENT':
      return state.concat(action.item);
    case 'UPDATE_EVENTS':
      const updatedEvents = state.map((event: any) => {
        if (event.id === action.item.id) {
          return action.item;
        } else {
          return event;
        }
      });
      return updatedEvents;
    case 'DELETE_EVENT':
      return state.filter((event: any) => parseInt(event.id) !== action.itemId);
    default:
      return state;
  }
};
