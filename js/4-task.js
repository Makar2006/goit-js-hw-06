// /**
//   |============================
//   | TASK 4
//   |============================
// */

const btnDec = document.querySelector('[data-action="decrement"]');
const btnInc = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');
let counterValue = 0;

btnDec.addEventListener('click', OnclickDec);
btnInc.addEventListener('click', OnclickInc);

function OnclickDec() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function OnclickInc() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
