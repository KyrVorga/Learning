/* ANCHOR Drop it
Description:

Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.



*/

/* NOTE Planning Area / Psuedo-code / Description / Explanation



*/

/* NOTE Realizations / Mistakes / Corrections / Concepts Learnt



*/

function dropElements(arr, func) {
  let newArr = [];
  let flag = true;
  let i = 0;
  do {
    if (func(arr[i]) == true) {
      // console.log(arr.slice(i));
      newArr = arr.slice(i);
      flag = false;
    }
    i++;
  } while (flag == true);
  // console.log(newArr);
  return newArr;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); // should return [3, 4].

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); // should return [1, 0, 1].

// console.log(
//   dropElements([1, 2, 3], function (n) {
//     return n > 0;
//   })
// ); // should return [1, 2, 3].

// console.log(
//   dropElements([1, 2, 3, 4], function (n) {
//     return n > 5;
//   })
// ); // should return [].

// console.log(
//   dropElements([1, 2, 3, 7, 4], function (n) {
//     return n > 3;
//   })
// ); // should return [7, 4].

// console.log(
//   dropElements([1, 2, 3, 9, 2], function (n) {
//     return n > 2;
//   })
// ); // should return [3, 9, 2]
