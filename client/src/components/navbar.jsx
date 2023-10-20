import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/login";
import { BsBell } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Sidebar from "./sidebar";
import Axios from "axios";
import { LightningAddress } from "@getalby/lightning-tools";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [pubkey, setPubkey] = useState("");
  const ln = new LightningAddress("hello@getalby.com");

  const test = async () => {
    if (typeof window.webln !== "undefined") {
      console.log("WebLN is available!");
      await window.webln.enable();

      await ln.fetch();
      setPubkey(ln.lnurlpData.rawData.nostrPubkey);
    }
    else{
      alert("Seems like you don't have a web-ln supported wallet installed. Please install a supported wallet first.")
    }
  };

  useEffect(() => {
    const test = async () => {
      if (typeof window.webln !== "undefined") {
        await window.webln.enable();

        await ln.fetch();
        console.log(ln.lnurlpData.rawData.nostrPubkey, "Important Shit");
        setPubkey(ln.lnurlpData.rawData.nostrPubkey);
      }
    };

    test();
  }, [pubkey]);

  return (
    <>
      <div className="hidden md:inline">
        <div className="flex justify-between mb-5">
          <div className="">
            <Link to="/">
              <img
                className="h-12 max-w-full"
                src={logo}
                alt="image description"
              />
            </Link>
          </div>
          {/* <div className="flex  justify-center">
            <form>
              <label
                for="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="Search For Jobs"
                />
              </div>
            </form>
          </div> */}
          <div className="flex justify-end ">
            {pubkey ? (
              <>
                <Link to="/postJob">
                  <div className="m-2 bg-[#ede9fe]  text-[#8b5cf6] border px-3 py-2 rounded-lg">
                    Post Job
                  </div>
                </Link>
                <Link to="/browseDevs">
                  <div className="m-2 bg-white text-black border px-3 py-2 rounded-lg">
                    Makers
                  </div>
                </Link>
                <Link to="/editProfile">
                  <div className="m-2">
                    <img
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                      alt="..."
                      className=" rounded-full shadow h-10 align-middle border-2"
                    />
                  </div>
                </Link>
                {/* <button
                  onClick={navigateLogout}
                  className="m-2 bg-white text-black border px-3 py-2 rounded-lg"
                >
                  Logout
                </button> */}
              </>
            ) : (
              <>
                <Link to="/postJob">
                  <div className="m-2 bg-[#ede9fe]  text-[#8b5cf6] border px-3 py-2 rounded-lg">
                    Post Job
                  </div>
                </Link>
                <Link to="/browseDevs">
                  <div className="m-2 bg-white text-black border px-3 py-2 rounded-lg">
                    Makers
                  </div>
                </Link>
                <button
                  onClick={test}
                  className="m-2 bg-white text-black border px-3 py-2 rounded-lg"
                >
                  Login
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="inline md:hidden">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <img className="h-8 w-auto" src={logo} alt="image description" />
            </Link>
          </div>
          <div className="flex">
            {pubkey?(<>
            <Link to="/postJob">
              <div className=" bg-[#ede9fe] text-sm mr-2 text-[#8b5cf6] border p-1 rounded-lg">
                Post Job
              </div>
            </Link>
            <Link to="/browseDevs">
              <div className="mx-1 bg-white text-sm text-black border p-1 rounded-lg">
                Makers
              </div>
            </Link>
            {/* <div className=" bg-white text-sm text-black border p-1 rounded-lg">
              ⚡ Sign in
            </div> */}
            <Link to="/editProfile">
              <div className="">
                <img
                  src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                  alt
                  to="..."
                  className=" rounded-full shadow h-8 align-middle border-2"
                />
              </div>
            </Link>

            </>):(<>
              <Link to="/postJob">
              <div className=" bg-[#ede9fe] text-sm  text-[#8b5cf6] border p-1 rounded-lg">
                Post Job
              </div>
            </Link>
            <Link to="/browseDevs">
              <div className="mx-1 bg-white text-sm text-black border p-1 rounded-lg">
                Makers
              </div>
            </Link>
            <div className=" bg-white text-sm text-black border p-1 rounded-lg">
              Login
            </div>
            </>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
