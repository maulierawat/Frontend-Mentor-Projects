const forms = document.querySelectorAll('form');
const emails = document.querySelectorAll('#email');

const removeState = () => {
  emails.forEach( email => {
    const label = email.parentElement;
    label.classList.remove('error');
    label.classList.remove('success');
  })
}

const showError = (input, msg) => {
  const label = input.parentElement;
  label.classList.add('error');
  const small = label.querySelector('small');
  small.innerText = msg;
}

const showSuccess = input => {
  const label = input.parentElement;
  label.classList.add('success');
}

const checkRequired = (input) => {
  if (input.value === '') {
    removeState();
    showError(input, 'Email cannot be empty');
  } else if (!checkEmail(input.value)) {
    removeState();
    showError (input, 'Please check your email');
  } else {
    removeState();
    showSuccess(input);
  }
}

const checkEmail = (input) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(input).toLowerCase());
}

forms.forEach( form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const currEmail = form.querySelector('#email');
    checkRequired(currEmail);
  })
})