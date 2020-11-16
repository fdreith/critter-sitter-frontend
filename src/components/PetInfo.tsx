import React from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

//use selector to get events, records, and reminders for pet

const PetInfo = (props: any) => {
  return (
    <div>
      <h2>{props.pet.attributes.name} </h2>
    </div>
  );
};

export default PetInfo;
