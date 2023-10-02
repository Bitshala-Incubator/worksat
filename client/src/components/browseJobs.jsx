import React, { useState } from "react";
import { Link } from "react-router-dom";

const BrowseJobs = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <div className="flex justify-center">
        <div className="text-5xl">Browse Jobs</div>
      </div>

      <div className=" flex mt-10 justify-center mb-6">
        <div className="flex-col">
          <input
            placeholder="Search"
            className="text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>Filter</div>
          <div className="flex border-white border-2 p-5 m-3">
            {/* <Link href='/pages/companyDetail'> */}
            <div>Company logo</div>
            {/* </Link> */}
            <div className="flex-col">
              {/* <Link href="/pages/jobDetails"> */}
              <div className="mx-3 font-bold text-2xl">Job Detail</div>
              {/* </Link> */}
              <div className="mx-3">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, labore!
              </div>
            </div>
            <Link to="/jobDetail">
              <div className="bg-red-300 p-3 rounded-lg m-3">See Details</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">and so on.........</div>
    </div>
  );
};

export default BrowseJobs;
