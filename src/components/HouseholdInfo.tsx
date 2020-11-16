import React from "react";

const HouseholdInfo = (props: any) => {
  console.log(props.household);
  return (
    <div>
      <h2>{props.household.attributes.name} Household</h2>
      <p>{props.household.attributes.address}</p>
      <h3>Pets:</h3>
    </div>
  );
};

export default HouseholdInfo;
