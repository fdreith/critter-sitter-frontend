const BASE_URL = "http://localhost:3000/api/v1";

export const setHouseholds = (households: any) => {
  return {
    type: "SET_HOUSEHOLDS",
    households,
  };
};

export const postHousehold = (household: any) => {
  debugger;
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/households`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(household),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(addHousehold(response));
        }
      });
    // .catch(alert);
  };
};

export const addHousehold = (household: any) => {
  return {
    type: "ADD_HOUSEHOLD",
    household,
  };
};
