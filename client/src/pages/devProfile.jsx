import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import NavBar from "../components/navbar";
import DevSideBar from "../components/devSidebar";
import Sidebar from "../components/sidebar";
import { LuCopy } from "react-icons/lu";
import { FiMousePointer } from "react-icons/fi";
import "../components/styles.css";
import {
  FaDiscord,
  FaTwitter,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { LightningAddress } from "@getalby/lightning-tools";

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

const Main = (data) => {
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
  const id = data.data;
  const [devDetail, setDevDetail] = useState([]);
  const ln = new LightningAddress("hello@getalby.com");
  const [pubkey, setPubkey] = useState("");
  const navigate = useNavigate();
  const [paid, setPaid] = useState(false);

  const ref = doc(db, "devs", id);
  const [devsList, setDevsList] = useState([]);
  const devsCollectionRef = collection(db, "devs");

  useEffect(() => {
    const getDevDetail = async () => {
      try {
        const data = await getDoc(ref);
        const filteredData = data.data();
        console.log(filteredData, "fdata");
        setDevDetail(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    const getDevsList = async () => {
      try {
        const data = await getDocs(devsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setDevsList(filteredData);
        console.log(filteredData, "fdata2");
        // console.log("id", filteredData[0].id);
        // setId(filteredData[0].id);
        // console.log(id);
      } catch (err) {
        console.error(err);
      }
    };

    const getKey = async () => {
      await ln.fetch();
      setPubkey(ln.lnurlpData.rawData.nostrPubkey);
    };
    getDevDetail();
    getDevsList();
    getKey();
  }, []);

  console.log(paid);

  const edit = (id) => {
    navigate("/editProfile2", {
      state: {
        id: id,
      },
    });
  };

  const viewDetails = (id) => {
    console.log("called");
    navigate("/devProfile", {
      state: {
        id: id,
      },
    });
    window.location.reload();
  };

  const handlePaid = async () => {
    if (typeof window.webln !== "undefined") {
      try {
        await window.webln.enable();
      } catch (err) {
        console.log(err);
        alert("You need to approve the wallet");
        window.location.reload();
      }
      try {
        const result = await webln.keysend({
          destination: "bc1q329d28ly6wkr54kyscn8sdekd3l3aucct0qm5w",
          amount: "100",
          customRecords: {
            34349334: "Post Job",
          },
        });
        console.log(result);
        alert("paid successfully");
        setPaid(true);
      } catch (err) {
        console.log(err),
          alert("You Need to pay the sats in order to reveal the details");
      }
    }
  };

  // console.log(devDetail.skills, "devD")

  return (
    <>
      <div className="flex ">
        <div className="hidden lg:inline">
          <div className={` p-3 duration-300 hidden xl:inline justify-center`}>
            <div className="bg-white m-2 w-80 border rounded-lg text-start">
              <div className="flex flex-col m-3 text-start justify-center">
                <div className="text-xl my-3 mx-5 font-semibold">
                  Similar Makers 🥳
                </div>

                {devsList.map((dev) => (
                  <>
                  {/* {console.log(dev.skills.map(()=>(<>
                  {}
                  </>)))} */}
                    <button
                      onClick={() => {
                        viewDetails(dev.id);
                      }}
                      className="flex items-center "
                    >
                      <div className="m-2">
                        <img
                          src={dev.profImgUrl}
                          alt="..."
                          className=" rounded-full shadow h-12 w-12 align-middle border-2"
                        />
                      </div>
                      <div className="font-medium text-lg mx-3">
                        {dev.userName}
                      </div>
                    </button>
                    <hr />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="flex justify-center mt-5 md:hidden">
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
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                  placeholder="Search For Jobs"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col ">
            <div className="border my-2 md:m-5 p-5 bg-white rounded-2xl text-start ">
              <div className="relative hidden md:inline">
                <img
                  src={
                    devDetail.coverImgUrl
                      ? devDetail.coverImgUrl
                      : "https://st5.depositphotos.com/28687978/64498/v/450/depositphotos_644985208-stock-illustration-oev-logo-oev-letter-oev.jpg"
                  }
                  className=" w-full h-64 rounded-lg "
                />
                <div>
                  <img
                    src={
                      devDetail.profImgUrl
                        ? devDetail.profImgUrl
                        : "https://st5.depositphotos.com/28687978/64498/v/450/depositphotos_644985208-stock-illustration-oev-logo-oev-letter-oev.jpg"
                    }
                    className="rounded-full absolute h-36 -bottom-16 left-11"
                  />
                </div>
              </div>

              <div className="relative inline md:hidden">
                <div className="relative">
                  <img
                    src={
                      devDetail.coverImgUrl
                        ? devDetail.coverImgUrl
                        : "https://st5.depositphotos.com/28687978/64498/v/450/depositphotos_644985208-stock-illustration-oev-logo-oev-letter-oev.jpg"
                    }
                    className=" w-full h-56 rounded-lg "
                  />
                  <div>
                    <img
                      src={
                        devDetail.profImgUrl
                          ? devDetail.profImgUrl
                          : "https://st5.depositphotos.com/28687978/64498/v/450/depositphotos_644985208-stock-illustration-oev-logo-oev-letter-oev.jpg"
                      }
                      className="rounded-full absolute h-16 -bottom-7 left-6"
                    />
                  </div>
                </div>
              </div>
              {console.log(devDetail.pubkey, "ewiuhiwue")}

              <div className="mt-20">
                {devDetail.pubkey === pubkey ? (
                  <>
                    <div className="flex justify-between">
                      <div className="text-2xl md:text-3xl font-bold">
                        {devDetail.userName}
                      </div>
                      <div>
                        <div className="hidden mr-5 md:inline bg-green-200 px-5 font-medium py-2 rounded-3xl text-green-600">
                          Open for work
                        </div>
                        <button
                          onClick={() => {
                            edit(id);
                          }}
                        >
                          <div className="mr-10 hidden md:inline bg-green-200 px-5 font-medium py-2 rounded-3xl text-green-600">
                            Edit
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <div className="text-2xl md:text-3xl font-bold">
                        {devDetail.userName}
                      </div>
                      <div>
                        <div className="hidden mr-5 md:inline bg-green-200 px-5 font-medium py-2 rounded-3xl text-green-600">
                          Open for work
                        </div>
                        <button
                          onClick={() => {
                            edit(id);
                          }}
                        ></button>
                      </div>
                    </div>
                  </>
                )}

                {devDetail.pubkey === pubkey ? (
                  <>
                    <div className="flex ">
                      <div className="inline md:hidden text-sm p-3 m-1 bg-green-200 rounded-3xl text-green-600">
                        Open for work
                      </div>
                      <button
                        onClick={() => {
                          edit(id);
                        }}
                      >
                        <div className="inline md:hidden text-sm p-3 m-1 bg-green-200 rounded-3xl text-green-600">
                          Edit
                        </div>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex ">
                      <div className="inline md:hidden text-sm p-3 m-1 bg-green-200 rounded-3xl text-green-600">
                        Open for work
                      </div>
                    </div>
                  </>
                )}
                {/* <div className="flex justify-between">
                  <div>
                    <div className="inline md:hidden text-sm p-3 m-1 bg-green-200 rounded-3xl text-green-600">
                      Open to work
                    </div>
                    {devDetail.pubkey === pubkey ? (
                      <>
                        <div className="inline md:hidden text-sm p-3 m-1 bg-green-200 rounded-3xl text-green-600">
                          Edit
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div> */}
                {/* <div className="flex gap-3 my-2 ">
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
                </div> */}
                <div className="my-2 text-xl font-semibold">
                  🌍 {devDetail.location}
                </div>
                <div className="pr-5 my-2">{devDetail.bio}</div>
              </div>
            </div>
            <div className="border my-2 md:m-5 text-start p-5 py-10 rounded-2xl bg-white flex flex-col">
              <div className="text-2xl font-semibold mb-3 p-2">🎛️ Roles</div>
              <div>
                {devDetail.roles &&
                  devDetail.roles.map((role, idx) => (
                    <>
                      <button className="button" key={`filters-${idx}`}>
                        {role.label}
                      </button>
                    </>
                  ))}
              </div>
            </div>
            <div className="border my-2 md:m-5 text-start p-5 py-10 rounded-2xl bg-white flex flex-col">
              <div className="text-2xl font-semibold mb-3 p-2">🌈 Skills</div>

              <div className=" rounded-lg">
                <div>
                  {devDetail.skills &&
                    devDetail.skills.map((skill, idx) => (
                      <>
                        <button className="button" key={`filters-${idx}`}>
                          {skill.label}
                        </button>
                      </>
                    ))}
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="flex justify-center  lg:hidden">
                  <div className="bg-white p-8 md:m-3 max-w-lg border rounded-2xl text-start">
                    <div className="flex flex-col text-center justify-center">
                      <div className="text-xl my-3 font-semibold">
                        Unlock Contact Details ⚡
                      </div>
                      <hr />

                      {paid ? (
                        <>
                          <div className=" blur-0 ">
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaTwitter size={40} />
                              <a href={devDetail.twitter} target="_blank">
                                <div className="text-xl">
                                  {devDetail.userName}
                                </div>
                              </a>
                            </div>
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaGithub size={40} />
                              <a href={devDetail.github} target="_blank">
                                <div className="text-xl">
                                  {devDetail.userName}
                                </div>
                              </a>
                            </div>
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaLinkedin size={40} />
                              <a href={devDetail.linkedin} target="_blank">
                                <div className="text-xl">
                                  {devDetail.userName}
                                </div>
                              </a>
                            </div>
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaDiscord size={40} />
                              <a href={devDetail.discord} target="_blank">
                                <div className="text-xl">
                                  {devDetail.userName}
                                </div>
                              </a>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" blur-sm ">
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaTwitter size={40} />
                              <div className="text-xl">
                                {devDetail.userName}
                              </div>
                            </div>
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaGithub size={40} />
                              <div className="text-xl">
                                {devDetail.userName}
                              </div>
                            </div>
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaLinkedin size={40} />
                              <div className="text-xl">
                                {devDetail.userName}
                              </div>
                            </div>
                            <div className="flex m-3 justify-center gap-3 items-center">
                              <FaDiscord size={40} />

                              <div className="text-xl">
                                {devDetail.userName}
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={handlePaid}
                            className="bg-[#8b5cf6] justify-center items-center flex mt-5  px-3 py-2 rounded-lg text-white"
                          >
                            <div>Pay To Unlock The Detail</div>
                            <div className="ml-2">
                              <FiMousePointer className="rotate-90" />
                            </div>
                          </button>
                        </>
                      )}
                      {/* <div>
                        <img
                          className="p-5"
                          src="https://glacierfoods.com/wp-content/uploads/2021/12/lightning-node-a-qrcode.png"
                        />
                      </div> */}

                      {/* <div className="border mx-3 my-2 text-sm p-1 font-thin rounded-lg">
                        Scan this code or copy + paste it to your lightning
                        wallet. Or click to login with your browser’s wallet.
                      </div> */}

                      {/* <div className="flex flex-col justify-between ">
                        <div className="bg-[#8b5cf6] justify-center items-center mb-2 flex  px-3 py-2 rounded-lg text-white">
                          <div>Scan to pay</div>
                          <div className="ml-2">
                            <FiMousePointer className="rotate-90" />
                          </div>
                        </div>
                        <div className="flex  bg-[#f5f3ff] px-8 py-2 justify-center mb-2 rounded-lg items-center text-[#7c3aed]">
                          <div className="px-2">Copy</div>
                          <LuCopy className="" />
                        </div>
                      </div> */}
                      {/* <div className="border-2 px-4 py-2 mt-1 rounded-lg">
                        Don’t have a lightning wallet?
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline">
          <div>
            <div className={` h-screen p-3 duration-300 w-96  relative`}>
              <div className="bg-white p-5  border rounded-lg text-start">
                <div className="flex flex-col text-center justify-center">
                  <div className="text-xl my-3 font-semibold">
                    Unlock Contact Details ⚡
                  </div>
                  <hr />
                  {paid ? (
                    <>
                      <div className=" blur-0 ">
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaTwitter size={40} />
                          <a href={devDetail.twitter} target="_blank">
                            <div className="text-xl">{devDetail.userName}</div>
                          </a>
                        </div>
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaGithub size={40} />
                          <a href={devDetail.github} target="_blank">
                            <div className="text-xl">{devDetail.userName}</div>
                          </a>
                        </div>
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaLinkedin size={40} />
                          <a href={devDetail.linkedin} target="_blank">
                            <div className="text-xl">{devDetail.userName}</div>
                          </a>
                        </div>
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaDiscord size={40} />
                          <a href={devDetail.discord} target="_blank">
                            <div className="text-xl">{devDetail.userName}</div>
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className=" blur-sm ">
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaTwitter size={40} />
                          <div className="text-xl">{devDetail.userName}</div>
                        </div>
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaGithub size={40} />
                          <div className="text-xl">{devDetail.userName}</div>
                        </div>
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaLinkedin size={40} />
                          <div className="text-xl">{devDetail.userName}</div>
                        </div>
                        <div className="flex m-3 justify-center gap-3 items-center">
                          <FaDiscord size={40} />

                          <div className="text-xl">{devDetail.userName}</div>
                        </div>
                      </div>
                      <button
                        onClick={handlePaid}
                        className="bg-[#8b5cf6] justify-center items-center flex mt-5  px-3 py-2 rounded-lg text-white"
                      >
                        <div>Pay To Unlock The Detail</div>
                        <div className="ml-2">
                          <FiMousePointer className="rotate-90" />
                        </div>
                      </button>
                    </>
                  )}

                  {/* <div>
                    <img
                      className="p-5"
                      src="https://glacierfoods.com/wp-content/uploads/2021/12/lightning-node-a-qrcode.png"
                    />
                  </div>

                  <div className="border mx-3 my-2 text-sm p-1 font-thin rounded-lg">
                    Scan this code or copy + paste it to your lightning wallet.
                    Or click to login with your browser’s wallet.
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DevProfile = (props) => {
  const location = useLocation();
  const data = location.state.id;
  console.log(data);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <Main data={data} />
    </>
  );
};

export default DevProfile;
