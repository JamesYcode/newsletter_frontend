const form = document.querySelector('.email__form');
const inputWrapper = document.querySelector('.input__wrapper');
const main = document.querySelector('.main');
const mainSuccess = document.querySelector('.main__success');
const resetBtn = document.querySelector('#dismiss');
const errMsg = document.querySelector('.err__msg');

const { email } = form.elements;
function handleSubmit(e) {
  e.preventDefault();
  if (!email.value.trim() || !isValidEmail(email.value)) {
    console.log('Enter valid email');
    displayError('Valid email required');
    return;
  }
  displaySuccess();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function displayError(msg) {
  errMsg.innerHTML = msg;
  errMsg.style.display = 'block';
}

function displaySuccess() {
  mainSuccess.style.display = 'grid';
  main.style.display = 'none';
  const success = document.querySelector('.success__content');
  success.innerHTML = `A confirmation email has been sent to ${email.value}. Please open it and click the button inside to confirm
  your subscription.`;
  success.appendChild;

  resetBtn.addEventListener('click', function () {
    mainSuccess.style.display = 'none';
    main.style.display = 'grid';
    errMsg.style.display = 'none';
  });
}

form.addEventListener('submit', handleSubmit);
