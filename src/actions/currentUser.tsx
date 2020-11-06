const BASE_URL = "http://localhost:3000/api/v1";

export const getCurrentUser = () => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/get_current_user"`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((response) => {
        if (response.error) {
          console.log(response.error);
        } else {
          dispatch(setCurrentUser(response.data));
          dispatch(setTasks(response.included));
        }
      });
  };
};

export const login = (credentials) => {
  return (dispatch) => {
    return fetch(`${BASE_URL}/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response.data));
        }
      })
      .catch(alert);
  };
};

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    user,
  };
};

export const logout = (event) => {
  return (dispatch) => {
    dispatch(clearCurrentUser());
    return fetch(`${BASE_URL}/logout`, {
      credentials: "include",
      method: "DELETE",
    });
  };
};

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  };
};

export const signUp = (credentials) => {
  return (dispatch) => {
    const userInfo = {
      user: credentials,
    };
    return fetch(`${BASE_URL}/signup`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.error) {
          alert(response.error);
        } else {
          dispatch(setCurrentUser(response.data));
          // history.push('/')
        }
      })
      .catch(alert);
  };
};