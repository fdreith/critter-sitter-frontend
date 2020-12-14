const BASE_URL = 'http://localhost:3000/api/v1';

import { setRecords } from './records';

export const fetchPets = (currentUserId: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/pets`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // "Access-Control-Allow-Credentials": "true",
      }
    })
      .then((resp) => {
        return resp.json();
      })
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(setPets(response.data, currentUserId));
          dispatch(setRecords(response.included));
        }
      });
  };
};

export const setPets = (pets: any, currentUserId: any) => {
  return {
    type: 'SET_PETS',
    pets,
    currentUserId
  };
};

export const postPet = (pet: any, history: any) => {
  return (dispatch: any) => {
    const petInfo = {
      pet: pet
    };
    return fetch(`${BASE_URL}/pets`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(petInfo)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(addPet(response.data));
          history.go(-1);
        }
      });
    // .catch(alert);
  };
};

export const addPet = (pet: any) => {
  return {
    type: 'ADD_PET',
    pet
  };
};

export const updatePet = (pet: any, petId: any, history: any) => {
  return (dispatch: any) => {
    const petInfo = {
      pet: pet
    };
    return fetch(`${BASE_URL}/pets/${petId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(petInfo)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(updatePetStore(response));
          history.push('/pets');
        }
      });
    // .catch(alert)
  };
};

export const updatePetStore = (pet: any) => {
  return {
    type: 'UPDATE_PETS',
    pet
  };
};

export const deletePet = (petId: any, history: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/pets/${petId}`, {
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          // alert(response.message)
          dispatch(deletePetStore(petId));
          history.go(-2);
        } else {
          throw new Error(response.errors);
        }
      });
    // .catch(alert)
  };
};

export const deletePetStore = (petId: any) => {
  return {
    type: 'DELETE_PET',
    petId
  };
};
