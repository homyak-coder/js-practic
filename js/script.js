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
    this.addTitle();
    buttons[0].addEventListener("click", this.start.bind(this));
    buttons[1].addEventListener("click", this.reset.bind(this));
    plus.addEventListener("click", this.addScreenBlock.bind(this));
    inputRange.addEventListener("input", this.showRollback.bind(this));
  },
  addTitle: function () {
    document.title = calculator[0].textContent;
  },
  start: function () {
    this.addScreens();

    if (this.screens.find((screen) => screen.price === 0)) {
      return;
    }
    this.addServices();
    this.addPrices();
    // appData.logger();
    this.showResult();

    screenDOM.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input[type=text]");

      select.disabled = true;
      input.disabled = true;
    });

    plus.disabled = true;
    buttons[0].style.display = "none";
    buttons[1].style.display = "";
  },
  reset: function () {
    this.title = "";
    this.screens = [];
    this.screenPric = 0;
    this.valueScreens = 0;
    this.adaptive = true;
    this.rollback = 0;
    this.fullPrice = 0;
    this.servicePercentPrice = 0;
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};

    screenDOM.forEach((screen, i) => {
      if (i === 0) {
        const select = document.querySelector("select");
        const input = document.querySelector("input[type=text]");

        select.disabled = false;
        select.selectedIndex = 0;
        input.disabled = false;
        input.value = "";
      } else {
        screen.remove();
      }
    });

    other.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      if (check.checked) {
        check.checked = false;
      }
    });

    items.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      if (check.checked) {
        check.checked = false;
      }
    });

    plus.disabled = false;
    buttons[0].style.display = "";
    buttons[1].style.display = "none";
    inputRange.value = 0;
    value.textContent = 0;
    totalInputFirst.value = 0;
    totalInputSecond.value = 0;
    totalInputThird.value = 0;
    totalInputFourth.value = 0;
    totalInputFifth.value = 0;
  },
  showResult: function () {
    totalInputFirst.value = this.screenPrice;
    totalInputThird.value =
      this.servicePricesPercent + this.servicePricesNumber;
    totalInputFourth.value = this.fullPrice;
    totalInputFifth.value = this.servicePercentPrice;
    totalInputSecond.value = this.valueScreens;
  },
  addScreens: function () {
    this.screens.length = 0;
    screenDOM = document.querySelectorAll(".screen");
    screenDOM.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      // const inputRange = document.querySelector("input[type=text]");
      const selectName = select.options[select.selectedIndex].textContent;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: +input.value,
      });
      console.log("inputRange.value: ", inputRange.value);
      console.log("input.value: ", input.value);
    });

    console.log(this.screens);
  },
  addServices: function () {
    other.forEach((item) => {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    items.forEach((item) => {
      const check = item.querySelector("input[type=checkbox");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    console.log("я работаю");
    screenDOM = document.querySelectorAll(".screen");
    const cloneScreens = screenDOM[0].cloneNode(true);
    screenDOM[screenDOM.length - 1].after(cloneScreens);
  },

  addPrices: function () {
    this.screenPrice = this.screens.reduce((acc, { price }) => acc + price, 0);
    this.valueScreens = this.screens.reduce((acc, { count }) => acc + count, 0);
    // for (let screen of appData.screens) {
    //   appData.screenPrice += +screen.price;
    // }
    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }
    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }
    this.fullPrice =
      +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber;

    this.servicePercentPrice = Math.ceil(
      this.fullPrice - this.fullPrice * (this.rollback / 100)
    );

    // for (let value of appData.screens) {
    //   appData.valueScreens += +value.count;
    // }
  },

  showRollback: function () {
    // value.textContent = +inputRange.value + "%";
    // appData.rollback = value.textContent;
    this.rollback = +inputRange.value;
    value.textContent = this.rollback + "%";
    console.log("откат: ", this.rollback);
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
    for (let key in this) {
      let appType = typeof this[key];
      console.log(key, appType === "function" ? "" : this[key]);
    }
  },
};

appData.init();
