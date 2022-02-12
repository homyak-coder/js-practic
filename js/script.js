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

const calculator = document.getElementsByTagName("h1");
const buttons = document.getElementsByClassName("handler_btn");
const plus = document.querySelector(".screen-btn");
const other = document.querySelectorAll(".percent");
const items = document.querySelectorAll(".number");
const range = document
  .querySelector(".rollback")
  .querySelector('input[type="range"]');
console.log(range);
const value = document.querySelector(".rollback").querySelector(".range-value");
console.log(value);
const totalInput = document.getElementsByClassName("total-input");
const inputRange = document.querySelector("input[type=range]");
const totalInputFirst = totalInput[0];
const totalInputSecond = totalInput[1];
const totalInputThird = totalInput[2];
const totalInputFourth = totalInput[3];
const totalInputFifth = totalInput[4];
let screenDOM = document.querySelectorAll(".screen");
const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  valueScreens: 0,
  adaptive: true,
  rollback: 4,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle();
    buttons[0].addEventListener("click", appData.start);
    plus.addEventListener("click", appData.addScreenBlock);
    inputRange.addEventListener("input", appData.showRollback);
  },
  addTitle: function () {
    document.title = calculator[0].textContent;
  },
  start: function () {
    console.log("start method");
    appData.addScreens();

    if (appData.screens.find((screen) => screen.price === 0)) {
      return;
    }
    appData.addServices();
    appData.addPrices();
    // appData.logger();
    appData.showResult();
  },
  showResult: function () {
    totalInputFirst.value = appData.screenPrice;
    totalInputThird.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalInputFourth.value = appData.fullPrice;
    totalInputFifth.value = appData.servicePercentPrice;
    totalInputSecond.value = appData.valueScreens;
  },
  addScreens: function () {
    appData.screens.length = 0;
    screenDOM = document.querySelectorAll(".screen");
    screenDOM.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      // const inputRange = document.querySelector("input[type=text]");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
      console.log("inputRange.value: ", inputRange.value);
      console.log("input.value: ", input.value);
    });

    console.log(appData.screens);
  },
  addServices: function () {
    other.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    items.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreens = screenDOM[0].cloneNode(true);
    screenDOM[screenDOM.length - 1].after(cloneScreens);
  },

  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(
      (acc, { price }) => acc + price,
      0
    );
    appData.valueScreens = appData.screens.reduce(
      (acc, { count }) => acc + count,
      0
    );
    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }
    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }
    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }
    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );

    // for (let value of appData.screens) {
    //   appData.valueScreens += +value.count;
    // }
  },

  showRollback: function () {
    // value.textContent = +inputRange.value + "%";
    // appData.rollback = value.textContent;
    appData.rollback = +inputRange.value;
    value.textContent = appData.rollback + "%";
    console.log("откат: ", appData.rollback);
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

  logger: function () {
    for (let key in appData) {
      let appType = typeof appData[key];
      console.log(key, appType === "function" ? "" : appData[key]);
    }
  },
};

appData.init();
