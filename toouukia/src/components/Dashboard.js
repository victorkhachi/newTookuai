import Sidenav from "./Sidenav";
import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import Area from "./Area";
import Line from "./Line";
import Radar from "./Radar";
import AreaMobile from "./Charts-mobile/area"
import RadarMobile from "./Charts-mobile/radar";
import LineMobile from "./Charts-mobile/line";
const Dashboard = () => {
  const [show,setShow] = useState(true)
  const handleResize = () => {
    if (window.innerWidth > 1265 ) {
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
      <section className="sectD">
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

        <h5>OVERVIEW</h5>
        <div className="cards">
          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Total Number Of Rides</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Ongoing Rides</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Number of vehicles</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Number Of Scheduled Rides</p>
            </div>
          </div>
        </div>

        <section className="char">
          <div className="pc">
            <Charts />
          </div>
          <div className="mobile">
            <AreaMobile />
          </div>
        </section>

        <section className="genStats">
          <div className="reviews">
            <div className="boxx">
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">Total no. of online vehicles</p>
              </div>
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">Total user cancelled requests </p>
              </div>
            </div>
            <div className="boxx">
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">Total driver cancelled count</p>
              </div>
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">No. of scheduled rides</p>
              </div>
            </div>
          </div>
          <div className="dNut">
            <div className="pc">
              <Radar />
            </div>
            <div className="mobile">
              <RadarMobile />
            </div>
          </div>
          <div className="lineArea">
            <div className="pc">
              <Line />
              <Area />
            </div>
            <div className="mobile">
              <LineMobile />
              <AreaMobile />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
