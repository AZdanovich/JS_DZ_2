//Задание_1
/*const country = "Sweden";
const access = country == "Sweden" ? "true" : "false";
console.log(access);*/

//Задание_2
/*let a = 10;
let a1 = 10;
for (let i = 0; i < a1; i++) {
  a += 1;
  console.log(a);
}*/

//Задание_3
/*for (let i = 0; i < 10; i += 2) {
  let a = +prompt("Введите число");
  if (a === 10) {
    console.log("Равно 10");
  } else {
    console.log("Не равно 10");
  }
}*/

//Задание_4
/*let a;
let b = +prompt("Введите количесто чисел");
for (i = 0; i < b; i++) {
  a = i * i;
  console.log(a);
}*/

//Задание_5
/*let a = 0;
let a1 = 100;
for (let i = 0; i < a1; i++) {
  a += 1;
  if (a % 3 == 0 && a % 5 == 0) {
    console.log("FizzBuzz");
  } else if (a % 3 == 0) {
    console.log("Fizz");
  } else if (a % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
}*/

//Задание_6
/*for (let i = 0; i < 3; i++) {
  alert("number ${i}!");
}*/
/*let i = 0;
while (i < 3) {
  alert("number ${i}!");
  i += 1;
}*/

/*//Задание_7
function makeSquare(min, max) {
  let square;
  for (let i = min; i <= max; i++) {
    square = i * i;
    console.log(square);
  }
}
makeSquare(2, 11);*/

//Задание_8
/*function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInteger(0, 256);

function getRandomRGB() {
  let r = getRandomInteger(0, 256);
  let g = getRandomInteger(0, 256);
  let b = getRandomInteger(0, 256);

  return `rgb(${r},${g},${b})`;
}
console.log(getRandomRGB());*/

//Задание_9
/*let num;
function number(num) {
  if (Number.isInteger(num))
    for (let i = 1; i < num; i += 0.5) {
      if (Number.isInteger(i)) {
        console.log(i, "integer");
      } else {
        console.log(i, "decimal");
      }
    }
}
console.log(number(9));*/

//Задание_10
let price = 40;
let days;
function calcPrice(days) {
  days = 5;
  if (days >= 7) {
    return price * days - 50;
  } else if (days >= 3 && days < 7) {
    return price * days - 30;
  } else {
    return price * days;
  }
}
console.log(calcPrice());
