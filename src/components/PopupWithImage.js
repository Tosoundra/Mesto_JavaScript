import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open({name, link}) {
    this._selector.querySelector('.popup__caption').textContent = name
    this._selector.querySelector('.popup__image').src = link
    super.open()
  }
}