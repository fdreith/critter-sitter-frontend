import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    //more here
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return "form";
  }
}

export default SignUpForm;
