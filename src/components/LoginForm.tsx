import React, { Component } from "react";

class LoginForm extends Component <any>{
  state = {
    email: "",
    password: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event:any) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      "form"
    );
  }
}

export default LoginForm;
