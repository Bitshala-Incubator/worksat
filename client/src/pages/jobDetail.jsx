import {useEffect, useState} from "react";
import NavBar from "../components/navbar";
import {
  SlSocialTwitter,
  SlSocialGithub,
  SlLink,
  SlSocialLinkedin,
} from "react-icons/sl";
import { useLocation } from "react-router-dom";
import { db } from "../config/firebase";
import {getDoc, doc, updateDoc, arrayUnion} from "firebase/firestore";

const Main = (data) => {
  const [jobDetail, setJobDetail] = useState([]);
  const id = data.data;

  const ref = doc(db, "jobs", id);
  const [turn, setTurn] = useState(false)
  const [hasAlreadyApplied, setHasAlreadyApplied] = useState(false);

  const getJobDetail = async () => {

  };

  getJobDetail();

  useEffect(() => {
    try {
      getDoc(ref).then((data) => {
        const filteredData = data.data();
        const userId = window.localStorage.getItem('upsats-user-data-id');
        if (filteredData.applicants && userId) {
          if (filteredData.applicants.includes(userId)) {
            setHasAlreadyApplied(true);
          }
        }
        setJobDetail(filteredData);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleApply = async () => {
    setTurn(true);
    const userId = window.localStorage.getItem('upsats-user-data-id');
    if (userId && !hasAlreadyApplied) {
        await updateDoc(ref, {
            applicants: arrayUnion(userId)
        });
        setHasAlreadyApplied(true);
        alert('Applied successfully! Please check your email for further instructions.');
    }
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
                  className={turn? "bg-green-500 rounded-lg" : "bg-[#8b5cf6] rounded-lg"}
                >
                  <div className=" w-1/33 flex justify-center py-1  text-white">
                {turn? 'Applied' : 'Apply'}  
                    </div>
                </div>
              </div>
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
            {hasAlreadyApplied ? (
                <div
                  className="bg-[#33cc5e] flex justify-center py-1 rounded-lg text-white"
              >
                Applied
              </div>) : (<div
                  onClick={handleApply}
                  className="bg-[#8b5cf6] flex justify-center py-1 rounded-lg text-white"
              >
                Apply
              </div>)}
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
