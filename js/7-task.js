// /**
//   |============================
//   | TASK 7
//   |============================
// */
const inputEl = document.getElementById('font-size-control');
const spanEl = document.getElementById('text');

inputEl.addEventListener('input', fontChange);

function fontChange(e) {
  const fontValue = e.target.value;
  spanEl.style.fontSize = `${fontValue}px`;
}
