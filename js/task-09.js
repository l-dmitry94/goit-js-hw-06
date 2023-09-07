function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const color = body.querySelector(".color")
const button = body.querySelector(".change-color");

button.addEventListener('click', () => {
  color.textContent = getRandomHexColor();
  body.style.backgroundColor = color.textContent;
})