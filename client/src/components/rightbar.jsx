import React, { useState } from "react";
import { Link } from "react-router-dom";

const Rightbar = () => {
  const [openRoles, setOpenRoles] = useState(true);
  const [openType, setOpenType] = useState(true);
  const [openLocation, setOpenLocation] = useState(true);
  return (
    <div>
      <div>
        <div
          className={`bg-white h-screen rounded-xl p-1 pt-8 duration-300 w-72 relative`}
        >
          <div className="bg-[#f8fafc] p-5 m-3   rounded-lg text-start">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">🌈 Roles</div>
              <div
                className={`duration-300 rounded-full cursor-pointer ${
                  !openRoles && "rotate-180"
                }`}
                onClick={() => setOpenRoles(!openRoles)}
              >
                ☝️
              </div>
            </div>
            <div
              className={`duration-300 ${openRoles ? "visible" : "hidden"}  `}
            >
              <ul className="text-sm w-auto mt-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                <li className=" border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="vue-checkbox"
                      className=" py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Any
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Engineering
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="angular-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Design
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Product Management
                    </label>
                  </div>
                </li>

                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Community Management
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-5 m-3 rounded-lg text-start">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">Type</div>
              <div
                className={`duration-300 rounded-full cursor-pointer ${
                  !openType && "rotate-180"
                }`}
                onClick={() => setOpenType(!openType)}
              >
                ☝️
              </div>
            </div>
            <div
              className={`duration-300 ${openType ? "visible" : "hidden"}  `}
            >
              <ul className="text-sm w-auto mt-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                <li className=" border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="vue-checkbox"
                      className=" py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Any
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Full Time
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="angular-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Part Time
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Contract
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-5 m-3 rounded-lg text-start">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">Location</div>
              <div
                className={`duration-300 rounded-full cursor-pointer ${
                  !openLocation && "rotate-180"
                }`}
                onClick={() => setOpenLocation(!openLocation)}
              >
                ☝️
              </div>
            </div>
            <div
              className={`duration-300 ${
                openLocation ? "visible" : "hidden"
              }  `}
            >
              <ul className="text-sm w-auto mt-2 font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                <li className=" border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="vue-checkbox"
                      type="checkbox"
                      value=""
                      className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="vue-checkbox"
                      className=" py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Any
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="react-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="react-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Remote-OK
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="angular-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="angular-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Remote Only
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 rounded-t-lg ">
                  <div className="flex items-center pl-3">
                    <input
                      id="laravel-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="laravel-checkbox"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                    >
                      Contract
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
