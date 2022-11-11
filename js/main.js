let burger = document.querySelector('.header__top-burger');
let navMenu = document.querySelector('.nav__menu');

burger.addEventListener("click", () => {
  navMenu.classList.toggle('nav__menu-adaptive');
});

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle('nav__menu-adaptive');
});