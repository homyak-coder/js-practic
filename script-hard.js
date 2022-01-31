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

let lang = prompt("Введите названия языка (lang, ru)  ");

if (lang == "ru") {
  console.log("Понедельник");
  console.log("Вторник");
  console.log("Среда");
  console.log("Четверг");
  console.log("Пятница");
  console.log("Суббота");
  console.log("Воскресенье");
} else {
  console.log("Monday");
  console.log("Tuesday");
  console.log("Wensday");
  console.log("Thirsday");
  console.log("Friday");
  console.log("Saturday");
  console.log("Sunday");
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

let arrayLan = [
  [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  ["Monday", "Tuesday", "Wensday", "Thirsday", "Friday", "Saturday", "Sunday"],
];

alert(arrayLan[0]);
alert(arrayLan[1]);
