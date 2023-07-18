const listEL = document.querySelector('.gallery');

const markup = images
  .map(el => `<li><img class="image" src="${el.url}" alt="${el.alt}"></li>`)
  .join('');

listEL.insertAdjacentHTML('beforeend', markup);