export default (state = null, action: any) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return action.user;
    case "CLEAR_CURRENT_USER":
      return null;
    default:
      return state;
  }
};
