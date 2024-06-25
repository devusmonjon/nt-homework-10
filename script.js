// 1-masala
const returnAllNegatives = (numbers) => numbers.filter((number) => number > 0);

// console.log(returnAllNegatives([1, -2, 3, -4, 5, -6, 7, -8, 9, -10]));

// 2-masala
const reverseString = (str) => str.split("").reverse().join("");

// console.log(reverseString("salom"));

// 3-masala
const reverseNumber = (number) =>
    number.toString().split("").reverse().join("");

// console.log(reverseNumber(12345));

// 4-masala
const falcyToTrust = (arr) => arr.filter((bool) => bool === false);

console.log(falcyToTrust([true, false, false, true]));
