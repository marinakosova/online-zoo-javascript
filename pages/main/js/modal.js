const coverElem = document.querySelector('.modal');
const formElem = document.querySelector('.feedback');
const feedbackBtn = document.querySelector('.testimonials__button');
const submitBtn = document.querySelector('.feedback-button');
const nameField = document.querySelector('.feedback-name');
const emailField = document.querySelector('.feedback-email');
const textField = document.querySelector('.text-feedback');


const validate = () => {
    if (nameField.validity.valid &&
        emailField.validity.valid &&
        textField.validity.valid
    ) {
        submitBtn.classList.remove('feedback-invalid');
    } else {
        submitBtn.classList.add('feedback-invalid');
    }
}

feedbackBtn.addEventListener('click', () => {
    document.body.classList.add('modal-hidden');
    coverElem.classList.remove('modal-hidden');
    formElem.classList.remove('feedback-hidden');
});

coverElem.addEventListener('click', () => {
    document.body.classList.remove('modal-hidden');
    coverElem.classList.add('modal-hidden');
    formElem.classList.add('feedback-hidden');
});

submitBtn.addEventListener('click', () => {
    if (submitBtn.classList.contains('feedback-invalid')) {
        return;
    }
    document.body.classList.remove('modal-hidden');
    coverElem.classList.add('modal-hidden');
    formElem.classList.add('feedback-hidden');
});

nameField.addEventListener('input', () => {
    validate();
});

emailField.addEventListener('input', () => {
    validate();
});

textField.addEventListener('input', () => {
    validate();
});