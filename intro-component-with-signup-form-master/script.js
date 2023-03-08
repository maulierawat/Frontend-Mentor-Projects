const form     = document.querySelector('form');
const fname    = document.querySelector('#fname');
const lname    = document.querySelector('#lname');
const email    = document.querySelector('#email');
const password = document.querySelector('#password');

const checkRequired = (inputArr) => {
  inputArr.forEach( input => {
    if (input.value === '') {
      showError(input, )
    }
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkRequired([fname, lname, email, password]);
})