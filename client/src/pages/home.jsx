import { useEffect, useState } from "react";
import BrowseJobs from "./browseJobs";

const Home = () => {

  const [abc,setAbc] = useState([])

  return (
    <div>
      <BrowseJobs />
    </div>
  );
};

export default Home;
