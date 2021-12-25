import Sidenav from "../Sidenav";
import React, { useState, useEffect } from "react";
import DriverForm from "../DriverForm";
import { getList } from "../../Services/List";
const Drivers = () => {
  const [show, setShow] = useState(false);
  const [view, setview] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items);
      }
    });
    return () => (mounted = false);
  }, []);
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
          <div className="title">
            <div className="t-txt">
              <p>Drivers List</p>
            </div>
            <div className="tIcon">
              <label className="addi" onClick={() => setview(!view)}>
                Add New Driver
              </label>
              <label className="addi">Search</label>
            </div>
          </div>
          <table className="table table-striped table-hover tb shadow-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                {list.map(item => <td key={item.item}>{item.item}</td>)}
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {view ? <DriverForm /> : ""}
    </div>
  );
};

export default Drivers;
