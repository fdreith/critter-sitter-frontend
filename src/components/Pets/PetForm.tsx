import React, { useState } from 'react';
import { deleteItem, post, update } from '../../actions/fetch';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { selectPet } from '../../utilities';

const PetForm = (props: any) => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const pet = selectPet(props.match.params.id);
  const selectHouseholds = createSelector(
    (state: any) => state.households,
    (households) =>
      households.filter((household: any) =>
        household.relationships.users.data.some(
          (user: any) => user.id === currentUser.id
        )
      )
  );

  const households = useSelector(selectHouseholds);

  const [state, setState] = pet
    ? useState<any>({
        name: pet.attributes.name,
        care_instructions: pet.attributes.care_instructions,
        household_id: pet.relationships.household.data.id
      })
    : useState<any>({
        name: '',
        care_instructions: '',
        household_id: '',
        owner_id: parseInt(currentUser.id)
      });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    pet
      ? dispatch(update(state, pet.id, props.history, 'pet'))
      : dispatch(post(state, props.history, 'pet'));
  };

  return (
    <div className="contianer">
      <form onSubmit={handleSubmit}>
        <label>Name of Pet:</label>
        <br />
        <input
          type="text"
          name="name"
          value={pet && state.name}
          placeholder="name of pet"
          onChange={handleChange}
        />
        <br />
        <label>Care Instructions:</label>
        <br />
        <textarea
          rows={5}
          cols={40}
          name="care_instructions"
          value={pet && state.care_instructions}
          placeholder="care instructions"
          onChange={handleChange}
        />
        <br />
        <label>Household:</label>
        {households.map((household: any) => (
          <div key={household.id} className="radio">
            <label>
              <input
                type="radio"
                name="household_id"
                value={household.id}
                checked={state.household_id === household.id}
                onChange={handleChange}
              />
              {household.attributes.name}
            </label>
          </div>
        ))}
        <br />
        {pet ? (
          <input type="submit" value="Update Pet" className="button" />
        ) : (
          <input type="submit" value="Create Pet" className="button" />
        )}
      </form>
      <button className="button" onClick={() => props.history.goBack()}>
        Cancel
      </button>
      {pet && (
        <button
          className="button"
          onClick={() => dispatch(deleteItem(pet.id, props.history, 'pet'))}
        >
          Delete Pet
        </button>
      )}
    </div>
  );
};

export default PetForm;
