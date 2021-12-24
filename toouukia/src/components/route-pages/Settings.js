import React, { useState, useEffect } from "react";
import Sidenav from "../Sidenav";
import { NavLink } from "react-router-dom";
const Settings = () => {
    const [show, setShow] = useState(false);
    const handleResize = () => {
      if (window.innerWidth > 1265) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
    });
  return (
    <div className="appHome">
      {show ? <Sidenav /> : " "}
      <div className="sectD driver">
        <div className="D-header shadow">
          <div className="icn1">
            <i class="fas fa-bars" onClick={() => setShow(!show)}></i>
            <i class="fas fa-calendar-week"></i>
          </div>
          <div className="icn2">
            <i class="fas fa-search"></i>
            <i class="fas fa-bell"></i>
            <i class="fas fa-user"></i>
          </div>
        </div>
        <div className="admin">
          <p>
            <NavLink to="/">
             Logout
            </NavLink>{" "}
          </p>
          <p>
              In progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
