import React, { useEffect, useState } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Filters = () => {
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
    <>
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
              placeholder="Search For Jobs"
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
    </>
  );
};

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const jobsCollectionRef = collection(db, "jobs");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const viewDetails = (id) => {
    navigate("/jobDetail", {
      state: {
        id: id,
      },
    });
  };

  useEffect(() => {
    const getJobsList = async () => {
      try {
        const data = await getDocs(jobsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setJobsList(filteredData);
        console.log(filteredData, "fdata");
        console.log("id", filteredData[0].id);
        setId(filteredData[0].id);
        console.log(id);
      } catch (err) {
        console.error(err);
      }
    };

    getJobsList();
  }, []);

  return (
    <div>
      <Filters />
      {jobsList.map((job) => (
        <div
          onClick={() => {
            viewDetails(job.id);
          }}
        >
          <div className="my-5 m-1 md:mx-10 border bg-white rounded-lg  flex justify-between  items-center">
            <div className="flex rounded-lg  items-center">
              <div className=" ">
                <div>
                  <img
                    className="md:mx-5 m-2 border rounded-full h-20 w-20"
                    src={
                      job.imgUrl
                        ? job.imgUrl
                        : "https://st5.depositphotos.com/28687978/64498/v/450/depositphotos_644985208-stock-illustration-oev-logo-oev-letter-oev.jpg"
                    }
                    alt="Image"
                  />
                </div>
              </div>
              <div className="flex-col p-3">
                <div>{job.position}</div>
                <div>{job.companyName}</div>
              </div>
              <div className="hidden md:inline m-5 pl-10 justify-center">
                <button className={`button`}>🌈 {job.employmentType}</button>
                <button className={`button`}> {job.location}</button>
                <button className={`button`}>💄 {job.role}</button>
              </div>
            </div>

            <button>
              <div className="p-3 m-3 rounded-lg bg-gray-200">Apply</div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
