import React from "react";
import { Tabs, Tab } from "../components/tabs";
import BrowseDevs from "../components/browseDevs";
import BrowseJobs from "../components/browseJobs";
import Login from "./login";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";

const Home = () => {
  return (
    <div>
      {/* <NavBar/> */}
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
      </Tabs>
    </div>
  );
};

export default Home;
