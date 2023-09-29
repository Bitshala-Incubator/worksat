import React from "react";

import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState(null);

  const navigateLogin = () => {
    window.location.replace("http://localhost:3001/login");
  };

  const navigateLogout = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/logout",
    }).then((res) => {
      setUser(null);
      console.log(res);
    });
  };

  return (
    <>
      {user == null ? (
        <div onClick={navigateLogin}>
          <div className="bg-red-400 p-3 rounded-lg">Login</div>
        </div>
      ) : (
        <div onClick={navigateLogout}>
          <p>Logged in as: {user}</p>
          <h4>Logout</h4>
        </div>
      )}
    </>
  );
};

export default Login;
