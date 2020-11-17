export default (state = [], action: any) => {
  switch (action.type) {
    case "SET_USERS":
      return action.users;
    default:
      return state;
  }
};
