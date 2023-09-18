import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <input placeholder="search" className="text-black" />
      <div className="flex justify-between">
        {/* Small note, these two will be buttons */}
        <Link href="/pages/postJob">
          <div>Post a Job</div>
        </Link>
        <Link href="/pages/devs">
          <div className="pl-3"> Look For Developers</div>
        </Link>
      </div>
      
      <div>Jobs List</div>
      <div className="mb-6">
        <li>job 1</li>
        <li>job 2</li>
        <li>job3</li>
        <li>job 4</li>
      </div>
      <Link href="/pages/browseJobs" className="bg-gray-600 p-3 rounded-lg">
        Expand for more jobs
      </Link>

      <div className="mt-5">
        We can probably show off some developer profiles here maybe?
      </div>
      <div className="flex ">
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 1</div>
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 2</div>
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 3</div>
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 4</div>
      </div>
      <div className="mt-5">Footer ??</div>
    </div>
  );
};

export default Home;
