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

// 7-masala
const returnToN = (n) => {
    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }
    return nums;
};

// console.log(returnToN(5));

// 8-masala
const returnAToBOnlyEvens = (a, b) => {
    let nums = [];
    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            nums.push(i);
        }
    }
    return nums;
};

// console.log(returnAToBOnlyEvens(1, 10));

// 9-masala
const returnLetterCapitalize = (text) => text.charAt(0).toUpperCase() + text;

// console.log(returnLetterCapitalize("Kamola"));

// 10-masala
const manyReturnText = (text, count) => {
    let newStr = text;
    for (let i = 0; i < count; i++) {
        newStr += ` ${text}`;
    }
    return newStr;
};

// console.log(manyReturnText("salom", 5));

// 11-masala
const reverseArray = (arr) => arr.reverse();

// console.log(reverseArray([1, 2, 3]));

// 12-masala
const ascendingSort = (arr) => arr.sort((a, b) => a - b);

// console.log(ascendingSort([2,1,13,4]));

// qo'shimcha masalalar
// descendingSort
const descendingSort = (arr) => arr.sort((a, b) => b - a);

// console.log(descendingSort([2,1,13,4]));
// funksyaga abject va key beriladi object ichida key topilsa o'sha key'dagi qiymat qaytariladi, agar object ichida key topilmasa yoki key'da falcy qiymat bo'lsa false o'zi qaytariladi
const findKeyFromObject = (obj, key) => (obj[key] ? obj[key] : false);

// console.log(findKeyFromObject({ name: "John", age: 30 }, "name"));

// console.log(findKeyFromObject({ name: "John", age: 30 }, "address"));

// console.log(findKeyFromObject({ name: "John", age: undefined }, "age"));

/**
 *   *  *       * * *    *       *         **       *      *  *  *            **       * * * * *   * * * * *
 *   *    *    *     *   * *   * *        *  *      * *    *  *    *         *  *      *        *      *
 *   *     *  *       *  *   *   *       *    *     *  *   *  *     *       *    *     *        *      *
 *   *     *  *       *  *       *      * *  * *    *   *  *  *     *      * *  * *    * * * * *       *
 *   *    *    *     *   *       *     *        *   *    * *  *    *      *        *   *               *
 *   *  *       * * *    *       *    *          *  *      *  *  *       *          *  *           * * * * *
 **/

const list = document.querySelector("tbody");

const URL = "https://api.mocki.io/v2/zxgsvd3l/users";

const fetchUsers = async () => {
    const response = await fetch(URL, {
        method: "POST",
    });
    const data = await response.json();
    const users = data.result.data;
    users.forEach((user, id) => {
        list.innerHTML += `<tr data-id="${id}">
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.jobTitle}</td>
            <td>${user.prefix}</td>
            <td>${user.suffix}</td>
            <td>${user.jobArea}</td>
            <td>${user.phone}</td>
            <td>
                        <button class="btn btn-danger btn-sm">
                            <i class="fas fa-trash-alt"></i> Delete
                        </button>
                    </td>
        </tr>`;
    });
    const deleteBtns = document.querySelectorAll(".btn-danger");

    deleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.remove();
        });
    });
};
fetchUsers();
