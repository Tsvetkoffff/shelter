import { pets } from '../../assets/js/data.js';
import { createCardTemplate } from '../../assets/js/createCardTemplate.js';
import { createPageButton } from './../../assets/js/createPageButton.js';
import { paginate } from '../../assets/js/paginate.js';
import { shuffleArray } from '../../assets/js/shuffleArray.js';

export const pagination = () => {
  const PETS_LIST = document.querySelector('#pets-list');
  const PAGE_BTNS_BOX = document.querySelector('#page-buttons');
  const FIRST_PAGE_BTN = document.querySelector('#first-page-btn');
  const PREV_PAGE_BTN = document.querySelector('#prev-page-btn');
  const LAST_PAGE_BTN = document.querySelector('#last-page-btn');
  const NEXT_PAGE_BTN = document.querySelector('#next-page-btn');

  const petsArray = [];
  let pageSize = 8;
  let currentPage = 1;

  for (let i = 0; i < 6; i++) {
    petsArray.push(...pets);
  }
  if (window.matchMedia('(max-width: 768px)').matches) {
    pageSize = 6;
  }
  if (window.matchMedia('(max-width: 320px)').matches) {
    pageSize = 3;
  }

  const items = petsArray.length;
  const pageCount = items / pageSize;
  const pages = _.range(1, pageCount + 1);

  pages.map((n) => PAGE_BTNS_BOX.append(createPageButton(n)));

  const handlePageChange = (e, btn, idx, arr) => {
    currentPage = idx + 1;
    arr.forEach((j) => j.classList.remove('active'));
    btn.classList.add('active');
    updatePage();
    updateBtns();
  };

  const PAGE_BTNS = document.querySelectorAll('#page-button');

  PAGE_BTNS[0].classList.add('active');
  PAGE_BTNS.forEach((btn, idx, arr) => {
    btn.addEventListener('click', (e) => handlePageChange(e, btn, idx, arr));
  });
  FIRST_PAGE_BTN.addEventListener('click', () => {
    currentPage = 1;
    PAGE_BTNS.forEach((j) => j.classList.remove('active'));
    PAGE_BTNS[currentPage - 1].classList.add('active');
    updatePage();
    updateBtns();
  });
  PREV_PAGE_BTN.addEventListener('click', () => {
    currentPage -= 1;
    PAGE_BTNS.forEach((j) => j.classList.remove('active'));
    PAGE_BTNS[currentPage - 1].classList.add('active');
    updatePage();
    updateBtns();
  });
  LAST_PAGE_BTN.addEventListener('click', () => {
    currentPage = pageCount;
    PAGE_BTNS.forEach((j) => j.classList.remove('active'));
    PAGE_BTNS[pageCount - 1].classList.add('active');
    updatePage();
    updateBtns();
  });
  NEXT_PAGE_BTN.addEventListener('click', () => {
    currentPage += 1;
    PAGE_BTNS.forEach((j) => j.classList.remove('active'));
    PAGE_BTNS[currentPage - 1].classList.add('active');
    updatePage();
    updateBtns();
  });

  paginate(petsArray, currentPage, pageSize).map((p) =>
    PETS_LIST.append(createCardTemplate(p))
  );

  const updatePage = () => {
    const paginatePets = paginate(petsArray, currentPage, pageSize);
    const shufflePets = shuffleArray(paginatePets);
    shufflePets.map((e, i) => {
      PETS_LIST.children[i].replaceWith(createCardTemplate(e));
    });
  };

  const updateBtns = () => {
    if (currentPage == 1) {
      FIRST_PAGE_BTN.setAttribute('disabled', 'true');
      PREV_PAGE_BTN.setAttribute('disabled', 'true');
    } else {
      FIRST_PAGE_BTN.removeAttribute('disabled');
      PREV_PAGE_BTN.removeAttribute('disabled');
    }
    if (currentPage == pageCount) {
      LAST_PAGE_BTN.setAttribute('disabled', 'true');
      NEXT_PAGE_BTN.setAttribute('disabled', 'true');
    } else {
      LAST_PAGE_BTN.removeAttribute('disabled');
      NEXT_PAGE_BTN.removeAttribute('disabled');
    }
  };
};
