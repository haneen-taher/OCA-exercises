for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

let i = 0;
while (i <= 50) {
  console.log(i);
  i += 2;
}

for (let i = 0; i <= 50; i += 2) {
  console.log(i);
  console.log(i);
}

for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 50; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  }
}

console.log(fizzBuzz(1));

function countCharacter(str, char) {
  char = char.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += str[i].toLowerCase() === char ? 1 : 0;
  }
  return count;
}

let str = "Coding Academy by Orange";
let char = "i";
let counter = countCharacter(str, char);
console.log(counter);

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

for (let i = 3; i <= 29; i += 2) {
  console.log(i);
}

for (let i = 12; i >= -14; i -= 2) {
  console.log(i);
}

for (let i = 50; i >= 20; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

const string = "CodingAcademy";
const arr = [7, 500, "KH404", "black", 36];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = string.length - 1; i >= 0; i--) {
  console.log(string[i]);
}

const array = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let even = [];
let odd = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}

console.log("Odd numbers are :" + odd);
console.log("Even numbers are: " + even);

const proteinOptions = ["chicken", "pork", "tofu", "beef", "fish", "beans"];
const grainOptions = ["rice", "pasta", "corn", "potato", "quinoa", "crackers"];
const vegetableOptions = [
  "peas",
  "green beans",
  "kale",
  "edamame",
  "broccoli",
  "asparagus",
];
const beverageOptions = ["juice", "milk", "water", "soy milk", "soda", "tea"];
const dessertOptions = [
  "apple",
  "banana",
  "more kale",
  "ice cream",
  "chocolate",
  "kiwi",
];
