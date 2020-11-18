export default (state = [], action: any) => {
  switch (action.type) {
    case "SET_HOUSEHOLDS":
      const households = action.data.included.filter((household: any) => {
        return household.relationships.users.data.find(
          (user: any) => user.id === action.data.data.id
        );
      });
      return households;
    case "ADD_HOUSEHOLD":
      return state.concat(action.household.data);
    case "DELETE_HOUSEHOLD":
      return state.filter(
        (household: any) => parseInt(household.id) !== action.householdId
      );
    default:
      return state;
  }
};
