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
          <i className="fas fa-mask h1"></i>Tookuai
        </h1>
        <hr></hr>
        <nav>
          <ul>
            <li>
              <NavLink to="/Dash" className="li">
                <i className="fas fa-border-all"></i>
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
              <i className="fas fa-user-tag"></i>
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
                <i className="fas fa-user-tie"></i> Drivers
              </NavLink>
            </li>
            <li>
              <NavLink to="/cModel" className="li">
                <i className="fas fa-car"></i> Cars
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/rp" className="li">
                <i className="fab fa-usps"></i> Earnings
              </NavLink>{" "}
            </li>
            <li>
              {" "}
              <i className="fas fa-pause-circle"></i> Profile
            </li>
           
            <li>
              {" "}
              <i className="fas fa-people-carry"></i>Help
            </li>

            <li>
              {" "}
              <i className="fas fa-cogs"></i> Settings
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Sidenav;
