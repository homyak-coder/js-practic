"use strict";

// let title;
// let screens;
// let screenPrice;
// let adaptive;
// let rollback = 4;
// let fullPrice;
// let servicePercentPrice;
// let allServicePrices;
// let service1;
// let service2;
// let serviceCost;

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 4,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  service1: "",
  service2: "",
  serviceCost: 0,
  asking: function () {
    appData.title = prompt("Как называется Ваш проект?", "Калькулятор вёрстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разобрать?",
      "Простые, Сложные"
    );
    do {
      appData.screenPrice = Number(
        prompt("Сколько будет стоить данная работа?")
      );
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
        do {
          appData.serviceCost = prompt("Cколько это будет стоить");
        } while (!appData.isNumber(appData.serviceCost));
        sum += +appData.serviceCost;
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
        do {
          appData.serviceCost = prompt("Cколько это будет стоить");
        } while (!appData.isNumber(appData.serviceCost));
        sum += +appData.serviceCost;
      }
    }

    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    return Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  getRollbackMessage: function (price) {
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
  },
  start: function () {
    appData.asking();
    appData.title = appData.getTitle(appData.title);
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.logger();
  },
  logger: function () {
    for (let key in appData) {
      let appType = typeof appData[key];
      console.log(key, appType === "function" ? "" : appData[key]);
    }
  },
};

appData.start();
