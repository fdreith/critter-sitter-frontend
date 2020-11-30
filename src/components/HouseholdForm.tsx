import React, { useState } from 'react';
import {
  postHousehold,
  deleteHousehold,
  updateHousehold
} from '../actions/households';
import MultiSelect from 'react-multi-select-component';
import { useSelector, useDispatch } from 'react-redux';

const HouseholdForm = (props: any) => {
  const options = useSelector((state: any) => {
    return state.users
      .map((user: any) => {
        return {
          label: `${user.attributes.first_name} ${user.attributes.last_name}`,
          value: user.id
        };
      })
      .filter((user: any) => user.value !== props.currentUser.id);
  });

  const householdUserIds =
    props.household &&
    props.household.relationships.users.data.map((user: any) => user.id);
  const selectedUsers =
    props.household &&
    options.filter((user: any) => {
      return householdUserIds.includes(user.value);
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
        owner_id: parseInt(props.currentUser.id)
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
          updateHousehold(
            { ...state, users: getUserIds() },
            props.household.id,
            history
          )
        )
      : dispatch(postHousehold({ ...state, users: getUserIds() }, history));
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
        <input type="submit" value="Create Household" className="button" />
      </form>
      <button className="button" onClick={() => props.history.goBack()}>
        Cancel
      </button>
      {props.household && (
        <button
          className="button"
          onClick={() => dispatch(deleteHousehold(props.household.id, history))}
        >
          Delete Household
        </button>
      )}
    </div>
  );
};

export default HouseholdForm;
