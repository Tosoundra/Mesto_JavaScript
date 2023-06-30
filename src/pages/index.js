import './index.css'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import {
  initialCards,
  profileData,
  profileSelector,
  formElements,
  popupAndPopupElements,
  buttonProfileEdit,
  formEditProfile,
  buttonAddPlace,
  formAddPlace,
  profileName,
  profileOccupation,
  changeProfileData,
} from '../utils/constants.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

const initialProfileData = () => {
  profileName.textContent = profileData.name;
  profileOccupation.textContent = profileData.occupation;
};
initialProfileData();

const user = new UserInfo(profileSelector);

const popupWithImageClass = new PopupWithImage(popupAndPopupElements.popupWithImage);
popupWithImageClass.setEventListener();

const popupFormEditProfile = new PopupWithForm({
  selector: 'popup__edit-profile',
  handleFormSubmit: formData => {
    user.setUserInfo(formData);
  },
});
popupFormEditProfile.setEventListener();
const editProfileClass = new Popup(popupAndPopupElements.popupEditProfile);
buttonProfileEdit.addEventListener('click', () => {
  editProfileClass.open();
  changeProfileData(user.getUserInfo());
});
editProfileClass.setEventListener();

const addPlaceClass = new Popup(popupAndPopupElements.popupAddPlace);
buttonAddPlace.addEventListener('click', editProfileClass.open.bind(addPlaceClass));
addPlaceClass.setEventListener();
const popupFormAddPlace = new PopupWithForm({
  selector: 'popup__add-place',
  handleFormSubmit: formData => {
    const newCard = new Card(
      {
        data: formData,
        handleCardClick: () => {
          popupWithImageClass.open(formData);
        },
      },
      '#place-template',
    );
    cardList.addItem(newCard.renderElement());
    formAddPlaceValidator.resetValidation();
  },
});
popupFormAddPlace.setEventListener();

const cardList = new Section(
  {
    items: initialCards,
    renderer: item => {
      const newCard = new Card(
        {
          data: item,
          handleCardClick: () => {
            popupWithImageClass.open(item);
          },
        },
        '#place-template',
      );
      cardList.addItem(newCard.renderElement());
    },
  },
  'places-grid',
);
cardList.renderItems();

const formEditProfileValidator = new FormValidator(formElements, formEditProfile);
formEditProfileValidator.enableValidation();

const formAddPlaceValidator = new FormValidator(formElements, formAddPlace);
formAddPlaceValidator.enableValidation();

