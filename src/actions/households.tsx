const BASE_URL = 'http://localhost:3000/api/v1';

export const setHouseholds = (data: any) => {
  return {
    type: 'SET_HOUSEHOLDS',
    data
  };
};

export const postHousehold = (credentials: any, history: any) => {
  return (dispatch: any) => {
    const householdInfo = {
      household: credentials,
      users: { users: credentials.users }
    };
    return fetch(`${BASE_URL}/households`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(householdInfo)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(addHousehold(response));
          history.go(-1);
        }
      });
    // .catch(alert);
  };
};

export const addHousehold = (household: any) => {
  return {
    type: 'ADD_HOUSEHOLD',
    household
  };
};

export const updateHousehold = (
  household: any,
  householdId: any,
  history: any
) => {
  return (dispatch: any) => {
    const householdInfo = {
      household: household,
      users: { users: household.users }
    };
    return fetch(`${BASE_URL}/households/${householdId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(householdInfo)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(updateHouseholdStore(response));
          history.go(-1);
        }
      });
    // .catch(alert)
  };
};

export const updateHouseholdStore = (household: any) => {
  return {
    type: 'UPDATE_HOUSEHOLDS',
    household
  };
};

export const deleteHousehold = (householdId: any, history: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/households/${householdId}`, {
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          // alert(response.message)
          dispatch(deleteHouseholdStore(householdId));
          history.go(-2);
        } else {
          throw new Error(response.errors);
        }
      });
    // .catch(alert)
  };
};

export const deleteHouseholdStore = (householdId: any) => {
  return {
    type: 'DELETE_HOUSEHOLD',
    householdId
  };
};
