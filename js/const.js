'use strict';
(function(){
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var PLAYERS_COUNT = 4;//количество похожих персонажей
  var SETUP_ELEM_Y = 80; //положение окна настроек по Y, в px
  var SETUP_ELEM_X = 50; //положение окна настроек по X, в %

  var COLOR_ROBA = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']; //цвета мантии для пользовательской настройки перса
  var COLOR_EYES = ['black', 'red', 'blue', 'yellow', 'green']; //цвет глаз для пользовательской настройки перса
  var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']; //цвет фаербола для пользовательской настройки перса

  window.const = {
    PLAYERS_COUNT : PLAYERS_COUNT,
    ESC_KEYCODE : ESC_KEYCODE,
    ENTER_KEYCODE : ENTER_KEYCODE,
    SETUP_ELEM_Y : SETUP_ELEM_Y,
    SETUP_ELEM_X : SETUP_ELEM_X,
    COLOR_ROBA : COLOR_ROBA,
    COLOR_EYES : COLOR_EYES,
    COLOR_FIREBALL : COLOR_FIREBALL,
  }
})()
