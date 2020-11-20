import React from "react";
import logo from "../images/Critter Sitter Logo - long.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = (props: any) => {
  return (
    <div className="navbar">
      <NavLink to="/home">
        <img src={logo} alt="Critter Sitter" height={110} width={300} />
      </NavLink>
      {props.loggedIn ? (
        <>
          <NavLink to="/households">Households</NavLink>
          <NavLink to="/pets">Pets</NavLink>
          <Link to="#" onClick={() => props.logout()}>
            Logout
          </Link>
        </>
      ) : (
        <div className="NavBar-right">
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
