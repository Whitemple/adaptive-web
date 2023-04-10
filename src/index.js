import "@babel/polyfill";
// import "./libs/jq.js";

import "./libs/slider/slick.min.js";
import "./js/slick.js";
import "./index.scss";
import "./index.html";
import "./menuPage.html";
import "./aboutPage.html";
import "./roadMapPage.html";
import "./howToBuyPage.html";

import "./js/sandwichMenu.js";

const main = document.querySelector("[data-menu=main]");

switch (window.location.pathname) {
  case "/index.html":
    main.innerText = "MENU";
    break;
  case "/menuPage.html":
    main.innerText = "MAIN";
    main.href = "./index.html";
    break;
}
