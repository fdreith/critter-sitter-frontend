const BASE_URL = "http://localhost:3000/api/v1";

export const fetchPets = () => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/pets`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Credentials": "true",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(setPets(response.data));
        }
      });
  };
};

export const setPets = (pets: any) => {
  return {
    type: "SET_PETS",
    pets,
  };
};
