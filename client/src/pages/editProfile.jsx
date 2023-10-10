import React, { useState } from "react";
import NavBar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Select from "react-select";
import { Tab, Tabs } from "../components/tabs";
import BrowseJobs from "./browseJobs";
import BrowseDevs from "./browseDevs";
import RolesAndSkills from "./rolesAndSkills";
import { db, img } from "../config/firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

const optionList = [
  { value: "rust", label: "Rust" },
  { value: "javascript", label: "Javascript" },
  { value: "typescript", label: "Typescript" },
  { value: "react.js", label: "React.js" },
  { value: "angular.js", label: "Angular.js" },
];

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState();
  const [userName, setUserName] = useState("");
  const [lightningAddress, setLightningAddress] = useState("");
  const [bio, setBio] = useState("");
  const [availability, setAvailability] = useState("");
  const [role, setRole] = useState([]);
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [skills, setSkills] = useState();
  const [profImgUrl, setProfImgUrl] = useState("");
  const [coverImgUrl, setCoverImgUrl] = useState("");
  const [disabled, setDisabled] = useState(false);

  let subtitle;

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
  // const [selectedOptions, setSelectedOptions] = useState();

  const handleFilterButtonClick = (selectedCategory) => {
    if (role.includes(selectedCategory)) {
      let filters = role.filter((el) => el !== selectedCategory);
      setRole(filters);
    } else {
      setRole([...role, selectedCategory]);
    }
  };

  function handleSelect(data) {
    setSkills(data);
  }

  const handleProfUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(img, `Devs/Profile/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "data");
      getDownloadURL(data.ref).then((val) => {
        console.log(val, "val");
        setProfImgUrl(val);
      });
    });
  };

  const handleCoverUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(img, `Devs/Cover/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data, "data2");
      getDownloadURL(data.ref).then((val) => {
        console.log(val, "Val2");
        setCoverImgUrl(val);
      });
    });
  };

  const devsCollectionRef = collection(db, "devs");

  const handlePost = async () => {
    setDisabled(true);
    try {
      await addDoc(devsCollectionRef, {
        userName: userName,
        lightningAddress: lightningAddress,
        bio: bio,
        availability: availability,
        profImgUrl: profImgUrl,
        coverImgUrl: coverImgUrl,
        roles: role,
        location: location,
        skills: skills,
        email: email,
        twitter: twitter,
        linkedin: linkedin,
        github: github,
      });
      console.log("done");
      alert("data added successfully");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex">
        <div className="w-full">
          <form className="text-start p-5 border bg-white md:mx-5 rounded-xl ">
            <div>
              <div className="mb-20">
                <div className="relative hidden md:inline">
                  {/* <img
                    src="https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg"
                    className=" w-full h-auto rounded-lg "
                  /> */}
                  <div className="w-full rounded-lg flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50">
                    <label for="dropzone-file">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF
                        </p>
                      </div>
                      <input
                        id="formFile"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                          handleCoverUpload(e);
                        }}
                      />
                    </label>
                  </div>
                  <div>
                    {/* <img
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                      className="rounded-full absolute h-36 -bottom-16 left-11"
                    /> */}
                    <div className="rounded-full absolute h-36 -bottom-16 left-11">
                      <label
                        for="dropzone-file"
                        className="flex flex-col  rounded-full border-2 p-5 border-gray-300 border-dashed cursor-pointer bg-gray-300"
                      >
                        <div className="flex py-3 flex-col items-center justify-center rounded-lg">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className=" text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">
                            {/* Or drag and drop */}
                          </p>
                        </div>
                        <input
                          type="file"
                          // className="hidden"
                          onChange={(e) => {
                            handleProfUpload(e);
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="relative inline md:hidden">
                  <div className="relative">
                    {/* <img
                      src="https://images.pexels.com/photos/259526/pexels-photo-259526.jpeg?cs=srgb&dl=pexels-pixabay-259526.jpg&fm=jpg"
                      className=" w-full h-auto rounded-lg "
                    /> */}
                    <div className="flex -z-10 flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                      <label for="dropzone-file" className="bg-red-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-4 text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                          </p>
                          <p className="text-xs text-gray-500">
                            SVG, PNG, JPG or GIF
                          </p>
                        </div>
                        <input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            handleCoverUpload(e);
                          }}
                        />
                      </label>
                    </div>
                    <div>
                      {/* <img
                        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg"
                        className="rounded-full absolute h-16 -bottom-7 left-6"
                      /> */}
                      <div className="rounded-full absolute h-16 -bottom-7 left-6">
                        <label
                          for="dropzone-file"
                          className="flex flex-col  rounded-full border border-gray-300 border-dashed cursor-pointer bg-gray-300"
                        >
                          <div className="flex flex-col items-center justify-center rounded-lg">
                            <svg
                              className="w-8 h-8 mb-1 mt-1 text-gray-500"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 16"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                              />
                            </svg>
                            <p className="text-sm text-gray-500 px-2">
                              <span className="font-semibold ">Click here</span>
                            </p>
                            <p className="mb-2 text-xs text-gray-500">
                              to upload
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                            onChange={(e) => {
                              handleProfUpload(e);
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-2 text-xl font-semibold">Username</div>

              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />

              <div className="my-2 text-xl font-semibold">
                Lightning Address
              </div>
              <input
                onChange={(e) => setLightningAddress(e.target.value)}
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />

              <div className="my-2 text-xl font-semibold">Bio</div>
              <textarea
                onChange={(e) => setBio(e.target.value)}
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              ></textarea>

              <div className="my-2 text-xl font-semibold">Availability</div>
              <div className="my-2">
                <select
                  onChange={(e) => setAvailability(e.target.value)}
                  className="p-2.5 text-gray-800 bg-white border rounded-md shadow-sm w-full outline-none appearance-none focus:border-indigo-600"
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contractor</option>
                  <option>Temporary</option>
                  <option>Internship</option>
                  <option>Per Diem</option>
                  <option>Volunteer</option>
                </select>
              </div>

              <div className="my-2 text-xl font-semibold">Roles</div>
              <div className="border rounded-lg my-2">
                <div className="text-xl my-2 p-2 mx-3">
                  Select job roles you are looking for
                </div>
                <div className="py-2 pl-2">
                  {filters.map((category, idx) => (
                    <button
                      onClick={() => handleFilterButtonClick(category)}
                      className={`button ${
                        role?.includes(category) ? "active" : ""
                      }`}
                      key={`filters-${idx}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="my-2 text-xl font-semibold">Location</div>
              <div className="my-1">
                <select
                  onChange={(e) => setLocation(e.target.value)}
                  className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                >
                  <option>Remote</option>
                  <option>Indonesia</option>
                  <option>India</option>
                  <option>Singapore</option>
                </select>
              </div>

              <div className="my-2 text-xl font-semibold">Skills</div>
              <div className="my-1">
                <div className="flex justify-center">
                  <Select
                    className="w-full"
                    options={optionList}
                    placeholder="Select Stack"
                    value={skills}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                  />
                </div>
              </div>

              <div className="my-2 text-xl font-semibold">Email</div>

              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />

              <div className="my-2 text-xl font-semibold">Twitter</div>

              <input
                onChange={(e) => setTwitter(e.target.value)}
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />

              <div className="my-2 text-xl font-semibold">LinkedIn</div>

              <input
                onChange={(e) => setLinkedin(e.target.value)}
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />

              <div className="my-2 text-xl font-semibold">Github</div>

              <input
                onChange={(e) => setGithub(e.target.value)}
                type="text"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
          </form>

          <div className="flex justify-center ">
            <div
              className={` w-96 md:m-5 rounded-xl max-w-lg lg:hidden mt-5`}
            >
              <div className="bg-white border p-5 rounded-lg text-start">
                <div className="flex flex-col text-start justify-center">
                  <div className=" flex justify-center">
                    <img className="w-96 rounded-full" src={profImgUrl} />
                  </div>
                  <div></div>
                  <div className="text-2xl font-semibold">{userName}</div>
                  <div className="text-lg font-medium my-2">{location}</div>
                  <div>
                    <button className={`button`}>🏳️‍🌈 {location}</button>
                    <button className={`button`}>🌈 {skills}</button>
                    <button className={`button`}>💄 {availability}</button>
                  </div>

                  <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                    {bio}
                  </div>

                  <button
                    className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg"
                    onClick={handlePost}
                  >
                    Save Changes
                  </button>
                </div>
              </div>

              <div className={` p-3 duration-300  flex justify-center`}></div>
            </div>
          </div>
        </div>
        <div className="hidden lg:inline">
          <div className={` h-screen  duration-300 w-96  relative`}>
            <div className="bg-white p-5  border rounded-lg text-start">
              <div className="flex flex-col text-start justify-center">
                <div>
                  <img className="p-1 w-96 rounded-full" src={profImgUrl} />
                </div>
                <div></div>
                <div className="text-2xl font-semibold"> {userName}</div>
                <div className="text-lg font-medium my-2">{location}</div>
                <div>
                  <button className={`button`}>🏳️‍🌈 {location}</button>
                  {/* <button className={`button`}>🌈 {}</button> */}
                  <button className={`button`}>💄 {availability}</button>
                </div>

                <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                  {bio}
                </div>

                <button
                  className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg"
                  onClick={handlePost}
                >
                  Save Changes
                </button>
              </div>
            </div>

            <div className={` p-3 duration-300  flex justify-center`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

const EditProfile = () => {
  return (
    <>
      <div className="mb-3 lg:mb-0">
        <NavBar />
      </div>

      <div className="flex ">
        <div className="w-full">
          <Main />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
