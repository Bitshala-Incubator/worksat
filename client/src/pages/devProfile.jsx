import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import NavBar from "../components/navbar";
import DevSideBar from "../components/devSidebar";
import Sidebar from "../components/sidebar";
import { LuCopy } from "react-icons/lu";
import { FiMousePointer } from "react-icons/fi";
import "../components/styles.css";
import { FaDiscord, FaTwitter, FaGithub, FaGlobe } from "react-icons/fa";

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

const Main = () => {
  let filters = [
    "Figma",
    "Prototyping",
    "Writing",
    "CSS",
    "React.js",
    "Wordpress",
    "Principle App",
    "UX Design",
    "UX Research",
    "User Testing",
  ];
  const [selectedFilters, setSelectedFilters] = useState([]);

  return (
    <>
      <div className="flex flex-col ">
        <div className="border m-5 p-5 bg-white rounded-2xl text-start ">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg"
              className="w-full h-auto rounded-lg"
            />
            <div className="">
              <img
                src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                className="rounded-full absolute h-36 -bottom-16 left-11"
              />
            </div>
          </div>
          <div className="mt-20">
            <div className="flex justify-between">
              <div className="text-3xl font-bold">John Doe</div>
              <div className="mr-10 bg-green-200 px-5 font-medium py-2 rounded-3xl text-green-600">
                Open for work
              </div>
            </div>
            <div className="flex gap-3 my-2 ">
              <div>
                <FaGlobe />
              </div>
              <div>
                <FaTwitter />
              </div>
              <div>
                <FaGithub />
              </div>
              <div>
                <FaDiscord />
              </div>
            </div>
            <div className="my-2 text-xl font-semibold">🌍 India</div>
            <div className="pr-5 my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
              eligendi error laudantium pariatur culpa sit adipisci eius
              voluptate, minus earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Enim laboriosam ducimus dolor iusto cupiditate
              vero!
            </div>
          </div>
        </div>
        <div className="border m-5 text-start p-5 py-10 rounded-2xl bg-white flex flex-col">
          <div className="text-2xl font-semibold mb-3 p-2">🎛️ Roles</div>
          <div className="flex items-center">
            <div className="bg-gray-300 p-2 rounded-lg mx-2">💻</div>
            <div className="font-medium mx-2">Developer</div>
          </div>

          <div className="flex items-center my-2">
            <div className="bg-gray-300 p-2 rounded-lg mx-2">🦄</div>
            <div className="font-medium mx-2">Marketer</div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-300 p-2 rounded-lg mx-2">🎉</div>
            <div className="font-medium mx-2">Community Manager</div>
          </div>
        </div>
        <div className="border m-5 text-start p-5 py-10 rounded-2xl bg-white flex flex-col">
          <div className="text-2xl font-semibold mb-3 p-2">🌈 Skills</div>

          <div className=" rounded-lg">
            <div>
              {filters.map((category, idx) => (
                <button className="button" key={`filters-${idx}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="flex justify-center lg:hidden">
              <div className="bg-white p-8 m-3  border rounded-2xl text-start">
                <div className="flex flex-col text-center justify-center">
                  <div className="text-xl my-3 font-semibold">
                    Unlock More Details ⚡
                  </div>
                  <hr />
                  <div>
                    <img
                      className="p-5"
                      src="https://glacierfoods.com/wp-content/uploads/2021/12/lightning-node-a-qrcode.png"
                    />
                  </div>

                  <div className="border mx-3 my-2 text-sm p-1 font-thin rounded-lg">
                    Scan this code or copy + paste it to your lightning wallet.
                    Or click to login with your browser’s wallet.
                  </div>

                  <div className="flex flex-col justify-between my-2 gap- ">
                    <div className="bg-[#8b5cf6] justify-center items-center flex  px-3 py-2 rounded-lg text-white">
                      <div>Scan to pay</div>
                      <div className="ml-2">
                        <FiMousePointer className="rotate-90" />
                      </div>
                    </div>
                    <div className="flex  bg-[#f5f3ff] px-8 py-2 justify-center rounded-lg items-center text-[#7c3aed]">
                      <div className="px-2">Copy</div>
                      <LuCopy className="" />
                    </div>
                  </div>
                  <div className="border-2 px-4 py-2 mt-1 rounded-lg">
                    Don’t have a lightning wallet?
                  </div>
                </div>
              </div>
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
      <div>
        <div className={` h-screen p-3 duration-300 w-96  relative`}>
          <div className="bg-white p-5  border rounded-lg text-start">
            <div className="flex flex-col text-center justify-center">
              <div className="text-xl my-3 font-semibold">
                Unlock More Details ⚡
              </div>
              <hr />
              <div>
                <img
                  className="p-5"
                  src="https://glacierfoods.com/wp-content/uploads/2021/12/lightning-node-a-qrcode.png"
                />
              </div>

              <div className="border mx-3 my-2 text-sm p-1 font-thin rounded-lg">
                Scan this code or copy + paste it to your lightning wallet. Or
                click to login with your browser’s wallet.
              </div>

              <div className="flex justify-between my-2">
                <div className="bg-[#8b5cf6] justify-center items-center flex  px-3 py-2 rounded-lg text-white">
                  <div>Scan to pay</div>
                  <div className="ml-2">
                    <FiMousePointer className="rotate-90" />
                  </div>
                </div>
                <div className="flex  bg-[#f5f3ff] px-8 py-2 justify-center rounded-lg items-center text-[#7c3aed]">
                  <div className="px-2">Copy</div>
                  <LuCopy className="" />
                </div>
              </div>
              <div className="border-2 px-4 py-2 mt-1 rounded-lg">
                Don’t have a lightning wallet?
              </div>
            </div>
          </div>

          <div className={` p-3 duration-300  flex justify-center`}>
            <div className="bg-white m-2 w-80 border rounded-lg text-start">
              <div className="flex flex-col m-3 text-start justify-center">
                <div className="text-xl my-3 mx-5 font-semibold">
                  Similar Makers 🥳
                </div>

                <div className="flex items-center ">
                  <div className="m-2">
                    <img
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                      alt="..."
                      className=" rounded-full shadow h-12 align-middle border-2"
                    />
                  </div>
                  <div className="font-medium text-lg mx-3">John Doe</div>
                </div>
                <hr/>

                <div className="flex items-center ">
                  <div className="m-2">
                    <img
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                      alt="..."
                      className=" rounded-full shadow h-12 align-middle border-2"
                    />
                  </div>
                  <div className="font-medium text-lg mx-3">John Doe</div>
                </div>
                <hr/>

                <div className="flex items-center ">
                  <div className="m-2">
                    <img
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                      alt="..."
                      className=" rounded-full shadow h-12 align-middle border-2"
                    />
                  </div>
                  <div className="font-medium text-lg mx-3">John Doe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DevProfile = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="flex ">
        <div className="hidden lg:inline">
          <Sidebar />
        </div>
        <div className="w-full ">
          <Main />
        </div>
        <div className="hidden lg:inline">
          <Right />
        </div>

        <div className="flex-col"></div>
      </div>
    </>
  );
};

export default DevProfile;
