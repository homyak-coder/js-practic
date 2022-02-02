"use strict";

let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разобрать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 4;
let adaptive = Boolean(prompt("Нужен ли адаптив на сайте?"));
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = 0;
let servicePercentPrice;
let allServicePrices;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function (priceOne, priceTwo) {
  return priceOne + priceTwo;
};
allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

function getFullPrice(priceThree, priceFour) {
  return priceThree + priceFour;
}
fullPrice = getFullPrice(screenPrice, allServicePrices);

function getTitle(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

let percentToWork = fullPrice * (rollback / 100); // Для того чтобы в переменную fullPrice записалось верное значение

const getServicePercentPrices = function (priceFive, priceSix) {
  return Math.ceil(priceFive - priceSix);
};
servicePercentPrice = getServicePercentPrices(fullPrice, percentToWork);

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

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
