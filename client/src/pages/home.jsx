import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "../components/tabs";
import Login from "./login";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import BrowseJobs from "./browseJobs";
import BrowseDevs from "./browseDevs";
import Sidebar from "../components/sidebar";
// import { getInfo } from "@webbtc/webln-types";
import Axios from "axios";
import { Button, Modal, launchModal } from "@getalby/bitcoin-connect-react";
import { LightningAddress } from "@getalby/lightning-tools";

const Home = () => {
  // const ln = new LightningAddress("hello@getalby.com");


  // const test = async () => {
  //   if (typeof window.webln !== "undefined") {
  //     console.log("WebLN is available!");
  //     await window.webln.enable();
  //     const info = await webln.getInfo();
  //     console.log(info, "info");
  //     setInf(info);

  //     await ln.fetch();
  //     console.log(ln.lnurlpData, "Important Shit");
  //   }
  // };

  return (
    <div>
      <BrowseJobs />
      {/* <button onClick={test}>Button</button> */}

      {/* <Button onConnect={() => alert("Connected!")} /> */}
    </div>
  );
};

export default Home;
