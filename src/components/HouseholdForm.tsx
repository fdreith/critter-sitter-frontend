import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, post, update } from '../actions/fetch';

const HouseholdForm = (props: any) => {
  const currentUser = useSelector((state: any) => state.currentUser);

  const options = useSelector((state: any) => {
    return state.users
      .map((user: any) => {
        return {
          label: `${user.attributes.first_name} ${user.attributes.last_name}`,
          value: user.id
        };
      })
      .filter((user: any) => user.value !== currentUser.id);
  });

  const selectedUsers =
    props.household &&
    options.filter((user: any) => {
      return props.household.relationships.users.data.some(
        (user: any) => user.id === user.value
      );
    });

  const [state, setState] = props.household
    ? useState<any>({
        name: props.household.attributes.name,
        address: props.household.attributes.address,
        users: selectedUsers
      })
    : useState<any>({
        name: '',
        address: '',
        // password: '',
        users: [],
        owner_id: parseInt(currentUser.id)
      });

  const handleChange = (event: any) => {
    if (event.target) {
      const { name, value } = event.target;
      setState({ ...state, [name]: value });
    } else {
      setState({ ...state, users: [...event] });
    }
  };

  const getUserIds = () => {
    const ids = state.users.map((user: any) => parseInt(user.value));
    ids.push(state.owner_id);
    return ids;
  };

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.household
      ? dispatch(
          update(
            { household: state, users: { users: getUserIds() } },
            props.household.id,
            props.history,
            'household'
          )
        )
      : dispatch(
          post(
            { household: state, users: { users: getUserIds() } },
            props.history,
            'household'
          )
        );
  };

  return (
    <div className="contianer">
      <form onSubmit={handleSubmit}>
        Name of Household:
        <br />
        <input
          type="text"
          name="name"
          value={props.household && state.name}
          placeholder="name of household"
          onChange={handleChange}
        />
        <br />
        Address:
        <br />
        <input
          type="text"
          name="address"
          value={props.household && state.address}
          placeholder="adress of household"
          onChange={handleChange}
        />
        <br />
        {/* Password:
        <br />
        <input
        
          type="password"
          name="password"
          placeholder="passcode"
          onChange={handleChange}
        />
        <br /> */}
        Household Users:
        <pre>{JSON.stringify(state.users.label)}</pre>
        <MultiSelect
          className="multi-select"
          options={options}
          value={state.users}
          onChange={handleChange}
          labelledBy={'Select'}
          hasSelectAll={false}
        />
        <br />
        {props.household ? (
          <input type="submit" value="Update Household" className="button" />
        ) : (
          <input type="submit" value="Create Household" className="button" />
        )}
      </form>
      <button className="button" onClick={() => props.history.goBack()}>
        Cancel
      </button>
      {props.household && (
        <button
          className="button"
          onClick={() =>
            dispatch(deleteItem(props.household.id, props.history, 'household'))
          }
        >
          Delete Household
        </button>
      )}
    </div>
  );
};

export default HouseholdForm;
