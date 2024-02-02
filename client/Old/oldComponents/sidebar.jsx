import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div>
      <div
        className={`bg-white rounded-xl p-5 pt-8 duration-300 ${
          open ? "w-72" : "w-20"
        } relative`}
      >
        <Link to="/editProfile">
          <div className="mx-5 my-4 font-semibold">⚡️ My Profile </div>
        </Link>

        <Link to="/roleAndSkills">
          <div className="mx-5 my-4 font-semibold">🚀 Roles & Skills</div>
        </Link>
        {/* <div className='mx-5 my-4 font-semibold'>💬 Settings and preferences</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
