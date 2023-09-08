const loginForm = document.querySelector(".login-form");

loginForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const user = {
        email: form.elements.email.value,
        password: form.elements.password.value
    }

    if(user.email === '' || user.password === '') {
        return alert('Не всі поля заповнені');
    }

    // console.log(`Email: ${user.email}, Password: ${user.password}`);
    console.log(user);
    
    form.reset();
}
