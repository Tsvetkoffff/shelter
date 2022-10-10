export const menu = () => {
  const body = document.querySelector('body');
  const header = document.querySelector('#header');
  const overlay = document.querySelector('.overlay');
  const navLink = document.querySelectorAll('.nav-link');
  const menuToggle = document.querySelectorAll('.toggle-wrapper');

  const toggle = () => {
    header.classList.toggle('menu-open');
    header.classList.toggle('menu-close');
    body.classList.toggle('hidden');
  };

  menuToggle.forEach((e) => e.addEventListener('click', toggle));
  navLink.forEach((e) => e.addEventListener('click', toggle));
  overlay.addEventListener('click', toggle);
}
