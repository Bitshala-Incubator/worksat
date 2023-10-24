import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PostJob from "./pages/postJob.jsx";
import Login from "./pages/login.jsx";
import DevProfile from "./pages/devProfile.jsx";
import JobDetail from "./pages/jobDetail.jsx";
import BrowseJobs from "./pages/browseJobs.jsx";
import BrowseDevs from "./pages/browseDevs.jsx";
import EditProfile from "./pages/editProfile.jsx";
import EditProfile2 from "./pages/editProfile2.jsx";
import Signup from "./pages/signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/postJob",
    element: <PostJob />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/devProfile",
    element: <DevProfile />,
  },
  {
    path: "/jobDetail",
    element: <JobDetail />,
  },
  {
    path: "/browseJobs",
    element: <BrowseJobs />,
  },
  {
    path: "/browseDevs",
    element: <BrowseDevs />,
  },
  {
    path: "/editProfile",
    element: <EditProfile />,
  },
  {
    path: "/editProfile2",
    element: <EditProfile2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
