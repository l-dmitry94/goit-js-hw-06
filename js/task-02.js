const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
const createItem = [];

ingredients.forEach(ingredient => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add('item');
  createItem.push(newElement);
})

ingredientsList.append(...createItem);


