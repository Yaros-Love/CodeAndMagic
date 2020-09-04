'use strict';
//утилитарный модуль

(function () {
  //ф-я рандомного значения
  var getRandomItem = function (array) {
    return array[Math.round(Math.random() * (array.length - 1 - 0) + 0)];
  }
  // ф-я рандома в диапазоне
  var getRandomItemMinMax = function (min, max) {
    return Math.random() * (max - min) + min;
  }


  //объект на экспорт
  window.util =
  {
    getRandomItem: getRandomItem,
    getRandomItemMinMax: getRandomItemMinMax,
  }
})();