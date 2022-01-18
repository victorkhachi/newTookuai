/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Sidenav = () => {
  const {t} = useTranslation()
  return (
    <section className="Snav">
      <header className="sNav">
        <h1 className="logo">
          T<span className="log">OO</span>KUAI
        </h1>
        <hr></hr>
       
      </header>
    </section>
  );
};

export default Sidenav;
