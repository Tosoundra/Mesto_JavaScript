let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup_closed');
let submit = document.querySelector('.popup__submit');
let sectionElement = document.querySelector('.elements');
let likeButton = sectionElement.querySelectorAll('.places__like');

let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let occupationInput = document.querySelector('.popup__occupation');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__subtitle');
let prikol = document.querySelector('.video');

profileName.textContent = 'Жак-Ив Кусто';
profileOccupation.textContent = 'Исследователь океана';

function handleFormSubmit(event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileOccupation.textContent = occupationInput.value;
  popup.classList.remove('popup');
  prikol.style.display = 'block';
  prikol.removeAttribute('muted');
}

form.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', function () {
  popup.classList.add('popup');
});

closeButton.addEventListener('click', function () {
  popup.classList.remove('popup');
});

function likeButtonClick() {
  if (this.attributes[1].value === 'images/like-icon.svg') {
    this.setAttribute('src', 'images/like-active.svg');
  } else {
    this.setAttribute('src', 'images/like-icon.svg');
  }
}

likeButton.forEach(button => {
  button.addEventListener('click', likeButtonClick);
});

//  смена цвета кнопки при нажатии (другой принцип)
// let iconButton = document.querySelectorAll('.svg-fill');
// function action() {
//     if(this.attributes[1].value === 'white') {
//          this.setAttribute('fill', 'black');
//     }
//     else {
//         this.setAttribute('fill', 'white')
//     }
// };
// iconButton.forEach(button=> {
//     button.addEventListener('click', action);
// });
