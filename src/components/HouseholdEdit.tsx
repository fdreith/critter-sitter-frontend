import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useDispatch, useSelector } from 'react-redux';
import { deleteHousehold, updateHousehold } from '../actions/households';

const HouseholdEdit = (props: any) => {
  const options = useSelector((state: any) => {
    return state.users
      .map((user: any) => {
        return {
          label: `${user.attributes.first_name} ${user.attributes.last_name}`,
          value: user.id
        };
      })
      .filter(
        (user: any) =>
          user.value !== props.household.relationships.owner.data.id
      );
  });

  const householdUserIds = props.household.relationships.users.data.map(
    (user: any) => user.id
  );
  const selectedUsers = options.filter((user: any) => {
    return householdUserIds.includes(user.value);
  });

  const [state, setState] = useState<any>({
    name: props.household.attributes.name,
    address: props.household.attributes.address,
    users: selectedUsers
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
    ids.push(parseInt(props.household.relationships.owner.data.id));
    return ids;
  };

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(
      updateHousehold(
        { ...state, users: getUserIds() },
        props.household.id,
        history
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
          value={state.name}
          onChange={handleChange}
        />
        <br />
        Address:
        <br />
        <input
          type="text"
          name="address"
          value={state.address}
          onChange={handleChange}
        />
        <br />
        Manage Users in Household:
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
        <input type="submit" value="Edit Household" className="button" />
      </form>
      <button className="button" onClick={() => props.history.goBack()}>
        Cancel
      </button>
      <button
        className="button"
        onClick={() => deleteHousehold(props.household.id, props.history)}
      >
        Delete Household
      </button>
    </div>
  );
};

export default HouseholdEdit;
