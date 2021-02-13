const BASE_URL = 'http://localhost:3000/api/v1';

export const fetchItems = (type: any, included?: boolean) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/${type}s`, {
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
        if (response.error) {
          console.log(response.error);
        } else {
          dispatch(setItems(response.data, type));
          included &&
            dispatch(setItems(response.included, response.included[0].type));
        }
      });
  };
};

export const setItems = (items: any, type: any) => {
  return {
    type: `SET_${type.toUpperCase()}S`,
    items
  };
};

export const post = (item: any, history: any, type: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/${type}s`, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
        // "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(item)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.errors) {
          console.log(response.errors);
          //TODO: error handling in form
          // alert(response.errors);
        } else {
          // TODO: refactor to reduce code smell
          if (type === 'event') {
            history.go(-1);
          } else {
            history.push(`/${type}s`);
          }
          dispatch(addToStore(response.data, type));
        }
      });
    // .catch(alert);
  };
};

export const addToStore = (item: any, type: any) => {
  return {
    type: `ADD_${type.toUpperCase()}`,
    item
  };
};

export const update = (item: any, itemId: any, history: any, type: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/${type}s/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.error) {
          //TODO: error handling in form
          console.log(response.error);
        } else {
          if (type === 'event') {
            history.go(-1);
          } else {
            history.push(`/${type}s`);
          }
          dispatch(updateItemStore(response.data, type));
        }
      });
    // .catch(alert)
  };
};

export const updateItemStore = (item: any, type: any) => {
  return {
    type: `UPDATE_${type.toUpperCase()}S`,
    item
  };
};

export const deleteItem = (itemId: any, history: any, type: any) => {
  return (dispatch: any) => {
    return fetch(`${BASE_URL}/${type}s/${itemId}`, {
      method: 'DELETE'
    })
      .then((resp) => resp.json())
      .then((response) => {
        if (response.message) {
          // alert(response.message)
          dispatch(deleteItemStore(itemId, type));
          history.push(`/${type}s`);
        } else {
          throw new Error(response.error);
        }
      });
    // .catch(alert)
  };
};

export const deleteItemStore = (itemId: any, type: any) => {
  return {
    type: `DELETE_${type.toUpperCase()}`,
    itemId
  };
};
