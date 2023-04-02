const headerList = document.querySelector(".header__list");
const sandwisch = document.querySelector(".sandwish-menu");
// const sandwishMenu = document.querySelector(".sandwish-menu");
// const closeSandwishMenu = document.querySelector(".sandwish-menu__close-btn");

headerList.addEventListener("click", (data) => {
  if (data.target.classList === "header__list") {
    sandwisch.classList.add("show-class");
  }
  if (data.target.classList === "sandwish-menu__close-btn") {
    sandwisch.classList.remove("show-class");
  }
});
