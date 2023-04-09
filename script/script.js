const activeBurgerMenu = document.querySelector(".header-body__nav");
const activeBurgerBurger = document.querySelector(".header-body__burger");
const activeBurgerList = document.querySelector(".header-nav__list");

activeBurgerBurger.addEventListener("click", function () {
  activeBurgerBurger.classList.toggle("active");
  activeBurgerMenu.classList.toggle("active");
  activeBurgerList.classList.toggle("active");
});

const buttonMenu = document.querySelector(".section-top__button");
buttonMenu.addEventListener("click", function () {
  buttonMenu.classList.toggle("section-top-buttto");
});

//======================================================================================
let historyNumber = document.querySelector(".section-history-info-statistics__number");

historyNumber.addEventListener("click", function () {
  let container = 30;
  historyNumber.textContent = container;
  historyNumber.textContent = container + 1;

  //===================================
  console.log("aaaaa");
  console.log(typeof container);
  console.log(typeof historyNumber.textContent);
});
