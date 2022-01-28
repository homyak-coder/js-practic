let title = "GS_GLO";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 300;
let rollback = 4;
let fullPrice = 500000;
let adaptive = true;

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

let screensLower = screens.toLowerCase();
console.log(screensLower.split());

let percentToWork = fullPrice * (rollback / 100);
console.log(percentToWork);
