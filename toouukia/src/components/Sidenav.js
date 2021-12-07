import React from "react";
import { NavLink } from "react-router-dom";
const Sidenav = () => {
  return (
    <section>
      <header
        className="sNav collapse show collapse-horizontal"
        id="collapseWidthExample"
        id="style-1"
      >
        <h1>
          {" "}
          <i class="fas fa-mask h1"></i>Tookuai
        </h1>
        <hr></hr>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="li">
                <i class="fas fa-border-all"></i>
                Dashboard
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/analytics" className="li">
                <i class="fas fa-project-diagram"></i>Analytics
              </NavLink>{" "}
            </li> */}
            <li
              className=" ul dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user-tag"></i>
              Admin
            </li>

            <ul className=" dm dropdown-menu">
              <NavLink to="/admin" className="li">
                Admin Users-List
              </NavLink>
            </ul>
          </ul>
          <p className="br">Pages</p>

          <ul>
            <li>
              <NavLink to="/drivers" className="li">
                <i class="fas fa-user-tie"></i> Drivers
              </NavLink>
            </li>
            <li>
              {" "}
              <i class="fas fa-border-style"></i> Drivers Car Model
            </li>
            <li
              className=" ul dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fab fa-usps"></i> Rental Paxkages
            </li>
            <ul className=" dm dropdown-menu">
              <li>Basic Rental packages</li>
              <li>Manage Rental packages</li>
            </ul>
            <li>
              {" "}
              <i class="fab fa-buromobelexperte"></i>Drivers Car Model
            </li>
            <li>
              <i class="fas fa-car"></i> Vehicle Type
            </li>
            <li>
              {" "}
              <i class="fas fa-dharmachakra"></i> Drivers
            </li>
            <li>
              {" "}
              <i class="fas fa-pause-circle"></i> Pending Bookings
            </li>
            <li>
              {" "}
              <i class="fas fa-qrcode"></i>Promo Code
            </li>
            <li>
              {" "}
              <i class="fas fa-people-carry"></i>Reviews
            </li>
            <li>
              {" "}
              <i class="far fa-edit"></i> Reports
            </li>
            <li>
              {" "}
              <i class="fas fa-cogs"></i> Settings
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Sidenav;
