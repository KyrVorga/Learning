// after class study session

//create a function that takes an array of strings and convert values to number

// const convert = (arr) => arr.map((elem) => parseInt(elem));
// numbers = convert(["1", "2", "3"]);

// numbers.forEach((elem) => {
//   console.log(typeof elem);
// });

const numbers = (arr) => arr.map(Number);
array = numbers(["1", "2", "3"]);

array.forEach((elem) => {
  console.log(typeof elem);
});

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
//   } else {
//     return 0;
//   }
// }

// console.log(AND(0, 0));

// const NOT = (x) => +!x;
// console.log(NOT());
