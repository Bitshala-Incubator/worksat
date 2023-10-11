// import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/styles.css";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";
import Select from "react-select";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Main = () => {
  let filters = [
    "Figma",
    "Prototyping",
    "Writing",
    "CSS",
    "React.js",
    "Wordpress",
    "Principle App",
    "UX Design",
    "UX Research",
    "User Testing",
  ];

  const rolesList = [
    { value: "Figma ", label: "🌈 Figma " },
    { value: "Prototyping", label: "💄 Prototyping " },
    { value: "Writing ", label: "💻 Writing " },
    { value: " CSS", label: "🌈 CSS " },
    { value: " UX Design", label: "🌈 UX Design " },
    { value: " UX Research", label: "🌈 UX Research " },
    { value: " User Testing", label: "🌈 User Testing " },
    { value: "React.js ", label: "🎉 React.js " },
    { value: "Wordpress", label: "🦄 Wordpress " },
    { value: "Principle App ", label: "🚨 Principle App " },
  ];

  const [selectRole, setSelectRole] = useState();

  function handleRole(data) {
    setSelectRole(data);
  }

  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  const [devsList, setDevsList] = useState([]);
  const devsCollectionRef = collection(db, "devs");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getDevsList = async () => {
      try {
        const data = await getDocs(devsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDevsList(filteredData);
        console.log(filteredData, "fdata");
        console.log("id", filteredData[0].id);
        setId(filteredData[0].id);
        console.log(id);
      } catch (err) {
        console.error(err);
      }
    };

    getDevsList();
  }, []);

  const viewDetails = (id) => {
    navigate("/devProfile", {
      state: {
        id: id,
      },
    });
  };

  return (
    <>
      <div className="flex">
        <div className="hidden lg:inline">
          <div className=" border-2 p-10 w-96 rounded-lg">
            <div className="text-3xl font-bold text-left ml-5 mb-5">Skills</div>
            <div>
              {filters.map((category, idx) => (
                <button
                  onClick={() => handleFilterButtonClick(category)}
                  className={`button ${
                    selectedFilters?.includes(category) ? "active" : ""
                  }`}
                  key={`filters-${idx}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-5">
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
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="Search For Jobs"
                />
              </div>
            </form>
          </div>

          <Select
            className="mt-3 lg:hidden"
            options={rolesList}
            placeholder="Roles"
            value={selectRole}
            onChange={handleRole}
            isSearchable={true}
            isMulti
          />

          <div className="flex justify-center ">
            <div className="flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {devsList.map((dev) => (
                  <>
                    <div className=" flex flex-col my-4 md:m-4 border-2 rounded-lg p-5 text-start bg-white">
                      <div>
                        {/* <Link to="/devProfile"> */}
                        <button
                          onClick={() => {
                            viewDetails(dev.id);
                          }}
                        >
                          <img
                            src={
                              dev.profImgUrl
                                ? dev.profImgUrl
                                : "https://st5.depositphotos.com/28687978/64498/v/450/depositphotos_644985208-stock-illustration-oev-logo-oev-letter-oev.jpg"
                            }
                            alt="Image"
                            className=" rounded-full shadow h-auto align-middle border-2"
                          />
                        </button>
                        {/* </Link> */}
                      </div>
                      <div className="text-2xl font-bold my-3">
                        {dev.userName}
                      </div>
                      <div className="text-xl my-2 ml-5 font-semibold">
                        {dev.location}
                      </div>
                      <div className="border-2 rounded-xl p-3 bg-[#f8fafc]">
                        {dev.bio}
                      </div>
                      <div className="text-xl font-semibold my-3 ml-5">
                        Skills
                      </div>
                      {/* <div>
                    {dev.skills?(
                      <>
                      dev.skills.map((category, idx) => (
                        <button className={`button `} key={`filters-${idx}`}>
                          {category}
                        </button>
                      ))}
                      </>
                      
                      )
                  </div> */}
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BrowseDevs = () => {
  return (
    <>
      <NavBar />
      <Main />
    </>
  );
};

export default BrowseDevs;
