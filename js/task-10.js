function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const createBtn = controls.querySelector("button[data-create]");
const destroyBtn = controls.querySelector("button[data-destroy]");

const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  amount = Number(input.value);
  let size = 30;
  let box = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    box += `<div style="width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    size += 10;
  }

  boxes.innerHTML += box;
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
