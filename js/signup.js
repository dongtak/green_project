const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = ma
}

const validateInputs = () => {
    const username = username.value.trim();
    const password = password.value.trim();
    const password2 = password2.value.trim();
    const email = email.value.trim();
    const phone = phone.value.trim();
}

if(usernamevalue === '') {

}