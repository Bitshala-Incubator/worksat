// import Link from "next/link";
import React from "react";
import { Link } from "react-router-dom";

const BrowseDevs = () => {
  return (
    <>
      <div className="flex justify-center text-5xl mb-10">Devs</div>
      <div className="flex justify-center">
        <div className="flex-col">
          <input placeholder="search " className="text-black" />
          <div className="mb-10">
            <div>Tech stack</div>
            <div className="flex">
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
            </div>
          </div>
          <div className="border-2">
            <div className="flex justify-between m-5">
              {/* <Link href='/pages/devProfile'> */}
              <div>image</div>
              {/* </Link> */}
              {/* <Link href='/pages/devProfile'> */}
              <div>Name/ Pseudonym</div>
              {/* </Link> */}
            </div>
            <div className="m-5 p-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A sint
              totam provident cupiditate animi et soluta in, similique inventore
              modi.{" "}
            </div>
            <div className="flex justify-center">
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
            </div>
            <div className="flex justify-center m-5">
              <Link to="/devProfile">
                <div className="bg-red-400 p-5 rounded-lg">Contact</div>
              </Link>
            </div>
          </div>
          <div className="text-center mt-5">and so on....</div>
        </div>
      </div>
    </>
  );
};

export default BrowseDevs;
