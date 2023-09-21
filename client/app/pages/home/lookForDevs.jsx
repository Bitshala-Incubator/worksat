import React from "react";
import Devs from '../devs/page'

const LookForDevs = () => {
  return (
      <div>
        <Devs/>
      <div className="mt-5">
        We can probably show off some developer profiles here maybe?
      </div>
      <div className="flex ">
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 1</div>
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 2</div>
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 3</div>
        <div className="p-2 bg-red-300 rounded-lg m-3">dev 4</div>
      </div>
    </div>
  );
};

export default LookForDevs;
