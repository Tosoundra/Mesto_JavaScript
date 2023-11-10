(()=>{"use strict";var t="";const e=t+"fe17a515669479b1e649.svg",n=t+"0b42f29fa9eaf6f86176.svg";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n,r){var o=e.data,i=e.usedID,u=e.handleCardClick,c=e.handleDeleteCard,a=e.handleLikeCard,l=e.handleDislikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=o.name,this._image=o.link,this._id=o._id,this._likes=o.likes,this._usedId=i,this._owner=o.owner._id,this._handleCardClick=u,this._handleDeleteCard=c,this._handleLikeCard=a,this._handleLDislikeCard=l,this._cardElements=n,this._template=r}var r,i;return r=t,(i=[{key:"_getTemplate",value:function(){return document.querySelector(this._template).content.querySelector(this._cardElements.cardTemplate).cloneNode(!0)}},{key:"_checkAuthor",value:function(){this._owner!==this._usedId&&this.cardElement.querySelector(this._cardElements.deleteButton).remove()}},{key:"counter",value:function(t){this._likes=t.likes,this.likeCounter.textContent=this._likes.length}},{key:"_likeCard",value:function(){this.likeImage.getAttribute("src")===e?(this.likeImage.setAttribute("src",n),this._handleLDislikeCard()):(this.likeImage.setAttribute("src",e),this._handleLikeCard())}},{key:"initiaLikeCard",value:function(){var t=this;this._likes.some((function(e){return e._id===t._owner}))&&this.likeImage.setAttribute("src",e)}},{key:"_removeCard",value:function(){this.closest(this._cardElements.cardTemplate).remove()}},{key:"_escapeButton",value:function(t){"Escape"===t.key&&this._closeCard()}},{key:"getCardId",value:function(){return this._id}},{key:"_setEventListeners",value:function(){var t=this;return this.cardElement=this._getTemplate(),this.cardElement.querySelector(this._cardElements.cardImage).addEventListener("click",this._handleCardClick),this.cardElement.querySelector(this._cardElements.likeButton).addEventListener("click",(function(){t._likeCard()})),this.cardElement}},{key:"renderElement",value:function(){return this.cardElement=this._setEventListeners(),this.likeCounter=this.cardElement.querySelector(this._cardElements.counter),this.likeImage=this.cardElement.querySelector(this._cardElements.likeButton),this.likeCounter.textContent=this._likes.length,this.cardElement.querySelector(this._cardElements.cardName).textContent=this._title,this.cardElement.querySelector(this._cardElements.cardImage).src=this._image,this.cardElement.querySelector(this._cardElements.cardImage).alt=this._title,this.initiaLikeCard(),this._checkAuthor(),this.cardElement}}])&&o(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,l(r.key),r)}}function a(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}var s=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_submitDisable",(function(){r._submitButton.setAttribute("disabled",!0),r._submitButton.classList.remove(r._config.submitEnable)})),a(this,"_submitEnable",(function(){r._submitButton.removeAttribute("disabled",!0),r._submitButton.classList.add(r._config.submitEnable)})),a(this,"_submitToggle",(function(){r._form.checkValidity()?r._submitEnable():r._submitDisable()})),a(this,"_inputInvalid",(function(t,e){r._form.querySelector(".".concat(e.id,"-error")).textContent=t})),a(this,"_inputValid",(function(t){r._form.querySelector(".".concat(t.id,"-error")).textContent=""})),a(this,"_setEventListeners",(function(){r._getFormElements(),r._inputList.forEach((function(t){t.addEventListener("input",(function(){r._checkValid(t),r._submitToggle()}))}))})),a(this,"_checkValid",(function(t){t.validity.valid?r._inputValid(t):r._inputInvalid(t.validationMessage,t)})),this._form=n,this._config=e}var e,n;return e=t,(n=[{key:"_getFormElements",value:function(){this._inputList=Array.from(this._form.querySelectorAll(this._config.formInput)),this._submitButton=this._form.querySelector(this._config.formSubmit)}},{key:"resetValidation",value:function(){this._submitToggle()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}var y=function(){function t(e){var n=e.name,r=e.occupation,o=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(".".concat(n)),this._userInfo=document.querySelector(".".concat(r)),this._avatar=document.querySelector(".".concat(o))}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,occupation:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name,this._userInfo.textContent=t.about,this._avatar.src=t.avatar,this._usedId=t._id}},{key:"getUserId",value:function(){return this._usedId}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===d(o)?o:String(o)),r)}var o}var m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Default Value",n=e.items,r=e.renderer,o=arguments.length>1?arguments[1]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=n,this._renderer=r,this._container=document.querySelector(".".concat(o))}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),b={formInput:".popup__input",formSubmit:".popup__submit",inputError:".form__input-error",submitEnable:"button"},v={counter:".places__like-counter",likeButton:".places__like",cardName:".places__name",cardImage:".places__image",deleteButton:".places__trash-icon",cardTemplate:".places-grid__element"},_=document.querySelector(".profile__edit"),g=document.querySelector(".profile__edit-avatar-button"),S=document.querySelector(".popup__name"),k=document.querySelector(".popup__occupation"),w=document.querySelector(".form__edit-profile"),E=document.querySelector(".popup__form-add-place"),j=document.querySelector(".popup__form-edit-avatar"),C=document.querySelector(".profile__add");function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==O(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===O(o)?o:String(o)),r)}var o}document.querySelector(".popup__input-place-name"),document.querySelector(".popup__input-place-url"),document.querySelector(".places-grid"),document.querySelector(".profile__title"),document.querySelector(".profile__subtitle");var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._selector=document.querySelector(".".concat(e))}var e,n;return e=t,(n=[{key:"_hanldeEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleMouseOverClose",value:function(t){t.target.classList.contains("popup")&&this.close()}},{key:"open",value:function(){this._selector.classList.add("popup"),this._selector.addEventListener("click",this._handleMouseOverClose.bind(this)),document.addEventListener("keydown",this._hanldeEscClose.bind(this))}},{key:"close",value:function(){this._selector.classList.remove("popup"),this._selector.removeEventListener("click",this._handleMouseOverClose.bind(this)),document.removeEventListener("keydown",this._hanldeEscClose)}},{key:"setEventListener",value:function(){this._selector.querySelector(".popup__close-button").addEventListener("click",this.close.bind(this))}}])&&P(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},q.apply(this,arguments)}function R(t,e){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},R(t,e)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var z=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&R(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(r);if(o){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===L(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"open",value:function(t){var e=t.name,n=t.link;this._selector.querySelector(".popup__caption").textContent=e,this._selector.querySelector(".popup__image").src=n,q(D(u.prototype),"open",this).call(this)}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(I);function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==B(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==B(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===B(o)?o:String(o)),r)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=A(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},V.apply(this,arguments)}function x(t,e){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},x(t,e)}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}var F=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&x(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=A(r);if(o){var n=A(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===B(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e,n=t.selector,r=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,n))._form=e._selector.querySelector(".popup__form"),e._formInputs=e._selector.querySelectorAll(".popup__input"),e._submitButton=e._selector.querySelector(".popup__submit"),e._handleFormSubmit=r,e}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputValue={},this._formInputs.forEach((function(e){t._inputValue[e.name]=e.value})),this._inputValue}},{key:"close",value:function(){V(A(u.prototype),"close",this).call(this),this._form.reset()}},{key:"setEventListener",value:function(){var t=this;V(A(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(I);function N(t){return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function M(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==N(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==N(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===N(o)?o:String(o)),r)}var o}function J(){return J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},J.apply(this,arguments)}function H(t,e){return H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},H(t,e)}function G(t){return G=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},G(t)}var K=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(r);if(o){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===N(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e,n){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,t,e))._idCard=n,r}return e=u,(n=[{key:"setEventListener",value:function(){var t=this;J(G(u.prototype),"setEventListener",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(),t.close()}))}}])&&M(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(F);function Q(t){return Q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Q(t)}function W(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==Q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==Q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===Q(o)?o:String(o)),r)}var o}var X=function(t){var e=new i({data:t,handleCardClick:function(){et.open(t)},usedID:Z.getUserId(),handleDeleteCard:function(){tt.open(),tt._idCard=e.getCardId()},handleLikeCard:function(){Y.likeCard(e.getCardId()).then((function(t){return t.json()})).then((function(t){e.counter(t)}))},handleDislikeCard:function(){Y.dislikeCard(e.getCardId()).then((function(t){return t.json()})).then((function(t){e.counter(t)}))}},v,"#place-template");return e.renderElement()},Y=new(function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=e.url,this._authorization=e.headers.authorization,this._content_type=e.headers["Content-Type"]}var e,n;return e=t,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._authorization}})}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._authorization}})}},{key:"setUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._content_type},body:JSON.stringify({name:t.name,about:t.about})})}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._authorization,"Content-Type":this._content_type},body:JSON.stringify({avatar:"".concat(t)})})}},{key:"addCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._authorization,"Content-Type":this._content_type},body:JSON.stringify({name:t.name,link:t.link})})}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._authorization,"Content-Type":this._content_type}})}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"PUT",headers:{authorization:this._authorization}})}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:{authorization:this._authorization}})}}])&&W(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}())({url:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"4efae440-5715-4ca9-8417-962742ac588e","Content-Type":"application/json"}}),Z=new y({name:"profile__title",occupation:"profile__subtitle",avatar:"profile__image"});Y.getUserInfo().then((function(t){return t.ok||Promise.reject("Error ".concat(t.status)),t.json()})).then((function(t){Z.setUserInfo(t)})).catch((function(t){console.log(t)})),Y.getInitialCards().then((function(t){return t.ok||Promise.reject("Error ".concat(t.status)),t.json()})).then((function(t){var e=new m({items:t,renderer:function(t){e.addItem(X(t))}},"places-grid");e.renderItems()})).catch((function(t){console.log(t)}));var $=new m({},"places-grid"),tt=new K({selector:"popup__delete-card",handleFormSubmit:function(){Y.deleteCard(tt._idCard).then((function(){location.reload()}))}});tt.setEventListener();var et=new z("popup__card");et.setEventListener();var nt=new I("popup__edit-profile"),rt=new F({selector:"popup__edit-profile",handleFormSubmit:function(t){Y.setUserInfo(t).then((function(){Y.getUserInfo().then((function(t){return t.json()})).then((function(t){Z.setUserInfo(t)}))}))}});nt.setEventListener(),rt.setEventListener(),_.addEventListener("click",(function(){var t;rt.open(),t=Z.getUserInfo(),S.value=t.name,k.value=t.occupation}));var ot=new F({selector:"popup__edit-avatar",handleFormSubmit:function(t){Y.setUserAvatar(t.link).then((function(){Y.getUserInfo().then((function(t){return t.json()})).then((function(t){Z.setUserInfo(t)}))})).catch((function(t){console.log(t)}))}});ot.setEventListener(),g.addEventListener("click",ot.open.bind(ot));var it=new I("popup__add-place"),ut=new F({selector:"popup__add-place",handleFormSubmit:function(t){Y.addCard(t).then((function(t){return t.json()})).then((function(t){$.addItem(X(t)),ct.resetValidation()})).catch((function(t){console.log(t)}))}});C.addEventListener("click",nt.open.bind(it)),ut.setEventListener(),it.setEventListener(),new s(b,w).enableValidation();var ct=new s(b,E);ct.enableValidation(),new s(b,j).enableValidation()})();