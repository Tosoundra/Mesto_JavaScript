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

const popImageContainer = () => popupCard.classList.toggle('.popup');

const sectionElement = document.querySelector('.elements');
const listPlaces = sectionElement.querySelector('.places-grid');

const profileName = document.querySelector('.profile__title');
const profileOccupation = document.querySelector('.profile__subtitle');

const popupWrapper = document.querySelector('.popup__wrapper');
popupWrapper.addEventListener('click', function (evt) {
  if (evt.target.classList.contains('popup__close-button')) {
    evt.target.closest('.popup_closed').classList.remove('popup');
  }
});


// document.addEventListener('keydown', function (evt) {
//   if (e§vt.key === 'Escape') {
//     console.log(evt.key);
//     const popups = Array.from(document.querySelectorAll('.popup__closed'));
//     popups.forEach(popup => {
//       if (popup.classList.contains('popup')) {
//         console.log()
//         popup.classList.remove('popup');
//       }
//     });
//   }
// });

const addCard = (name, link) => {
  const templatePlace = document.querySelector('#place-template').content;
  const element = templatePlace.querySelector('.places-grid__element').cloneNode(true);
  element.querySelector('.places__image').src = link;
  element.querySelector('.places__image').addEventListener('click', openedCard);
  element.querySelector('.places__name').textContent = name;
  element.querySelector('.places__like').addEventListener('click', changeColor);
  element.querySelector('.places__trash-icon').addEventListener('click', removeCard);
  return element;
};

const cardsArray = initialCards.reduce((accum, item) => {
  accum.push(addCard(item.name, item.link));
  return accum;
}, []);

listPlaces.append(...cardsArray);

function openedCard(event) {
  const trigger = event.target;
  const card = trigger.closest('.places-grid__element');
  const cardImage = (document.querySelector('.popup__image').src = trigger.src);
  const cardCaption = (document.querySelector('.popup__caption').textContent = trigger
    .closest('.places-grid__element')
    .querySelector('.places__name').textContent);
  popupCard.classList.toggle('popup');
}

function changeColor(event) {
  const trigger = event.target;

  trigger.getAttribute('src') === 'images/like-active.svg'
    ? trigger.setAttribute('src', 'images/like-icon.svg')
    : trigger.setAttribute('src', 'images/like-active.svg');
}

function removeCard(event) {
  const trigger = event.target;
  const card = trigger.closest('.places-grid__element');
  card.remove();
}

let profileData = {
  name: 'Жак-Ив Кусто',
  occupation: 'Исследователь океана',
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

const popupEditClassToggle = () => popupEdit.classList.toggle('popup');
editButton.addEventListener('click', popupEditClassToggle);

const popupAddPlaceClassToggle = () => popupAddPlace.classList.toggle('popup');
buttonAddPlace.addEventListener('click', popupAddPlaceClassToggle);

function changeProfileData(event) {
  event.preventDefault();

  profileData.name = nameInput.value;
  profileData.occupation = occupationInput.value;

  initialPersonData();
  popupEditClassToggle();
}

formEditProfile.addEventListener('submit', changeProfileData);

const addPlaceFunc = event => {
  event.preventDefault();

  listPlaces.prepend(addCard(inputPlaceName.value, inputPlaceURL.value));
  popupAddPlaceClassToggle();
  inputPlaceName.value = '';
  inputPlaceURL.value = '';
};

formAddPlace.addEventListener('submit', addPlaceFunc);
