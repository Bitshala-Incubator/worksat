import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";
import Rightbar from "../components/rightbar";
import Jobs from "../components/jobs";

const BrowseJobs = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <div className="hidden lg:inline">
        <NavBar />
      </div>

      <div className="flex ">
        <div className="hidden lg:inline">
          <Sidebar />
        </div>
        <div className="w-full ">
          <Jobs />
        </div>
        <div className="hidden lg:inline">
          <Rightbar />
        </div>

        <div className="flex-col"></div>
      </div>
    </>
  );
};

export default BrowseJobs;
