import likeButtonActive from '../images/like-active.svg';
import likeButton from '../images/like-icon.svg';

export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._title = data.name;
    this._image = data.link;
    this._handleCardClick = handleCardClick;
    this._template = templateSelector;
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector('.places-grid__element')
      .cloneNode(true);
    return cardElement;
  }
  _likeCard() {
    this.getAttribute('src') === likeButtonActive
      ? this.setAttribute('src', likeButton)
      : this.setAttribute('src', likeButtonActive);
  }

  _removeCard() {
    this.closest('.places-grid__element').remove();
  }

  _escapeButton(event) {
    if (event.key === 'Escape') {
      this._closeCard();
    }
  }

  _setEventListeners() {
    this.cardElement = this._getTemplate();
    this.cardElement
      .querySelector('.places__image')
      .addEventListener('click', this._handleCardClick);
    this.cardElement.querySelector('.places__like').addEventListener('click', this._likeCard);
    this.cardElement
      .querySelector('.places__trash-icon')
      .addEventListener('click', this._removeCard);

    return this.cardElement;
  }
  renderElement() {
    this.cardElement = this._setEventListeners();
    this.cardElement.querySelector('.places__name').textContent = this._title;
    this.cardElement.querySelector('.places__image').src = this._image;
    this.cardElement.querySelector('.places__image').alt = this._title;

    return this.cardElement;
  }
}
