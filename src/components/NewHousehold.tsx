import React from "react";
import { connect } from "react-redux";
// import { fetchUsers } from "../actions/users"
import { postHousehold } from "../actions/households";

class NewHousehold extends React.Component<any> {
  state = {
    name: "",
    address: "",
    owner_id: parseInt(this.props.currentUser.id),
    password: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.postHousehold(this.state, this.props.history);
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
            placeholder="name of household"
            onChange={this.handleChange}
          />
          <br />
          Address:
          <br />
          <input
            type="text"
            name="address"
            placeholder="adress of household"
            onChange={this.handleChange}
          />
          <br />
          Password:
          <br />
          <input
            type="password"
            name="password"
            placeholder="passcode"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Create Household" className="button" />
        </form>
      </div>
    );
  }
}

export default connect(null, { postHousehold })(NewHousehold);
