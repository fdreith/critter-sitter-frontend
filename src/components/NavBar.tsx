import React from "react";
// import Logout from "./Logout";
import logo from "../images/Critter Sitter Logo - long.png";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = (props: any) => {
  return (
    <div className="navbar">
      <>
        <a href="#default" className="logo">
          <img src={logo} alt="Critter Sitter" height={110} width={300} />
        </a>

        {props.loggedIn ? (
          <div>
            <div>nagivation items</div>
            <div className="NavBar-right">
              <Logout history={props.history} />
            </div>
          </div>
        ) : (
          <div className="NavBar-right">
            <NavLink className="navbar-item" to="/register">
              Register
            </NavLink>
          </div>
        )}
      </>
    </div>
  );
};

export default NavBar;
