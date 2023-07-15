const container = document.querySelector('.container')
const form = document.querySelector('form')
const input = document.querySelector('input')
const button = document.querySelector('button')
const span = document.querySelector('span')
const containerMessage = document.querySelector('.container-message')
const validEmail = document.querySelector('#email-valid')

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateEmail(email) {
    return regexEmail.test(email);
}

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let inputValue = input.value

    if(inputValue.length === 0) {
        span.innerText = "Empty Field"
        span.style.display = "block"
        input.classList.add('error')
    } else {
        if(validateEmail(inputValue)) {
            span.style.display = "none"
            input.classList.remove('error')
            container.style.display = "none";
            validEmail.innerText = inputValue;
            containerMessage.style.display = "flex";

        } else {
            span.innerText = "Valid email required"
            span.style.display = "block"
            input.classList.add('error')
        }
    }
})