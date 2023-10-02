import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import NavBar from "../components/navbar";
import Select from "react-select";

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

const PostJob = () => {
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
    <div className="flex flex-col">
      <div className="flex justify-between mb-3">
        <Link to="/">
          <div>Logo</div>
        </Link>
        <div className="flex">
          {/* <Login /> */}
          <Link to="/devProfile">
            <div className="bg-red-400 p-3 rounded-lg mx-3">Developer</div>
          </Link>
        </div>
      </div>
      <form>
        <div className="my-1">Company Name</div>
        <input className="border-black bg-gray-700 text-white p-2" />

        <div className="my-1">Position</div>
        <input className="border-black bg-gray-700 text-white p-2" />

        <div className="my-1"> Time Frame</div>
        <div className="my-1">
          <select className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contractor</option>
            <option>Temporary</option>
            <option>Internship</option>
            <option>Per Diem</option>
            <option>Volunteer</option>
          </select>
        </div>

        <div className="my-1">Primary Tag</div>
        <div className="my-1">
          <select className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Software Development</option>
            <option>Front End</option>
            <option>Back End</option>
            <option>Full Stack</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Non-Tech</option>
          </select>
        </div>

        <div className="my-1">TAGS, KEYWORDS OR STACK</div>

        <div className="flex justify-center">
          <Select
            className="w-80 "
            options={optionList}
            placeholder="Select Stack"
            value={selectedOptions}
            onChange={handleSelect}
            isSearchable={true}
            isMulti
          />
        </div>

        <div>Upload company logo</div>
        <input className="" type="file" id="formFile" />

        <div>Job Description</div>
        <input className="border-black bg-gray-700 text-white p-2" />

        <div>Benifits</div>
        <div>Various Benifit options</div>

        <Link>
          <button
            className="bg-red-400 px-3 py-2 mt-5 rounded-lg"
            onClick={openModal}
          >
            Next
          </button>
        </Link>

        <Modal
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
          {/* A Flag will go here if the payment gets successful, and the job will be posted. But i need some idea on the payment modal layout. */}
          <button
            className="bg-red-400 px-3 py-2 mt-5 rounded-lg"
            onClick={closeModal}
          >
            close
          </button>
        </Modal>
      </form>
    </div>
  );
};

export default PostJob;
