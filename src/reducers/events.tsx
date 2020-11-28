export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return action.events;
    case 'ADD_EVENT':
      return state.concat(action.EVENT.data);
    case 'DELETE_EVENT':
      return state.filter(
        (EVENT: any) => parseInt(EVENT.id) !== action.EVENTId
      );
    default:
      return state;
  }
};
