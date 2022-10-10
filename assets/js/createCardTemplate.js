export const createCardTemplate = (pet) => {
  const card = document.createElement('li');
  const img = document.createElement('img');
  const name = document.createElement('h4');
  const button = document.createElement('button');

  card.classList.add('friends-item');
  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(button);

  img.classList.add('friends-image');
  img.src = pet.img;
  img.alt = `${pet.type} ${pet.name}`;

  name.classList.add('title', 'friends-title');
  name.textContent = pet.name;

  button.classList.add('button', 'friends-button');
  button.textContent = 'Learn more';

  return card;
};
