const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
  nav.classList.toggle('header__navigation--active');
  burger.classList.toggle('header__burger--active');
});
