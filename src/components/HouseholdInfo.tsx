import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const HouseholdInfo = (props: any) => {
  const selectPets = createSelector(
    (state: any) => state.pets,
    (pets) =>
      pets.filter(
        (pet: any) => pet.relationships.household.data.id === props.household.id
      )
  );

  const pets = useSelector(selectPets);
  return (
    <div>
      <h2>{props.household.attributes.name} Household</h2>
      <p>{props.household.attributes.address}</p>
      <h3>Pets:</h3>
      {pets.map((pet: any) => {
        return <p>{pet.attributes.name}</p>;
      })}
    </div>
  );
};

export default HouseholdInfo;
