export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.items;
    default:
      return state;
  }
};
