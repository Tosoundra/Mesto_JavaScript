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

let nameofPerson = 'Жак-Ив Кусто';
let nameofOccupation = 'Исследователь океана';

let profile = {
  name: nameofPerson,
  occupation: nameofOccupation,
};
function person() {
  let profile = {
    name: nameofPerson,
    occupation: nameofOccupation,
  };
  profileName.textContent = profile.name;
  profileOccupation.textContent = profile.occupation;
  nameInput.value = profileName.textContent;
  occupationInput.value = profileOccupation.textContent;
}
person();

function closePopup() {
  popup.classList.remove('popup');
}

function handleFormSubmit(event) {
  event.preventDefault();

  nameofPerson = nameInput.value;
  nameofOccupation = occupationInput.value;
  console.log(profile.name);
  person();
  popup.classList.remove('popup');
}

form.addEventListener('submit', handleFormSubmit);

editButton.addEventListener('click', function () {
  popup.classList.add('popup');
});

// popup.addEventListener('click', closePopup);
closeButton.addEventListener('click', closePopup);

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
