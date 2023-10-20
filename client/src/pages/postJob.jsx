import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import NavBar from "../components/navbar";
import Select from "react-select";
import Sidebar from "../components/sidebar";
import JobDetail from "./jobDetail";
import { db, img } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";
import Axios from "axios";

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

const optionList = [
  { value: "HTML", label: "HTML" },
  { value: "CSS", label: "CSS" },
  { value: "Javascript", label: "Javascript" },
  { value: "React", label: "React" },
  { value: "Node", label: "Node" },
  { value: "Ember", label: "Ember" },
  { value: "Angular", label: "Angular" },
  { value: "Typescript", label: "Typescript" },
  { value: "Python", label: "Python" },
  { value: "C++", label: "C++" },
  { value: "Java", label: "Java" },
  { value: "Django", label: "Django" },
  { value: "R", label: "R" },
  { value: "SEO", label: "SEO" },
  { value: "SEM", label: "SEM" },
  { value: "Twitter", label: "Twitter" },
  { value: "API", label: "API" },
  { value: "Ruby", label: "Ruby" },
  { value: "Linux", label: "Linux" },
  { value: "Git", label: "Git" },
  { value: "Rust", label: "Rust" },
  { value: "Figma", label: "Figma" },
  { value: "SQL", label: "SQL" },
  { value: "NoSQL", label: "NoSQL" },
  { value: "React Native", label: "React Native" },
  { value: "Law", label: "Law" },
  { value: "Wordpress", label: "Wordpress" },
  { value: "Youtube", label: "Youtube" },
  { value: "Excel", label: "Excel" },
  { value: "Word", label: "Word" },
  { value: "Powerpoint", label: "Powerpoint" },
  { value: "Docker", label: "Docker" },
  { value: "AdobeXD", label: "AdobeXD" },
  { value: "Jira", label: "Jira" },
  { value: "Github", label: "Github" },
  { value: "Google Cloud", label: "Google Cloud" },
  { value: "AWS", label: "AWS" },
  { value: "Firebase", label: "Firebase" },
  { value: "Bitcoin Node", label: "Bitcoin Node" },
  { value: "Ligtning Node", label: "Ligtning Node" },
  { value: "CA", label: "CA" },
  { value: "CFA", label: "CFA" },
  { value: "Payroll", label: "Payroll" },
  { value: "ATS", label: "ATS" },
  { value: "Prompt Writing", label: "Prompt Writing" },
  { value: "Final Cut Pro", label: "Final Cut Pro" },
  { value: "Adobe Premier Pro", label: "Adobe Premier Pro" },
  { value: "Blender", label: "Blender" },
  { value: "Adobe After Effects", label: "Adobe After Effects" },
  { value: "Golang", label: "Golang" },
  { value: "Manual Testing", label: "Manual Testing" },
  { value: "Automated Testing", label: "Automated Testing" },
  { value: "Android", label: "Typescript" },
  { value: "Swift", label: "Swift" },
];

const Main = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [companyName, setCompanyName] = useState("Bitcoin Company");
  const [companyDetails, setCompanyDetails] = useState("");
  const [position, setPosition] = useState("Front End Developer");
  const [employmentType, setEmploymentType] = useState("Full Time");
  const [role, setRole] = useState("Front End");
  const [location, setLocation] = useState("Global");
  const [skills, setSkills] = useState();
  const [imgUrl, setImgUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png"
  );
  const [jobDescription, setJobDescription] = useState(
    "We are looking for a Front-End Web Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include translation of the UI/UX design wireframes to actual code that will produce visual elements of the application. You will work with the UI/UX designer and bridge the gap between graphical design and technical implementation, taking an active role on both sides and defining how the application looks as well as how it works."
  );
  const [responsibilities, setResponsibilities] = useState("");
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const [disabled, setDisabled] = useState(false);
  const [userId, setUserId] = useState("");

  let subtitle;
  const navigate = useNavigate();

  const forceNavigate = () => {
    alert("Log in first");
    navigate("/", {});
  };

  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    }).then((res) => {
      console.log(res.data.id, "Usdata");
      setUserId(res.data.id);
      if (res.data.id === undefined || res.data.id === "") {
        forceNavigate();
      }
    });
  }, [userId]);

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imgs = ref(img, `Jobs/${v4()}`);
    uploadBytes(imgs, e.target.files[0]).then((data) => {
      console.log(data);
      getDownloadURL(data.ref).then((val) => {
        console.log(val);
        setImgUrl(val);
      });
    });
  };

  const jobsCollectionRef = collection(db, "jobs");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSelect(data) {
    setSkills(data);
  }

  // const handlePost = async () => {
  //   setDisabled(true);
  //   if (handleSubmit) {
  //     try {
  //       await addDoc(jobsCollectionRef, {
  //         companyName: companyName,
  //         companyDetails: companyDetails,
  //         position: position,
  //         employmentType: employmentType,
  //         role: role,
  //         location: location,
  //         // skills: skills,
  //         imgUrl: imgUrl,
  //         jobDescription: jobDescription,
  //         responsibilities: responsibilities,
  //         website: website,
  //         twitter: twitter,
  //         linkedin: linkedin,
  //         github: github,
  //       });
  //       console.log("done");
  //       alert("Job Posted Successfully");
  //       window.location.reload();
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    console.log("done");
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
          destination:
            // "03006fcf3312dae8d068ea297f58e2bd00ec1ffe214b793eda46966b6294a53ce6",
            "bc1q329d28ly6wkr54kyscn8sdekd3l3aucct0qm5w",
          amount: "100",
          customRecords: {
            34349334: "Post Job",
          },
        });
        console.log(result);
        alert("paid successfully");
        try {
          await addDoc(jobsCollectionRef, {
            companyName: companyName,
            companyDetails: companyDetails,
            position: position,
            employmentType: employmentType,
            role: role,
            location: location,
            skills: skills,
            imgUrl: imgUrl,
            jobDescription: jobDescription,
            responsibilities: responsibilities,
            website: website,
            twitter: twitter,
            linkedin: linkedin,
            github: github,
          });
        } catch (err) {
          console.log(err);
        }
        alert("Job Posted Successfully");
        window.location.reload();
      } catch (err) {
        console.log(err),
          alert("You Need to pay the sats in order to post the job");
        setDisabled(false);
      }
    }

    // window.location.reload();
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="flex">
          <div className="w-full">
            <div className="text-start p-5 border bg-white md:mx-5 rounded-xl ">
              <div>
                <div className="my-2 text-xl font-semibold">Company Name</div>

                <input
                  required
                  type="text"
                  id="default-input"
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

                <div className="my-2 text-xl font-semibold">
                  Company Details
                </div>
                <input
                  required
                  id="message"
                  onChange={(e) => setCompanyDetails(e.target.value)}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                />

                <div className="my-2 text-xl font-semibold">Position</div>
                <input
                  required
                  type="text"
                  onChange={(e) => setPosition(e.target.value)}
                  id="default-input"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

                <div className="my-2 text-xl font-semibold">
                  {" "}
                  Employment Type
                </div>
                <div className="my-2">
                  <select
                    required
                    onChange={(e) => setEmploymentType(e.target.value)}
                    className="p-2.5 text-gray-800 bg-white border rounded-md shadow-sm w-full outline-none appearance-none focus:border-indigo-600"
                  >
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Internship</option>
                    <option>Volunteer</option>
                    <option>Freelance</option>
                  </select>
                </div>

                <div className="my-2 text-xl font-semibold">Role</div>
                <div className="my-1">
                  <select
                    required
                    onChange={(e) => setRole(e.target.value)}
                    className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  >
                    <option>Frontend Dev</option>
                    <option>Backend Dev</option>
                    <option>Full Stack Dev</option>
                    <option>Dev Ops</option>
                    <option>Performance Marketing</option>
                    <option>Social Media & Content</option>
                    <option>Legal</option>
                    <option>Finance</option>
                    <option>HR</option>
                    <option>UI/UX Designer</option>
                    <option>Product Manager</option>
                    <option>Operations</option>
                    <option>Sales</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div className="my-2 text-xl font-semibold">Location</div>
                <div className="my-1">
                  <select
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-2.5 text-gray-800 w-full bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  >
                    <option>Global</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Singapore</option>
                    <option>Australia</option>
                    <option>United States</option>
                  </select>
                </div>

                <div className="my-2 text-xl font-semibold">Skills</div>

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

                <div className="my-2 text-xl font-semibold">
                  Upload company logo
                </div>
                <input
                  required
                  onChange={(e) => {
                    handleUpload(e);
                  }}
                  type="file"
                  accept="image/*"
                  id="formFile"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

                <div className="my-2 text-xl font-semibold">Website</div>

                <input
                  onChange={(e) => setWebsite(e.target.value)}
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

                <div className="my-2 text-xl font-semibold">
                  Job Description
                </div>
                <textarea
                  required
                  onChange={(e) => setJobDescription(e.target.value)}
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                />

                <div className="my-2 text-xl font-semibold">
                  Responsibilities and Requirements
                </div>
                <textarea
                  required
                  onChange={(e) => setResponsibilities(e.target.value)}
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>
              <div className="flex justify-center ">
                <div
                  className={` w-full m-5 rounded-xl max-w-lg lg:hidden mt-5`}
                >
                  <div className="bg-white border p-5 rounded-lg text-start">
                    <div className="flex flex-col text-start justify-center">
                      <div>
                        <img className="p-5 rounded-full" src={imgUrl} />
                      </div>
                      <div className="text-2xl font-semibold">{position}</div>
                      <div className="text-lg font-medium my-2">{location}</div>
                      <div className="text-lg font-medium my-2">
                        {companyName}
                      </div>

                      <div>
                        <button className={`button`}>{location}</button>
                        <button className={`button`}>{role}</button>
                        <button className={`button`}>{employmentType}</button>
                      </div>

                      <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                        {jobDescription}
                      </div>

                      <button
                        disabled={disabled}
                        className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg disabled:bg-[#dbd5e7]"
                        id="submit"
                        value="Submit"
                      >
                        Add Job
                      </button>
                    </div>
                  </div>

                  <div
                    className={` p-3 duration-300  flex justify-center`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline">
            <div className={` h-screen  duration-300 w-96  relative`}>
              <div className="bg-white p-5  border rounded-lg text-start">
                <div className="flex flex-col text-start justify-center">
                  <div>
                    <img className="p-5 rounded-full" src={imgUrl} />
                  </div>
                  <div className="text-2xl font-semibold">{position}</div>
                  <div className="text-lg font-medium my-2">{location}</div>
                  <div className="text-lg font-medium my-2">{companyName}</div>

                  <div>
                    <button className={`button`}>{location}</button>
                    <button className={`button`}>{role}</button>
                    <button className={`button`}>{employmentType}</button>
                  </div>

                  <div className="border  my-2 text-md p-1 bg-[#f8fafc] font-thin rounded-lg">
                    {jobDescription}
                  </div>

                  <button
                    disabled={disabled}
                    className="border-2 text-center bg-[#8b5cf6] text-white px-4 py-2 mt-1 rounded-lg disabled:bg-[#dbd5e7]"
                    id="submit"
                    value="Submit"
                  >
                    Add Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

const PostJob = () => {
  return (
    <>
      <div className="mb-3 lg:mb-0">
        <NavBar />
      </div>
      <Main />
    </>
  );
};

export default PostJob;
