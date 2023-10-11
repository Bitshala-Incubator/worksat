import NavBar from "../components/navbar";
import React, { useEffect, useState } from "react";
import "../components/styles.css";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Filters = () => {
  return <></>;
};

const Jobs = () => {
  const [jobsList, setJobsList] = useState([]);
  const jobsCollectionRef = collection(db, "jobs");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [jobList, setJobList] = useState("");
  const [location, setLocation] = useState("");
  const [employment, setEmployment] = useState("");
  const [openRoles, setOpenRoles] = useState(true);
  const [openType, setOpenType] = useState(true);
  const [openLocation, setOpenLocation] = useState(true);

  const [search, setSearch] = useState("");

  function handleJob(data) {
    setSelectJob(data);
  }

  // function handleLocation(data) {
  //   setSelectLocation(data);
  // }

  function handleRole(data) {
    setSelectRole(data);
  }
  console.log("Location", location);

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
        // console.log(id);
      } catch (err) {
        console.error(err);
      }
    };

    getJobsList();
  }, []);

  return (
    <div>
      <div className="flex ">
        <div className="hidden lg:inline">
          <div>
            <div>
              <div
                className={`bg-white h-screen rounded-xl p-1 pt-8 duration-300 w-96 relative`}
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
                    className={`duration-300 ${
                      openRoles ? "visible" : "hidden"
                    }  `}
                  >
                    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setJobList("all jobs")}
                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-license"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            All Jobs{" "}
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setJobList("front end")}
                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-id"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Front end
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                          onClick={() => setJobList("back end")}
                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-millitary"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Back End
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                          onClick={() => setJobList("ui/ux")}
                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            UI/UX
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                          onClick={() => setJobList("sales")}
                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Sales
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                          onClick={() => setJobList("full stack")}

                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Full Stack
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                          onClick={() => setJobList("marketing")}

                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                           Marketing
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                          onClick={() => setJobList("software development")}

                            type="radio"
                            value=""
                            name="list1-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Software Development
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
                    className={`duration-300 ${
                      openType ? "visible" : "hidden"
                    }  `}
                  >
                    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setEmployment("all gigs")}
                            type="radio"
                            value=""
                            name="list2-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-license"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            All Gigs{" "}
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setEmployment("Full time")}
                            type="radio"
                            value=""
                            name="list2-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-id"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Full Time
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setEmployment("Part time")}
                            type="radio"
                            value=""
                            name="list2-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-millitary"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Part Time
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setEmployment("Internship")}
                            type="radio"
                            value=""
                            name="list2-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Internship
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
                    <ul className="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setLocation("all locations")}
                            type="radio"
                            value=""
                            name="list3-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 "
                          />
                          <label
                            for="list-radio-license"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            All Location{" "}
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setLocation("global")}
                            type="radio"
                            value=""
                            name="list3-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 "
                          />
                          <label
                            for="list-radio-id"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Global
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setLocation("India")}
                            type="radio"
                            value=""
                            name="list3-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 "
                          />
                          <label
                            for="list-radio-millitary"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            India
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setLocation("Indonesia")}
                            type="radio"
                            value=""
                            name="list3-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Indonesia
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 rounded-t-lg ">
                        <div className="flex items-center pl-3">
                          <input
                            onClick={() => setLocation("Singapore")}
                            type="radio"
                            value=""
                            name="list3-radio"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 "
                          />
                          <label
                            for="list-radio-passport"
                            className="w-full py-3 ml-2 text-sm font-medium text-gray-900 "
                          >
                            Singapore
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
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
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 lg:hidden mt-5 gap-2">
            <div className="my-1">
              <select
                onChange={(e) => setJobList(e.target.value)}
                className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                <option>All Jobs</option>
                <option>Front end</option>
                <option>Back End</option>
                <option>UI/UX</option>
                <option>Community Manager</option>
                <option>Product</option>
                <option>Software Development</option>
              </select>
            </div>
            <div className="my-1">
              <select
                onChange={(e) => setLocation(e.target.value)}
                className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                <option>All Locations</option>
                <option>Global</option>
                <option>Remote</option>
                <option>Indonesia</option>
                <option>India</option>
                <option>Singapore</option>
              </select>
            </div>
            <div className="my-1">
              <select
                onChange={(e) => setEmployment(e.target.value)}
                className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
              >
                <option>All Gigs</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
                <option>India</option>
                <option>Voulanteer</option>
              </select>
            </div>
          </div>
          {jobsList
            .filter((job) => {
              return search.toLowerCase() === ""
                ? job
                : job.position.toLowerCase().includes(search) ||
                    job.companyName.toLowerCase().includes(search);
            })
            .filter((job) => {
              return location.toLowerCase() === "" ||
                location.toLowerCase() === "all locations"
                ? job
                : job.location.toLowerCase().includes(location.toLowerCase());
            })
            .filter((job) => {
              return jobList.toLowerCase() === "" ||
                jobList.toLowerCase() === "all jobs"
                ? job
                : job.role.toLowerCase().includes(jobList.toLowerCase());
            })
            .filter((job) => {
              return employment.toLowerCase() === "" ||
                employment.toLowerCase() === "all gigs"
                ? job
                : job.employmentType
                    .toLowerCase()
                    .includes(employment.toLowerCase());
            })
            .map((job) => (
              <div
                key={job.id}
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
                      <button className={`button`}>
                        🌈 {job.employmentType}
                      </button>
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
      </div>
    </div>
  );
};

const Rightbar = () => {
  return <></>;
};
const BrowseJobs = () => {
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Jobs />

      <div className="flex ">
        {/* <div className="hidden lg:inline">
          <Rightbar />
        </div> */}
        <div className="w-full"></div>
      </div>
    </>
  );
};

export default BrowseJobs;
