import React from "react";
import Link from "next/link";

const PostJob = () => {
  return (
    <>
      <div className="flex justify-center text-4xl mb-10">PostJob</div>
      <div className="flex justify-center">
        <div className="flex-col items-center m-auto">
          <div className="text-2xl">Job title</div>
          <div>
            Job description. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Fugit nesciunt, obcaecati numquam quasi accusantium excepturi
            deserunt minus dolorum incidunt aspernatur explicabo soluta qui
            similique dicta sit sunt eum consequatur consectetur.
          </div>
          <div>
            <div>Tech stack</div>
            <div className="flex">
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
            </div>
          </div>
          <div>
            <div>Requirements List</div>
            <li>Requirement 1</li>
            <li>Requirement 2</li>
            <li>Requirement 3</li>
          </div>
          <Link href="/pages/payment">
            <div className="mt-5 p-5">Submit</div>
          </Link>
        </div>
      </div>

      <div className="mt-5"></div>
    </>
  );
};

export default PostJob;
