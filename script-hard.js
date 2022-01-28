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
