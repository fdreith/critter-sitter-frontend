import React from "react";
import { connect } from "react-redux";
// import { fetchUsers } from "../actions/users"
import { postHousehold } from "../actions/households";

class NewHousehold extends React.Component<any> {
  // componentWillMount() {
  //   this.props.fetchUsers();
  // }

  state = {
    name: "",
    address: "",
    owner_id: parseInt(this.props.currentUser.id),
    passcode: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.postHousehold(this.state, this.props.history);
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
            placeholder="name of household"
            onChange={this.handleChange}
          />
          <br />
          Password:
          <br />
          <input
            type="password"
            name="passcode"
            placeholder="passcode"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state: any) => {
//   return {
//     users: state.users,
//   };
// };

export default connect(null, { postHousehold })(NewHousehold);
