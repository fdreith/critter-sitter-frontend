import React from 'react';
import { NavLink } from 'react-router-dom';

class LoginForm extends React.Component<any> {
  state = {
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
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div className="contianer">
        <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Login" className="button" />
        </form>
        <NavLink to="/register">Register</NavLink>
      </div>
    );
  }
}

export default LoginForm;
