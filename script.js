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
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 4,
  fullPrice: 0,
  servicePercentPrice: 0,
  allServicePrices: 0,
  services: {},
  asking: function () {
    do {
      appData.title = prompt("Как называется Ваш проект?");
    } while (appData.onlyDigits(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какие типы экранов нужно разобрать?");
      } while (appData.onlyDigits(name));
      let price = 0;

      do {
        price = Number(prompt("Сколько будет стоить данная работа?"));
      } while (!appData.isNumber(price));

      appData.screens.push({ id: i, name: name, price: price });
    }

    for (let i = 0; i < 2; i++) {
      let name;
      do {
        name = prompt("Какой дополнительный тип услуги нужен?");
      } while (appData.onlyDigits(name));
      let price = 0;
      do {
        price = prompt("Cколько это будет стоить");
      } while (!appData.isNumber(price));

      appData.services[name + "" + i] = +price;
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },

  addPrices: function () {
    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }
    appData.screenPrice = appData.screens.reduce(function (sum, screen) {
      return sum + screen.price, 0;
    });
    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num) && isFinite(num));
  },
  onlyDigits: function (s) {
    let i = s.length - 1;
    for (i; i >= 0; i--) {
      const d = s.charCodeAt(i);
      if (d < 48 || d > 57) {
        return false;
      }
    }
    return true;
  },
  getFullPrice: function () {
    appData.fullPrice = appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    appData.title =
      appData.title.charAt(0).toUpperCase() +
      appData.title.slice(1).toLowerCase();
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
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
    appData.addPrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
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
