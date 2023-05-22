function ag(a, b) {
  return a - b;
}
console.log(ag(2023, 2000));

let age = 10;
if (age < 18) {
  console.log(`You may join kids program.`);
} else if (age >= 18 && age <= 30)
  console.log(`You are eligible. Start your application`);
else if (age > 30 && age < 60)
  console.log(`You are not eligible. You may join other programs.`);
else if (age <= 60) console.log(`You may join seniors' program.`);

function capitalization(str) {
  let str1 = str.replace(/ /g, "");
  let str2 = str1.toUpperCase();
  return str2;
}

let str = "coding academy by orange";
let capitalized = capitalization(str);
console.log(capitalized);

function removeArray(string) {
  let string = "coding academy by orange";
  let arr = string.split(" ");
  let arrNew = arr.indexof(2).splice(2);
  return arrNew;
}

function checkNumber(check) {
  let check = prompt();
  switch (check % 2) {
    case 1:
      console.log("The number ${check}, is Odd");
      break;
    case 0:
      console.log("The number ${check}, is Even");
  }
}

function checkNumber(no) {
  return typeof no === "number";
}

let no = 60;
let result = checkNumber(no);
console.log(result);

function largeNumber(a, b) {
  if (a > b) {
    console.log("The largest number is ${a}");
  } else {
    console.log(" The largest number is ${b}");
  }
}
/*let a = 5;
let b = 20;
let result = largeNumber(a, b);
console.log(result);*/

let side1 = 10;
let side2 = 20;
let side3 = 15;
if ((side1 === side2) === side3) {
  console.log("The triangle is equilateral");
} else if ((side1 === side2) !== side3 || (side1 !== side2) === side3) {
  console.log("The triangle is isosceles");
} else if ((side1 !== side2) !== side3);
console.log("The triangle is scalene");

function checkNumInRange(num, min, max) {
  return num >= min && num <= max;
}

let num = 200;
let min = 20;
let max = 500;
let sol = checkNumInRange(num, min, max);
console.log(sol);

function checkYear(year) {
  let year = prompt();
  let year1 = year % 4;
  switch (year1 % 2) {
    case 1:
      console.log("The year is not a leap year.");
      break;
    case 0:
      console.log("The year is a leap year.");
  }
}
