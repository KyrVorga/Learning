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

// const test = {
//       "January": ['Monday',[], 'Tuesday','etc..']
// };

//     console.log(test.January[2]);

// const date2 = new Date(31, 5, 2023);
// date2.increment();
// console.log(date2.formats());
// My oop demonstration code for A1

// let dogName = "Dan";
// let dogColour = "Brown and Black";
// let dogBreed = "German Shepard";
// let dogAge = 10;

// function dogInfo(name, colour, breed, age) {
//   return `My dog's name is ${name}, it is a ${colour} ${breed}, it is ${age} years old.`;
// }

// console.log(dogInfo(dogName, dogColour, dogBreed, dogAge));

// // Versus

// class Dog {
//   constructor(name, colour, breed, age) {
//     this.name = name;
//     this.colour = colour;
//     this.breed = breed;
//     this.age = age;
//   }

//   info() {
//     return `My dog's name is ${this.name}, it is a ${this.colour} ${this.breed}, it is ${this.age} years old.`;
//   }
// }

// const myDog = new Dog("Dan", "Brown and Black", "German Shepard", 10);
// console.log(myDog.info());

// if (this.day == 28 && this.month == 2) {

// }

// function fizzBuzz() {
//   let newArr = [];
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       newArr.push("FizzBuzz");
//     } else if (i % 5 == 0) {
//       newArr.push("Buzz");
//     } else if (i % 3 == 0) {
//       newArr.push("Fizz");
//     } else {
//       newArr.push(i);
//     }
//   }
//   console.log(newArr);
//   return newArr;
// }
// fizzBuzz();

// let array = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let elem of array) {
//   elem.map((sub) => {
//     if (sub > 5) {
//     }
//   });
// }
// console.log(array);

// ANCHOR
class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    this.days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // this.text = this.months[month - 1];
    this.maxDay = this.days[month - 1];
    // console.log(this.text);
    // console.log(this.maxDay);
  }

  formats() {
    return `${this.day}/${this.month}/${this.year}`;
  }

  increment() {
    if (this.day >= 31 && this.month == 12) {
      this.month = 1;
      ++this.year1;
      this.day = 1;
    } else if (this.day >= 31 && this.month != 12) {
      this.day = 1;
      ++this.month;
    } else {
      ++this.day;
    }
  }
}

const date = new Date(31, 12, 2023);
date.increment();
console.log(date.formats());

const date1 = new Date(28, 2, 2023);
date1.increment();
console.log(date1.formats());

const date2 = new Date(31, 11, 2023);
date2.increment();
console.log(date2.formats());
