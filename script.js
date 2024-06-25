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

// console.log(falcyToTrust([true, false, false, true]));

// 5-masala
{
    // 5. 1-usul
    const returnOnlyEvens = (numbers) =>
        numbers.reduce(
            (num, number) => (number % 2 === 0 ? num + number : num),
            0,
        );
    // console.log(returnOnlyEvens([1, 2, 3, 4, 5]));
}

{
    // 5. 2-usul
    const returnOnlyEvens = (numbers) => {
        let num = 0;
        numbers.forEach((number) => {
            number % 2 === 0 && (num += number);
        });
        return num;
    };
    // console.log(returnOnlyEvens([1, 2, 3, 4, 5]));
}

// 6-masala
const returnNumsGrades = (numbers) => numbers.map((number) => number ** 2);

// console.log(returnNumsGrades([5, 2, 3]));

// masala 7
const returnToN = (n) => {
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    return nums;
};

// console.log(returnToN(5));
