const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener('input', () => {
    const inputName = input.value;
    const defaultName = 'Anonymous';

    if(inputName === '') {
        output.textContent = defaultName;
    }

    else {
        output.textContent = inputName;
    }
})