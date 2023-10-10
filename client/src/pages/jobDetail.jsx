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
import Jobs from "../components/jobs";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDoc, doc, getDocs } from "firebase/firestore";

const Main = (data) => {
  const [jobDetail, setJobDetail] = useState([]);
  const id = data.data;

  const jobsCollectionRef = collection(db, "jobs");
  const ref = doc(db, "jobs", id);

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
                If you’d like to apply for this job, simply click the apply button and your profile will be shared with the recruiter. Thank you!I
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

                <div className="mt-3">Share this job</div>
                <div className="flex justify-start my-2">
                  <div className="my-2">
                    <SlSocialTwitter />
                  </div>
                  <div className="mx-2 my-2">
                    <SlSocialGithub />
                  </div>
                  <div className="mx-2 my-2">
                    <SlLink />
                  </div>
                  <div className="mx-2 my-2">
                    <SlSocialLinkedin />
                  </div>
                </div>
                <div className="bg-[#8b5cf6] w-1/33 flex justify-center py-1 rounded-lg text-white">
                  Apply
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
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

            <div className="mt-3">Share this job</div>
            <div className="flex justify-start my-2">
              <div className="my-2">
                <SlSocialTwitter />
              </div>
              <div className="mx-2 my-2">
                <SlSocialGithub />
              </div>
              <div className="mx-2 my-2">
                <SlLink />
              </div>
              <div className="mx-2 my-2">
                <a href={jobDetail.linkedin} target="_blank">
                  <SlSocialLinkedin />
                </a>
              </div>
            </div>
            <div className="bg-[#8b5cf6] flex justify-center py-1 rounded-lg text-white">
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
