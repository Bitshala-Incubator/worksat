import React, { useState } from "react";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Select from "react-select";

const optionList = [
  { value: "rust", label: "Rust" },
  { value: "javascript", label: "Javascript" },
  { value: "typescript", label: "Typescript" },
  { value: "react.js", label: "React.js" },
  { value: "angular.js", label: "Angular.js" },
];

const Right = () => {
  return <></>;
};

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
  const [selectedOptions, setSelectedOptions] = useState();

  function handleSelect(data) {
    setSelectedOptions(data);
  }

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
      <div className="flex">
        <div className="w-full">
          <form>
            <div>
              <div className="border md:m-5 text-start p-5 md:py-10 rounded-2xl bg-white flex flex-col">
                <div className="text-2xl font-semibold mb-3 p-2">🎛️ Roles</div>
                <div className="text-xl my-2 p-2 mx-3">
                  Select job roles you are looking for
                </div>
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

            <div>
              <div className="border my-2 md:m-5 text-start p-5 py-10 rounded-2xl bg-white flex flex-col">
                <div className="text-2xl font-semibold mb-3 p-2">🌈 Skills</div>
                <div className="text-xl my-2 p-2 mx-3">
                  Add some of your skills and let other makers know what you are
                  good at!
                </div>

                <div className="flex justify-center rounded-xl ">
                  {/* <Select
                    className="w-full "
                    options={optionList}
                    placeholder="Select Stack"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                  /> */}
                </div>
              </div>
            </div>
          </form>

          <div className="flex justify-center ">
            <div
              className={` w-full md:m-5 rounded-xl max-w-lg lg:hidden mt-5`}
            >
              <div className="bg-white border p-5 rounded-lg text-start">
                <div className="flex flex-col text-start justify-center">
                  <div>
                    <img
                      className="p-5 rounded-full"
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                    />
                  </div>
                  <div></div>
                  <div className="text-2xl font-semibold">John Doe</div>
                  <div className="text-lg font-medium my-2">India</div>

                  <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                    Scan this code or copy + paste it to your lightning wallet.
                    Or click to login with your browser’s wallet.
                  </div>

                  <div>
                    <button className={`button`}>🏳️‍🌈 Global</button>
                    <button className={`button`}>🌈 All Gigs</button>
                    <button className={`button`}>💄 Full time</button>
                  </div>

                  <div className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg">
                    Save Changes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline">
          <div className={` h-screen  duration-300 w-full   relative`}>
            <div className="bg-white p-5  border rounded-lg text-start">
              <div className="flex flex-col text-start justify-center">
                <div>
                  <img
                    className="p-5 rounded-full"
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                  />
                </div>
                <div></div>
                <div className="text-2xl font-semibold">John Doe</div>
                <div className="text-lg font-medium my-2">India</div>

                <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                  Scan this code or copy + paste it to your lightning wallet. Or
                  click to login with your browser’s wallet.
                </div>

                <div>
                  <button className={`button`}>🏳️‍🌈 Global</button>
                  <button className={`button`}>🌈 All Gigs</button>
                  <button className={`button`}>💄 Full time</button>
                </div>

                <div className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg">
                  Save Changes
                </div>
              </div>
            </div>

            <div className={` p-3 duration-300  flex justify-center`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

const RolesAndSkills = () => {
  return (
    <div>
      {/* <div className="mb-3 lg:mb-0">
        <NavBar />
      </div> */}

      <div className="flex ">
        {/* <div className="hidden lg:inline">
          <Sidebar />
        </div> */}
        {/* <div className="w-full"> */}
        <Main />
        {/* </div> */}
      </div>
    </div>
  );
};

export default RolesAndSkills;
