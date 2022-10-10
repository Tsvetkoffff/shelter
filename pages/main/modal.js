export const modal = () => {
  const BODY = document.querySelector('body');
  const MODAL = document.querySelector('#modal');
  const MODAL_WRAPPER = document.querySelector('#modal-wrapper');
  const MODAL_BTN = document.querySelector('#modal-btn');
  const FRIENDS_ITEM = document.querySelectorAll('.friends-item');

  const toggle = () => {
    MODAL.classList.toggle('modal-open');
    MODAL.classList.toggle('modal-close');
    BODY.classList.toggle('hidden');
  };

  FRIENDS_ITEM.forEach((e) => e.addEventListener('click', toggle));
  MODAL.addEventListener('click', toggle);
  MODAL_BTN.addEventListener('click', toggle);
  MODAL_WRAPPER.addEventListener('click', (e) => e.stopPropagation());
};
