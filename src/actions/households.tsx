const BASE_URL = "http://localhost:3000/api/v1";

export const setHouseholds = (data: any) => {
  return {
    type: "SET_HOUSEHOLDS",
    data,
  };
};

export const postHousehold = (credentials: any) => {
  return (dispatch: any) => {
    const householdInfo = {
      household: credentials,
    };
    return fetch(`${BASE_URL}/households`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(householdInfo),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
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
