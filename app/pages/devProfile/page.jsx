import React from "react";

const DevProfile = () => {
  return (
    <>
      <div className="flex justify-center text-4xl mb-10">Dev Profile</div>
      <div className="flex justify-center">
        <div className="border-2 px-4 py-5 m-3">Image</div>
        <div className="mt-9 px-3">Name</div>
      </div>
      <div className="flex flex-col justify-center">
      <div className="flex-col">
            <div>Details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident quam minus nam sapiente veritatis illum nesciunt earum animi perspiciatis quas quae fuga, ducimus optio non atque tempore tenetur praesentium adipisci.</div>
            <div>Tech stack</div>
            <div className="flex">
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
              <li className="bg-red-300 p-5 m-2 rounded-lg">rust</li>
            </div>
            <div>
            <div>Previous work  List</div>
            <li> Job 1</li>
            <li> Job 2</li>
            <li> Job 3</li>
          </div>
          <div>Contact</div>
        </div>
      </div>
    </>
  );
};

export default DevProfile;
