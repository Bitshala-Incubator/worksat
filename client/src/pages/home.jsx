import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "../components/tabs";
import Login from "./login";
import { Link } from "react-router-dom";
import NavBar from "../components/navbar";
import BrowseJobs from "./browseJobs";
import BrowseDevs from "./browseDevs";
import Sidebar from "../components/sidebar";
// import { getInfo } from "@webbtc/webln-types";
import Axios from 'axios'





// const test = async () => {
//   if (typeof window.webln !== "undefined") {
//     console.log("WebLN is available!");
//     await window.webln.enable();
//     const info = await webln.getInfo();
//     console.log(info);
//     try{
//       const result = await webln.keysend({
//         destination:
//           "03006fcf3312dae8d068ea297f58e2bd00ec1ffe214b793eda46966b6294a53ce6",
//         amount: "1",
//         customRecords: {
//           34349334: "Post Job",
//         },
//       });
//       console.log(result)
//       alert("paid successfully")
//     }catch(err){
//       console.log(err),
//       alert("Error")
//     }
//   }
// };

const Home = () => {






  return (
    <div>

      {/* <button onClick={navigateLogin}>Button</button> */}
      <BrowseJobs />
    </div>
  );
};

export default Home;
