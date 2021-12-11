import Sidenav from "./Sidenav";
import React from "react";
import Charts from "./Charts";
import Area from "./Area";
import Line from "./Line";
import Radar from "./Radar";

const Dashboard = () => {
  return (
    <div className="appHome">
      <Sidenav />
      <section className="sectD">
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

        <h5>OVERVIEW</h5>
        <div className="cards">
          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Number Of Drivers</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Number Of Drivers</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Number Of Drivers</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>Number Of Drivers</p>
            </div>
          </div>
        </div>

        <section className="char">
          <Charts />
        </section>

        <section className="genStats">
          <div className="reviews">
            <div className="boxx">
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p>Damages</p>
              </div>
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p>Damages</p>
              </div>
            </div>
            <div className="boxx">
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p>Damages</p>
              </div>
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p>Damages</p>
              </div>
            </div>
          </div>
          <div className="dNut">
            <Radar />
          </div>
          <div className="lineArea">
            <Line />
            <Area />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
