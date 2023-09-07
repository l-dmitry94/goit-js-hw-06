const counter = document.querySelector("#counter");
const btnDecrement = counter.querySelector('button[data-action="decrement"]');
const btnIncrement = counter.querySelector('button[data-action="increment"]');
let value = counter.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    if(counterValue <= 0) {
        return;
    }
    counterValue--;
    value.textContent = counterValue;
}

const increment = () => {
    counterValue++;
    value.textContent = counterValue;
}

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);