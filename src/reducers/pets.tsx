export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.items;
    case 'ADD_PET':
      return state.concat(action.item);
    case 'UPDATE_PETS':
      const updatedPets = state.map((pet: any) => {
        if (pet.id === action.item.id) {
          return action.item;
        } else {
          return pet;
        }
      });
      return updatedPets;
    case 'DELETE_PET':
      return state.filter((pet: any) => {
        return pet.id !== action.itemId;
      });
    default:
      return state;
  }
};
