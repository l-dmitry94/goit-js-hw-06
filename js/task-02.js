const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const createItem = document.createElement("li");
  createItem.textContent = ingredient;
  createItem.classList.add('item');
  ingredientsList.appendChild(createItem);
})


