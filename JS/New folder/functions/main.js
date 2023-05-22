function strToArr(str) {
  return str.split(" ");
}

let input = "Orange Jordan";
let output = strToArr(input);
console.log(output);

function hiddenPhoneNo(number) {
  const hiddenNo = "*******";
  let hide = number.substring(7, 10);
  return hiddenNo + hide;
}
let number = "0776807777";
let hid = hiddenPhoneNo(number);
console.log(hid);

function hiddenEmail(email) {
  const hiddenEmail = ".....";
  const [user, domain] = email.split("@");
  let app = user.slice(0, 6);
  return app + hiddenEmail + "@" + domain;
}
let email = "orange_academy@orange.jo";
let hidden = hiddenEmail(email);
console.log(hidden);

function upperCaseLetter(string) {
  const firstLetter = string.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remain = string.slice(1);
  return firstLetterCap + remain;
}

let string = "coding academy by orange";
let cap = upperCaseLetter(string);
console.log(cap);

function capFirstLetter(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
let str = "coding academy by orange";
let capi = capFirstLetter(str);
console.log(capi);

function flipNu(num) {
  const strnum = num + " ";
  const strnum1 = strnum.split(" ");
  const strnum2 = strnum1.reverse();
  const strnum3 = strnum2.join(" ");
  return strnum3;
}

const inp = 92485;
const out = flipNu(num);
console.log(out);

function removeLetter(stra, index) {
  return stra.slice(0, index) + stra.slice(index + 1);
}

let stra = "orange";
let index = 3;
let newStr = removeLetter(str1, index);
console.log(newStr);

function mergeStr(str1, str2) {
  return str1.slice(1) + str2.slice(1);
}

let str1 = "lora";
let str2 = "inge";
let merged = mergeStr(str1, str2);
console.log(mergeStr);

function checkFirstOrLast(char, string1) {
  return (
    string1.charAt(0) === char || string1.charAt(string1.length - 1) === char
  );
}

let char = "o";
let string1 = "orange";

let result = checkFirstOrLast(char, string1);
console.log(result);

/*let char = "z";
let string1 = "orange";

let result = checkFirstOrLast(char, string1);
console.log(result);

function strToArr(str) {
  return str.split(" ");
}*/

let inp1 = "“Coding Academy by Orange";
let out2 = strToArr(input);
console.log(output);

function orderAlphabet(word) {
  return word.split("").sort().join("");
}

let word = "orange";
let ordered = orderAlphabet(word);
console.log(ordered);
