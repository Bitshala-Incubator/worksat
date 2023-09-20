'use client'
import React from "react";
// import Link from "next/link";
// import Login from "./pages/login/page";
import { useState } from "react";
// import Home from "./pages/home/page";
import { MdLogin, MdLogout } from "react-icons/md";



const Login = () => {


  const [user, setUser] = useState(null);

  const navigateLogin = () => {
    window.location.replace("http://localhost:3001/login")
  };

  const navigateLogout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/logout",
    }).then((res) => {
      setUser(null);
      console.log(res);
    })
  }





  // need to integrate lightning login here!
  return (
    <>
     {user == null ? (
        <div  onClick={navigateLogin}>
          <h4 >Login</h4>
        </div>
        ) : (
        <div onClick={navigateLogout}>
          <p >Logged in as: {user}</p>
          <h4 >Logout</h4>
        </div>
        )}
    </>
  )
};

export default Login;
