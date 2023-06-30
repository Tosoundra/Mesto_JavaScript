export default class UserInfo {
  constructor({ name, occupation }) {
    this._userName = document.querySelector(`.${name}`);
    this._userInfo = document.querySelector(`.${occupation}`);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      occupation: this._userInfo.textContent,
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.author__name;
    this._userInfo.textContent = data.author__description;
  }
}
