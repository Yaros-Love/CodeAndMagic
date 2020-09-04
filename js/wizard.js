'use strict';

(function () {
  var COLOR_ROBA = window.const.COLOR_ROBA;
  var COLOR_EYES = window.const.COLOR_EYES;
  var COLOR_FIREBALL = window.const.COLOR_FIREBALL;
  var getRandomItem = window.util.getRandomItem;
  var setupWizardElem = document.querySelector('.setup-wizard'); //элемент с магом пользователя
  var wizardCoatElem = setupWizardElem.querySelector('.wizard-coat'); //элемент мантии
  var wizardEyesElem = setupWizardElem.querySelector('.wizard-eyes'); //элемент глаз
  var fireballWrapElem = document.querySelector('.setup-fireball-wrap'); //элемент фаерболла

  //ф-я изменения цвета элементов
  var changeColor = function (wizardElem, array) {
    if (wizardElem.tagName.toLowerCase() === 'div') {
      wizardElem.style.background = getRandomItem(array);
    }
    else {
      wizardElem.style.fill = getRandomItem(array);
      return wizardElem.style.fill;
    }
  };

  wizardCoatElem.addEventListener('click', function () {
    var newColor = getRandomItem(COLOR_ROBA)
    this.style.fill = newColor;
    window.onCoatChange(newColor)
  });

  wizardEyesElem.addEventListener('click', function () {
    var newColor = getRandomItem(COLOR_EYES)
    this.style.fill = newColor;
    window.onEyesChange(newColor);
  });

  fireballWrapElem.addEventListener('click', function () {
    changeColor(fireballWrapElem, COLOR_FIREBALL)
  });


})()