"use strict";

let title = prompt("Как называется Ваш проект?");
let screens = prompt("Какие типы экранов нужно разобрать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 4;
let adaptive = Boolean(prompt("Нужен ли адаптив на сайте?"));

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let sercivePrice2 = +prompt("Сколько это будет стоить?");

let fullPrice = screenPrice + servicePrice1 + sercivePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

if (fullPrice > 30000) {
  console.log("Даём скидку в 10%");
} else if (15000 < fullPrice < 30000) {
  console.log("Даём скидку в 5%");
} else if (0 < fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice == 0) {
  console.log("Вы ничего не заказывали");
} else if (fullPrice == 15000) {
  console.log("Вам скидка 3%");
} else if (fullPrice == 30000) {
  console.log("Вам скидка 4%");
} else {
  console.log("Что-то пошло не так");
}

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " рублей\n" +
    "Стоимость разработки сайта " +
    fullPrice +
    " рублей"
);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);
