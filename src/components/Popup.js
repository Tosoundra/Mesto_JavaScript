export default class Popup {
  constructor(selector) {
    this._selector = document.querySelector(`.${selector}`);
  }

  _hanldeEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleMouseOverClose(event) {
    if (event.target.classList.contains('popup')) {
      this.close();
    }
  }
  open() {
    this._selector.classList.add('popup');
    this._selector.addEventListener('click', this._handleMouseOverClose.bind(this))
    document.addEventListener('keydown', this._hanldeEscClose.bind(this));
  }

  close() {
    this._selector.classList.remove('popup');
    this._selector.removeEventListener('click', this._handleMouseOverClose.bind(this));
    document.removeEventListener('keydown', this._hanldeEscClose);
  }

  setEventListener() {
    this._selector
      .querySelector('.popup__close-button')
      .addEventListener('click', this.close.bind(this));
  }
}
