// import Link from "next/link";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/styles.css";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";

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
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className=" flex flex-col m-4 border-2 rounded-lg p-5 text-start">
              <div>
                <Link to="/devProfile">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                    alt="..."
                    className=" rounded-full shadow h-auto align-middle border-2"
                  />
                </Link>
              </div>
              <div className="text-2xl font-bold my-3">John Doe</div>
              <div className="text-xl my-2 ml-5 font-semibold">India</div>
              <div className="border-2 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ipsum voluptatum vel. Dolorem vitae culpa aspernatur
                cupiditate consequuntur ducimus qui commodi porro non eius.
                Ullam illo iste quis vitae recusandae.
              </div>
              <div className="text-xl font-semibold my-3 ml-5">Skills</div>
              <div>
                {filters.map((category, idx) => (
                  <button className={`button `} key={`filters-${idx}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className=" flex flex-col m-4 border-2 rounded-lg p-5 text-start">
              <div>
                <Link to="/devProfile">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                    alt="..."
                    className=" rounded-full shadow h-auto align-middle border-2"
                  />
                </Link>
              </div>
              <div className="text-2xl font-bold my-3">John Doe</div>
              <div className="text-xl my-2 ml-5 font-semibold">India</div>
              <div className="border-2 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ipsum voluptatum vel. Dolorem vitae culpa aspernatur
                cupiditate consequuntur ducimus qui commodi porro non eius.
                Ullam illo iste quis vitae recusandae.
              </div>
              <div className="text-xl font-semibold my-3 ml-5">Skills</div>
              <div>
                {filters.map((category, idx) => (
                  <button className={`button `} key={`filters-${idx}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className=" flex flex-col m-4 border-2 rounded-lg p-5 text-start">
              <div>
                <Link to="/devProfile">
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                    alt="..."
                    className=" rounded-full shadow h-auto align-middle border-2"
                  />
                </Link>
              </div>
              <div className="text-2xl font-bold my-3">John Doe</div>
              <div className="text-xl my-2 ml-5 font-semibold">India</div>
              <div className="border-2 p-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo ipsum voluptatum vel. Dolorem vitae culpa aspernatur
                cupiditate consequuntur ducimus qui commodi porro non eius.
                Ullam illo iste quis vitae recusandae.
              </div>
              <div className="text-xl font-semibold my-3 ml-5">Skills</div>
              <div>
                {filters.map((category, idx) => (
                  <button className={`button `} key={`filters-${idx}`}>
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-5">and so on....</div>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
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
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterButtonClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory]);
    }
  };

  return (
    <>
      <div className=" border-2 p-10 rounded-lg">
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
    </>
  );
};

const BrowseDevs = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="hidden lg:inline">
          <Sidebar />
        </div>
        <div className="m-5 p-5">
          <Main />
        </div>
        <div className="hidden lg:inline">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default BrowseDevs;
