import React, { useState } from 'react';
import MultiSelect from 'react-multi-select-component';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, post, update } from '../../actions/fetch';
import { selectHousehold } from '../../utilities';

const HouseholdForm = (props: any) => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const household = selectHousehold(props.match.params.id);

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
    household &&
    options.filter((option: any) => {
      return household.relationships.users.data.some(
        (user: any) => user.id === option.value
      );
    });

  const [state, setState] = household
    ? useState<any>({
        name: household.attributes.name,
        address: household.attributes.address,
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
    household
      ? dispatch(
          update(
            { household: state, users: { users: getUserIds() } },
            household.id,
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
          value={household && state.name}
          placeholder="name of household"
          onChange={handleChange}
        />
        <br />
        Address:
        <br />
        <input
          type="text"
          name="address"
          value={household && state.address}
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
        {household ? (
          <input type="submit" value="Update Household" className="button" />
        ) : (
          <input type="submit" value="Create Household" className="button" />
        )}
      </form>
      <button className="button" onClick={() => props.history.goBack()}>
        Cancel
      </button>
      {household && (
        <button
          className="button"
          onClick={() =>
            dispatch(deleteItem(household.id, props.history, 'household'))
          }
        >
          Delete Household
        </button>
      )}
    </div>
  );
};

export default HouseholdForm;
