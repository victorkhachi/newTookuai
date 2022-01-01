import React, { useState, useEffect } from "react";
import Sidenav from "../Sidenav";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
  },
];

const Settings = () => {
   const { t } = useTranslation();
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
          <p>
            <NavLink to="/">{t("lg")}</NavLink>{" "}
          </p>
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-globe"> LANGUAGES</i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <button
                    className="dropdown-item"
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    <span
                      className={`flag-icon flag-icon-${country_code} mx-2`}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <p>{t("ip")}</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
