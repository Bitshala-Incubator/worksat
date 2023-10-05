import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login";

const NavBar = () => {
  return (
    <div className="hidden lg:inline">
        <div className="flex justify-between">
        <div>Logo</div>
        <div>
          <input />
        </div>
        <div className="flex ">
          <div className="m-2">Create</div>
          <div className="m-2">Notification</div>
          <div className="m-2"> Profile</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
