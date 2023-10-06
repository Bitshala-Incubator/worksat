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
      <BrowseJobs />
    </div>
  );
};

export default Home;
