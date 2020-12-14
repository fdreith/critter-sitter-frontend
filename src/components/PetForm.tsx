import React, { useState } from 'react';
import { postPet, deletePet, updatePet } from '../actions/pets';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';

const PetForm = (props: any) => {
  const selectHouseholds = createSelector(
    (state: any) => state.households,
    (households) =>
      households.filter((household: any) =>
        household.relationships.users.data.some(
          (user: any) => user.id === props.currentUser.id
        )
      )
  );

  const households = useSelector(selectHouseholds);

  const [state, setState] = props.pet
    ? useState<any>({
        name: props.pet.attributes.name,
        care_instructions: props.pet.attributes.care_instructions,
        household_id: props.pet.relationships.household.data.id
      })
    : useState<any>({
        name: '',
        care_instructions: '',
        household_id: '',
        owner_id: parseInt(props.currentUser.id)
      });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  console.log(state);
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.pet
      ? dispatch(updatePet(state, props.pet.id, props.history))
      : dispatch(postPet(state, props.history));
  };

  return (
    <div className="contianer">
      <form onSubmit={handleSubmit}>
        <label>Name of Pet:</label>
        <br />
        <input
          type="text"
          name="name"
          value={props.pet && state.name}
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
          value={props.pet && state.care_instructions}
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
        {props.pet ? (
          <input type="submit" value="Update Pet" className="button" />
        ) : (
          <input type="submit" value="Create Pet" className="button" />
        )}
      </form>
      <button className="button" onClick={() => props.history.goBack()}>
        Cancel
      </button>
      {props.pet && (
        <button
          className="button"
          onClick={() => dispatch(deletePet(props.pet.id, history))}
        >
          Delete Pet
        </button>
      )}
    </div>
  );
};

export default PetForm;
