// /**
//       |====================================================
//       | TASK 2
//       |====================================================
//     **/
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.getElementById('ingredients');

const ingredientsEl = ingredients.map(el => {
  const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');

  return itemEl;
});
listEl.append(...ingredientsEl);
