import React from "react";
// import Logout from "./Logout";
import logo from "../images/Critter Sitter Logo - long.png";
import { NavLink } from "react-router-dom";
import Logout from "./Logout";

const NavBar = (props: any) => {
  return (
    <div className="navbar">
      <>
        <NavLink to="/home">
          <img src={logo} alt="Critter Sitter" height={110} width={300} />
        </NavLink>

        {props.loggedIn ? (
          <div>
            <div>
              <NavLink className="navbar-item" to="/households">
                Households
              </NavLink>
              <NavLink className="navbar-item" to="/pets">
                Pets
              </NavLink>
            </div>
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
