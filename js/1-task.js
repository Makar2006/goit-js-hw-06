// /**
//   |====================================================
//   | TASK 1
//   |====================================================
// **/
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const itemsEl = document.querySelectorAll('.item');

function countCat() {
  result = itemsEl.length;
  console.log(`Number of categories: ${result}`);
}
countCat();

function elCount() {
  itemsEl.forEach(el =>
    console.log(`Category: ${el.firstElementChild.textContent}
Elements: ${el.lastElementChild.children.length}`)
  );
}
elCount();
