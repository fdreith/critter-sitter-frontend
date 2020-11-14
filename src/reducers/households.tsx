export default (state = [], action: any) => {
  switch (action.type) {
    case "SET_HOUSEHOLDS":
      return action.households;
    // case "SET_CURRENT_HOUSEHOLDS":
    //   return currentHouseholds(action.households, action.currentUser.id)
    case "ADD_HOUSEHOLD":
      return state.concat(action.HOUSEHOLD.data);
    default:
      return state;
  }
};

// const currentHouseholds = (households: any, curentUserId: any) => (
//   households.filter()
// )
