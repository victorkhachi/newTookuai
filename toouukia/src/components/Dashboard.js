import Sidenav from "./Sidenav";
import React, { useState, useEffect } from "react";
import Charts from "./Charts";
import Area from "./Area";
import Line from "./Line";
import Radar from "./Radar";
import AreaMobile from "./Charts-mobile/area"
import RadarMobile from "./Charts-mobile/radar";
import LineMobile from "./Charts-mobile/line";
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
const Dashboard = () => {
   const { t } = useTranslation();
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
            <i class=" btn-group dropup">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-globe"></i>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
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
            </i>
            <i class="fas fa-user"></i>
          </div>
        </div>

        <h5>{t("Ds")}</h5>
        <div className="cards">
          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>{t("Tr")}</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>{t("Or")}</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>{t("Nv")}</p>
            </div>
          </div>

          <div className="card shadow-sm">
            <div className="icn">
              <i class="fas fa-users"></i>
            </div>
            <div className="txt">
              <h1>20,000</h1>
              <p>{t("Nsr")}</p>
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
                <p className="gS">{t("NOv")}</p>
              </div>
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">{t("Tcc")} </p>
              </div>
            </div>
            <div className="boxx">
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">{t("Vo")}</p>
              </div>
              <div className="boxxIn shadow">
                <i class="fas fa-user"></i>
                <h2>600</h2>
                <p className="gS">{t("Nsr")}</p>
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
