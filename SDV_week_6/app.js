// // outerFunc is defined, has global scope
// function outerFunc() {
//   // msg is defined, has block scope within outerFunc
//   var msg = "hello world!";

//   // innerFunc is defined, scope is Block scope within outerFunc
//   function innerFunc() {
//     // log message which can be accessed because it is within the scope of outerFunc
//     console.log(msg); // Hello world!
//   }
//   // innerFunc has no return value so its undefined.
//   console.log(innerFunc()); // Undefined
// }
// // outerFunc has no return value so its undefined.
// console.log(outerFunc()); // Undefined

// // Lexical scope is the location where something was defined.

// let string = "a";
// let num = "123";
// let arr = ["hi", "hello", "welcome"];
// console.log(typeof Number(num));
// console.log(parseInt(num));
// console.log(arr[0], arr[2]);

// const glasses = {
//   name: "glasses",
//   colour: "brown",
//   lens: 2,
//   armLength: [
//     ["left", 18],
//     ["right", 18],
//   ],
// };

// console.log(
//   `The colour is ${glasses.colour} and the ${glasses.armLength[0][0]} arm length is ${glasses.armLength[1][1]} `
// );

// a function is code that perfroms a task and can be invoked by name
// var one = 1;
// var two = 2;

// var sum = one + two;
// console.log(sum);

// function sum(one, two) {
//   return one + two;
// }

// console.log(sum(1, 2));

// function div(num1, num2, num3, num4) {
//   return `${num1} + ${num2} / ${num3} + ${num4} = ${num1 + num2 / num3 + num4}`;
// }
// console.log(div(4, 2, 6, 3));

// function div2(num1, num2, num3, num4) {
//   return num1 + num2 / num3 + num4;
// }
// console.log(`2 + 2 / 6 + 3 = ${div2(4, 2, 6, 3)}`);
