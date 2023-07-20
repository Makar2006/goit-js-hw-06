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
    increasing();
  } else {
    decreasing();
  }
}

function increasing() {
  inputEl.classList.add('valid');
  inputEl.classList.remove('invalid');
}
function decreasing() {
  inputEl.classList.add('invalid');
  inputEl.classList.remove('valid');
}
