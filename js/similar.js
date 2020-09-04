'use strict';

(function () {
  var setupWizardElem = document.querySelector('.setup-wizard'); //элемент с магом пользователя
  var createWizards = window.render_wizards.createWizards;
  var load = window.backend.load;
  var colorCoat;
  var colorEyes;
  var wizards = [];

  //подсчет очков за похожесть
  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === colorCoat) {
      rank += 2;
    };
    if (wizard.colorEyes === colorEyes) {
      rank += 1;
    };
    return rank;
  }

  //сортировка по имени
  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  var updateWizards = function () {
    colorEyes = setupWizardElem.querySelector('.wizard-eyes').style.fill;
    colorCoat = setupWizardElem.querySelector('.wizard-coat').style.fill;
    createWizards(wizards.slice().sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  window.onCoatChange = window.debounce(function(color){
    colorCoat = color;
    updateWizards();
  })

  window.onEyesChange = window.debounce(function(color){
    colorEyes = color;
    updateWizards();
  })


  //ф-я выводит сообщение об ошибке
  var onErrorLoad = function (message) {
    console.error(message);
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // ф-я выводит сообщение об успешном запросе
  var onLoadSucsess = function (message, data) {
    console.log(message, data);
    wizards = data;
    updateWizards();
  };

  load(onLoadSucsess, onErrorLoad);






  window.similar = {
    updateWizards: updateWizards,

  }

})()