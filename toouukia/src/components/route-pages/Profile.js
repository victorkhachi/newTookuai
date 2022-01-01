import React, { useState, useEffect } from "react";
import Sidenav from "../Sidenav";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Profile = () => {
  const {t} = useTranslation()
     const [show, setShow] = useState(true);
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
          <p>{t("Profile")}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
