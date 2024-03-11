// React Import
import React from "react";
import ReactDOM from "react-dom/client";
// Local Import
import App from "@/App.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function setNoscript() {
  var userLanguage = navigator.language || navigator.userLanguage;
  var noscriptAdvice = document.getElementById('noscript-advice');
  if (userLanguage.toLowerCase().startsWith('en')) {
    noscriptAdvice.innerHTML = 'Oops! We have a problem. Please enable JavaScript to run this application.';
  } else if (userLanguage.toLowerCase().startsWith('es')) {
    noscriptAdvice.innerHTML = 'Oops! Tenemos un problema. Por favor habilita JavaScript para ejecutar esta aplicación.';
  } else {
    noscriptAdvice.innerHTML = 'Oops! There seems to be an issue. Please enable JavaScript to run this application.';
  }
}

setNoscript();
