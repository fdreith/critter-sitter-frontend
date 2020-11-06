import React, { Component } from "react";

class SignUpForm extends Component <any>{
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
    return "form";
  }
}

export default SignUpForm;
