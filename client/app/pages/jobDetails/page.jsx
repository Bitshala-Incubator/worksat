import Link from "next/link";
import React from "react";

const JobDetails = () => {
  return (
    <>
      <div className="flex justify-center text-5xl font-bold mb-10">
        Job Details
      </div>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className="flex">
            <div className="border-2 px-4 py-5 m-3">Logo</div>
            <div className="mx-5 text-3xl mt-7">Job Title</div>
          </div>
          <div>
            <div className="p-5">
              Job description. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Libero accusamus exercitationem hic quidem
              excepturi iure quod perferendis. Numquam ratione rerum quis totam
              atque exercitationem consequuntur sint tempora, dignissimos sed
              tempore perspiciatis id facere, cumque, iste excepturi corporis
              explicabo velit veniam asperiores pariatur nesciunt nulla quod
              mollitia. Iure a commodi id consequatur ipsa aut voluptatem, iusto
              quasi facere dolores dolorem cupiditate quos ducimus dignissimos
              dolorum dicta quis atque? Porro, labore minus optio eveniet
              debitis repellendus fugit aliquam quam laudantium magnam iure
              dolore dicta expedita quaerat itaque consectetur deleniti id
              doloremque ullam, illum odit architecto dolorem consequuntur.
              Minima blanditiis quod recusandae enim.
            </div>
          </div>
          <div>
            <div>Requirements List</div>
            <li>Requirement 1</li>
            <li>Requirement 2</li>
            <li>Requirement 3</li>
          </div>
          <div>
            <div>Tech stack</div>
            <div className="flex">
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
            </div>
            <div className="p-5 rounded-lg text-center">Apply</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
