import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import NavBar from "../components/navbar";
import DevSideBar from "../components/devSidebar";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const DevProfile = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <NavBar/>




    </>
  );
};

export default DevProfile;
