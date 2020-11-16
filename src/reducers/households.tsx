export default (state = [], action: any) => {
  switch (action.type) {
    case "SET_HOUSEHOLDS":
      return action.households;
    case "ADD_HOUSEHOLD":
      return state.concat(action.HOUSEHOLD.data);
    case "DELETE_HOUSEHOLD":
      return state.filter(
        (household: any) => parseInt(household.id) !== action.householdId
      );
    default:
      return state;
  }
};

