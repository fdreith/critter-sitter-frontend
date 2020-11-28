const BASE_URL = 'http://localhost:3000/api/v1';

export const fetchUsers = () => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/users`, {
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
          dispatch(setUsers(response.data));
        }
      });
  };
};

export const setUsers = (users: any) => {
  return {
    type: 'SET_USERS',
    users
  };
};
