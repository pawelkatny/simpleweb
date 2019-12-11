let inputName = document.getElementById('input-name');
let inputMail = document.getElementById('input-mail');
let inputMessage = document.getElementById('input-message');
let button = document.querySelector('.submit-button');
let regEx = /\S+@\S+\.\S+/;
let form = document.querySelector('.form-container');

document.addEventListener('input', () => {
    if (inputName.value.trim() !== "" && regEx.test(inputMail.value) && inputMessage.value.trim() !== "") {
        button.style.backgroundColor = '#ffc400';
        button.disabled = false;
    }
    else {
        button.style.backgroundColor = '#ff7a7a';
        button.disabled = true;
    }
})


form.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Submitted!');
})