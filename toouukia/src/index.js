import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./Responsiveness.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "flag-icon-css/css/flag-icons.min.css"

// i18n

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
