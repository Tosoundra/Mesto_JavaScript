const initialCards = [
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

let profileData = {
  name: 'Жак-Ив Кусто',
  occupation: 'Исследователь океана',
};

const editButton = document.querySelector('.profile__edit');
const popupEdit = document.getElementById('popup-edit');
const nameInput = document.querySelector('.popup__name');
const occupationInput = document.querySelector('.popup__occupation');
const formEditProfile = document.querySelector('.form_edit-profile');
const submit = document.querySelector('.popup__submit');

const buttonAddPlace = document.querySelector('.profile__add');
const popupAddPlace = document.getElementById('popup-add-place');
const inputPlaceName = document.querySelector('.popup__input-place-name');
const inputPlaceURL = document.querySelector('.popup__input-place-url');
const formAddPlace = document.querySelector('.popup__form-add-place');

const popupCard = document.getElementById('popup-image');

const sectionElement = document.querySelector('.elements');
const listPlaces = sectionElement.querySelector('.places-grid');

const profileName = document.querySelector('.profile__title');
const profileOccupation = document.querySelector('.profile__subtitle');

const popupWrapper = document.querySelector('.popup__wrapper');

const addCard = (name, link) => {
  const templatePlace = document.querySelector('#place-template').content;
  const element = templatePlace.querySelector('.places-grid__element').cloneNode(true);
  element.querySelector('.places__image').src = link;
  element.querySelector('.places__name').textContent = name;
  return element;
};

function openPopup(popup) {
  popup.classList.add('popup');
  document.addEventListener('keydown', escapeButton);
}

function closePopup() {
  document.querySelector('.popup').classList.remove('popup');
  document.removeEventListener('keydown', escapeButton);
}

function escapeButton(event) {
  if (event.key === 'Escape') {
    closePopup();
  }
}

function openedCard(event) {
  document.querySelector('.popup__image').src = event.target.src;
  document.querySelector('.popup__caption').textContent = event.target
    .closest('.places-grid__element')
    .querySelector('.places__name').textContent;
}

function changeColor(event) {
  const trigger = event.target;

  trigger.getAttribute('src') === 'images/like-active.svg'
    ? trigger.setAttribute('src', 'images/like-icon.svg')
    : trigger.setAttribute('src', 'images/like-active.svg');
}

function removeCard(event) {
  event.target.closest('.places-grid__element').remove();
}

function changeProfileData(event) {
  event.preventDefault();

  profileData.name = nameInput.value;
  profileData.occupation = occupationInput.value;

  initialPersonData();
  closePopup();
}

const addPlaceFunc = event => {
  event.preventDefault();

  listPlaces.prepend(addCard(inputPlaceName.value, inputPlaceURL.value));
  closePopup();
  inputPlaceName.value = '';
  inputPlaceURL.value = '';
};

const initialPersonData = function () {
  const profile = {
    name: profileData.name,
    occupation: profileData.occupation,
  };
  profileName.textContent = profile.name;
  profileOccupation.textContent = profile.occupation;
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
};

initialPersonData();

const cardsArray = initialCards.reduce((accum, item) => {
  listPlaces.append(addCard(item.name, item.link));
  return accum;
}, []);

popupWrapper.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup();
  }
});

popupWrapper.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
});

listPlaces.addEventListener('click', function (event) {
  if (event.target.classList.contains('places__image')) {
    openedCard(event);
    openPopup(popupCard);
  }
});

listPlaces.addEventListener('click', function (event) {
  if (event.target.classList.contains('places__like')) {
    changeColor(event);
  }
});

listPlaces.addEventListener('click', function (event) {
  if (event.target.classList.contains('places__trash-icon')) {
    removeCard(event);
  }
});

editButton.addEventListener('click', function () {
  openPopup(popupEdit);
});

buttonAddPlace.addEventListener('click', function () {
  openPopup(popupAddPlace);
});

formEditProfile.addEventListener('submit', changeProfileData);

formAddPlace.addEventListener('submit', addPlaceFunc);
