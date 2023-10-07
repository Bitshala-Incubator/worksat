import React from "react";
import { Link } from "react-router-dom";
import Login from "../pages/login";
import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./sidebar";

const NavBar = () => {
  return (
    <>
      <div className="hidden md:inline">
        <div className="flex justify-between mb-5">
          <div className="">
            <Link to="/">
              <img
                className="h-10 max-w-full"
                src="data:image/jpeg;base64,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"
                alt="image description"
              />
            </Link>
          </div>
          <div className="flex  justify-center">
            <form>
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="flex justify-end ">
            <Link to="/postJob">
              <div className="m-2 bg-[#ede9fe]  text-[#8b5cf6] border px-3 py-2 rounded-lg">
                Create
              </div>
            </Link>
            <Link to="/browseDevs">
              <div className="m-2 bg-white text-black border px-3 py-2 rounded-lg">
                Makers
              </div>
            </Link>
            <div className="m-2 hidden lg:inline">
              <BsBell size={28} className="mt-1" />
            </div>
            <Link to='/editProfile'>
            <div className="m-2">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                alt="..."
                className=" rounded-full shadow h-10 align-middle border-2"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="inline md:hidden">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img
                className="h-5 w-auto"
                src="data:image/jpeg;base64,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"
                alt="image description"
              />
            </Link>
          </div>
          <div className="flex">
            <Link to="/postJob">
              <div className=" bg-[#ede9fe] text-sm text-[#8b5cf6] border p-1 rounded-lg">
                Create
              </div>
            </Link>
            <Link to="/browseDevs">
              <div className="mx-1 bg-white text-sm text-black border p-1 rounded-lg">
                Makers
              </div>
            </Link>
            {/* <div className=" bg-white text-sm text-black border p-1 rounded-lg">
              ⚡ Sign in
            </div> */}
            <Link to='/editProfile'>
            <div className="">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                alt to="..."
                className=" rounded-full shadow h-8 align-middle border-2"
              />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
