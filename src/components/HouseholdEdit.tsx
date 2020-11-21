import React from "react";
import { connect } from "react-redux";
import { updateHousehold } from "../actions/households";

class HouseholdEdit extends React.Component<any> {
  state = {
    name: this.props.household.attributes.name,
    address: this.props.household.attributes.address,
    // owner_id: parseInt(this.props.currentUser.id),
    // password: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.updateHousehold({ ...this.state }, this.props.household.id);
    this.props.handleClose();
  };

  render() {
    return (
      <div className="contianer">
        <form onSubmit={this.handleSubmit}>
          Name of Household:
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          Address:
          <br />
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Edit Household" className="button" />
        </form>
      </div>
    );
  }
}

export default connect(null, { updateHousehold })(HouseholdEdit);
