import React, { useState } from "react";
import { Tabs, Tab } from "../components/tabs";
import Login from "./login";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import BrowseJobs from "./browseJobs";
import BrowseDevs from "./browseDevs";
import Sidebar from "../components/sidebar";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />

        <div className="p-7">Home Page</div>
      </div>











      

      {/* <NavBar/>
      <Tabs>
        <Tab label="Browse For Jobs">
          <div className="py-4">
            <BrowseJobs />
          </div>
        </Tab>
        <Tab label="Look For Developers">
          <div className="py-4">
            <BrowseDevs />
          </div>
        </Tab>
      </Tabs> */}
    </div>
  );
};

export default Home;
