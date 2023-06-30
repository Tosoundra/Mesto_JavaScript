export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];
export let profileData = {
  name: 'Жак-Ив Кусто',
  occupation: 'Исследователь океана',
};
export const profileSelector = {
  name: 'profile__title',
  occupation: 'profile__subtitle',
};
export const formElements = {
  formInput: '.popup__input',
  formSubmit: '.popup__submit',
  inputError: '.form__input-error',
  submitEnable: 'button',
};

export const popupAndPopupElements = {
  popupWithImage: 'popup__card',
  popupAddPlace: 'popup__add-place',
  popupEditProfile: 'popup__edit-profile',
};

export const changeProfileData = data => {
  nameInput.value = data.name;
  occupationInput.value = data.occupation;
};

// ------------------------------------

export const buttonProfileEdit = document.querySelector('.profile__edit');
export const nameInput = document.querySelector('.popup__name');
export const occupationInput = document.querySelector('.popup__occupation');
export const formEditProfile = document.querySelector('.form__edit-profile');
export const buttonAddPlace = document.querySelector('.profile__add');
export const inputPlaceName = document.querySelector('.popup__input-place-name');
export const inputPlaceURL = document.querySelector('.popup__input-place-url');
export const formAddPlace = document.querySelector('.popup__form-add-place');
export const listPlaces = document.querySelector('.places-grid');
export const profileName = document.querySelector('.profile__title');
export const profileOccupation = document.querySelector('.profile__subtitle');
