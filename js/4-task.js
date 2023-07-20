// /**
//   |============================
//   | TASK 4
//   |============================
// */

const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');
let counterValue = 0;

btnDec.addEventListener('click', onclickDec);
btnInc.addEventListener('click', onclickInc);

function onclickDec() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onclickInc() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
