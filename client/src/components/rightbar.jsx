import React, { useState } from "react";
import { Link } from "react-router-dom";

const Rightbar = () => {
  const [openRoles, setOpenRoles] = useState(true);
  const [openType, setOpenType] = useState(true);
  const [openLocation, setOpenLocation] = useState(true);
  return (
    <div>
      <div>
        <div
          className={`bg-white h-screen p-5 pt-8 duration-300 w-72 relative`}
        >
          <div className="bg-[#f8fafc] p-5 m-3   rounded-lg text-start">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">Roles</div>
              <div
                className={`duration-300 rounded-full cursor-pointer ${
                  !openRoles && "rotate-180"
                }`}
                onClick={() => setOpenRoles(!openRoles)}
              >
                A
              </div>
            </div>
            <div
              className={`duration-300 ${openRoles ? "visible" : "hidden"}  `}
            >
              <div className="m-2">Any</div>
              <hr className="h-px " />
              <div>Engineering</div>
              <div>Design</div>
              <div>Product Management</div>
              <div>Community Management</div>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-5 m-3 rounded-lg text-start">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">Type</div>
              <div
                className={`duration-300 rounded-full cursor-pointer ${
                  !openType && "rotate-180"
                }`}
                onClick={() => setOpenType(!openType)}
              >
                B
              </div>
            </div>
            <div
              className={`duration-300 ${openType ? "visible" : "hidden"}  `}
            >
              <div>Any</div>
              <div>Full Time</div>
              <div>Part Time</div>
              <div>Contract</div>
            </div>
          </div>

          <div className="bg-[#f8fafc] p-5 m-3 rounded-lg text-start">
            <div className="flex justify-between">
              <div className="text-xl font-semibold">Location</div>
              <div
                className={`duration-300 rounded-full cursor-pointer ${
                  !openLocation && "rotate-180"
                }`}
                onClick={() => setOpenLocation(!openLocation)}
              >
                C
              </div>
            </div>
            <div
              className={`duration-300 ${
                openLocation ? "visible" : "hidden"
              }  `}
            >
              <div>Any</div>
              <div>Remote-Ok</div>
              <div>Remote-only</div>
              <div>Contract</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
