import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Sidenav = () => {
  const {t} = useTranslation()
  return (
    <section className="Snav">
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
                {t("dashboard")}
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
              {t("admin")}
            </li>

            <ul className=" dm dropdown-menu">
              <NavLink to="/admin" className="li">
                {t("AdminNav")}
              </NavLink>
            </ul>
          </ul>
          <p className="br">Pages</p>

          <ul>
            <li>
              <NavLink to="/drivers" className="li">
                <i className="fas fa-user-tie"></i> {t("driver")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/cModel" className="li">
                <i className="fas fa-car"></i> {t("car")}
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/rp" className="li">
                <i className="fab fa-usps"></i> {t("earnings")}
              </NavLink>{" "}
            </li>
            <li>
              <NavLink to="/profile" className="li">
                <i className="fas fa-pause-circle"></i> {t("profile")}
              </NavLink>{" "}
            </li>

            <li>
              <NavLink to="/help" className="li">
                <i className="fas fa-people-carry"></i> {t("help")}
              </NavLink>{" "}
            </li>

            <li>
              <NavLink to="/settings" className="li">
                <i className="fas fa-cogs"></i> {t("settings")}
              </NavLink>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Sidenav;
