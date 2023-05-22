function checkValid(event) {
  if (!event.target.validity.valid) {
    inputInvalid(event, event.target.validationMessage);
  } else {
    inputValid(event);
  }
}

function inputInvalid(event, error) {
  const errorMessage = document.querySelector(`.${event.target.id}-error`);
  errorMessage.textContent = error;
}

function inputValid(event) {
  const errorMessage = document.querySelector(`.${event.target.id}-error`);
  errorMessage.textContent = '';
}

function buttonEnableToggle(event) {
  if (!event.target.closest('.popup__form').checkValidity()) {
    event.target.parentElement.querySelector('.popup__submit').setAttribute('disabled', true);
    event.target.parentElement.querySelector('.popup__submit').classList.remove('button');
  } else {
    event.target.parentElement.querySelector('.popup__submit').removeAttribute('disabled');
    event.target.parentElement.querySelector('.popup__submit').classList.add('button');
  }
}

popupWrapper.addEventListener('input', function (event) {
  if (event.target.closest('.popup__form')) {
    checkValid(event);
    buttonEnableToggle(event);
  }
});
