export const createPageButton = (num) => {
  const btnPageNumber = document.createElement('button');
  btnPageNumber.className = 'button paginator-button';
  btnPageNumber.setAttribute('id', 'page-button');
  btnPageNumber.textContent = num;

  return btnPageNumber;
};
