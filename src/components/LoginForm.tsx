import React from "react";

class LoginForm extends React.Component<any> {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: any) => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <form action="/action_page.php" method="post">
          Email:
          <br />
          <input type="text" name="email" />
          <br />
          Password:
          <br />
          <input type="password" name="password" />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
