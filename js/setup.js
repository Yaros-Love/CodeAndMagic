'use strict';

//модуль setup
(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElem = document.querySelector('.setup-open'); //элемент открытия настроек персонажа
  var setupCloseElem = document.querySelector('.setup-close'); //элемент закрытия окна настроек
  var setupUserName = document.querySelector('.setup-user-name'); //иконка пользователя
  var ESC_KEYCODE = window.const.ESC_KEYCODE;
  var ENTER_KEYCODE = window.const.ENTER_KEYCODE;
  var SETUP_ELEM_Y = window.const.SETUP_ELEM_Y; //положение по Y, в px
  var SETUP_ELEM_X = window.const.SETUP_ELEM_X; //положение по X, в %

  //события и валидация
  //закрыть модуль по нажатию esc и не закрывать, если input в фокусе
  var onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
      if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
      }
    }
    else {
      return;
    }
  };

  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    //возвращаем изначалное положение окна настроек
    setupElement.style.top = SETUP_ELEM_Y + 'px';
    setupElement.style.left = SETUP_ELEM_X + '%';
  };


  //слушатель, открыть по нажатию аватарки .setup-open
  setupOpenElem.addEventListener('click', function () {
    openPopup()
  });

  //слушатель, закрыть по нажатию на .setup-close
  setupCloseElem.addEventListener('click', function () {
    closePopup()
  });

  //слушатель, открыть по enter
  setupOpenElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup()
    }
  });

  // слушатель, закрыть по enter
  setupCloseElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup()
    }
  });

})();


