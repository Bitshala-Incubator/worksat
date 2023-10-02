import React from "react";
import { Link } from "react-router-dom";

const JobDetail = () => {
  return (
    <>
      <div className="flex justify-between mb-3">
        <Link to="/">
          <div>Logo</div>
        </Link>
        <div className="flex">
          <Link to="/postJob">
            <div className="bg-red-400 p-3 rounded-lg mx-3">Post a job</div>
          </Link>
          {/* <Login /> */}
          <Link to="/devProfile">
            <div className="bg-red-400 p-3 rounded-lg mx-3">Developer</div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <dev className="text-3xl">Company is hiring a</dev>
        <dev className="text-5xl">Job Role</dev>

        <div>
          Job detail Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Rem dolores, ad eum error magni laudantium tempore quia. Esse deleniti
          officia debitis. Amet quia possimus neque est repellat aspernatur
          officia perspiciatis.
        </div>

        <div>Qualifications:</div>
        <div className="flex justify-center">
          <div className="bg-gray-300 max-w-3xl p-5 rounded-lg m-5">
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
            <ul>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              laboriosam voluptate quisquam amet unde accusantium blanditiis,
              dolor at dicta ducimus adipisci facilis voluptatibus nam vel
              cupiditate ipsa quo odit quibusdam.
            </ul>
          </div>
        </div>

        <div>What's in for you? :</div>
        <div className="flex justify-center">
          <div className="bg-gray-300 max-w-3xl p-5 rounded-lg m-5">
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
            <ul>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
              unde quia! Iure veniam deleniti cumque esse quaerat laudantium
              reprehenderit unde assumenda excepturi, enim neque adipisci rem.
              Nobis quaerat nihil possimus.
            </ul>
          </div>
        </div>

        <div>Salary</div>
        <div>$70,000 — $120,000/year</div>

        <div className="bg-red-400 p-3 rounded-lg mx-3 mb-10 mt-3">
          Apply now
        </div>
      </div>
    </>
  );
};

export default JobDetail;
