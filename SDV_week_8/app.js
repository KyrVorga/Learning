// after class study session

//create a function that takes an array of strings and convert values to number

// const convert = (arr) => arr.map((elem) => parseInt(elem));
// numbers = convert(["1", "2", "3"]);

// numbers.forEach((elem) => {
//   console.log(typeof elem);
// });

// const numbers = (arr) => arr.map(Number);
// array = numbers(["1", "2", "3"]);

// array.forEach((elem) => {
//   console.log(typeof elem);
// });

// const evenOrOdd = (num) => (num % 2 ? "Odd" : "Even");

// console.log(evenOrOdd());

// const and = (a, b) => (a && b ? 1 : 0);
// console.log(and(0, 0));

// const or = (num1, num2) => (num1 || num2 ? 1 : 0);
// console.log(or(0, 1));

// const not = (num1, num2) => (num1 != num2 ? 1 : 0);
// console.log(not(1, 1));

// function AND(a, b) {
//   if (a && b) {
//     return 1;
//   }
//   return 0;
// }

// console.log(AND(0, 0));

// const NOT = (x) => +!x;
// console.log(NOT());

// ANCHOR Week 8 class

// const months = [
//   "January",
//   "Febuary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// //without validation
// const convert = (num) => months[num - 1];

// // with validation
// const convertV = (num) =>
//   num <= 12 && num >= 1 ? months[+num - 1] : "error invalid input";

// console.log(convert(4)); // April
// console.log(convert("6")); // June
// console.log(convert(13)); // undefined

// console.log(convertV("12")); // December
// console.log(convertV(4)); // April
// console.log(convertV("13")); // error invalid input
// console.log(convertV(0)); // error invalid input
// const months = [
//   "January",
//   "Febuary",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// function printer() {
//   console.log("function converter(num) {\n");
//   for (let i = 1; i <= 12; i++) {
//     console.log(`if(num == ${i}) {\n return months[num--]\n}`);
//   }
//   console.log("}");
// }
// printer();

// function converter(num) {
//   if (num == 1) {
//     return months[num--];
//   }
//   if (num == 2) {
//     return months[num--];
//   }
//   if (num == 3) {
//     return months[num--];
//   }
//   if (num == 4) {
//     return months[num--];
//   }
//   if (num == 5) {
//     return months[num--];
//   }
//   if (num == 6) {
//     return months[num--];
//   }
//   if (num == 7) {
//     return months[num--];
//   }
//   if (num == 8) {
//     return months[num--];
//   }
//   if (num == 9) {
//     return months[num--];
//   }
//   if (num == 10) {
//     return months[num--];
//   }
//   if (num == 11) {
//     return months[num--];
//   }
//   if (num == 12) {
//     return months[num--];
//   }
// }
// console.log(converter(10));

// const stringify = (bool) => bool.toString();
// console.log(stringify(true));

// const greaterAndLess = (num1, num2, arr) =>
//   arr.filter((elem) => elem < num2 && elem > num1);

// function greaterAndLess(num1, num2, arr) {
//   newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < num2 && arr[i] > num1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(greaterAndLess(2, 7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [3,4,5,6]

// const area = (side1, side2) => {
//   if (
//     side1 < 1 ||
//     typeof side1 != "number" ||
//     side2 < 1 ||
//     typeof side2 != "number"
//   ) {
//     return "Invalid input";
//   } else {
//     return side1 * side2;
//   }
// };
// console.log(area(8, 8)); //64
// console.log(area(10, "10")); // Invalid input

// const array1 = [
//   {
//     name: 'Rhylei',
//     age: 21
//   },
//   {
//     name: 'Harley',
//     age: 26
//   },
//   {
//     name: 'Ian',
//     age: 26
//   },
// ]

// const object1 = {
//   January: { num: 1, days: 31 },
//   Febuary: { num: 2, days: 28 },
//   March: { num: 3, days: 31 },
//   April: { num: 4, days: 30 },
//   May: { num: 5, days: 31 },
//   June: { num: 6, days: 30 },
//   July: { num: 7, days: 31 },
//   August: { num: 8, days: 31 },
//   September: { num: 9, days: 30 },
//   October: { num: 10, days: 31 },
//   November: { num: 11, days: 30 },
//   December: { num: 12, days: 31 },
// };

// const Names = {
//   January: [1, 31],
//   Febuary: [2, 28],
//   March: [3, 31],
//   April: [4, 30],
//   May: [5, 31],
//   June: [6, 30],
//   July: [7, 31],
//   August: [8, 31],
//   September: [9, 30],
//   October: [10, 31],
//   November: [11, 30],
//   December: [12, 31],
// };

// const test = {
//       "January": ['Monday',[], 'Tuesday','etc..']
// };

//     console.log(test.January[2]);

class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  formats() {
    return `${this.day}/${this.month.text}/${this.year}`;
  }

  increment() {
    if (this.day >= 31) {
      if (this.month == 12) {
        this.month = 1;
        this.year += 1;
      } else {
        this.month += 1;
      }
      return (this.day = 1);
    } else {
      return (this.day += 1);
    }
  }
}

const date = new Date(20, 10, 2023);

console.log(date.increment());
console.log(date.formats());

// const months = [
//     "January",
//     "Febuary",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
