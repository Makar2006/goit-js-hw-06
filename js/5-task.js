// /**
//   |============================
//   | TASK 5
//   |============================
// */
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

inputEl.addEventListener('input', inputfun);

function inputfun() {
  const textEl = inputEl.value;
  spanEl.textContent = inputEl.value.trim() || 'Anonymous';
}
