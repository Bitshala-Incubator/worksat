import React from "react";
import BrowseJobs from '../browseJobs/page'

const BrowseForJobs = () => {
  return (
    <div>
     <BrowseJobs/>
      <input placeholder="search" className="text-black" />

      <div>Jobs List</div>
      <div className="mb-6">
        <li>job 1</li>
        <li>job 2</li>
        <li>job3</li>
        <li>job 4</li>
      </div>
    </div>
  );
};

export default BrowseForJobs;
