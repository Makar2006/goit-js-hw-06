// /**
//   |============================
//   | TASK 6
//   |============================
// */

const inputEl = document.getElementById('validation-input');

inputEl.addEventListener('blur', onBlur);

function onBlur(e) {
  const inputLength = e.target.value.length;
  if (Number(inputLength) === Number(inputEl.dataset.length)) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
}
