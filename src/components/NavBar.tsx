import React from "react";
import Logout from "./Logout";


const NavBar = (props: any) => {
  return (
    <div className="NavBar">
      <>
        {props.loggedIn ? (
          <div >
            <div>
              <h3>Task Assign</h3>
            </div>
            <div>
              nagivation items
            </div>
            <div>
              <Logout history={props.history} />
            </div>
          </div>
        ) : (
          <div >
            login or sign up?
          </div>
        )}
      </>
    </div>
  );
};

export default NavBar;
