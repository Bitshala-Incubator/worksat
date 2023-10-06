import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import NavBar from "../components/navbar";
import Select from "react-select";
import Sidebar from "../components/sidebar";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const optionList = [
  { value: "rust", label: "Rust" },
  { value: "javascript", label: "Javascript" },
  { value: "typescript", label: "Typescript" },
  { value: "react.js", label: "React.js" },
  { value: "angular.js", label: "Angular.js" },
];

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
      <form className="text-start p-5 border bg-white mx-5 rounded-xl ">
        <div>
          <div className="my-2 text-xl font-semibold">Company Name</div>

          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold">Position</div>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />

          <div className="my-2 text-xl font-semibold"> Employment Type</div>
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

          <div className="my-2 text-xl font-semibold">Role</div>
          <div className="my-1">
            <select className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
              <option>Software Development</option>
              <option>Front End</option>
              <option>Back End</option>
              <option>Full Stack</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Non-Tech</option>
            </select>
          </div>

          <div className="my-2 text-xl font-semibold">Skills</div>

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
          />

          <div className="my-2 text-xl font-semibold">Job Description</div>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          ></textarea>
        </div>

        {/* <div className="my-2 text-xl font-semibold">Benifits</div>
        <div>Various Benifit options</div> */}

        {/* <Link>
          <button
            className="bg-red-400 px-3 py-2 mt-5 rounded-lg"
            onClick={openModal}
          >
            Next
          </button>
        </Link> */}

        {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <p>The payment Page will go here</p>

          <button
            className="bg-red-400 px-3 py-2 mt-5 rounded-lg"
            onClick={closeModal}
          >
            close
          </button>
        </Modal> */}
      </form>

      <div className="flex justify-center ">
        <div className={` w-full m-5 rounded-xl max-w-lg lg:hidden mt-5`}>
          <div className="bg-white border p-5 rounded-lg text-start">
            <div className="flex flex-col text-start justify-center">
              <div>
                <img
                  className="p-5 rounded-full"
                  src="https://yt3.googleusercontent.com/X0kxcO712joCPqxEHf3X1RWgAwKRK7K-y5VFPU03Gwb_M_BUt9D5puwMgFNhC1E6ljD-hvE9=s900-c-k-c0x00ffffff-no-rj"
                />
              </div>
              <div></div>
              <div className="text-2xl font-semibold">Ui/UX Designer</div>
              <div className="text-lg font-medium my-2">India</div>
              <div>
                <button className={`button`}>🏳️‍🌈 Global</button>
                <button className={`button`}>🌈 All Gigs</button>
                <button className={`button`}>💄 Full time</button>
              </div>

              <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                Scan this code or copy + paste it to your lightning wallet. Or
                click to login with your browser’s wallet.
              </div>

              <div className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg">
                Apply
              </div>
            </div>
          </div>

          <div className={` p-3 duration-300  flex justify-center`}></div>
        </div>
      </div>
    </>
  );
};

const Right = () => {
  return (
    <>
      <div className={` h-screen  duration-300 w-80  relative`}>
        <div className="bg-white p-5  border rounded-lg text-start">
          <div className="flex flex-col text-start justify-center">
            <div>
              <img
                className="p-5 rounded-full"
                src="https://yt3.googleusercontent.com/X0kxcO712joCPqxEHf3X1RWgAwKRK7K-y5VFPU03Gwb_M_BUt9D5puwMgFNhC1E6ljD-hvE9=s900-c-k-c0x00ffffff-no-rj"
              />
            </div>
            <div></div>
            <div className="text-2xl font-semibold">Ui/UX Designer</div>
            <div className="text-lg font-medium my-2">India</div>
            <div>
              <button className={`button`}>🏳️‍🌈 Global</button>
              <button className={`button`}>🌈 All Gigs</button>
              <button className={`button`}>💄 Full time</button>
            </div>

            <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
              Scan this code or copy + paste it to your lightning wallet. Or
              click to login with your browser’s wallet.
            </div>

            <div className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg">
              Apply
            </div>
          </div>
        </div>

        <div className={` p-3 duration-300  flex justify-center`}></div>
      </div>
    </>
  );
};
const PostJob = () => {
  return (
    <>
      <>
        <div className="mb-3 lg:mb-0">
          <NavBar />
        </div>

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
    </>
  );
};

export default PostJob;
