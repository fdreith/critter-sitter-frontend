import React from "react";
import { NavLink } from "react-router-dom";

class SignUpForm extends React.Component<any> {
  state = {
    email: "",
    password: "",
    //more here
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    return (
      <div className="contianer">
        <form action="/action_page.php" method="post">
          First Name:
          <br />
          <input type="text" name="firstName" placeholder="First Name" />
          <br />
          Last Name:
          <br />
          <input type="text" name="lastName" placeholder="Last Name" />
          <br />
          Email:
          <br />
          <input type="text" name="email" placeholder="email" />
          <br />
          Password:
          <br />
          <input type="password" name="password" placeholder="password" />
          <br />
          <input type="submit" value="Register" />
          <br />
          <br />
          Already have an accout?<NavLink to="/login">Login</NavLink>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
