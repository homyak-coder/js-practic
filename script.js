"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 4;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let service1;
let service2;
let serviceCost;

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const asking = function () {
  title = prompt("Как называется Ваш проект?", "Калькулятор вёрстки");
  screens = prompt("Какие типы экранов нужно разобрать?", "Простые, Сложные");
  do {
    screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
      do {
        serviceCost = prompt("Cколько это будет стоить");
      } while (!isNumber(serviceCost));
      sum += +serviceCost;
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
      do {
        serviceCost = prompt("Cколько это будет стоить");
      } while (!isNumber(serviceCost));
      sum += +serviceCost;
    }
  }

  return sum;
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getFullPrice = function () {
  return screenPrice + allServicePrices;
};

function getTitle(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const getServicePercentPrices = function () {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даём скидку в 10%";
  } else if (15000 < price < 30000) {
    return "Даём скидку в 5%";
  } else if (0 < price < 15000) {
    return "Скидка не предусмотрена";
  } else if (price == 0) {
    return "Вы ничего не заказывали";
  } else if (price == 15000) {
    return "Вам скидка 3%";
  } else if (price == 30000) {
    return "Вам скидка 4%";
  } else {
    return "Что-то пошло не так";
  }
};
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle(title);

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
