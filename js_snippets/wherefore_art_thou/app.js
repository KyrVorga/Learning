/* ANCHOR Wherefore art thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation

iterate over collection
for key in source
  check if collection[n] has key


*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt



*/
function whatIsInAName(collection, source) {
  let keys = Object.keys(source);

  return collection.filter((elem) =>
    keys.every((key) => elem.hasOwnProperty(key) && elem[key] == source[key])
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
); // should return [{ first: "Tybalt", last: "Capulet" }].

// console.log(
//   whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
//     apple: 1,
//   })
// ); // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, bat: 2 }
//   )
// ); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].

// console.log(
//   whatIsInAName(
//     [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
//     { apple: 1, cookie: 2 }
//   )
// ); // should return [{ "apple": 1, "bat": 2, "cookie": 2 }].

// console.log(
//   whatIsInAName(
//     [
//       { apple: 1, bat: 2 },
//       { apple: 1 },
//       { apple: 1, bat: 2, cookie: 2 },
//       { bat: 2 },
//     ],
//     { apple: 1, bat: 2 }
//   )
// ); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].

// console.log(whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })); // should return []
