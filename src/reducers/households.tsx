export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_HOUSEHOLDS':
      return action.items;
    case 'ADD_HOUSEHOLD':
      return state.concat(action.item);
    case 'UPDATE_HOUSEHOLDS':
      const updatedHouseholds = state.map((household: any) => {
        if (household.id === action.item.id) {
          return action.item;
        } else {
          return household;
        }
      });
      return updatedHouseholds;
    case 'DELETE_HOUSEHOLD':
      return state.filter((household: any) => household.id !== action.itemId);
    default:
      return state;
  }
};
