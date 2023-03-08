let editButton = document.querySelector('.profile__edit');
let closeButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup_closed');
let submit = document.querySelector('.popup__submit');
let sectionElement = document.querySelector('.elements');
let likeButtons = sectionElement.querySelectorAll('.places__like');

let form = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let occupationInput = document.querySelector('.popup__occupation');
let profileName = document.querySelector('.profile__title');
let profileOccupation = document.querySelector('.profile__subtitle');




function handleFormSubmit(event) {
    event.preventDefault();

    profileName.textContent = nameInput.value;
    profileOccupation.textContent = occupationInput.value;
    popup.classList.remove('popup');
};

form.addEventListener('submit', handleFormSubmit);



editButton.addEventListener('click', function () {
    popup.classList.add('popup');
}
);

closeButton.addEventListener('click', function () {
    popup.classList.remove('popup');
});

likeButtons[0].addEventListener('click', function () {
    if (likeButtons[0].attributes[1].value === 'images/like-icon.svg')
    likeButtons[0].setAttribute('src', 'images/like-active.svg');

    else {
        likeButtons[0].setAttribute('src', 'images/like-icon.svg');
    }
});

likeButtons[1].addEventListener('click', function () {
    if (likeButtons[1].attributes[1].value === 'images/like-icon.svg')
    likeButtons[1].setAttribute('src', 'images/like-active.svg');

    else {
        likeButtons[1].setAttribute('src', 'images/like-icon.svg');
    }
});


likeButtons[2].addEventListener('click', function () {
    if (likeButtons[2].attributes[1].value === 'images/like-icon.svg')
    likeButtons[2].setAttribute('src', 'images/like-active.svg');

    else {
        likeButtons[2].setAttribute('src', 'images/like-icon.svg');
    }
});

likeButtons[3].addEventListener('click', function () {
    if (likeButtons[3].attributes[1].value === 'images/like-icon.svg')
    likeButtons[3].setAttribute('src', 'images/like-active.svg');

    else {
        likeButtons[3].setAttribute('src', 'images/like-icon.svg');
    }
});

likeButtons[4].addEventListener('click', function () {
    if (likeButtons[4].attributes[1].value === 'images/like-icon.svg')
    likeButtons[4].setAttribute('src', 'images/like-active.svg');

    else {
        likeButtons[4].setAttribute('src', 'images/like-icon.svg');
    }
});

likeButtons[5].addEventListener('click', function () {
    if (likeButtons[5].attributes[1].value === 'images/like-icon.svg')
    likeButtons[5].setAttribute('src', 'images/like-active.svg');

    else {
        likeButtons[5].setAttribute('src', 'images/like-icon.svg');
    }
});

