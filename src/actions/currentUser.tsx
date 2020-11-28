import { setHouseholds } from './households';

const BASE_URL = 'http://localhost:3000/api/v1';

export const getCurrentUser = () => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/get_current_user`, {
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
          dispatch(setCurrentUser(response.data));
          dispatch(setHouseholds(response));
        }
      });
  };
};

export const login = (credentials: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/login`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(credentials)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(setCurrentUser(response.data));
        }
      });
    // .catch(alert);
  };
};

export const setCurrentUser = (user: any) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
};

export const logout = (event: any) => {
  return (dispatch: any) => {
    dispatch(clearCurrentUser());
    return fetch(`${BASE_URL}/logout`, {
      credentials: 'include',
      method: 'DELETE'
    });
  };
};

export const clearCurrentUser = () => {
  return {
    type: 'CLEAR_CURRENT_USER'
  };
};

export const signUp = (credentials: any) => {
  return (dispatch: any) => {
    const userInfo = {
      user: credentials
    };
    return fetch(`${BASE_URL}/signup`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(userInfo)
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
        } else {
          dispatch(setCurrentUser(response.data));
          // history.push('/')
        }
      });
    // .catch(alert);
  };
};
