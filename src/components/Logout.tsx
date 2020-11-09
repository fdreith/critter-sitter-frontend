import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";

const Logout = (props: any) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.logout();
        props.history.push("/");
      }}
    >
      Logout
    </form>
  );
};

export default connect(null, { logout })(Logout);
