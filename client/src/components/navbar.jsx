import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login";

const NavBar = () => {
  return (
    <div className="flex justify-between mb-3">
      <Link to="/">
        <div>Logo</div>
      </Link>
      <div className="flex">
        <Link to="postJob">
          <div className="bg-red-400 p-3 rounded-lg mx-3">Post a job</div>
        </Link>
        {/* <Login /> */}
        {/* <Link to='/devProfile'>
          <div className="bg-red-400 p-3 rounded-lg mx-3">Developer</div>
        </Link> */}
      </div>
    </div>
  );
};

export default NavBar;
