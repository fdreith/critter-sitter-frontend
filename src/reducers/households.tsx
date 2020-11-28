export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_HOUSEHOLDS':
      const households = action.data.included.filter((household: any) => {
        return household.relationships.users.data.find(
          (user: any) => user.id === action.data.data.id
        );
      });
      return households;
    case 'ADD_HOUSEHOLD':
      debugger;
      return state.concat(action.household.data);
    case 'UPDATE_HOUSEHOLD':
      const updatedHouseholds = state.map((household: any) => {
        if (household.id === action.household.data.id) {
          return action.household.data;
        } else {
          return household;
        }
      });
      return updatedHouseholds;
    case 'DELETE_HOUSEHOLD':
      return state.filter(
        (household: any) => parseInt(household.id) !== action.householdId
      );
    default:
      return state;
  }
};
