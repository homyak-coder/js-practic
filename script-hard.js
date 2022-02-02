"use strict";

let num = 266219;
let mul = 1;
let str = String(num);

for (let i = 0; i < str.length; i++) {
  mul *= Number(str[i]);
}

console.log(mul);

let powNum = mul * 3;

let powStr = String(powNum);

let cutMul = powStr.slice(0, 2);

console.log(cutMul);

let lang = prompt("Введите названия языка (ru, en)  ");

if (lang == "ru") {
  console.log("Понедельник");
  console.log("Вторник");
  console.log("Среда");
  console.log("Четверг");
  console.log("Пятница");
  console.log("Суббота");
  console.log("Воскресенье");
} else if (lang == "en") {
  console.log("Monday");
  console.log("Tuesday");
  console.log("Wensday");
  console.log("Thirsday");
  console.log("Friday");
  console.log("Saturday");
  console.log("Sunday");
} else {
  console.log("Вы сделали нерпавильный выбор");
}

switch (lang) {
  case "ru":
    console.log("Понедельник");
    console.log("Вторник");
    console.log("Среда");
    console.log("Четверг");
    console.log("Пятница");
    console.log("Суббота");
    console.log("Воскресенье");
    break;
  case "en":
    console.log("Monday");
    console.log("Tuesday");
    console.log("Wensday");
    console.log("Thirsday");
    console.log("Friday");
    console.log("Saturday");
    console.log("Sunday");
    break;
}

let massiv = {
  ru: "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
  en: "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday",
};
console.log(massiv[lang]);

let namePerson = prompt("Введите имя преподавателя");
let nameAnswer =
  namePerson == "Артём"
    ? console.log("директор")
    : namePerson == "Александр"
    ? console.log("Преподаватель")
    : console.log("Что-то здесь не так");

function hardTaskFour(variable) {
  if (typeof variable !== "string") {
    console.log("Аргумент не является строкой");
  } else if (variable.length > 0 && variable.length < 30) {
    console.log(variable.trim());
  } else {
    console.log(variable.trim().slice(0, 30) + "...");
  }
}

let str1 = " Blablalblalbalablablablblablabsdcsdcsdcdscsdcdscdscdscs   ";

hardTaskFour(str1);

let arr = [
  "25345345",
  "341235",
  "786433",
  "484345",
  "546446",
  "4324234",
  "86764352",
];

arr.forEach((item) => {
  if (item.startsWith("2") || item.startsWith("4")) {
    console.log(item);
  }
});

function isPrime(num) {
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function getPrimes(num) {
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primes.push(i);
      console.log("Делители этого числа: 1 и" + i);
    }
  }
  return primes;
}

console.log(getPrimes(100));
