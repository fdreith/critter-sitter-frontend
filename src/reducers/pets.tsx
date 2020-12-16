export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_PETS':
      debugger;
      return action.items;
    case 'ADD_PET':
      return state.concat(action.item);
    case 'UPDATE_PETS':
      const updatedPets = state.map((pet: any) => {
        if (pet.id === action.item.data.id) {
          return action.item.data;
        } else {
          return pet;
        }
      });
      return updatedPets;
    case 'DELETE_PET':
      return state.filter((pet: any) => pet.id !== action.petId);
    default:
      return state;
  }
};
