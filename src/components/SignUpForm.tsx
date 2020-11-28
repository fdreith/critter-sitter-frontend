import React from 'react';
import { NavLink } from 'react-router-dom';

class SignUpForm extends React.Component<any> {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    return (
      <div className="contianer">
        <form onSubmit={this.handleSubmit}>
          First Name:
          <br />
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          Last Name:
          <br />
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          Email:
          <br />
          <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange}
          />
          <br />
          Password:
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Register" className="button" />
          <br />
          <br />
          Already have an accout?<NavLink to="/login">Login</NavLink>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
