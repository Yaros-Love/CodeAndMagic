'use strict'
//модуль start, рендер статистики
var start = function() {
var CLOUD_WIDGTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var FONT_GAP_UP = 20;
var TEXT_WIDTH = 40;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGTH = 150;
var barHiegthStart = (CLOUD_Y + FONT_GAP_UP + FONT_GAP * 4);

//функция - рисуем облако-вывод результатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDGTH, CLOUD_HEIGTH);
}

//создание отрисовки статистики
window.renderStatistics = function (ctx, names, times) {
  //рисуем тень
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  //рисуем облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = '#000';

  //текст поздравления
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP_UP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP_UP + FONT_GAP_UP);

  //нахождения максимального числа очков
  var maxScore = 0;
  for (var k = 0; k < times.length; k++) {
    if (times[k] > maxScore) {
      maxScore = times[k];
    }
  }


  //отрисовка статистики
  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'
      var mlsecToPicks = (BAR_HEIGTH * times[i]) / maxScore
      ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, barHiegthStart + BAR_HEIGTH - mlsecToPicks, BAR_WIDTH, mlsecToPicks);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, barHiegthStart + BAR_HEIGTH - mlsecToPicks - GAP);
      ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGTH - CLOUD_Y);
    } else {
      ctx.fillStyle = 'hsl(300, ' + window.util.getRandomItemMinMax(0, 100) + '%, 50% )';
      var mlsecToPicks = (BAR_HEIGTH * times[i]) / maxScore
      ctx.fillRect(CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, barHiegthStart + BAR_HEIGTH - mlsecToPicks, BAR_WIDTH, mlsecToPicks);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, barHiegthStart + BAR_HEIGTH - mlsecToPicks - GAP);
      ctx.fillText(names[i], CLOUD_X + GAP + FONT_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_HEIGTH - CLOUD_Y);
    }
  }
}
}

start();