const input = document.querySelector("#validation-input");
const inputLength = Number(input.getAttribute('data-length'));

input.addEventListener("blur", () => {
    if(input.value.length < inputLength) {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    else {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
})