import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._form = this._selector.querySelector('.popup__form');
    this._formInputs = this._selector.querySelectorAll('.popup__input');
    this._submitButton = this._selector.querySelector('.popup__submit');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputValue = {};
    this._formInputs.forEach(item => {
      this._inputValue[item.name] = item.value;
    });
    return this._inputValue;
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListener() {
    super.setEventListener();
    this._form.addEventListener('submit', event => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
