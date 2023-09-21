import Link from "next/link";
import React from "react";
import { Tabs, Tab } from "./tabs";
import LookForDevs from "./lookForDevs";
import BrowseForJobs from "./browseJobs";

const Home = () => {
  return (
    <div>
      {/* <div className="flex justify-between mt-10">
        <Link href="/pages/postJob">
          <div>Post a Job</div>
        </Link>
        <Link href="/pages/devs">
          <div className="pl-3"> Look For Developers</div>
        </Link>
      </div> */}

      <Tabs>
        <Tab label="Browse For Jobs">
          <div className="py-4">
            <BrowseForJobs />
          </div>
        </Tab>
        <Tab label="Look For Developers">
          <div className="py-4">
            <LookForDevs />
          </div>
        </Tab>
      </Tabs>
      <div className="text-center bg-gray-600 py-20 text-white">Footer</div>
    </div>
  );
};

export default Home;
