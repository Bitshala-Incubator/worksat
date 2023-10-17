import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar";
import NavBar from "../components/navbar";
import {
  SlSocialTwitter,
  SlSocialGithub,
  SlLink,
  SlSocialLinkedin,
} from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";

const Main = (data) => {
  const [jobDetail, setJobDetail] = useState([]);
  const id = data.data;

  const jobsCollectionRef = collection(db, "jobs");
  const ref = doc(db, "jobs", id);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getJobDetail = async () => {
      try {
        const data = await getDoc(ref);
        const filteredData = data.data();
        console.log(filteredData);
        setJobDetail(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getJobDetail();
  }, []);

  const handleApply = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="flex w-full">
        {jobDetail ? (
          <div>
            <div className="flex flex-col bg-white rounded-xl items-start py-2 p-2 m-1 md:m-5 md:p-5">
              <div className="text-3xl md:text-5xl font-bold">
                {jobDetail.position}
              </div>
              <div className="flex">
                <div className="py-3 px-2">{jobDetail.role}</div>
                <div className="py-3 px-2">{jobDetail.employmentType}</div>
              </div>
              <hr className=" w-full h-px" />
              <div className="px-2 py-3 justify-start flex flex-col items-start">
                <div className="text-2xl font-semibold items-start my-3">
                  The Company
                </div>
                <div className="text-start text-sm md:text-lg">
                  {jobDetail.companyDetails}
                </div>

                <div className="text-2xl font-semibold items-start mt-6 mb-3">
                  The Role
                </div>
                <div className="text-start text-sm md:text-lg">
                  {jobDetail.jobDescription}
                </div>

                <div className="text-2xl font-semibold items-start mt-6 mb-3">
                  Your Responsibilities
                </div>
                <div className="text-start text-sm md:text-lg">
                  {jobDetail.responsibilities}
                </div>

                <div className="text-2xl font-semibold items-start mt-6 mb-3">
                  How To Apply
                </div>
                <div className="text-start text-sm md:text-lg">
                  If you’d like to apply for this job, simply click the apply
                  button and your profile will be shared with the recruiter.
                  Thank you!I
                </div>
              </div>
            </div>
            <div className="flex  justify-center">
              <div className="bg-white max-w-lg p-5 px-10 mt-5 border rounded-lg text-start lg:hidden">
                <div className="flex flex-col justify-between">
                  <div>
                    <img className="p-5 rounded-full" src={jobDetail.imgUrl} />
                  </div>
                  <div className="text-2xl font-semibold">
                    {jobDetail.companyName}
                  </div>
                  <div>Poisted 3 months ago</div>
                </div>

                {/* <div className="mt-3">Share this job</div> */}
                <div className="flex justify-start my-2">
                  <div className="my-2">
                    <a href={jobDetail.twitter} target="_blank">
                      <SlSocialTwitter />
                    </a>
                  </div>
                  <div className="mx-2 my-2">
                    <a href={jobDetail.github} target="_blank">
                      <SlSocialGithub />
                    </a>
                  </div>
                  <div className="mx-2 my-2">
                    <a href={jobDetail.website} target="_blank">
                      <SlLink />
                    </a>
                  </div>
                  <div className="mx-2 my-2">
                    <a href={jobDetail.linkedin} target="_blank">
                      <SlSocialLinkedin />
                    </a>
                  </div>
                </div>
                <div
                  onClick={handleApply}
                  className="bg-[#8b5cf6] w-1/33 flex justify-center py-1 rounded-lg text-white"
                >
                  Apply
                </div>
              </div>
              {showModal ? (
                <>
                  <div className="justify-center backdrop-blur-sm items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                          Applied Successfully
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-red-600 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              X
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        
                        {/*footer*/}
                        <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        ) : (
          <div>Job Loading</div>
        )}
      </div>
      <div className="hidden lg:inline">
        <div className={` h-screen p-1 duration-300 w-80  relative`}>
          <div className="bg-white p-5 m-3  border rounded-lg text-start">
            <div className="flex flex-col justify-between">
              <div>
                <img className="p-5 rounded-full" src={jobDetail.imgUrl} />
              </div>
              <div className="text-2xl font-semibold">
                {jobDetail.companyName}
              </div>
              <div>Poisted 3 months ago</div>
            </div>

            {/* <div className="mt-3">Share this job</div> */}
            <div className="flex py-2 my-2">
              <div className="mx-1">
                <a href={jobDetail.twitter} target="_blank">
                  <SlSocialTwitter />
                </a>
              </div>
              <div className="mx-1 ">
                <a href={jobDetail.github} target="_blank">
                  <SlSocialGithub />
                </a>
              </div>
              <div className="mx-1">
                <a href={jobDetail.website} target="_blank">
                  <SlLink />
                </a>
              </div>
              <div className="mx-1">
                <a href={jobDetail.linkedin} target="_blank">
                  <SlSocialLinkedin />
                </a>
              </div>
            </div>
            <div
              onClick={handleApply}
              className="bg-[#8b5cf6] flex justify-center py-1 rounded-lg text-white"
            >
              Apply
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const JobDetail = (props) => {
  const location = useLocation();
  const data = location.state.id;

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="flex w-full">
          <Main data={data} />
        </div>
      </div>
    </>
  );
};

export default JobDetail;
