import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {useEffect, useState} from "react";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../config/firebase.js";

const NavBar = () => {
  const isLoggedIn = window.localStorage.getItem("upsats-user-data-id");
  const [profPicUrl, setProfPicUrl] = useState('https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-1-800x800.jpg');
  useEffect(() => {
    if (isLoggedIn) {
      getDoc(doc(db, "devs", window.localStorage.getItem('upsats-user-data-id'))).then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setProfPicUrl(data.profImgUrl);
          console.log("Document data:", profPicUrl);
        }
      });
    }
  })
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
          <div className="flex justify-end ">
            {isLoggedIn ? (
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
                        src={profPicUrl}
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
                <Link to={"/login"}>
                  <div className="m-2 bg-white text-black border px-3 py-2 rounded-lg">
                    Login
                  </div>
                </Link>
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
            {isLoggedIn?(<>
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
                  src={profPicUrl}
                  alt
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
