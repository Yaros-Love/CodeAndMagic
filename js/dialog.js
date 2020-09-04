'use strict';

//модуль dialog
(function () {
  var setupElement = document.querySelector('.setup');
  var dialogHandle = document.querySelector('.upload'); //иконка в окне настроек

dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault()

  //начальные координаты
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  }

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    //разница смещения
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    //обновим текущие координаты
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    //сместим пложение элемента на разницу изм-я положения мыши
    setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
    setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
  };

  var dragged = false;

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    //удаляем слушателей
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    //условие прикотором событие при клике на иконку(загрузка файла) отменяется.
    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        dialogHandle.removeEventListener('click', onClickPreventDefault)
      };
      dialogHandle.addEventListener('click', onClickPreventDefault);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
})()