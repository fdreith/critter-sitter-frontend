import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useState } from "react";
import Modal from "./Modal";

const HouseholdInfo = (props: any) => {
  const selectPets = createSelector(
    (state: any) => state.pets,
    (pets) =>
      pets.filter(
        (pet: any) => pet.relationships.household.data.id === props.household.id
      )
  );

  const pets = useSelector(selectPets);
  const currentUser = useSelector((state: any) => state.currentUser);

  const [showModal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div>
      <h2>{props.household.attributes.name} Household</h2>
      <p>{props.household.attributes.address}</p>
      {props.household.relationships.owner.data.id === currentUser.id && (
        <button className="button" onClick={() => setModal(true)}>
          Edit
        </button>
      )}

      <h3>Pets:</h3>
      {pets.map((pet: any) => {
        return <p key={pet.id}>{pet.attributes.name}</p>;
      })}
      <Modal
        household={props.household}
        showModal={showModal}
        handleClose={handleClose}
      ></Modal>
    </div>
  );
};

export default HouseholdInfo;
