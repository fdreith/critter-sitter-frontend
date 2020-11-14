const BASE_URL = "http://localhost:3000/api/v1";

export const fetchHouseholds = (currentUser: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/households`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setHouseholds(response));
          // dispatch(setCurrentHouseholds(response, currentUser));
        }
      });
    // .catch(alert)
  };
};

export const setHouseholds = (households: any) => {
  return {
    type: "SET_HOUSEHOLDS",
    households,
  };
};

export const setCurrentHouseholds = (households: any, currentUser: any) => {
  return {
    type: "SET_CURRENT_HOUSEHOLDS",
    households,
  };
};
