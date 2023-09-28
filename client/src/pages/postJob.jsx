import React from "react";

const PostJob = () => {
  return (
    <div className="flex flex-col">
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
        <div className="my-1">
          <select className="p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>Rust</option>
            <option>Java</option>
            <option>Javascript</option>
            <option>React</option>
            <option>Node</option>
            <option>Next</option>
          </select>
        </div>

        <div>Upload company logo</div>
        <input className="" type="file" id="formFile" />


        <div>Job Description</div>
        <input className="border-black bg-gray-700 text-white p-2" />

        <div>Benifits</div>
        <div>

        </div>

      </form>
    </div>
  );
};

export default PostJob;
