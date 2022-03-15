/* ANCHOR Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

/* NOTE planning area
declare unique array
loop through each array
  loop through each value
    if value is not in unique array, then push it

*/

/* NOTE Realizations

Mistakes / Corrections / Concepts Learnt

*/

// function uniteUnique(arr) {
//   let unique = [];
//   for (let i = 0; i < arguments.length; i++) {
//     for (let j =0; j < arguments[i].length; j++) {
//       for (let k = 0; k < unique.length; k++) {
//         if (arguments[i][j] == unique[k])
//       }
//     }
//   }

//   return unique;
// }
// function uniteUnique(arr) {
//   arr.forEach((element) => {
//     element.reduce((unique, item) => {
//       unique.push(item);
//     }, []);
//   });
// }
function uniteUnique(arr) {}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].

console.log(uniteUnique([1, 2, 3], [5, 2, 1])); // should return [1, 2, 3, 5].

console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); // should return [1, 2, 3, 5, 4, 6, 7, 8].

console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6])); // should return [1, 3, 2, 5, 4, 6].

console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])); // should return [1, 3, 2, 5, 4].
