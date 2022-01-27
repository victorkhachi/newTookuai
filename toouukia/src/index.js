import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./Responsiveness.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "flag-icon-css/css/flag-icons.min.css"

i18n
 .use(initReactI18next)
 .use(LanguageDetector)
 .use(HttpApi)
 .init({
   supportedLngs:['en','ar'],
   lng:document.querySelector('html').lang,
   fallbackLng:'en',
   detection:{
     order:['htmlTag','cookie'],
     caches:['cookie']
   },
   backend:{
     loadPath:`./assets/locales/{{lng}}/translation.json`
   },
   

 })

ReactDOM.render(
  <Suspense fallback>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
