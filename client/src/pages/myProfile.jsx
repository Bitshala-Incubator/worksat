import React, { useState } from "react";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Select from "react-select";
import { Tab, Tabs } from "../components/tabs";
import BrowseJobs from "./browseJobs";
import BrowseDevs from "./browseDevs";
import RolesAndSkills from "./rolesAndSkills";

const optionList = [
  { value: "rust", label: "Rust" },
  { value: "javascript", label: "Javascript" },
  { value: "typescript", label: "Typescript" },
  { value: "react.js", label: "React.js" },
  { value: "angular.js", label: "Angular.js" },
];

const Right = () => {
  return (
    <>
      <div className={` h-screen  duration-300 w-80  relative`}>
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
            {/* <div>
              <button className={`button`}>🏳️‍🌈 Global</button>
              <button className={`button`}>🌈 All Gigs</button>
              <button className={`button`}>💄 Full time</button>
            </div> */}

            <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
              Scan this code or copy + paste it to your lightning wallet. Or
              click to login with your browser’s wallet.
            </div>

            <div className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg">
              Save Changes
            </div>
          </div>
        </div>

        <div className={` p-3 duration-300  flex justify-center`}></div>
      </div>
    </>
  );
};

const Edit = () => {
  return (
    <>
      
    </>
  );
};

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();

  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <>
    <form className="text-start p-5 border bg-white md:mx-5 rounded-xl ">
        <div>
          <div className="mb-20">
            <div className="relative hidden md:inline">
              <img
                src="https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg"
                className=" w-full h-auto rounded-lg "
              />
              <div>
                <img
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                  className="rounded-full absolute h-36 -bottom-16 left-11"
                />
              </div>
            </div>

            <div className="relative inline md:hidden">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg"
                  className=" w-full h-auto rounded-lg "
                />
                <div>
                  <img
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                    className="rounded-full absolute h-16 -bottom-7 left-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="my-2 text-xl font-semibold">Username</div>

          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold">Lightning Address</div>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold">Bio</div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          ></textarea>

          <div className="my-2 text-xl font-semibold">Availability</div>
          <div className="my-2">
            <select className="p-2.5 text-gray-800 bg-white border rounded-md shadow-sm w-full outline-none appearance-none focus:border-indigo-600">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Contractor</option>
              <option>Temporary</option>
              <option>Internship</option>
              <option>Per Diem</option>
              <option>Volunteer</option>
            </select>
          </div>

          <div className="my-2 text-xl font-semibold">Location</div>
          <div className="my-1">
            <select className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>Remote</option>
              <option>Indonesia</option>
              <option>India</option>
              <option>Singapore</option>
            </select>
          </div>

          <div className="my-2 text-xl font-semibold">Email</div>

          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold">Twitter</div>

          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold">LinkedIn</div>

          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold">Github</div>

          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          {/* <div className="my-2 text-xl font-semibold">Skills</div>

          <div className="flex justify-center">
            <Select
              className="w-full "
              options={optionList}
              placeholder="Select Stack"
              value={selectedOptions}
              onChange={handleSelect}
              isSearchable={true}
              isMulti
            />
          </div>

          <div className="my-2 text-xl font-semibold">Upload company logo</div>
          <input
            type="file"
            id="formFile"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          /> */}

          {/* <div className="my-2 text-xl font-semibold">Job Description</div>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          ></textarea> */}
        </div>
      </form>

      <div className="flex justify-center ">
        <div className={` w-full md:m-5 rounded-xl max-w-lg lg:hidden mt-5`}>
          <div className="bg-white border p-5 rounded-lg text-start">
            <div className="flex flex-col text-start justify-center">
              <div>
                <img
                  className="p-5 rounded-full"
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                />
              </div>
              <div></div>
              <div className="text-2xl font-semibold">Ui/UX Designer</div>
              <div className="text-lg font-medium my-2">India</div>
              {/* <div>
                <button className={`button`}>🏳️‍🌈 Global</button>
                <button className={`button`}>🌈 All Gigs</button>
                <button className={`button`}>💄 Full time</button>
              </div> */}

              <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                Scan this code or copy + paste it to your lightning wallet. Or
                click to login with your browser’s wallet.
              </div>

              <div className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg">
                Save Changes
              </div>
            </div>
          </div>

          <div className={` p-3 duration-300  flex justify-center`}></div>
        </div>
      </div>
    </>
  );
};

const MyProfile = () => {
  return (
    <>
      {/* <div className="mb-3 lg:mb-0">
        <NavBar />
      </div> */}

      <div className="flex ">
        <div className="hidden lg:inline">
          <Sidebar />
        </div>
        <div className="w-full">
          <Main />
        </div>
        <div className="hidden lg:inline">
          <Right />
        </div>
      </div>
    </>
  );
};

export default MyProfile;
