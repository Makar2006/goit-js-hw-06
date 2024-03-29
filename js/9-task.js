// /**
//   |============================
//   | TASK 9
//   |============================
// */

const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onClick);

function onClick() {
  const bodyColor = (bodyEl.style.backgroundColor = getRandomHexColor());
  spanEl.textContent = bodyColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
