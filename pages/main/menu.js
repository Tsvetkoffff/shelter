export const menu = () => {
  const BODY = document.querySelector('body');
  const HEADER = document.querySelector('#header');
  const OVERLAY = document.querySelector('.overlay');
  const NAV_LINK = document.querySelectorAll('.nav-link');
  const MENU_TOGGLE = document.querySelectorAll('.toggle-wrapper');

  const toggle = () => {
    HEADER.classList.toggle('menu-open');
    HEADER.classList.toggle('menu-close');
    BODY.classList.toggle('hidden');
  };

  MENU_TOGGLE.forEach((e) => e.addEventListener('click', toggle));
  NAV_LINK.forEach((e) => e.addEventListener('click', toggle));
  OVERLAY.addEventListener('click', toggle);
}
