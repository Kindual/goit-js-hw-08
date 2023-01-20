const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(setInput, 500));
form.addEventListener('submit', submitForm);

let formData = {
    email: '',
    message: '',
}

if(localStorage.getItem('feedback-form-state')) {
    formData = JSON.parse(localStorage.getItem('feedback-form-state'));

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

function setInput(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitForm(event) {
    event.preventDefault();
    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    event.target.reset();
}




