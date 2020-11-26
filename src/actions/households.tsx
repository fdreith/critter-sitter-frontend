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
      users: {users: credentials.users}
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
          debugger
          console.log(response.errors);

        } else {
          debugger
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

export const updateHousehold = (household: any, id: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/households/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(household),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(updateHouseholdStore(response));
        }
      });
    // .catch(alert)
  };
};

export const updateHouseholdStore = (household: any) => {
  return {
    type: "UPDATE_HOUSEHOLD",
    household,
  };
};
