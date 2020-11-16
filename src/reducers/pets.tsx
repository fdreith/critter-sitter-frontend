export default (state = [], action: any) => {
  switch (action.type) {
    case "SET_PETS":
      return action.pets;
    case "ADD_PET":
      return state.concat(action.PET.data);
    case "DELETE_PET":
      return state.filter(
        (PET: any) => parseInt(PET.id) !== action.PETId
      );
    default:
      return state;
  }
};
