import React from "react";
// import Logout from "./Logout";
import logo from "../images/Critter Sitter Logo - long.png"

const NavBar = (props: any) => {
  return (
    <div className="NavBar">
      <>
        <a href="#default" className="logo">
          <img src={logo} alt="Critter Sitter" height={100} width={300} />
        </a>

        {props.loggedIn ? (
          <div>
            <div>nagivation items</div>
            <div className="NavBar-right">
              <a href="#logout">Logout</a>
              {/* <Logout history={props.history} /> */}
            </div>
          </div>
        ) : (
          <div className="NavBar-right">
            <a href="#signup">Register</a>
          </div>
        )}
      </>
    </div>
  );
};

export default NavBar;
