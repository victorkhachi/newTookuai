import Sidenav from "../Sidenav";
import React, { useState, useEffect } from "react";
import DriverForm from "../DriverForm";
import { getList } from "../../Services/List";
import DriverT from "./DriverT";
const Drivers = () => {
  const [show, setShow] = useState(false);
  const [view, setview] = useState(false);
  // const [list, setList] = useState([]);
  // useEffect(() => {
  //   let mounted = true;
  //   getList().then((items) => {
  //     if (mounted) {
  //       setList(items);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);
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
         <DriverT />
        </div>
      </div>
      {view ? <DriverForm /> : ""}
    </div>
  );
};

export default Drivers;
