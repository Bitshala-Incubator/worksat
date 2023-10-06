import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";
import { SlSocialFacebook, SlSocialInstagram, SlLink } from "react-icons/sl";

const Main = () => {
  return (
    <>
      <div className="flex flex-col bg-white rounded-xl items-start py-2 p-2 m-1 md:m-5 md:p-5">
        <div className="text-3xl md:text-5xl font-bold">
          Senior UI UX Designer
        </div>
        <div className="flex">
          <div className="py-3 px-2">Engineering</div>
          <div className="py-3 px-2">Full time</div>
        </div>
        <hr className=" w-full h-px" />
        <div className="px-2 py-3 justify-start flex flex-col items-start">
          <div className="text-2xl font-semibold items-start my-3">
            The Company
          </div>
          <div className="text-start text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur voluptatibus quasi, illo dolorum aspernatur, neque
            commodi distinctio, a inventore eveniet iusto consequuntur. Sunt,
            corporis voluptates provident, consectetur quod dicta magnam iure
            eius, voluptatem excepturi cum recusandae nesciunt! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Provident minima
            dolorem nam! Et recusandae eos fuga, perferendis molestiae placeat
            porro.
          </div>

          <div className="text-2xl font-semibold items-start mt-6 mb-3">
            The Role
          </div>
          <div className="text-start text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequatur voluptatibus quasi, illo dolorum aspernatur, neque
            commodi distinctio, a inventore eveniet iusto consequuntur. Sunt,
            corporis voluptates provident, consectetur quod dicta magnam iure
            eius, voluptatem excepturi cum recusandae nesciunt! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Provident minima
            dolorem nam! Et recusandae eos fuga, perferendis molestiae placeat
            porro.
          </div>

          <div className="text-2xl font-semibold items-start mt-6 mb-3">
            Your Responsibilities
          </div>
          <div className="text-start text-sm md:text-lg">
            <li>
              Knowledge of OAuth and SAML authentication standards preferred
            </li>
            <li>
              Experience supporting multi-vendor software-as-a-service (SaaS)
              applications
            </li>
            <li>
              Evaluate, select and integrate 3rd party products in the support
              of new or existing services
            </li>
            <li>Experience working with Cloud Applications desired</li>
            <li>
              Strong ability to effectively multitask and prioritize work,
              juggling daily support responsibilities with multiple{" "}
            </li>
            <li>project/product-driven activities.</li>
            <li>Strong troubleshooting and problem-solving skills</li>
            <li>Scripting and automation experience desired</li>
            <li>
              Solid ability to work independently or as part of a team to
              deliver features on agreed-upon timelines.
            </li>
            <li>You love to own product from design to implementation</li>
          </div>

          <div className="text-2xl font-semibold items-start mt-6 mb-3">
            How To Apply
          </div>
          <div className="text-start text-sm md:text-lg">
            If you’d like to apply for this job, please email your CV and cover
            letter to jobs@bolt.fun. Thank you!
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="bg-white p-5 px-10 mt-5 border rounded-lg text-start lg:hidden">
            <div className="flex flex-col justify-between">
              <div className="text-2xl font-semibold">Bolt.Fun</div>
              <div>Poisted 3 months ago</div>
            </div>

            <div className="mt-3">Share this job</div>
            <div className="flex justify-start my-2">
              <div className="my-2">
                <SlSocialFacebook />
              </div>
              <div className="mx-2 my-2">
                <SlSocialInstagram />
              </div>
              <div className="mx-2 my-2">
                <SlLink />
              </div>
            </div>
            <div className="bg-[#8b5cf6] w-1/33 flex justify-center py-1 rounded-lg text-white">
              Apply
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Right = () => {
  // const [openRoles, setOpenRoles] = useState(true);
  // const [openType, setOpenType] = useState(true);
  // const [openLocation, setOpenLocation] = useState(true);
  return (
    <>
      <div className={` h-screen p-1 duration-300 w-80  relative`}>
        <div className="bg-white p-5 m-3  border rounded-lg text-start">
          <div className="flex flex-col justify-between">
            <div className="text-2xl font-semibold">Bolt.Fun</div>
            <div>Poisted 3 months ago</div>
          </div>

          <div className="mt-3">Share this job</div>
          <div className="flex justify-start my-2">
            <div className="my-2">
              <SlSocialFacebook />
            </div>
            <div className="mx-2 my-2">
              <SlSocialInstagram />
            </div>
            <div className="mx-2 my-2">
              <SlLink />
            </div>
          </div>
          <div className="bg-[#8b5cf6] flex justify-center py-1 rounded-lg text-white">
            Apply
          </div>
        </div>
      </div>
    </>
  );
};

const JobDetail = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="hidden lg:inline">
          <Sidebar />
        </div>
        <div className="flex w-full">
          <Main />
        </div>
        <div className="hidden lg:inline">
          <Right />
        </div>
      </div>
    </>
  );
};

export default JobDetail;
