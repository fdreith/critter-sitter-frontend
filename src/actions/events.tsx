const BASE_URL = "http://localhost:3000/api/v1";

export const fetchEvents = () => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/events`, {
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
        if (response.error) {
          console.log(response.error);
        } else {
          dispatch(setEvents(response.data));
        }
      });
  };
};

export const setEvents = (events: any) => {
  return {
    type: "SET_EVENTS",
    events,
  };
};
