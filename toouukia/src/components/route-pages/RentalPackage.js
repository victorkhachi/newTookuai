import Sidenav from "../Sidenav";
import React, { useState, useEffect } from "react";
const RentalPackage = () => {
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
            <i
              class="fas fa-bars"
              data-bs-toggle="collapse"
              data-bs-target="#collapseWidthExample"
              aria-expanded="false"
              aria-controls="collapseWidthExample"
            ></i>
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
              <label className="addi">Add New Driver</label>
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
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>G-wagon</td>
                <td>On G</td>
                <td>
                  <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Buggati</td>
                <td>Good</td>
                <td>
                  <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>Maybach</td>
                <td>Good</td>
                <td>
                  <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <p className="del">X</p>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry the Bird</td>
                <td>mclAREN</td>
                <td>@twitter</td>
                <td>
                  <p className="del">X</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RentalPackage
