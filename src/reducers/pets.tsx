export default (state = [], action: any) => {
  switch (action.type) {
    case 'SET_PETS':
      return action.pets;
    case 'ADD_PET':
      return state.concat(action.pet);
    case 'UPDATE_PETS':
      const updatedPets = state.map((pet: any) => {
        if (pet.id === action.pet.data.id) {
          return action.pet.data;
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
