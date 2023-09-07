const categoriesList = document.querySelector("#categories");
const categoryItem = categoriesList.querySelectorAll("li.item");

console.log(`Numbers of categories: ${categoryItem.length}`);

categoryItem.forEach(category => {
    const categoryTitle = category.querySelector("h2");
    const categoryElements = category.querySelectorAll('li');

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryElements.length}`);
})