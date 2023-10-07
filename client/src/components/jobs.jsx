import React, { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Select from "react-select";

const Jobs = () => {
  const jobList = [
    { value: "all roles", label: "🌈 All Roles" },
    { value: "frontend dev", label: "💄 Frontend Developer" },
    { value: "backend dev", label: "💻 Backend Developer" },
    { value: "ui/ux designer", label: "🌈 UI/UX Designer" },
    { value: "community manager", label: "🎉 Community Manager" },
    { value: "program & operations", label: "🦄 Program & Operations" },
    { value: "marketer", label: "🚨 Marketer" },
  ];

  const locationList = [
    { value: "Global", label: "🏳️‍🌈 Global" },
    { value: "India", label: "🎨 India" },
    { value: "indonesia", label: "🎨 indonesia" },
    { value: "Singapore", label: "🎨 Singapore" },
    { value: "Remote", label: "🌍 Remote" },
  ];

  const rolesList = [
    { value: "All Gigs", label: "🌈 All Gigs" },
    { value: "Full Time", label: "💄 Full Time" },
    { value: "Part Time", label: "💻 Part Time" },
    { value: "Contract/Freelance", label: "🌈 Contract/Freelance" },
    { value: "Internship", label: "🎉 Internship" },
    { value: "Voulanteer", label: "🦄 Voulanteer" },
    { value: "Contract to Full Time", label: "🚨 Contract to Full Time" },
  ];
  const [selectJob, setSelectJob] = useState();
  const [selectLocation, setSelectLocation] = useState();
  const [selectRole, setSelectRole] = useState();

  function handleJob(data) {
    setSelectJob(data);
  }

  function handleLocation(data) {
    setSelectLocation(data);
  }

  function handleRole(data) {
    setSelectRole(data);
  }

  return (
    <div>
      <div className="flex justify-center mt-5 md:hidden">
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
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
              className="block w-fit p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Search"
            />
          </div>
        </form>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-3 lg:hidden mt-5 gap-2">
        <Select
          className="text-start"
          options={jobList}
          placeholder="Job"
          value={selectJob}
          onChange={handleJob}
          isSearchable={true}
          isMulti
        />
        <Select
          className="text-start"
          options={locationList}
          placeholder="Location"
          value={selectLocation}
          onChange={handleLocation}
          isSearchable={true}
          isMulti
        />
        <Select
          className="text-start"
          options={rolesList}
          placeholder="Roles"
          value={selectRole}
          onChange={handleRole}
          isSearchable={true}
          isMulti
        />
      </div>

      <div className="my-9 m-1 md:m-10 border bg-white rounded-lg py-5 flex justify-between  items-center">
        <div className="flex rounded-lg  items-center">
          <div className="p-3 m-1 md:mx-5 border ">Icon</div>
          <div className="flex-col p-3">
            <div>Ui Ux Design</div>
            <div>Bolt.fun</div>
          </div>
          <div className="hidden md:inline m-5 pl-10 justify-center">
            <button className={`button`}>🏳️‍🌈 Global</button>
            <button className={`button`}>🌈 All Gigs</button>
            <button className={`button`}>💄 Full time</button>
          </div>
        </div>
        <Link to="/jobDetail">
          <div className="p-3 m-3 rounded-lg bg-gray-200">Apply</div>
        </Link>
      </div>
    </div>
  );
};

export default Jobs;
