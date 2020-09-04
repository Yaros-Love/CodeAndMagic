'use strict';

(function () {
  var createWizards = window.render_wizards.createWizards;
  var setupWizardForm = document.querySelector('.setup-wizard-form');//форма настройки персонажа
  var setupElement = document.querySelector('.setup');
  var URL = 'https://javascript.pages.academy/code-and-magick/data';
  // 'javascript.pages.academy/code-and-magick/data';
  var URL_POST = 'https://javascript.pages.academy/code-and-magick';
  var wizards = []

  //ф-я запроса данных
  var load = function (onLoad, onError) {
    setConnection(URL, onLoad, onError, 'GET').send();
  };
  //ф-я отправки данных формы
  var save = function (onLoad, onError, data) {
    setConnection(URL_POST, onLoad, onError, 'POST').send(data);
  };

  //ф-я обрабатывает запрос, успешный и ошибочный
  var setConnection = function (URL, onLoad, onError, method) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {

      if (xhr.status === 200) {
        onLoad('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText, xhr.response);
      }
      else {
        switch (xhr.status) {
          case 400: onError('Неверный запрос');
            break;
          case 500: onError('Ошибка сервера');
            break;
          case 505: onError('Сервер не найден');
            break;
          default: onError('Произошла ошибка соединения');
        }
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения')
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000; //10s

    xhr.open(method, URL);

    return xhr;
  };

  // //ф-я выводит сообщение об ошибке, рендер поля ошибки
  // var onErrorLoad = function (message) {
  //   console.error(message);
  //   var node = document.createElement('div');
  //   node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  //   node.style.position = 'absolute';
  //   node.style.left = 0;
  //   node.style.right = 0;
  //   node.style.fontSize = '30px';
  //   node.textContent = message;
  //   document.body.insertAdjacentElement('afterbegin', node);
  // };

  // // ф-я выводит сообщение об успешном запросе
  // var onLoadSucsess = function (message, data) {
  //   console.log(message);
  //   createWizards(data)
  //   wizards = data;
  // };
  // load(onLoadSucsess, onErrorLoad);

  var onPostSucsess = function (message) {
    console.log(message);
    setupElement.classList.add('hidden');
    setupWizardForm.reset();
  };
  //слушаем sunmit на форме
  setupWizardForm.addEventListener('submit', function (evt) {
    save(onPostSucsess, onErrorLoad, new FormData(setupWizardForm));
    evt.preventDefault();
  });

  window.backend = {
    load : load,
    save : save,
  }
})();
