import Sidenav from '../Sidenav';
import React, { useState, useEffect } from "react";
import Carform from '../Carform';
const CarModel = () => {
 const [show, setShow] = useState(false);
 const [view, setview] = useState(false);
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
              <p>Driver Cars List</p>
            </div>
            <div className="tIcon">
              <input type="text" placeholder="Search" />
              <label className="addi" onClick={() => setview(!view)}>
                Add New Car
              </label>
              <label className="addi">Search</label>
            </div>
          </div>
          <table className="table table-striped table-hover tb shadow-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Driver</th>
                <th scope="col">Car Model</th>
                <th scope="col">Condition</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>G-wagon</td>
                <td>
                  On G <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Buggati</td>
                <td>
                  Good <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Maybach</td>
                <td>
                  Good <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  @mdo <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>
                  @fat <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>mclAREN</td>
                <td>
                  @twitter <p className="del">X</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {view ? <Carform /> : ""}
    </div>
  );
}

export default CarModel
