import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="m-10 border rounded-lg py-5 flex justify-between  items-center">
      <div className="flex rounded-lg  items-center">
        <div className="p-5 m-5 border ">Icon</div>
        <div className="flex-col p-3">
          <div>Ui Ux Design</div>
          <div>Bolt.fun</div>
        </div>
        <div className="hidden md:inline lg:hidden xl:inline m-5 pl-10 justify-center">
          <button className={`button`}>Global</button>
          <button className={`button`}>All Gigs</button>
          <button className={`button`}>Full time</button>
        </div>
      </div>
      <Link to='/jobDetail'>
        <div className="p-3 m-3 rounded-lg bg-gray-200">Apply</div>
      </Link>
    </div>
  );
};

export default Jobs;
